/**
 * Challenge store tests (T012) — plan.md §Testing: pure reducers
 * (auto-check at dose, day validation gated by required rules, restart
 * archives intact + increments attempt number, rule edit applies from next
 * day with past untouched) + MMKV persistence across "restart".
 *
 * Reducers are tested with an injected `now` for deterministic midnight
 * rollover (FR-017); the store instance is exercised for wiring + persist.
 */
import { beforeEach, describe, expect, it } from "@jest/globals";
import type { ChallengeConfig, DayEntry, Rule } from "@/types";
import { endDate, rulesEffectiveOn } from "@/lib/challenge/engine";
import { addDays, todayKey } from "@/lib/challenge/dates";
import { PRESETS } from "@/lib/challenge/presets";
import { mmkv, STORAGE_KEYS } from "@/lib/services/storage";
import {
  addWaterReducer,
  editRulesReducer,
  emptyChallengeDraft,
  restartReducer,
  setDayMetaReducer,
  setOutdoorReducer,
  setPhotoReducer,
  setRuleValueReducer,
  startChallengeReducer,
  syncDayReducer,
  toggleRuleReducer,
  useChallengeStore,
  type ChallengeDraft,
} from "@/store/useChallengeStore";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const TODAY = "2026-01-05";

function startConfig(overrides: Partial<ChallengeConfig> = {}): ChallengeConfig {
  return {
    intensity: "hard",
    durationDays: 75,
    startDate: TODAY,
    endDate: endDate(TODAY, 75),
    missedDayMode: "strict",
    rules: PRESETS.hard.rules,
    isCustom: false,
    ...overrides,
  };
}

/** Fixed local "now" so every reducer call is deterministic. */
const nowAt = (day: number, hour = 10) => new Date(2026, 0, day, hour, 0, 0);

function currentDay(draft: ChallengeDraft): DayEntry {
  const attempt = draft.attempts.find((a) => a.id === draft.activeAttemptId)!;
  const days = draft.daysByAttempt[attempt.id]!;
  return days.find((d) => d.date === todayKey(nowAt(5)))!;
}

// Thin pure-reducer wrappers (all driven by the fixed `now` = Jan 5 10:00).
const setValue = (d: ChallengeDraft, ruleId: string, value: number) =>
  setRuleValueReducer(d, ruleId, value, nowAt(5));
const addWater = (d: ChallengeDraft, ml: number) => addWaterReducer(d, ml, nowAt(5));
const toggle = (d: ChallengeDraft, ruleId: string) => toggleRuleReducer(d, ruleId, nowAt(5));
const setOutdoor = (d: ChallengeDraft, ruleId: string, done: boolean) =>
  setOutdoorReducer(d, ruleId, done, nowAt(5));
const setPhoto = (d: ChallengeDraft, uri: string) => setPhotoReducer(d, uri, nowAt(5));
const setMeta = (d: ChallengeDraft, patch: { weightKg?: number; journal?: string }) =>
  setDayMetaReducer(d, patch, nowAt(5));

/** Complete every required rule of the hard preset on the current day. */
function completeHardDay(d: ChallengeDraft): ChallengeDraft {
  let next = setValue(d, "water", 3.8);
  next = setValue(next, "exercise", 90);
  next = setOutdoor(next, "exercise", true);
  next = setValue(next, "reading", 10);
  next = toggle(next, "diet"); // diet is a Yes/No check (FR-012)
  return setPhoto(next, "file:///photos/a1/day-1.jpg");
}

const waterRule: Rule = {
  id: "water",
  type: "water",
  title: "Water",
  dose: 2,
  unit: "L",
  required: true,
  frequency: "daily",
};

const requiredCustomRule: Rule = {
  id: "custom-req",
  type: "custom",
  title: "No sugar",
  dose: 1,
  unit: "custom",
  required: false,
  frequency: "daily",
  customTask: { icon: "🚫", isCounter: false, requiredForDay: true },
};

// ---------------------------------------------------------------------------
// startChallenge
// ---------------------------------------------------------------------------

describe("startChallengeReducer", () => {
  it("creates attempt #1 with N days and sets it active", () => {
    const draft = startChallengeReducer(emptyChallengeDraft, startConfig(), nowAt(5));

    expect(draft.attempts).toHaveLength(1);
    expect(draft.attempts[0].number).toBe(1);
    expect(draft.attempts[0].status).toBe("active");
    expect(draft.activeAttemptId).toBe(draft.attempts[0].id);
    expect(draft.daysByAttempt[draft.activeAttemptId!]).toHaveLength(75);
    expect(draft.daysByAttempt[draft.activeAttemptId!][0].date).toBe(TODAY);
    expect(draft.daysByAttempt[draft.activeAttemptId!][0].status).toBe("partial");
  });

  it("archives any previous active attempt (one active at a time, FR-023)", () => {
    const first = startChallengeReducer(emptyChallengeDraft, startConfig(), nowAt(5));
    const second = startChallengeReducer(first, startConfig(), nowAt(6));

    const archived = second.attempts.find((a) => a.id === first.activeAttemptId)!;
    expect(archived.status).toBe("abandoned");
    expect(archived.archivedAt).toBeDefined();
    expect(second.attempts).toHaveLength(2);
    expect(second.attempts[1].number).toBe(2);
  });

  it("resumes at day N with non-perfect pre-marked past days (FR-010)", () => {
    // startDate 4 days ago → today is day 5.
    const config = startConfig({
      startDate: "2026-01-01",
      endDate: endDate("2026-01-01", 75),
    });
    const draft = startChallengeReducer(emptyChallengeDraft, config, nowAt(5));
    const days = draft.daysByAttempt[draft.activeAttemptId!]!;

    expect(days[0].status).toBe("partial");
    expect(days[0].preMarked).toBe(true);
    expect(days[3].preMarked).toBe(true);
    expect(days[4].index).toBe(5);
    expect(days[4].preMarked).toBeUndefined();
    expect(days[5].status).toBe("future");
  });
});

// ---------------------------------------------------------------------------
// Progress + auto-check + auto-validation (FR-012 / FR-016)
// ---------------------------------------------------------------------------

describe("daily progress", () => {
  let draft: ChallengeDraft;
  beforeEach(() => {
    draft = startChallengeReducer(
      emptyChallengeDraft,
      startConfig({ missedDayMode: "flexible" }),
      nowAt(5),
    );
  });

  it("auto-checks a rule when the dose is reached (FR-012)", () => {
    draft = setValue(draft, "water", 1.5);
    expect(currentDay(draft).rules.water.completed).toBe(false);
    draft = setValue(draft, "water", 3.8);
    expect(currentDay(draft).rules.water.completed).toBe(true);
  });

  it("addWaterMl accumulates in L and auto-checks at the dose", () => {
    draft = addWater(draft, 1500);
    expect(currentDay(draft).rules.water.value).toBe(1.5);
    expect(currentDay(draft).rules.water.completed).toBe(false);
    draft = addWater(draft, 2300);
    expect(currentDay(draft).rules.water.value).toBe(3.8);
    expect(currentDay(draft).rules.water.completed).toBe(true);
  });

  it("Hard exercise completes only with 90 min AND the outdoor session (FR-005)", () => {
    draft = setValue(draft, "exercise", 90);
    expect(currentDay(draft).rules.exercise.completed).toBe(false);
    draft = setOutdoor(draft, "exercise", true);
    expect(currentDay(draft).rules.exercise.completed).toBe(true);
  });

  it("validates the day only when ALL required rules are done (FR-016)", () => {
    draft = setValue(draft, "water", 3.8);
    expect(currentDay(draft).status).toBe("partial");

    draft = completeHardDay(draft);
    expect(currentDay(draft).status).toBe("done");
    expect(currentDay(draft).validatedAt).toBeDefined();
    expect(currentDay(draft).photoUri).toBe("file:///photos/a1/day-1.jpg");
  });

  it("a custom task with requiredForDay blocks ★ (FR-015)", () => {
    const config = startConfig({
      intensity: "custom",
      durationDays: 25,
      isCustom: true,
      rules: [waterRule, requiredCustomRule],
    });
    draft = startChallengeReducer(emptyChallengeDraft, config, nowAt(5));

    draft = setValue(draft, "water", 2);
    expect(currentDay(draft).status).toBe("partial"); // custom required undone

    draft = toggle(draft, "custom-req");
    expect(currentDay(draft).rules["custom-req"].completed).toBe(true);
    expect(currentDay(draft).status).toBe("done");
  });

  it("unchecking a rule reverts a validated day to partial", () => {
    draft = completeHardDay(draft);
    expect(currentDay(draft).status).toBe("done");

    draft = toggle(draft, "diet");
    expect(currentDay(draft).status).toBe("partial");
    expect(currentDay(draft).validatedAt).toBeUndefined();
  });

  it("stores optional weight and journal attached to the day (FR-018)", () => {
    draft = setMeta(draft, { weightKg: 82.5, journal: "Felt great." });
    expect(currentDay(draft).weightKg).toBe(82.5);
    expect(currentDay(draft).journal).toBe("Felt great.");
  });
});

// ---------------------------------------------------------------------------
// syncDay — midnight rollover (FR-017)
// ---------------------------------------------------------------------------

describe("syncDayReducer — midnight rollover (FR-017)", () => {
  it("does nothing before midnight / when nothing is overdue", () => {
    const draft = startChallengeReducer(
      emptyChallengeDraft,
      startConfig({ missedDayMode: "flexible" }),
      nowAt(5),
    );
    const synced = syncDayReducer(draft, nowAt(5, 23));
    expect(synced).toBe(draft);
  });

  it("flexible: marks the unfinished day missed and continues the attempt", () => {
    const draft = startChallengeReducer(
      emptyChallengeDraft,
      startConfig({ missedDayMode: "flexible" }),
      nowAt(5),
    );
    const synced = syncDayReducer(draft, nowAt(6, 0));

    expect(synced.activeAttemptId).toBe(draft.activeAttemptId);
    expect(synced.attempts).toHaveLength(1);
    expect(synced.attempts[0].status).toBe("active");
    expect(synced.daysByAttempt[draft.activeAttemptId!]![0].status).toBe("missed");
    expect(synced.daysByAttempt[draft.activeAttemptId!]![1].status).toBe("future");
  });

  it("strict: archives the attempt and starts a fresh day-1 attempt (FR-009)", () => {
    const draft = startChallengeReducer(
      emptyChallengeDraft,
      startConfig({ missedDayMode: "strict" }),
      nowAt(5),
    );
    const archivedId = draft.activeAttemptId!;
    const synced = syncDayReducer(draft, nowAt(6, 0));

    expect(synced.attempts).toHaveLength(2);
    const archived = synced.attempts.find((a) => a.id === archivedId)!;
    expect(archived.status).toBe("abandoned");
    expect(archived.archivedAt).toBeDefined();
    expect(synced.daysByAttempt[archivedId]![0].status).toBe("missed");

    const fresh = synced.attempts.find((a) => a.status === "active")!;
    expect(fresh.number).toBe(2);
    expect(fresh.config.startDate).toBe("2026-01-06");
    expect(synced.activeAttemptId).toBe(fresh.id);
    expect(synced.daysByAttempt[fresh.id]).toHaveLength(75);
    expect(synced.daysByAttempt[fresh.id]![0].date).toBe("2026-01-06");
  });

  it("keeps pre-marked resume days partial (they are not 'missed' retroactively)", () => {
    const config = startConfig({
      startDate: "2026-01-01",
      endDate: endDate("2026-01-01", 75),
      missedDayMode: "flexible",
    });
    const draft = startChallengeReducer(emptyChallengeDraft, config, nowAt(5));
    const synced = syncDayReducer(draft, nowAt(6, 0));
    const days = synced.daysByAttempt[draft.activeAttemptId!]!;

    expect(days[0].status).toBe("partial"); // pre-marked day 1
    expect(days[0].preMarked).toBe(true);
    expect(days[4].status).toBe("missed"); // day 5 was the unfinished current day
  });

  it("keeps a fully completed day done across the rollover", () => {
    const draft = completeHardDay(
      startChallengeReducer(
        emptyChallengeDraft,
        startConfig({ missedDayMode: "flexible" }),
        nowAt(5),
      ),
    );
    expect(currentDay(draft).status).toBe("done");

    const synced = syncDayReducer(draft, nowAt(6, 0));
    expect(synced.daysByAttempt[draft.activeAttemptId!]![0].status).toBe("done");
    expect(synced.attempts).toHaveLength(1); // nothing missed → no restart
  });
});

// ---------------------------------------------------------------------------
// restart — archive intact + attempt N+1 (FR-025)
// ---------------------------------------------------------------------------

describe("restartReducer (FR-025)", () => {
  it("archives the current attempt INTACT and starts attempt 2 today", () => {
    const draft = completeHardDay(
      startChallengeReducer(
        emptyChallengeDraft,
        startConfig({ missedDayMode: "flexible" }),
        nowAt(5),
      ),
    );
    const firstId = draft.activeAttemptId!;

    const restarted = restartReducer(draft, nowAt(6));

    expect(restarted.attempts).toHaveLength(2);
    const archived = restarted.attempts.find((a) => a.id === firstId)!;
    expect(archived.status).toBe("abandoned");
    expect(archived.archivedAt).toBeDefined();

    // Archive intact: original days and progress are still stored.
    const archivedDays = restarted.daysByAttempt[firstId]!;
    expect(archivedDays).toHaveLength(75);
    expect(archivedDays[0].rules.water.value).toBe(3.8);
    expect(archivedDays[0].rules.water.completed).toBe(true);

    // Fresh attempt N+1 at day 1.
    const fresh = restarted.attempts.find((a) => a.status === "active")!;
    expect(fresh.number).toBe(2);
    expect(restarted.activeAttemptId).toBe(fresh.id);
    expect(fresh.config.startDate).toBe("2026-01-06");
    expect(restarted.daysByAttempt[fresh.id]).toHaveLength(75);
    expect(restarted.daysByAttempt[fresh.id]![0].date).toBe("2026-01-06");
    // Fresh days carry no progress yet (values are entered as the user goes).
    expect(restarted.daysByAttempt[fresh.id]![0].rules.water).toBeUndefined();
  });

  it("increments the attempt number on repeated restarts", () => {
    let draft = startChallengeReducer(emptyChallengeDraft, startConfig(), nowAt(5));
    draft = restartReducer(draft, nowAt(6));
    draft = restartReducer(draft, nowAt(7));
    const active = draft.attempts.find((a) => a.id === draft.activeAttemptId)!;
    expect(active.number).toBe(3);
    expect(draft.attempts).toHaveLength(3);
  });
});

// ---------------------------------------------------------------------------
// editRules — next-day effect, past untouched (FR-008)
// ---------------------------------------------------------------------------

describe("editRulesReducer (FR-008)", () => {
  it("applies the new dose from tomorrow; today's progress is untouched", () => {
    const draft = setValue(
      startChallengeReducer(
        emptyChallengeDraft,
        startConfig({ missedDayMode: "flexible" }),
        nowAt(5),
      ),
      "water",
      3.8,
    );
    expect(currentDay(draft).rules.water.completed).toBe(true);

    const todayRules = rulesEffectiveOn(
      draft.attempts.find((a) => a.id === draft.activeAttemptId)!.config.rules,
      TODAY,
    );
    const next = todayRules.map((r) => (r.id === "water" ? { ...r, dose: 4 } : r));

    const edited = editRulesReducer(draft, next, nowAt(5));
    const config = edited.attempts.find((a) => a.id === edited.activeAttemptId)!.config;

    // Today still resolves the OLD dose (edit applies from tomorrow).
    const todayWater = rulesEffectiveOn(config.rules, TODAY).find((r) => r.id === "water")!;
    expect(todayWater.dose).toBe(3.8);
    const tomorrowWater = rulesEffectiveOn(config.rules, addDays(TODAY, 1)).find(
      (r) => r.id === "water",
    )!;
    expect(tomorrowWater.dose).toBe(4);

    // History intact: the day entry keeps its entered progress.
    expect(currentDay(edited).rules.water.value).toBe(3.8);
    expect(currentDay(edited).rules.water.completed).toBe(true);
    expect(currentDay(edited).status).toBe("partial"); // other rules still pending
  });

  it("removing a rule does not rewrite past days", () => {
    const draft = setValue(
      startChallengeReducer(
        emptyChallengeDraft,
        startConfig({ missedDayMode: "flexible" }),
        nowAt(5),
      ),
      "water",
      3.8,
    );
    const todayRules = rulesEffectiveOn(
      draft.attempts.find((a) => a.id === draft.activeAttemptId)!.config.rules,
      TODAY,
    );
    const next = todayRules.filter((r) => r.id !== "reading");

    const edited = editRulesReducer(draft, next, nowAt(5));
    const config = edited.attempts.find((a) => a.id === edited.activeAttemptId)!.config;

    expect(rulesEffectiveOn(config.rules, TODAY).some((r) => r.id === "reading")).toBe(true);
    expect(
      rulesEffectiveOn(config.rules, addDays(TODAY, 1)).some((r) => r.id === "reading"),
    ).toBe(false);
    expect(currentDay(edited).rules.reading).toBeUndefined(); // never entered, history clean
  });
});

// ---------------------------------------------------------------------------
// Store instance — wiring + MMKV persistence
// ---------------------------------------------------------------------------

describe("useChallengeStore — wiring + MMKV persistence", () => {
  // Store actions run on the REAL clock (new Date()) — the config must start
  // today so day 1 is the current day.
  const realStartConfig = (): ChallengeConfig => {
    const start = todayKey();
    return startConfig({ startDate: start, endDate: endDate(start, 75) });
  };

  beforeEach(() => {
    mmkv.clearAll();
    useChallengeStore.setState(emptyChallengeDraft);
  });

  it("persists state to MMKV under the 'challenge' key", () => {
    useChallengeStore.getState().startChallenge(realStartConfig());
    useChallengeStore.getState().setRuleValue("water", 3.8);

    const raw = mmkv.getString(STORAGE_KEYS.challenge);
    expect(raw).toBeDefined();
    const parsed = JSON.parse(raw!) as { state: ChallengeDraft };
    expect(parsed.state.activeAttemptId).toBe(useChallengeStore.getState().activeAttemptId);
    expect(
      parsed.state.daysByAttempt[useChallengeStore.getState().activeAttemptId!]![0].rules.water
        .value,
    ).toBe(3.8);
  });

  it("rehydrates state from MMKV (state survives app restart)", async () => {
    useChallengeStore.getState().startChallenge(realStartConfig());
    useChallengeStore.getState().setRuleValue("water", 3.8);
    const persistedActiveId = useChallengeStore.getState().activeAttemptId;

    // Simulate app restart: wipe memory, then restore the persisted bytes.
    const persistedBytes = mmkv.getString(STORAGE_KEYS.challenge)!;
    useChallengeStore.setState(emptyChallengeDraft);
    expect(useChallengeStore.getState().activeAttemptId).toBeNull();
    mmkv.set(STORAGE_KEYS.challenge, persistedBytes);

    await useChallengeStore.persist.rehydrate();

    expect(useChallengeStore.getState().activeAttemptId).toBe(persistedActiveId);
    expect(
      useChallengeStore.getState().daysByAttempt[persistedActiveId!]![0].rules.water.value,
    ).toBe(3.8);
  });

  it("exposes the full action surface", () => {
    const actions = useChallengeStore.getState();
    expect(typeof actions.startChallenge).toBe("function");
    expect(typeof actions.toggleRule).toBe("function");
    expect(typeof actions.setRuleValue).toBe("function");
    expect(typeof actions.addWaterMl).toBe("function");
    expect(typeof actions.setOutdoor).toBe("function");
    expect(typeof actions.setPhoto).toBe("function");
    expect(typeof actions.setWeight).toBe("function");
    expect(typeof actions.setJournal).toBe("function");
    expect(typeof actions.validateDay).toBe("function");
    expect(typeof actions.syncDay).toBe("function");
    expect(typeof actions.restart).toBe("function");
    expect(typeof actions.editRules).toBe("function");
  });
});