/**
 * Pure date primitives tests (T009) — plan.md §Testing: bounds 1/365,
 * leap years, month ends, local timezone consistency.
 */
import { describe, expect, it } from "@jest/globals";
import {
  addDays,
  daysInMonth,
  diffDays,
  formatKey,
  isLeapYear,
  parseKey,
  todayKey,
} from "@/lib/challenge/dates";

describe("addDays", () => {
  it("keeps the same day with +0 and moves by ±1", () => {
    expect(addDays("2026-01-05", 0)).toBe("2026-01-05");
    expect(addDays("2026-01-05", 1)).toBe("2026-01-06");
    expect(addDays("2026-01-05", -1)).toBe("2026-01-04");
  });

  it("handles month ends", () => {
    expect(addDays("2026-01-31", 1)).toBe("2026-02-01");
    expect(addDays("2026-04-30", 1)).toBe("2026-05-01");
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });

  it("handles leap years (Feb 29 exists in 2024, not in 2025)", () => {
    expect(addDays("2024-02-28", 1)).toBe("2024-02-29");
    expect(addDays("2024-02-29", 1)).toBe("2024-03-01");
    expect(addDays("2025-02-28", 1)).toBe("2025-03-01");
  });

  it("handles the 1-day and 365-day bounds", () => {
    expect(addDays("2026-01-05", 0)).toBe("2026-01-05");
    expect(addDays("2026-01-01", 364)).toBe("2026-12-31");
    expect(addDays("2026-01-01", 365)).toBe("2027-01-01");
    // Leap year: day 365 of 2024 lands on Dec 30 (2024 has 366 days).
    expect(addDays("2024-01-01", 364)).toBe("2024-12-30");
  });
});

describe("diffDays", () => {
  it("computes whole days between keys", () => {
    expect(diffDays("2026-01-05", "2026-01-05")).toBe(0);
    expect(diffDays("2026-01-05", "2026-01-29")).toBe(24); // 25-day challenge span
    expect(diffDays("2026-01-29", "2026-01-05")).toBe(-24);
  });

  it("is DST-safe (23h/25h days round to whole days)", () => {
    // Across a typical DST change the calendar diff must stay exact.
    expect(diffDays("2026-03-07", "2026-03-09")).toBe(2);
    expect(diffDays("2026-10-31", "2026-11-02")).toBe(2);
  });
});

describe("todayKey / formatKey / parseKey", () => {
  it("returns the LOCAL calendar day, not UTC", () => {
    // Constructed with local components: 23:59 local is still "today".
    const now = new Date(2026, 8, 29, 23, 59, 59);
    expect(todayKey(now)).toBe("2026-09-29");
  });

  it("round-trips a key through parseKey/formatKey (timezone consistency)", () => {
    const key = todayKey();
    expect(formatKey(parseKey(key))).toBe(key);
    expect(formatKey(parseKey("2026-01-05"))).toBe("2026-01-05");
  });
});

describe("isLeapYear / daysInMonth", () => {
  it("detects leap years", () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2025)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
  });

  it("reports days per month", () => {
    expect(daysInMonth(2026, 1)).toBe(31);
    expect(daysInMonth(2026, 2)).toBe(28);
    expect(daysInMonth(2024, 2)).toBe(29);
    expect(daysInMonth(2026, 4)).toBe(30);
    expect(daysInMonth(2026, 12)).toBe(31);
  });
});