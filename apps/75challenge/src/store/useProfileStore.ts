/**
 * Profile store (T011) — Zustand + MMKV persist.
 *
 * Persisted key `profile` = { profile: UserProfile, premium } (plan.md
 * §Persistance MMKV). Holds: profile, quiz answers, unit system, reminders,
 * premium status, onboardingDone, paywallSeenAt, ratedAt.
 *
 * Actions are thin wrappers over immutable state updates (pure: state in →
 * new state out, no side effects). Persistence is handled by the persist
 * middleware writing through `mmkvStorage`.
 */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { SmartReminder, UnitSystem, UserProfile } from "@/types";
import { mmkvStorage, STORAGE_KEYS } from "@/lib/services/storage";

export interface PremiumState {
  active: boolean;
  /** RevenueCat product id once purchased (FR-019, non-consumable). */
  productId: string | null;
}

interface ProfileState {
  profile: UserProfile;
  premium: PremiumState;

  setFirstName: (firstName: string) => void;
  setQuizAnswers: (quizAnswers: UserProfile["quizAnswers"]) => void;
  setUnitSystem: (unitSystem: UnitSystem) => void;
  setDailyReminder: (reminder: UserProfile["dailyReminder"]) => void;
  addSmartReminder: (reminder: SmartReminder) => void;
  removeSmartReminder: (id: string) => void;
  setOnboardingDone: () => void;
  setPremium: (active: boolean, productId?: string | null) => void;
  setPaywallSeen: () => void;
  setRated: () => void;
}

export const defaultProfile: UserProfile = {
  firstName: "",
  quizAnswers: {},
  unitSystem: "metric",
  onboardingDone: false,
  dailyReminder: null,
  smartReminders: [],
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      premium: { active: false, productId: null },

      setFirstName: (firstName) =>
        set((s) => ({ profile: { ...s.profile, firstName } })),
      setQuizAnswers: (quizAnswers) =>
        set((s) => ({ profile: { ...s.profile, quizAnswers } })),
      setUnitSystem: (unitSystem) =>
        set((s) => ({ profile: { ...s.profile, unitSystem } })),
      setDailyReminder: (dailyReminder) =>
        set((s) => ({ profile: { ...s.profile, dailyReminder } })),
      addSmartReminder: (reminder) =>
        set((s) => ({
          profile: {
            ...s.profile,
            smartReminders: [...s.profile.smartReminders, reminder],
          },
        })),
      removeSmartReminder: (id) =>
        set((s) => ({
          profile: {
            ...s.profile,
            smartReminders: s.profile.smartReminders.filter((r) => r.id !== id),
          },
        })),
      setOnboardingDone: () =>
        set((s) => ({ profile: { ...s.profile, onboardingDone: true } })),
      setPremium: (active, productId = null) =>
        set({ premium: { active, productId } }),
      setPaywallSeen: () =>
        set((s) => ({
          profile: { ...s.profile, paywallSeenAt: new Date().toISOString() },
        })),
      setRated: () =>
        set((s) => ({
          profile: { ...s.profile, ratedAt: new Date().toISOString() },
        })),
    }),
    {
      name: STORAGE_KEYS.profile,
      storage: createJSONStorage(() => mmkvStorage),
      partialize: (s) => ({ profile: s.profile, premium: s.premium }),
    },
  ),
);