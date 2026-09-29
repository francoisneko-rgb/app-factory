/**
 * MMKV storage service (T010) — the ONLY place the MMKV instance lives.
 *
 * Handlers are consumed by the Zustand stores (persist middleware) and by
 * services only — NEVER by UI (plan.md "Règles : les écrans ne manipulent
 * jamais MMKV directement").
 *
 * Keys (plan.md §Data Model): `profile` = UserProfile + premium,
 * `challenge` = attempts/days. Photos are files, never base64 here (R3).
 */
import { MMKV } from "react-native-mmkv";

/** Single MMKV instance — the one persisted source of truth (ADR-75C-001). */
export const mmkv = new MMKV({ id: "75challenge" });

export const STORAGE_KEYS = {
  profile: "profile",
  challenge: "challenge",
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/** Read a JSON value; returns undefined when absent or corrupted. */
export function getJSON<T>(key: StorageKey): T | undefined {
  const raw = mmkv.getString(key);
  if (raw == null) return undefined;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

/** Write a JSON value (atomic per store action — Zustand persist). */
export function setJSON(key: StorageKey, value: unknown): void {
  mmkv.set(key, JSON.stringify(value));
}

export function removeKey(key: StorageKey): void {
  mmkv.delete(key);
}

/** Wipe every persisted key (used by tests / future "reset app"). */
export function clearStorage(): void {
  mmkv.clearAll();
}

/**
 * Zustand `createJSONStorage` adapter over the single MMKV instance.
 * The persist middleware owns the JSON serialization (state + version).
 */
export const mmkvStorage = {
  getItem: (name: string): string | null => mmkv.getString(name) ?? null,
  setItem: (name: string, value: string): void => {
    mmkv.set(name, value);
  },
  removeItem: (name: string): void => {
    mmkv.delete(name);
  },
};