/**
 * Engine tests (T009) — gate G-b: MUST be green before any screen is built.
 *
 * Covers plan.md §Testing: presets FR-005 exact doses, endDate cases
 * (25/1/365 days, leap, month-end), current day index, day completion
 * (all / required-only / custom-required), strict vs flexible at midnight
 * (FR-017), resume day N with pre-marked days (FR-010), rule edit with
 * next-day effect and intact history (FR-008).
 */
import { describe, expect, it } from "@jest/globals";
import type { ChallengeConfig, DayEntry, Rule } from "@/types";
import { PRESETS } from "@/lib/challenge/presets";
import {
  applyRuleChanges,
  buildDays,
  currentDayIndex,
  dayCompletionRatio,
  endDate,
  getRequiredRules,
  isDayComplete,
  isRuleCompleted,
  resolveMissedDay,
  rulesEffectiveOn,
} from "@/lib/challenge/engine";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeConfig(overrides: Partial<ChallengeConfig> = {}): ChallengeConfig {
  return {
    intensity: "custom",
    durationDays: 75,
    startDate: "2026-01-01",
    endDate: "2026-03-16",
    missedDayMode: "flexible",
    rules: [],
    isCustom: true,
    ...overrides,
  };
}

const completeProgress = (rules: Rule[]) =>
  Object.fromEntries(
    rules.map((r) => [
      r.id,
      { value: r.dose, completed: true, ...(r.outdoor ? { outdoorDone: true } : {}) },
    ]),
  );

// ---------------------------------------------------------------------------
// Presets (FR-005)
// ---------------------------------------------------------------------------

describe("PRESETS — FR-005 exact doses per intensity", () => {
  const cases: {
    intensity: "soft" | "medium" | "hard";
    durationDays: number;
    water: number;
    exercise: number;
    outdoor: boolean;
    reading: number;
    dietTitle: string;
    photoFrequency: "daily" | "weekly";
    missedDayMode: "strict" | "flexible";
  }[] = [
    {
      intensity: "soft",
      durationDays: 25,
      water: 2,
      exercise: 20,
      outdoor: false,
      reading: 5,
      dietTitle: "Clean diet",
      photoFrequency: "weekly",
      missedDayMode: "flexible",
    },
    {
      intensity: "medium",
      durationDays: 50,
      water: 2.5,
      exercise: 45,
      outdoor: false,
      reading: 10,
      dietTitle: "Strict diet",
      photoFrequency: "daily",
      missedDayMode: "flexible",
    },
    {
      intensity: "hard",
      durationDays: 75,
      water: 3.8,
      exercise: 90,
      outdoor: true,
      reading: 10,
      dietTitle: "Strict diet — no alcohol, no cheat meals",
      photoFrequency: "daily",
      missedDayMode: "strict",
    },
  ];

  it.each(cases)(
    "$intensity: $durationDays days with FR-005 doses",
    ({ intensity, durationDays, water, exercise, outdoor, reading, dietTitle, photoFrequency, missedDayMode }) => {
      const preset = PRESETS[intensity];
      expect(preset.durationDays).toBe(durationDays);
      expect(preset.missedDayMode).toBe(missedDayMode);

      const byId = new Map(preset.rules.map((r) => [r.id, r]));
      expect(byId.get("water")?.dose).toBe(water);
      expect(byId.get("water")?.unit).toBe("L");
      expect(byId.get("exercise")?.dose).toBe(exercise);
      expect(byId.get("exercise")?.outdoor).toBe(outdoor);
      expect(byId.get("reading")?.dose).toBe(reading);
      expect(byId.get("diet")?.title).toBe(dietTitle);
      expect(byId.get("diet")?.unit).toBe("boolean");
      expect(byId.get("photo")?.frequency).toBe(photoFrequency);
      expect(byId.get("photo")?.unit).toBe("photo");

      // Every core habit is required to validate the day (FR-016).
      for (const rule of preset.rules) {
        expect(rule.required).toBe(true);
      }
    },
  );

  it("Hard reading is non-fiction and exercise is 2×45 min incl. 1 outdoor", () => {
    const hard = PRESETS.hard;
    expect(hard.rules.find((r) => r.id === "reading")?.title).toBe(
      "Read non-fiction",
    );
    const exercise = hard.rules.find((r) => r.id === "exercise")!;
    expect(exercise.dose).toBe(90); // 2 × 45 min
    expect(exercise.outdoor).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// endDate (FR-006)
// ---------------------------------------------------------------------------

describe("endDate — startDate + durationDays − 1 (FR-006)", () => {
  it("25 days: Jan 5 → Jan 29 (plan.md exact case)", () => {
    expect(endDate("2026-01-05", 25)).toBe("2026-01-29");
  });

  it("1 day: start == end", () => {
    expect(endDate("2026-01-05", 1)).toBe("2026-01-05");
  });

  it("365 days: Jan 1 → Dec 31 (non-leap) and Dec 30 (leap)", () => {
    expect(endDate("2026-01-01", 365)).toBe("2026-12-31");
    expect(endDate("2024-01-01", 365)).toBe("2024-12-30");
  });

  it("crosses a leap day", () => {
    expect(endDate("2024-02-28", 2)).toBe("2024-02-29");
    expect(endDate("2024-02-28", 3)).toBe("2024-03-01");
  });

  it("lands on a month end", () => {
    expect(endDate("2026-01-30", 3)).toBe("2026-02-01");
    expect(endDate("2026-01-31", 1)).toBe("2026-01-31");
    expect(endDate("2026-01-05", 27)).toBe("2026-01-31");
  });
});

// ---------------------------------------------------------------------------
// currentDayIndex
// ---------------------------------------------------------------------------

describe("currentDayIndex", () => {
  const config = makeConfig({ startDate: "2026-01-01", durationDays: 75 });

  it("is 1 on the start date", () => {
    expect(currentDayIndex(config, "2026-01-01")).toBe(1);
  });

  it("advances by one per day", () => {
    expect(currentDayIndex(config, "2026-01-04")).toBe(4);
  });

  it("clamps to 1 before the start date", () => {
    expect(currentDayIndex(config, "2025-12-31")).toBe(1);
  });

  it("clamps to the last day after the end date", () => {
    expect(currentDayIndex(config, "2026-04-01")).toBe(75);
  });

  it("supports a 365-day custom challenge", () => {
    const custom = makeConfig({ startDate: "2026-01-01", durationDays: 365 });
    expect(currentDayIndex(custom, "2026-02-01")).toBe(32); // Jan 31 + 1
    expect(currentDayIndex(custom, "2027-01-02")).toBe(365);
  });
});

// ---------------------------------------------------------------------------
// Day completion (FR-012 / FR-015 / FR-016)
// ---------------------------------------------------------------------------

describe("day completion", () => {
  it("all rules done → day complete", () => {
    const rules = PRESETS.hard.rules;
    expect(isDayComplete(rules, completeProgress(rules))).toBe(true);
  });

  it("Hard exercise is incomplete without the outdoor session (FR-005)", () => {
    const rules = PRESETS.hard.rules;
    const progress = completeProgress(rules);
    progress.exercise = { value: 90, completed: true }; // all indoor
    expect(isRuleCompleted(rules.find((r) => r.id === "exercise")!, progress.exercise)).toBe(false);
    expect(isDayComplete(rules, progress)).toBe(false);
  });

  it("a rule below its dose is not done; reaching the dose auto-completes (FR-012)", () => {
    const water = PRESETS.soft.rules.find((r) => r.id === "water")!;
    expect(isRuleCompleted(water, { value: 1.9, completed: false })).toBe(false);
    expect(isRuleCompleted(water, { value: 2, completed: false })).toBe(true);
  });

  it("boolean diet completes via the check (not a value)", () => {
    const diet = PRESETS.medium.rules.find((r) => r.id === "diet")!;
    expect(isRuleCompleted(diet, { value: 0, completed: false })).toBe(false);
    expect(isRuleCompleted(diet, { value: 0, completed: true })).toBe(true);
  });

  it("required-only: an undone optional rule does not block the day", () => {
    const optional: Rule = {
      id: "custom-opt",
      type: "custom",
      title: "Meditate",
      dose: 1,
      unit: "custom",
      required: false,
      frequency: "daily",
      customTask: { icon: "🧘", isCounter: false, requiredForDay: false },
    };
    const rules = [...PRESETS.soft.rules, optional];
    const progress = completeProgress(rules); // optional done too
    progress["custom-opt"] = { value: 0, completed: false }; // optional undone
    expect(getRequiredRules(rules).map((r) => r.id)).not.toContain("custom-opt");
    expect(isDayComplete(rules, progress)).toBe(true);
  });

  it("a custom task with requiredForDay blocks ★ until done (FR-015)", () => {
    const blocker: Rule = {
      id: "custom-req",
      type: "custom",
      title: "No sugar",
      dose: 1,
      unit: "custom",
      required: false,
      frequency: "daily",
      customTask: { icon: "🚫", isCounter: false, requiredForDay: true },
    };
    const rules = [...PRESETS.soft.rules, blocker];
    const progress = completeProgress(rules);
    progress["custom-req"] = { value: 0, completed: false };
    expect(isDayComplete(rules, progress)).toBe(false);
    progress["custom-req"] = { value: 1, completed: true };
    expect(isDayComplete(rules, progress)).toBe(true);
  });

  it("custom checkbox tasks only complete via the explicit check", () => {
    const checkbox: Rule = {
      id: "custom-box",
      type: "custom",
      title: "Stretch",
      dose: 1,
      unit: "custom",
      required: true,
      frequency: "daily",
      customTask: { icon: "🤸", isCounter: false, requiredForDay: false },
    };
    expect(isRuleCompleted(checkbox, { value: 5, completed: false })).toBe(false);
    expect(isRuleCompleted(checkbox, { value: 0, completed: true })).toBe(true);
  });

  it("dayCompletionRatio counts every rule for the % header (FR-011)", () => {
    const rules = PRESETS.soft.rules;
    const progress = completeProgress(rules);
    expect(dayCompletionRatio(rules, progress)).toBe(1);
    progress.water = { value: 1, completed: false };
    expect(dayCompletionRatio(rules, progress)).toBe(4 / 5);
  });
});

// ---------------------------------------------------------------------------
// Missed-day resolution (FR-009 / FR-017)
// ---------------------------------------------------------------------------

describe("resolveMissedDay — strict vs flexible (FR-017)", () => {
  const day: DayEntry = {
    attemptId: "a1",
    index: 1,
    date: "2026-01-05",
    status: "partial",
    rules: {},
  };

  it("flexible: marks the day missed and continues the attempt", () => {
    const result = resolveMissedDay(day, "flexible");
    expect(result.day.status).toBe("missed");
    expect(result.archivesAttempt).toBe(false);
  });

  it("strict: marks the day missed and archives the attempt", () => {
    const result = resolveMissedDay(day, "strict");
    expect(result.day.status).toBe("missed");
    expect(result.archivesAttempt).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Resume — "already started" at day N (FR-010)
// ---------------------------------------------------------------------------

describe("buildDays — resume at day N (FR-010)", () => {
  it("pre-marks past days non-perfect, keeps the resume day current", () => {
    const config = makeConfig({
      startDate: "2026-01-01",
      durationDays: 25,
      endDate: "2026-01-25",
    });
    const days = buildDays("a1", config, 5);

    expect(days).toHaveLength(25);
    expect(days[0].date).toBe("2026-01-01");
    expect(days[24].date).toBe("2026-01-25");

    // Days 1–4: pre-marked partial (accounted, never "perfect" retroactively).
    for (const d of days.slice(0, 4)) {
      expect(d.status).toBe("partial");
      expect(d.preMarked).toBe(true);
    }
    // Day 5: the current day the user picks up.
    expect(days[4].index).toBe(5);
    expect(days[4].status).toBe("partial");
    expect(days[4].preMarked).toBeUndefined();
    // Days 6+: future.
    for (const d of days.slice(5)) {
      expect(d.status).toBe("future");
    }
  });

  it("a normal start today produces a partial day 1 and future days", () => {
    const config = makeConfig({ startDate: "2026-01-05", durationDays: 25 });
    const days = buildDays("a1", config);
    expect(days[0].status).toBe("partial");
    expect(days[0].preMarked).toBeUndefined();
    expect(days[1].status).toBe("future");
  });
});

// ---------------------------------------------------------------------------
// Rule editing — effectiveFrom = next day, history intact (FR-008)
// ---------------------------------------------------------------------------

describe("applyRuleChanges — edits apply from the next day (FR-008)", () => {
  const base = PRESETS.soft.rules; // water dose = 2
  const today = "2026-01-05";
  const tomorrow = "2026-01-06";

  it("a dose change applies from tomorrow; today and past keep the old dose", () => {
    const next = base.map((r) => (r.id === "water" ? { ...r, dose: 3 } : r));
    const log = applyRuleChanges(base, next, tomorrow, today);

    const waterOn = (date: string) =>
      rulesEffectiveOn(log, date).find((r) => r.id === "water")?.dose;

    expect(waterOn("2026-01-04")).toBe(2); // past
    expect(waterOn(today)).toBe(2); // today unchanged
    expect(waterOn(tomorrow)).toBe(3); // from tomorrow
    expect(waterOn("2026-02-01")).toBe(3); // and beyond
  });

  it("a brand-new rule is only active from its effectiveFrom", () => {
    const added: Rule = {
      id: "custom-new",
      type: "custom",
      title: "Cold shower",
      dose: 1,
      unit: "custom",
      required: false,
      frequency: "daily",
      customTask: { icon: "🚿", isCounter: false, requiredForDay: false },
    };
    const log = applyRuleChanges(base, [...base, added], tomorrow, today);

    expect(rulesEffectiveOn(log, today).some((r) => r.id === "custom-new")).toBe(false);
    expect(rulesEffectiveOn(log, tomorrow).some((r) => r.id === "custom-new")).toBe(true);
    expect(rulesEffectiveOn(log, "2026-02-01").length).toBe(6);
  });

  it("a removed rule disappears from tomorrow but stays for past days", () => {
    const next = base.filter((r) => r.id !== "reading");
    const log = applyRuleChanges(base, next, tomorrow, today);

    expect(rulesEffectiveOn(log, today).some((r) => r.id === "reading")).toBe(true);
    expect(rulesEffectiveOn(log, tomorrow).some((r) => r.id === "reading")).toBe(false);
  });

  it("unchanged rules keep their base version (no log pollution)", () => {
    const next = [...base]; // identical ruleset
    const log = applyRuleChanges(base, next, tomorrow, today);
    expect(log).toHaveLength(base.length);
  });

  it("rule order stays stable after edits (badge order 1→4, new rules last)", () => {
    const next = base.map((r) => (r.id === "water" ? { ...r, dose: 3 } : r));
    const log = applyRuleChanges(base, next, tomorrow, today);
    const ids = rulesEffectiveOn(log, tomorrow).map((r) => r.id);
    expect(ids).toEqual(["water", "exercise", "reading", "diet", "photo"]);
  });

  it("progress records live on DayEntry — history is never rewritten", () => {
    // Store-level guarantee: the engine only schedules new rule versions; the
    // DayEntry.rules records (values/completed) are untouched by applyRuleChanges.
    const next = base.map((r) => (r.id === "water" ? { ...r, dose: 3 } : r));
    const log = applyRuleChanges(base, next, tomorrow, today);
    expect(log).not.toBe(base);
    // Sanity: day entries built before the edit still resolve old doses.
    const config = makeConfig({ startDate: today, durationDays: 25, rules: log });
    expect(rulesEffectiveOn(config.rules, today).find((r) => r.id === "water")?.dose).toBe(2);
  });
});