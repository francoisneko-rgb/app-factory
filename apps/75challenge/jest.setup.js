/* eslint-disable */
/**
 * Jest setup for 75 Challenge.
 *
 * react-native-mmkv's package "react-native" field points to raw TypeScript
 * sources that Jest does not transform (the transformIgnorePatterns allowlist
 * only covers react-native / @react-native-*). To keep store tests running in
 * pure JS we replace the module with an in-memory MMKV mock mirroring the
 * NativeMMKV API (same surface as the library's own createMockMMKV).
 */
class MockMMKV {
  constructor() {
    this._store = new Map();
  }

  clearAll() {
    this._store.clear();
  }

  delete(key) {
    this._store.delete(key);
  }

  set(key, value) {
    this._store.set(key, value);
  }

  getString(key) {
    const value = this._store.get(key);
    return typeof value === "string" ? value : undefined;
  }

  getNumber(key) {
    const value = this._store.get(key);
    return typeof value === "number" ? value : undefined;
  }

  getBoolean(key) {
    const value = this._store.get(key);
    return typeof value === "boolean" ? value : undefined;
  }

  getBuffer(key) {
    const value = this._store.get(key);
    return value instanceof ArrayBuffer ? value : undefined;
  }

  getAllKeys() {
    return Array.from(this._store.keys());
  }

  contains(key) {
    return this._store.has(key);
  }

  recrypt() {
    console.warn("Encryption is not supported in mocked MMKV instances!");
  }

  trim() {}

  get size() {
    return 0;
  }

  get isReadOnly() {
    return false;
  }
}

jest.mock("react-native-mmkv", () => ({
  __esModule: true,
  MMKV: MockMMKV,
  useMMKVStorage: () => [undefined, jest.fn()],
  useMMKVObject: () => [undefined, jest.fn()],
}));