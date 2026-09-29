/**
 * Zod validation schemas (T010) — shared by RHF forms and services.
 *
 * Pure zod, unit-testable (T012). Covers the user-entered values:
 * first name (2–20), water intake/dose (0–5 L/day, FR-013), exercise minutes,
 * reading pages, and custom tasks (title/icon/type/description, FR-015).
 */
import { z } from "zod";

/** First name — contract + quiz (FR-003). 2–20 chars. */
export const firstNameSchema = z
  .string()
  .trim()
  .min(2, "First name must be 2–20 characters")
  .max(20, "First name must be 2–20 characters");

/** Daily water dose cap: 0–5 L per day (FR-013, plan.md §Testing). */
export const waterLitersSchema = z
  .number()
  .min(0, "Water dose must be 0–5 L/day")
  .max(5, "Water dose must be 0–5 L/day");

/** Single water entry via the ± stepper (ml). */
export const waterMlEntrySchema = z
  .number()
  .int()
  .min(0)
  .max(5000);

/** Exercise minutes (FR-012). */
export const minutesSchema = z.number().int().min(0, "Minutes cannot be negative");

/** Reading pages (FR-012). */
export const pagesSchema = z.number().int().min(0, "Pages cannot be negative");

/** Counter targets and custom durations. */
export const positiveIntSchema = z.number().int().positive();

export const customTaskTypeSchema = z.enum(["checkbox", "counter"]);

/**
 * Custom task form (Premium, FR-015): title, icon, type (checkbox | counter),
 * optional description, counter target, "required for day completion".
 */
export const customTaskSchema = z.object({
  title: z.string().trim().min(1, "A title is required").max(50),
  icon: z.string().trim().min(1, "An icon is required").max(8),
  type: customTaskTypeSchema,
  description: z.string().trim().max(200).optional(),
  /** Daily target — required when type === "counter". */
  target: positiveIntSchema.optional(),
  requiredForDay: z.boolean().default(false),
});

export type CustomTaskFormValues = z.infer<typeof customTaskSchema>;

/** Counter tasks must declare a numeric target (FR-015 "compteur avec objectif"). */
export const customTaskFormSchema = customTaskSchema.refine(
  (value) => value.type === "checkbox" || value.target != null,
  { message: "A counter task needs a daily target", path: ["target"] },
);