/**
 * 75 Challenge engine (T008) — pure TypeScript, no React Native imports.
 *
 * Single source of truth for the product math (ADR-75C-004):
 * - duration per intensity + `endDate = startDate + durationDays − 1` (FR-006)
 * - current day index (dates, not stored counters)
 * - day completion: all rules / required-only / custom-required (FR-015/016)
 * - strict vs flexible missed-day resolution (FR-009/017)
 * - "already started" resume with non-perfect pre-marked past days (FR-010)
 * - versioned rule editing with `effectiveFrom` = next day (FR-008/FR-015)
 *
 * The engine never touches storage or time by itself: callers pass `now` /
 * explicit dates so every function is deterministic and unit-testable.
 */
import type {
  Attempt,
  ChallengeConfig,
  DayEntry,
  DayKey,
  Intensity,
  MissedDayMode,
  Rule,
  RuleProgress,
} from "@/types";
import { addDays, diffDays, todayKey } from "./dates";

// ---------------------------------------------------------------------------
// Duration & dates (FR-005 / FR-006)
// ---------------------------------------------------------------------------

export const DURATION_BY_INTENSITY: Record<
  Exclude<Intensity, "custom">,
  number
> = {
  soft: 25,
  medium: 50,
  hard: 75,
};

/** Duration for the 3 presets; `null` for custom (duration lives in the config). */
export function durationForIntensity(intensity: Intensity): number | null {
  return intensity === "custom" ? null : DURATION_BY_INTENSITY[intensity];
}

/** FR-006: `endDate = startDate + durationDays − 1`. */
export function endDate(startDate: DayKey, durationDays: number): DayKey {
  return addDays(startDate, durationDays - 1);
}

/** 1-based index of the day a date falls on for a config (clamped to 1..N). */
export function currentDayIndex(
  config: ChallengeConfig,
  today: DayKey = todayKey(),
): number {
  const elapsed = diffDays(config.startDate, today) + 1;
  if (elapsed < 1) return 1;
  if (elapsed > config.durationDays) return config.durationDays;
  return elapsed;
}

/** Day key for a 1-based index. */
export function dateForDayIndex(config: ChallengeConfig, index: number): DayKey {
  return addDays(config.startDate, index - 1);
}

/** True when a day's date is strictly after `today`. */
export function isDayFuture(
  config: ChallengeConfig,
  index: number,
  today: DayKey = todayKey(),
): boolean {
  return dateForDayIndex(config, index) > today;
}

// ---------------------------------------------------------------------------
// Versioned rules — edits apply from the next day (FR-008 / FR-015)
// ---------------------------------------------------------------------------
//
// The config keeps an append-only LOG of rule versions. Each version may carry
// `effectiveFrom`; a version without it is the base (always effective unless a
// later version supersedes it). `rulesEffectiveOn(rules, date)` resolves the
// active ruleset for a given day:
//   - edited rule  → the new version wins from its effectiveFrom, the old one
//     before it — past days keep the old dose, history is never rewritten;
//   - added rule   → only exists from its effectiveFrom;
//   - removed rule → a tombstone version (`removed: true` + effectiveFrom) is
//     appended: from that date on the rule no longer resolves, while past days
//     keep their own progress records.

/** Rules effective on a given day (last effective version per id, first-seen order). */
export function rulesEffectiveOn(rules: Rule[], date: DayKey): Rule[] {
  const byId = new Map<string, Rule>();
  const order: string[] = [];
  for (const rule of rules) {
    if (rule.effectiveFrom != null && rule.effectiveFrom > date) continue;
    if (!order.includes(rule.id)) order.push(rule.id);
    byId.set(rule.id, rule);
  }
  return order
    .map((id) => byId.get(id)!)
    .filter((rule) => rule != null && rule.removed !== true);
}

/** Rules a given day of a config is checked against. */
export function rulesForDay(config: ChallengeConfig, date: DayKey): Rule[] {
  return rulesEffectiveOn(config.rules, date);
}

function ruleContentEqual(a: Rule, b: Rule): boolean {
  return (
    a.type === b.type &&
    a.title === b.title &&
    a.dose === b.dose &&
    a.unit === b.unit &&
    a.required === b.required &&
    a.outdoor === b.outdoor &&
    a.frequency === b.frequency &&
    JSON.stringify(a.customTask ?? null) === JSON.stringify(b.customTask ?? null)
  );
}

/**
 * Schedule a desired next ruleset, effective from `effectiveFrom` (next day).
 * Only actual changes are appended as new versions: brand-new rules, changed
 * rules, and removal tombstones (`removed: true`) for rules that disappear
 * from `nextRuleset`. Unchanged rules keep their base version.
 */
export function applyRuleChanges(
  rules: Rule[],
  nextRuleset: Rule[],
  effectiveFrom: DayKey,
  today: DayKey,
): Rule[] {
  const current = new Map(rulesEffectiveOn(rules, today).map((r) => [r.id, r]));
  const next = new Map(nextRuleset.map((r) => [r.id, r]));
  const additions: Rule[] = [];
  for (const rule of nextRuleset) {
    const prev = current.get(rule.id);
    if (prev == null) {
      additions.push({ ...rule, effectiveFrom }); // brand-new (or re-added) rule
    } else if (!ruleContentEqual(prev, rule)) {
      additions.push({ ...rule, effectiveFrom }); // changed rule
    }
  }
  // Removal: present today, absent from the next ruleset → tombstone.
  for (const [id, rule] of current) {
    if (!next.has(id)) {
      additions.push({ ...rule, removed: true, effectiveFrom });
    }
  }
  if (additions.length === 0) return rules;
  return [...rules, ...additions];
}

// ---------------------------------------------------------------------------
// Completion (FR-012 / FR-015 / FR-016)
// ---------------------------------------------------------------------------

/** True when a rule's daily dose is reached (FR-012 auto-check). */
export function isRuleCompleted(
  rule: Rule,
  progress: RuleProgress | undefined,
): boolean {
  if (progress == null) return false;
  // Custom checkbox tasks: only the explicit check counts.
  if (rule.type === "custom" && rule.customTask != null && !rule.customTask.isCounter) {
    return progress.completed;
  }
  // Boolean habits (diet Yes/No, FR-012): the check IS the completion.
  if (rule.unit === "boolean") {
    return progress.completed;
  }
  if (rule.unit === "photo") {
    return progress.completed || progress.value >= rule.dose;
  }
  // Hard exercise (FR-005): 2×45 min INCLUDING 1 outdoor session.
  if (rule.outdoor === true) {
    return progress.value >= rule.dose && progress.outdoorDone === true;
  }
  return progress.value >= rule.dose;
}

/** Rules that block day validation (FR-016: `required` or custom `requiredForDay`). */
export function getRequiredRules(rules: Rule[]): Rule[] {
  return rules.filter((r) => r.required === true || r.customTask?.requiredForDay === true);
}

/**
 * Day completion: every required rule done (FR-016). With no required rules
 * the day counts as complete (vacuous truth — every "obligatory" rule is done).
 */
export function isDayComplete(
  rules: Rule[],
  progress: Record<string, RuleProgress>,
): boolean {
  return getRequiredRules(rules).every((r) => isRuleCompleted(r, progress[r.id]));
}

/** Share of all rules completed — for the "X% of today" header (FR-011). */
export function dayCompletionRatio(
  rules: Rule[],
  progress: Record<string, RuleProgress>,
): number {
  if (rules.length === 0) return 0;
  const done = rules.filter((r) => isRuleCompleted(r, progress[r.id])).length;
  return done / rules.length;
}

/** Default empty progress for a rule the user hasn't touched yet. */
export function getRuleProgress(entry: DayEntry, ruleId: string): RuleProgress {
  return entry.rules[ruleId] ?? { value: 0, completed: false };
}

// ---------------------------------------------------------------------------
// Day entries & attempts
// ---------------------------------------------------------------------------

/**
 * Build all days of an attempt. With `resumeFrom` (FR-010) days before it are
 * pre-marked `partial` + `preMarked` (accounted for, but never "perfect"
 * retroactively); the resume day is the current one.
 */
export function buildDays(
  attemptId: string,
  config: ChallengeConfig,
  resumeFrom?: number,
): DayEntry[] {
  const days: DayEntry[] = [];
  for (let index = 1; index <= config.durationDays; index++) {
    const date = dateForDayIndex(config, index);
    let status: DayEntry["status"] = "future";
    let preMarked: boolean | undefined;
    if (resumeFrom != null && index < resumeFrom) {
      status = "partial";
      preMarked = true;
    } else if (index === (resumeFrom ?? 1)) {
      status = "partial"; // the current day's work in progress
    }
    days.push({ attemptId, index, date, status, rules: {}, preMarked });
  }
  return days;
}

export function createId(prefix = "id"): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createAttempt(
  config: ChallengeConfig,
  number: number,
): Attempt {
  return { id: createId("attempt"), number, config, status: "active" };
}

export function archiveAttempt(attempt: Attempt, archivedAtIso: string): Attempt {
  return { ...attempt, status: "abandoned", archivedAt: archivedAtIso };
}

export function nextAttemptNumber(attempts: Attempt[]): number {
  return attempts.reduce((max, a) => Math.max(max, a.number), 0) + 1;
}

/**
 * Fresh config for a new attempt (restart FR-025 / strict miss FR-017):
 * same intensity/duration/rules log, dates reset to today.
 */
export function restartConfig(config: ChallengeConfig, today: DayKey): ChallengeConfig {
  return {
    ...config,
    startDate: today,
    endDate: endDate(today, config.durationDays),
  };
}

// ---------------------------------------------------------------------------
// Missed-day resolution (FR-009 / FR-017)
// ---------------------------------------------------------------------------

export interface MissedDayResolution {
  /** The day marked `missed` (non-punitive). */
  day: DayEntry;
  /** Strict mode: the attempt must be archived and a fresh day-1 started. */
  archivesAttempt: boolean;
}

/** Mark a day missed; strict archives the attempt, flexible continues. */
export function resolveMissedDay(
  day: DayEntry,
  mode: MissedDayMode,
): MissedDayResolution {
  return {
    day: { ...day, status: "missed" },
    archivesAttempt: mode === "strict",
  };
}

/**
 * Recompute a day's status after a progress change (FR-016 auto-★).
 * `missed` and `future` days are never touched; a validated day whose required
 * rules become incomplete reverts to `partial` (user unchecked something).
 */
export function recomputeDayStatus(
  attempt: Attempt,
  entry: DayEntry,
  now: Date,
): DayEntry {
  if (entry.status === "missed" || entry.status === "future") return entry;
  const rules = rulesEffectiveOn(attempt.config.rules, entry.date);
  const complete = isDayComplete(rules, entry.rules);
  if (complete && entry.status !== "done") {
    return { ...entry, status: "done", validatedAt: now.toISOString() };
  }
  if (!complete && entry.status === "done") {
    return { ...entry, status: "partial", validatedAt: undefined };
  }
  return entry;
}