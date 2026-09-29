/**
 * Schémas zod réutilisables — la validation vit ici (testable unitairement),
 * pas dans les écrans.
 */
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "2 caractères minimum"),
  email: z.string().email("Email invalide"),
  age: z.coerce.number().min(13, "13 ans minimum").max(120),
});

export type FormValues = z.infer<typeof formSchema>;