/**
 * 75 Challenge — NativeWind theme.
 * Must stay in sync with `src/constants/theme.ts` (the single source of truth).
 * Token names are 1:1 with DESIGN.md; classes are generated as
 * `bg-surface`, `text-on-surface`, `border-border-subtle`, `bg-badge-amber`, …
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        surface: "#FFFFFF",
        "on-surface": "#0A0A0A",
        "surface-secondary": "#F7F7F5",
        "text-secondary": "#6B6B6B",
        "text-tertiary": "#A0A0A0",
        "border-subtle": "#E8E8E6",
        "badge-amber": "#F7C84A",
        "badge-sage": "#B5CCA8",
        "badge-peach": "#F0C4B0",
        "badge-lemon": "#EDE89A",
        checkmark: "#111111",
        "on-checkmark": "#FFFFFF",
        "chip-bg": "#FFFFFF",
        "chip-border": "#E0E0E0",
        "on-chip": "#0A0A0A",
        error: "#E05252",
        success: "#5BAD6B",
      },
      borderRadius: {
        badge: 12,
        photo: 8,
        card: 16,
        button: 16,
        pill: 9999,
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
        display: ["'Playfair Display'", "serif"],
      },
      fontSize: {
        h1: 24,
        h2: 18,
        body: 15,
        "body-medium": 15,
        label: 13,
        caption: 11,
        "badge-number": 13,
        script: 28,
        display: 32,
      },
    },
  },
  plugins: [],
};