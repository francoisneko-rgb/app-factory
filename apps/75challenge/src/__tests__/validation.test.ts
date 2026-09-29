import { describe, expect, it } from "@jest/globals";
import { formSchema } from "@/lib/validation";

describe("formSchema (zod)", () => {
  it("accepte des valeurs valides", () => {
    const result = formSchema.safeParse({
      name: "Test",
      email: "test@example.com",
      age: 25,
    });
    expect(result.success).toBe(true);
  });

  it("rejette un email invalide", () => {
    const result = formSchema.safeParse({
      name: "Test",
      email: "nope",
      age: 25,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path[0]).toBe("email");
    }
  });

  it("rejette un âge < 13", () => {
    const result = formSchema.safeParse({
      name: "Test",
      email: "test@example.com",
      age: 8,
    });
    expect(result.success).toBe(false);
  });
});