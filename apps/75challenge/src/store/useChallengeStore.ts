/**
 * Challenge store (T011) — Zustand + MMKV persist.
 *
 * Persisted key `challenge` = { attempts, activeAttemptId, daysByAttempt }
 * (plan.md §Persistance MMKV). One active attempt at a time (free tier,
 * FR-023); previous attempts stay archived INTACT in `daysByAttempt`
 * (FR-025) — restart / strict miss only APPEND, never mutate history.
 *
 * Design: every mutation is an EXPORTED PURE REDUCER over `ChallengeDraft`
 * (state in → new state out, no side effects, deterministic when given `now`)
 * — the store actions are one-line wrappers. Pure reducers are unit-tested
 * directly (T012) and reused by the store. The engine (`src/lib/challenge/`)
 * owns all business math; the store only orchestrates.
 */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type {
  Attempt,
  ChallengeConfig,
  DayEntry,
  Rule,
  RuleProgress,
} from "@/types";
import {
  applyRuleChanges,
  archiveAttempt,
  buildDays,
  createAttempt,
  currentDayIndex,
  isRuleCompleted,
  nextAttemptNumber,
  recomputeDayStatus,
  resolveMissedDay,
  restartConfig,
  rulesEffectiveOn,
} from "@/lib/challenge/engine";
import { addDays, todayKey } from "@/lib/challenge/dates";
import { mmkvStorage, STORAGE_KEYS } from "@/lib/services/storage";

// ---------------------------------------------------------------------------
// State & pure reducers
// ---------------------------------------------------------------------------

export interface ChallengeDraft {
  attempts: Attempt[];
  activeAttemptId: string | null;
  daysByAttempt: Record<string, DayEntry[]>;
}

export const emptyChallengeDraft: ChallengeDraft = {
  attempts: [],
  activeAttemptId: null,
  daysByAttempt: {},
};

function getActive(draft: ChallengeDraft): Attempt | undefined {
  return draft.attempts.find((a) => a.id === draft.activeAttemptId);
}

function withAttempt(
  draft: ChallengeDraft,
  attempt: Attempt,
): ChallengeDraft {
  return {
    ...draft,
    attempts: draft.attempts.map((a) => (a.id === attempt.id ? attempt : a)),
  };
}

function withDays(
  draft: ChallengeDraft,
  attemptId: string,
  days: DayEntry[],
): ChallengeDraft {
  return {
    ...draft,
    daysByAttempt: { ...draft.daysByAttempt, [attemptId]: days },
  };
}

function withDayEntry(
  draft: ChallengeDraft,
  attemptId: string,
  dayIndex: number,
  updater: (day: DayEntry) => DayEntry,
): ChallengeDraft {
  const days = draft.daysByAttempt[attemptId];
  if (days == null) return draft;
  return withDays(
    draft,
    attemptId,
    days.map((d) => (d.index === dayIndex ? updater(d) : d)),
  );
}

/**
 * Apply a progress update to a rule of the CURRENT day, then re-run
 * auto-completion (FR-012) and auto-validation (FR-016).
 */
function applyProgress(
  draft: ChallengeDraft,
  ruleId: string,
  update: (progress: RuleProgress) => RuleProgress,
  now: Date,
): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const dayIndex = currentDayIndex(attempt.config, today);
  const entry = draft.daysByAttempt[attempt.id]?.find((d) => d.index === dayIndex);
  if (entry == null || entry.status === "missed") return draft;

  const current = entry.rules[ruleId] ?? { value: 0, completed: false };
  const nextProgress = update(current);
  const rule = rulesEffectiveOn(attempt.config.rules, entry.date).find(
    (r) => r.id === ruleId,
  );
  const completed =
    (rule != null ? isRuleCompleted(rule, nextProgress) : nextProgress.completed) ||
    nextProgress.completed;

  const updated = {
    ...entry,
    rules: { ...entry.rules, [ruleId]: { ...nextProgress, completed } },
  };
  return withDayEntry(draft, attempt.id, dayIndex, () =>
    recomputeDayStatus(attempt, updated, now),
  );
}

/** Start (or resume FR-010) a challenge. Any previous active attempt is archived. */
export function startChallengeReducer(
  draft: ChallengeDraft,
  config: ChallengeConfig,
  now: Date,
): ChallengeDraft {
  const today = todayKey(now);
  const resumeFrom = currentDayIndex(config, today);
  const number = nextAttemptNumber(draft.attempts);
  const attempt = createAttempt(config, number);
  const days = buildDays(attempt.id, config, resumeFrom);
  const attempts = draft.attempts.map((a) =>
    a.status === "active" ? archiveAttempt(a, now.toISOString()) : a,
  );
  return {
    attempts: [...attempts, attempt],
    activeAttemptId: attempt.id,
    daysByAttempt: { ...draft.daysByAttempt, [attempt.id]: days },
  };
}

/** Direct check/uncheck (FR-012 "coche directe"). */
export function toggleRuleReducer(
  draft: ChallengeDraft,
  ruleId: string,
  now: Date,
): ChallengeDraft {
  return applyProgress(draft, ruleId, (p) => ({ ...p, completed: !p.completed }), now);
}

/** Set an absolute value (minutes, pages); auto-checks at the dose (FR-012). */
export function setRuleValueReducer(
  draft: ChallengeDraft,
  ruleId: string,
  value: number,
  now: Date,
): ChallengeDraft {
  return applyProgress(draft, ruleId, (p) => ({ ...p, value: Math.max(0, value) }), now);
}

/** Water stepper (+/− ml); stored in L (metric), auto-checks at the dose (FR-012/013). */
export function addWaterReducer(
  draft: ChallengeDraft,
  ml: number,
  now: Date,
): ChallengeDraft {
  return applyProgress(
    draft,
    "water",
    (p) => ({
      ...p,
      value: Math.max(0, Math.round((p.value + ml / 1000) * 1000) / 1000),
    }),
    now,
  );
}

/** Hard exercise: mark the outdoor session done (FR-005/012). */
export function setOutdoorReducer(
  draft: ChallengeDraft,
  ruleId: string,
  done: boolean,
  now: Date,
): ChallengeDraft {
  return applyProgress(draft, ruleId, (p) => ({ ...p, outdoorDone: done }), now);
}

/** Attach today's photo URI + auto-complete the photo rule (FR-014). */
export function setPhotoReducer(
  draft: ChallengeDraft,
  uri: string,
  now: Date,
): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const dayIndex = currentDayIndex(attempt.config, today);
  return withDayEntry(draft, attempt.id, dayIndex, (entry) => {
    if (entry.status === "missed") return entry;
    const updated = {
      ...entry,
      photoUri: uri,
      rules: {
        ...entry.rules,
        photo: {
          value: Math.max(1, entry.rules.photo?.value ?? 0),
          completed: true,
        },
      },
    };
    return recomputeDayStatus(attempt, updated, now);
  });
}

/** Optional daily weight / journal (FR-018). */
export function setDayMetaReducer(
  draft: ChallengeDraft,
  patch: { weightKg?: number; journal?: string },
  now: Date,
): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const dayIndex = currentDayIndex(attempt.config, today);
  return withDayEntry(draft, attempt.id, dayIndex, (entry) => ({ ...entry, ...patch }));
}

/** Re-run auto-validation on the current day (FR-016). */
export function validateDayReducer(
  draft: ChallengeDraft,
  now: Date,
): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const dayIndex = currentDayIndex(attempt.config, today);
  return withDayEntry(draft, attempt.id, dayIndex, (entry) =>
    recomputeDayStatus(attempt, entry, now),
  );
}

/**
 * Midnight rollover (FR-017): mark overdue unfinished days `missed` with the
 * non-punitive message handled by the UI. Strict mode archives the attempt
 * and starts a fresh day-1 attempt today; flexible continues. Pre-marked
 * resume days (FR-010) are kept `partial` — they predate the tracked period
 * and are "accounted for, not failed".
 */
export function syncDayReducer(draft: ChallengeDraft, now: Date): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const days = draft.daysByAttempt[attempt.id] ?? [];
  const isOverdue = (d: DayEntry) =>
    d.date < today && d.status !== "done" && !d.preMarked;

  if (!days.some(isOverdue)) return draft;

  const missedDays = days.map((d) =>
    isOverdue(d) ? resolveMissedDay(d, attempt.config.missedDayMode).day : d,
  );

  if (attempt.config.missedDayMode === "strict") {
    const archived = archiveAttempt(attempt, now.toISOString());
    const config = restartConfig(attempt.config, today);
    const fresh = createAttempt(config, archived.number + 1);
    const freshDays = buildDays(fresh.id, config, 1);
    return {
      attempts: [
        ...draft.attempts.map((a) => (a.id === attempt.id ? archived : a)),
        fresh,
      ],
      activeAttemptId: fresh.id,
      daysByAttempt: {
        ...draft.daysByAttempt,
        [attempt.id]: missedDays,
        [fresh.id]: freshDays,
      },
    };
  }

  return withDays(draft, attempt.id, missedDays);
}

/** Restart (FR-025): archive the current attempt INTACT, start attempt N+1 today. */
export function restartReducer(draft: ChallengeDraft, now: Date): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const archived = archiveAttempt(attempt, now.toISOString());
  const config = restartConfig(attempt.config, today);
  const fresh = createAttempt(config, archived.number + 1);
  const freshDays = buildDays(fresh.id, config, 1);
  return {
    attempts: [
      ...draft.attempts.map((a) => (a.id === attempt.id ? archived : a)),
      fresh,
    ],
    activeAttemptId: fresh.id,
    daysByAttempt: { ...draft.daysByAttempt, [fresh.id]: freshDays },
  };
}

/**
 * Edit rules (FR-008): the desired next ruleset applies from TOMORROW via
 * versioned rules — past days keep their old doses and progress records.
 */
export function editRulesReducer(
  draft: ChallengeDraft,
  nextRuleset: Rule[],
  now: Date,
): ChallengeDraft {
  const attempt = getActive(draft);
  if (attempt == null) return draft;
  const today = todayKey(now);
  const effectiveFrom = addDays(today, 1);
  const rules = applyRuleChanges(attempt.config.rules, nextRuleset, effectiveFrom, today);
  return withAttempt(draft, { ...attempt, config: { ...attempt.config, rules } });
}

// ---------------------------------------------------------------------------
// Store (persist MMKV)
// ---------------------------------------------------------------------------

interface ChallengeState extends ChallengeDraft {
  startChallenge: (config: ChallengeConfig) => void;
  toggleRule: (ruleId: string) => void;
  setRuleValue: (ruleId: string, value: number) => void;
  addWaterMl: (ml: number) => void;
  setOutdoor: (ruleId: string, done: boolean) => void;
  setPhoto: (uri: string) => void;
  setWeight: (weightKg: number) => void;
  setJournal: (journal: string) => void;
  validateDay: () => void;
  syncDay: () => void;
  restart: () => void;
  editRules: (nextRuleset: Rule[]) => void;
}

export const useChallengeStore = create<ChallengeState>()(
  persist(
    (set) => ({
      ...emptyChallengeDraft,

      startChallenge: (config) => set((s) => startChallengeReducer(s, config, new Date())),
      toggleRule: (ruleId) => set((s) => toggleRuleReducer(s, ruleId, new Date())),
      setRuleValue: (ruleId, value) => set((s) => setRuleValueReducer(s, ruleId, value, new Date())),
      addWaterMl: (ml) => set((s) => addWaterReducer(s, ml, new Date())),
      setOutdoor: (ruleId, done) => set((s) => setOutdoorReducer(s, ruleId, done, new Date())),
      setPhoto: (uri) => set((s) => setPhotoReducer(s, uri, new Date())),
      setWeight: (weightKg) => set((s) => setDayMetaReducer(s, { weightKg }, new Date())),
      setJournal: (journal) => set((s) => setDayMetaReducer(s, { journal }, new Date())),
      validateDay: () => set((s) => validateDayReducer(s, new Date())),
      syncDay: () => set((s) => syncDayReducer(s, new Date())),
      restart: () => set((s) => restartReducer(s, new Date())),
      editRules: (nextRuleset) => set((s) => editRulesReducer(s, nextRuleset, new Date())),
    }),
    {
      name: STORAGE_KEYS.challenge,
      storage: createJSONStorage(() => mmkvStorage),
      partialize: (s) => ({
        attempts: s.attempts,
        activeAttemptId: s.activeAttemptId,
        daysByAttempt: s.daysByAttempt,
      }),
    },
  ),
);