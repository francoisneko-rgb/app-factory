/**
 * Validation schema tests (T012, rewritten) — plan.md §Testing:
 * first name 2–20, water 0–5 L/day, pages ≥ 0, minutes ≥ 0, custom task
 * (title/icon/type/optional description, counter target, requiredForDay).
 */
import { describe, expect, it } from "@jest/globals";
import {
  customTaskFormSchema,
  firstNameSchema,
  minutesSchema,
  pagesSchema,
  waterLitersSchema,
  waterMlEntrySchema,
} from "@/lib/validation";

describe("firstNameSchema (2–20 chars, FR-003)", () => {
  it("accepts valid names", () => {
    expect(firstNameSchema.safeParse("Al").success).toBe(true);
    expect(firstNameSchema.safeParse("Alexandra").success).toBe(true);
    expect(firstNameSchema.safeParse("A".repeat(20)).success).toBe(true);
  });

  it("trims surrounding whitespace", () => {
    expect(firstNameSchema.safeParse("  Al  ").success).toBe(true);
    expect(firstNameSchema.parse("  Al  ")).toBe("Al");
  });

  it("rejects too short / empty / too long names", () => {
    expect(firstNameSchema.safeParse("").success).toBe(false);
    expect(firstNameSchema.safeParse("A").success).toBe(false);
    expect(firstNameSchema.safeParse("   ").success).toBe(false);
    expect(firstNameSchema.safeParse("A".repeat(21)).success).toBe(false);
  });
});

describe("waterLitersSchema (0–5 L/day, FR-013)", () => {
  it("accepts the full valid range", () => {
    expect(waterLitersSchema.safeParse(0).success).toBe(true);
    expect(waterLitersSchema.safeParse(2.5).success).toBe(true);
    expect(waterLitersSchema.safeParse(5).success).toBe(true);
  });

  it("rejects negatives and over 5 L", () => {
    expect(waterLitersSchema.safeParse(-0.01).success).toBe(false);
    expect(waterLitersSchema.safeParse(5.01).success).toBe(false);
  });
});

describe("waterMlEntrySchema (single ± stepper entry)", () => {
  it("accepts entries within 0–5000 ml", () => {
    expect(waterMlEntrySchema.safeParse(0).success).toBe(true);
    expect(waterMlEntrySchema.safeParse(240).success).toBe(true);
    expect(waterMlEntrySchema.safeParse(5000).success).toBe(true);
  });

  it("rejects negatives, non-integers and oversized entries", () => {
    expect(waterMlEntrySchema.safeParse(-1).success).toBe(false);
    expect(waterMlEntrySchema.safeParse(240.5).success).toBe(false);
    expect(waterMlEntrySchema.safeParse(5001).success).toBe(false);
  });
});

describe("minutesSchema (≥ 0, FR-012)", () => {
  it("accepts 0 and positive integers", () => {
    expect(minutesSchema.safeParse(0).success).toBe(true);
    expect(minutesSchema.safeParse(45).success).toBe(true);
  });

  it("rejects negatives and non-integers", () => {
    expect(minutesSchema.safeParse(-1).success).toBe(false);
    expect(minutesSchema.safeParse(45.5).success).toBe(false);
  });
});

describe("pagesSchema (≥ 0, FR-012)", () => {
  it("accepts 0 and positive integers", () => {
    expect(pagesSchema.safeParse(0).success).toBe(true);
    expect(pagesSchema.safeParse(10).success).toBe(true);
  });

  it("rejects negatives", () => {
    expect(pagesSchema.safeParse(-1).success).toBe(false);
  });
});

describe("customTaskFormSchema (FR-015)", () => {
  it("accepts a checkbox task without target", () => {
    const result = customTaskFormSchema.safeParse({
      title: "No sugar",
      icon: "🚫",
      type: "checkbox",
      requiredForDay: true,
    });
    expect(result.success).toBe(true);
  });

  it("accepts a counter task with a target and optional description", () => {
    const result = customTaskFormSchema.safeParse({
      title: "Push-ups",
      icon: "💪",
      type: "counter",
      target: 20,
      description: "Slow reps",
      requiredForDay: false,
    });
    expect(result.success).toBe(true);
  });

  it("rejects a counter task without a target", () => {
    const result = customTaskFormSchema.safeParse({
      title: "Push-ups",
      icon: "💪",
      type: "counter",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an empty title", () => {
    const result = customTaskFormSchema.safeParse({
      title: "   ",
      icon: "💪",
      type: "checkbox",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a missing icon", () => {
    const result = customTaskFormSchema.safeParse({
      title: "Push-ups",
      type: "checkbox",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a title longer than 50 chars", () => {
    const result = customTaskFormSchema.safeParse({
      title: "T".repeat(51),
      icon: "💪",
      type: "checkbox",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown type", () => {
    const result = customTaskFormSchema.safeParse({
      title: "Push-ups",
      icon: "💪",
      type: "slider",
    });
    expect(result.success).toBe(false);
  });
});