/**
 * 75 Challenge — shared data model (plan.md §Data Model, T006).
 *
 * Conventions (spec plan.md §Data Model):
 * - Day dates are `YYYY-MM-DD` (local calendar days).
 * - Timestamps are ISO 8601.
 * - State is ALWAYS metric (L, min, pages); imperial conversion happens at
 *   display time only (FR-013).
 */

/** The kind of habit a rule tracks. */
export type RuleType =
  | "water"
  | "exercise"
  | "reading"
  | "diet"
  | "photo"
  | "custom";

/** The unit a rule's dose is expressed in. */
export type RuleUnit = "L" | "min" | "pages" | "boolean" | "photo" | "custom";

/** Challenge intensity — the 3 presets (FR-005) or a custom build (FR-007). */
export type Intensity = "soft" | "medium" | "hard" | "custom";

/** Missed-day behavior: strict (back to day 1) vs flexible (attempt continues). */
export type MissedDayMode = "strict" | "flexible";

/** Calendar / day state. */
export type DayStatus = "done" | "partial" | "missed" | "future";

/** Attempt lifecycle. */
export type AttemptStatus = "active" | "completed" | "abandoned";

/** Display unit system (FR-013). State is always metric. */
export type UnitSystem = "metric" | "imperial";

/** A local calendar day key, `YYYY-MM-DD`. */
export type DayKey = string;

/**
 * A habit rule of a challenge.
 *
 * `effectiveFrom` (FR-008/FR-015): when a rule is edited mid-challenge a NEW
 * version is appended to the config rules log with `effectiveFrom` = next day.
 * Past days keep resolving to the previous version — history is never
 * rewritten. A rule with no `effectiveFrom` is the base version (always
 * effective unless superseded by a later version).
 *
 * `removed` (FR-008/FR-015): removal is scheduled the same way — a tombstone
 * version (`removed: true` + `effectiveFrom` = next day) stops the rule from
 * resolving from that date on, without touching past days. (Implementation
 * decision: the plan's type sketch had no removal flag; FR-008/FR-015 mandate
 * remove-without-recreate, so the minimal `removed` marker was added.)
 */
export interface Rule {
  /** Stable id ('water', 'exercise', 'custom-<uuid>'). */
  id: string;
  type: RuleType;
  /** EN v1 display title (e.g. "Water"). */
  title: string;
  /** Daily target (L, min, pages, 1, or 1 for boolean/photo). */
  dose: number;
  unit: RuleUnit;
  /** Required to validate the day (FR-016). */
  required: boolean;
  /** Hard exercise: 2×45 min incl. 1 outdoor session (FR-005). */
  outdoor?: boolean;
  /** Photo rule: 1×/week in Soft, 1×/day in Medium/Hard (FR-005). */
  frequency: "daily" | "weekly";
  /** Custom task (Premium, FR-015). */
  customTask?: {
    icon: string;
    description?: string;
    /** Checkbox vs counter with a target. */
    isCounter: boolean;
    /** Blocks day validation ★ when unfinished (FR-015). */
    requiredForDay: boolean;
  };
  /** YYYY-MM-DD: edited rules apply from the next day (FR-008/FR-015). */
  effectiveFrom?: DayKey;
  /** Tombstone: the rule stops being active from `effectiveFrom` (FR-008/FR-015). */
  removed?: boolean;
}

/** Configuration of one attempt. */
export interface ChallengeConfig {
  intensity: Intensity;
  /** 25/50/75 or custom 1–365 (FR-007). */
  durationDays: number;
  /** YYYY-MM-DD (local). */
  startDate: DayKey;
  /** Computed: startDate + durationDays − 1 (FR-006). */
  endDate: DayKey;
  /** Default: flexible in Soft, strict in Hard (FR-009). */
  missedDayMode: MissedDayMode;
  /** Ordered rules (badges 1→4, then pastel loop — DESIGN.md §9). */
  rules: Rule[];
  /** True for a 100% custom challenge (Premium, FR-007). */
  isCustom: boolean;
}

/** One execution of a challenge (FR-025: "attempt N" + archives). */
export interface Attempt {
  id: string;
  /** "Attempt N" badge (FR-025). */
  number: number;
  config: ChallengeConfig;
  status: AttemptStatus;
  /** ISO — set when archived (strict miss FR-017 / restart FR-025). */
  archivedAt?: string;
}

/** Per-rule progress of a single day. */
export interface RuleProgress {
  /** Cumulative entered value (0 if not started). */
  value: number;
  completed: boolean;
  /** Hard exercise: the outdoor session is done (FR-005). */
  outdoorDone?: boolean;
}

/** One day of an attempt. */
export interface DayEntry {
  attemptId: string;
  /** 1-based: day N. */
  index: number;
  /** YYYY-MM-DD (local). */
  date: DayKey;
  status: DayStatus;
  rules: Record<string, RuleProgress>;
  /** Local photo file URI — NEVER base64 in MMKV (R3, FR-014). */
  photoUri?: string;
  /** Optional daily weight (FR-018). */
  weightKg?: number;
  /** Optional daily journal (FR-018). */
  journal?: string;
  /** ISO — set when the day auto-validates ★ (FR-016). */
  validatedAt?: string;
  /** "Already started" resume: past days pre-marked non-perfect (FR-010). */
  preMarked?: boolean;
}

/** Local user profile (100% on-device, FR-029). */
export interface UserProfile {
  firstName: string;
  /** Quiz answers — tones smart reminders (FR-028). */
  quizAnswers: { motivation?: string; fear?: string };
  /** Detected via expo-localization, overridable (FR-013). */
  unitSystem: UnitSystem;
  onboardingDone: boolean;
  /** Free tier: 1 global daily reminder (FR-028). */
  dailyReminder: { enabled: boolean; hour: number; minute: number } | null;
  /** Premium: per-task reminders (FR-028). */
  smartReminders: SmartReminder[];
  /** ISO — last store-review prompt (FR-028, never day 1). */
  ratedAt?: string;
  /** ISO — post-ready paywall modal shown once (FR-020). */
  paywallSeenAt?: string;
}

/** Premium per-task reminder (FR-028). */
export interface SmartReminder {
  id: string;
  ruleId?: string;
  hour: number;
  minute: number;
  /** Tone adapted to quiz answers (FR-028). */
  tone: string;
}