/**
 * Pure date primitives for the challenge engine (T007).
 *
 * All day arithmetic works on `YYYY-MM-DD` local calendar keys (DayKey).
 * Everything here is pure TypeScript — no React Native imports — so it is
 * fully unit-testable in Jest (R2: midnight/timezone bugs are review-killers).
 *
 * Calendar arithmetic (addDays) uses the local `Date` calendar: month ends,
 * leap years (Feb 29) and DST transitions are handled by the runtime, not by
 * hand-rolled math. Keys are compared lexicographically (YYYY-MM-DD is
 * chronological order).
 */
import type { DayKey } from "@/types";

const DAY_MS = 86_400_000;

/** Parse a `YYYY-MM-DD` key into a Date at LOCAL midnight. */
export function parseKey(key: DayKey): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** Format a Date into a local `YYYY-MM-DD` key. */
export function formatKey(date: Date): DayKey {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Add `days` (can be negative) to a day key.
 * Handles month ends and leap years via the local calendar.
 */
export function addDays(key: DayKey, days: number): DayKey {
  const date = parseKey(key);
  date.setDate(date.getDate() + days);
  return formatKey(date);
}

/** Whole days between two keys: `diffDays(from, to) = to − from`. */
export function diffDays(from: DayKey, to: DayKey): number {
  const start = parseKey(from).getTime();
  const end = parseKey(to).getTime();
  return Math.round((end - start) / DAY_MS);
}

/** Today's day key in LOCAL time. */
export function todayKey(now: Date = new Date()): DayKey {
  return formatKey(now);
}

/** ISO 8601 timestamp (for validatedAt / archivedAt / paywallSeenAt). */
export function nowIso(now: Date = new Date()): string {
  return now.toISOString();
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/** Days in a month, 1-based month (1 = January). */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}