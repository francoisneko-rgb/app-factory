/**
 * Store Zustand persisté dans MMKV — exemple de référence.
 * Copier ce pattern pour tout état d'app (thème, onboarding, préférences).
 */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { StateStorage } from "zustand/middleware";
import { storage } from "@/lib/storage";

const storageAdapter: StateStorage = {
  getItem: (name) => storage.getString(name) ?? null,
  setItem: (name, value) => storage.set(name, value),
  removeItem: (name) => storage.delete(name),
};

interface AppState {
  onboardingCompleted: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      onboardingCompleted: false,
      completeOnboarding: () => set({ onboardingCompleted: true }),
      resetOnboarding: () => set({ onboardingCompleted: false }),
    }),
    {
      name: "app-state",
      storage: createJSONStorage(() => storageAdapter),
    }
  )
);