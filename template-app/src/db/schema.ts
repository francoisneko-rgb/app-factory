/**
 * Drizzle ORM — module OPTIONNEL (activé à la première app qui en a besoin).
 * Usage :
 *   npx drizzle-kit generate        (génère les migrations SQL)
 *   npx drizzle-kit studio          (explorer la DB)
 *   npx drizzle-kit migrate         (applique les migrations)
 * Puis importer `db` dans le code.
 */
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});