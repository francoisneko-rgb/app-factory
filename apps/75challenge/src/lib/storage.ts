/**
 * Storage clé-valeur (MMKV — 30x plus rapide qu'AsyncStorage).
 * Tous les accès storage passent par les handlers de ce fichier,
 * JAMAIS d'appel MMKV direct depuis l'UI.
 */
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({ id: "app-storage" });

export function getString(key: string): string | undefined {
  return storage.getString(key);
}

export function getNumber(key: string): number | undefined {
  return storage.getNumber(key);
}

export function getBoolean(key: string): boolean | undefined {
  return storage.getBoolean(key);
}

export function setValue(key: string, value: string | number | boolean) {
  storage.set(key, value);
}

export function removeKey(key: string) {
  storage.delete(key);
}

export function clearAll() {
  storage.clearAll();
}