/**
 * Design tokens — SOURCE DE VÉRITÉ visuelle de la factory.
 * Le designer remplit ce fichier par app. Les agents utilisent les
 * classes NativeWind correspondantes (voir tailwind.config.js, qui doit
 * rester en phase avec ces tokens).
 *
 * Règle : ZÉRO valeur de couleur/espacement/rayon/typographie en dur dans
 * les écrans. Tout passe par ces tokens ou par les classes Tailwind.
 */
import { Platform } from "react-native";

export const Colors = {
  light: {
    brand: "#208AEF",
    brandForeground: "#FFFFFF",
    background: "#FFFFFF",
    surface: "#F0F0F3",
    surfaceSelected: "#E0E1E6",
    content: "#000000",
    contentSecondary: "#60646C",
    border: "#E5E7EB",
  },
  dark: {
    brand: "#4AA8FF",
    brandForeground: "#FFFFFF",
    background: "#000000",
    surface: "#212225",
    surfaceSelected: "#2E3135",
    content: "#FFFFFF",
    contentSecondary: "#B0B4BA",
    border: "#3A3D42",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 64,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 9999,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Typography = {
  title: { size: 28, weight: "700" as const, lineHeight: 34 },
  heading: { size: 22, weight: "600" as const, lineHeight: 28 },
  body: { size: 16, weight: "400" as const, lineHeight: 22 },
  bodySemibold: { size: 16, weight: "600" as const, lineHeight: 22 },
  caption: { size: 13, weight: "400" as const, lineHeight: 18 },
  label: { size: 15, weight: "600" as const, lineHeight: 20 },
} as const;

export const MaxContentWidth = 800;