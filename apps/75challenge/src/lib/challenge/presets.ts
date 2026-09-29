/**
 * Challenge presets — FR-005 table (T007).
 *
 * Pure TypeScript, no React Native imports. Doses are the source of truth for
 * the education screens, the choose screen (T021) and the daily checklist.
 *
 * FR-005: Soft (25d) / Medium (50d) / Hard (75d)
 * - water 2 / 2.5 / 3.8 L per day
 * - exercise 20 / 45 / 2×45 min per day (Hard: 1 outdoor session, `outdoor`)
 * - reading 5 / 10 / 10 pages per day (Hard: non-fiction, reflected in title)
 * - diet flexible / strict / strict no alcohol, no cheat meals
 * - photo 1×/week (Soft) / 1×/day (Medium, Hard)
 *
 * Missed-day defaults (FR-009): flexible in Soft, strict in Hard — read from
 * `constants/config.ts` (single source of truth, already created in Phase 1).
 */
import type { Intensity, MissedDayMode, Rule } from "@/types";
import { DEFAULT_MISSED_DAY_MODE } from "@/constants/config";

export interface ChallengePreset {
  intensity: "soft" | "medium" | "hard";
  durationDays: number;
  missedDayMode: MissedDayMode;
  rules: Rule[];
}

const waterRule = (dose: number): Rule => ({
  id: "water",
  type: "water",
  title: "Water",
  dose,
  unit: "L",
  required: true,
  frequency: "daily",
});

const exerciseRule = (dose: number, outdoor: boolean): Rule => ({
  id: "exercise",
  type: "exercise",
  title: "Exercise",
  dose,
  unit: "min",
  required: true,
  outdoor,
  frequency: "daily",
});

const readingRule = (dose: number, nonFiction: boolean): Rule => ({
  id: "reading",
  type: "reading",
  title: nonFiction ? "Read non-fiction" : "Read",
  dose,
  unit: "pages",
  required: true,
  frequency: "daily",
});

const dietRule = (title: string): Rule => ({
  id: "diet",
  type: "diet",
  title,
  dose: 1,
  unit: "boolean",
  required: true,
  frequency: "daily",
});

const photoRule = (frequency: "daily" | "weekly"): Rule => ({
  id: "photo",
  type: "photo",
  title: "Progress photo",
  dose: 1,
  unit: "photo",
  required: true,
  frequency,
});

export const PRESETS: Record<"soft" | "medium" | "hard", ChallengePreset> = {
  soft: {
    intensity: "soft",
    durationDays: 25,
    missedDayMode: DEFAULT_MISSED_DAY_MODE.soft,
    rules: [
      waterRule(2),
      exerciseRule(20, false),
      readingRule(5, false),
      dietRule("Clean diet"),
      photoRule("weekly"),
    ],
  },
  medium: {
    intensity: "medium",
    durationDays: 50,
    missedDayMode: DEFAULT_MISSED_DAY_MODE.medium,
    rules: [
      waterRule(2.5),
      exerciseRule(45, false),
      readingRule(10, false),
      dietRule("Strict diet"),
      photoRule("daily"),
    ],
  },
  hard: {
    intensity: "hard",
    durationDays: 75,
    missedDayMode: DEFAULT_MISSED_DAY_MODE.hard,
    rules: [
      waterRule(3.8),
      exerciseRule(90, true),
      readingRule(10, true),
      dietRule("Strict diet — no alcohol, no cheat meals"),
      photoRule("daily"),
    ],
  },
};

/** The preset for a non-custom intensity, or null for `custom` (FR-007). */
export function presetFor(intensity: Intensity): ChallengePreset | null {
  return intensity === "custom" ? null : PRESETS[intensity];
}