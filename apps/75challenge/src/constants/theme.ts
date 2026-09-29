/**
 * 75 Challenge — design tokens (source of truth).
 *
 * Translated from `design/DESIGN.md`: §2 colors, §3 typography, §4 spacing
 * (base-4), §5 elevation, §6 radius.
 *
 * RULE: zero hardcoded color / radius / typography / spacing value in screens.
 * Consume these tokens directly, or the NativeWind classes generated from
 * `tailwind.config.js` (which MUST stay in sync with this file).
 */

// ---------------------------------------------------------------------------
// Colors (DESIGN.md §2)
// ---------------------------------------------------------------------------
export const Colors = {
  /** Background AND card surface — the app breathes on pure white. */
  surface: "#FFFFFF",
  /** Primary text + primary CTA fill (solid black is the only call-to-action color). */
  "on-surface": "#0A0A0A",
  /** Secondary surface for buffer zones / neutral badges (badges 5+). */
  "surface-secondary": "#F7F7F5",
  /** Secondary text: labels, counters. */
  "text-secondary": "#6B6B6B",
  /** Tertiary text: captions, dates. */
  "text-tertiary": "#A0A0A0",
  /** 1px hairlines / subtle borders. */
  "border-subtle": "#E8E8E6",
  /** Task badge #1. */
  "badge-amber": "#F7C84A",
  /** Task badge #2. */
  "badge-sage": "#B5CCA8",
  /** Task badge #3. */
  "badge-peach": "#F0C4B0",
  /** Task badge #4. */
  "badge-lemon": "#EDE89A",
  /** Filled check circle ("done"). */
  checkmark: "#111111",
  /** Check glyph on the filled check circle. */
  "on-checkmark": "#FFFFFF",
  /** Challenge chip background. */
  "chip-bg": "#FFFFFF",
  /** Challenge chip border. */
  "chip-border": "#E0E0E0",
  /** Challenge chip label. */
  "on-chip": "#0A0A0A",
  /** Error / destructive. */
  error: "#E05252",
  /** Discreet positive states only (success, small ★ badge). Never a CTA fill. */
  success: "#5BAD6B",
} as const;

export type ColorToken = keyof typeof Colors;

// ---------------------------------------------------------------------------
// Typography (DESIGN.md §3)
// ---------------------------------------------------------------------------
export const Fonts = {
  /** 100% of functional text. */
  sans: "Inter",
  /** Emotional markers ONLY — the "day N" journal entry. Never body text. */
  script: "Caveat",
  /** Store / marketing screens only — NEVER inside the app. */
  display: "Playfair Display",
} as const;

export type FontToken = keyof typeof Fonts;

type TypeStyle = {
  family: string;
  size: number;
  weight: "400" | "500" | "600" | "700";
  lineHeight: number;
  /** Em-derived letter spacing (e.g. -0.02em × 24px = -0.48). */
  letterSpacing: number;
};

export const Typography: Record<string, TypeStyle> = {
  /** Store/marketing headlines only. */
  display: {
    family: Fonts.display,
    size: 32,
    weight: "700",
    lineHeight: 40,
    letterSpacing: 0,
  },
  /** "day N" script marker. */
  script: {
    family: Fonts.script,
    size: 28,
    weight: "600",
    lineHeight: 36,
    letterSpacing: 0,
  },
  /** Screen titles. */
  h1: {
    family: Fonts.sans,
    size: 24,
    weight: "700",
    lineHeight: 32,
    letterSpacing: -0.48,
  },
  /** Section titles / subtitles. */
  h2: {
    family: Fonts.sans,
    size: 18,
    weight: "600",
    lineHeight: 24,
    letterSpacing: -0.18,
  },
  /** 100% of functional text. */
  body: {
    family: Fonts.sans,
    size: 15,
    weight: "400",
    lineHeight: 22,
    letterSpacing: 0,
  },
  /** Slightly reinforced lines. */
  "body-medium": {
    family: Fonts.sans,
    size: 15,
    weight: "500",
    lineHeight: 22,
    letterSpacing: 0,
  },
  /** Labels, challenge bullets. */
  label: {
    family: Fonts.sans,
    size: 13,
    weight: "500",
    lineHeight: 18,
    letterSpacing: 0,
  },
  /** Captions, counters, dates. */
  caption: {
    family: Fonts.sans,
    size: 11,
    weight: "400",
    lineHeight: 16,
    letterSpacing: 0.11,
  },
  /** Task badge numbers. */
  "badge-number": {
    family: Fonts.sans,
    size: 13,
    weight: "700",
    lineHeight: 18,
    letterSpacing: 0,
  },
} as const;

// ---------------------------------------------------------------------------
// Spacing (DESIGN.md §4 — base-4 rhythm)
// ---------------------------------------------------------------------------
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  "6xl": 64,
  /** Page horizontal gutter. */
  gutter: 16,
  /** Task row / card horizontal padding. */
  rowPaddingX: 16,
  /** Task row vertical padding. */
  rowPaddingY: 12,
  /** Section header top/bottom. */
  sectionHeader: 16,
  /** Comfortable task row height (56–64px). */
  taskRowHeight: 60,
} as const;

export type SpacingToken = keyof typeof Spacing;

// ---------------------------------------------------------------------------
// Radius (DESIGN.md §6 — graduated by component class)
// ---------------------------------------------------------------------------
export const Radius = {
  /** Task badges (numbered). */
  badge: 12,
  /** Photo grids (progress pic). */
  photo: 8,
  /** Floating cards. */
  card: 16,
  /** Primary / secondary buttons. */
  button: 16,
  /** Challenge selection chips + checkmark circle. NEVER for primary CTAs. */
  pill: 9999,
} as const;

export type RadiusToken = keyof typeof Radius;

// ---------------------------------------------------------------------------
// Elevation (DESIGN.md §5 — soft shadows are the ONLY depth signal)
// ---------------------------------------------------------------------------
export const Shadows = {
  /** Floating challenge chips. */
  chip: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  /** Cards. */
  card: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  /** Day recap card. */
  dayCard: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
} as const;