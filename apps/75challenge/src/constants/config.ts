/**
 * 75 Challenge — app constants (pricing, limits, defaults).
 *
 * Every magic number / price / limit lives here — screens never hardcode them.
 * Types `Intensity` / `MissedDayMode` are consolidated into
 * `src/types/index.ts` in T006 (Foundational); kept local until then.
 */

// ---------------------------------------------------------------------------
// Pricing (PRD §6) — one-time, lifetime. No subscription in v1 (FR-019).
// ---------------------------------------------------------------------------
export const PREMIUM_PRICE = "$4.99";

// ---------------------------------------------------------------------------
// Custom challenge bounds (PRD F2, FR-007 / US2-S2)
// ---------------------------------------------------------------------------
export const MIN_CUSTOM_DURATION_DAYS = 1;
export const MAX_CUSTOM_DURATION_DAYS = 365;
export const DEFAULT_CUSTOM_DURATION_DAYS = 75;
/** Max rules that can be active on a single challenge. */
export const MAX_ACTIVE_RULES = 10;

// ---------------------------------------------------------------------------
// Missed-day mode defaults (PRD F2, FR-009)
// ---------------------------------------------------------------------------
export type Intensity = "soft" | "medium" | "hard";
export type MissedDayMode = "strict" | "flexible";

/**
 * Default missed-day behavior per intensity.
 * FR-009 mandates: strict in Hard, flexible in Soft.
 * Medium is unspecified in FR-009 — the kinder default (flexible) is chosen;
 * flag to product if a stricter Medium default is preferred.
 */
export const DEFAULT_MISSED_DAY_MODE: Record<Intensity, MissedDayMode> = {
  soft: "flexible",
  medium: "flexible",
  hard: "strict",
};

// ---------------------------------------------------------------------------
// RevenueCat public keys (T005) — public `pk_...` keys, never secrets.
// Read from `.env` via EXPO_PUBLIC_* (inlined at build time by Expo).
// Consumed at runtime by the PaywallService (T031, Purchases.configure).
// ---------------------------------------------------------------------------
export const RevenueCatKeys = {
  ios: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY ?? "",
  android: process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY ?? "",
} as const;