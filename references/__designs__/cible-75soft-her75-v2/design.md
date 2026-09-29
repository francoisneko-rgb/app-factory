---
version: alpha
name: Her75
description: Design system for a 75-day fitness challenge app targeting women aged 20–40, light mode, editorial-minimal aesthetic with pastel task badges and an organic script accent.

colors:
  surface: "#FFFFFF"
  on-surface: "#0A0A0A"
  surface-secondary: "#F7F7F5"
  text-secondary: "#6B6B6B"
  text-tertiary: "#A0A0A0"
  border-subtle: "#E8E8E6"
  story-bg: "#C8DCF0"
  card: "#FFFFFF"
  badge-amber: "#F7C84A"
  badge-sage: "#B5CCA8"
  badge-peach: "#F0C4B0"
  badge-lemon: "#EDE89A"
  accent-green: "#5BAD6B"
  checkmark: "#111111"
  on-checkmark: "#FFFFFF"
  chip-bg: "#FFFFFF"
  chip-border: "#E0E0E0"
  on-chip: "#0A0A0A"
  error: "#E05252"
  success: "#5BAD6B"

typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontFeature: "ss01"
  display-italic:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "ital 1"
  script:
    fontFamily: "'Caveat', 'Pacifico', cursive"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0em"
  h1:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body-medium:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
  caption:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.01em"
  badge-number:
    fontFamily: "'Inter', -apple-system, Helvetica, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0em"

rounded:
  none: "0px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "9999px"

spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"

components:
  chip-challenge:
    backgroundColor: "{colors.chip-bg}"
    textColor: "{colors.on-chip}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    height: "32px"
    border: "1px solid {colors.chip-border}"
    shadow: "0 1px 3px rgba(0,0,0,0.08)"

  task-badge:
    backgroundColor: "{colors.badge-amber}"
    textColor: "{colors.on-surface}"
    typography: "{typography.badge-number}"
    rounded: "{rounded.md}"
    size: "30px"

  task-badge-1:
    backgroundColor: "{colors.badge-amber}"
    textColor: "{colors.on-surface}"
    typography: "{typography.badge-number}"
    rounded: "{rounded.md}"
    size: "30px"

  task-badge-2:
    backgroundColor: "{colors.badge-sage}"
    textColor: "{colors.on-surface}"
    typography: "{typography.badge-number}"
    rounded: "{rounded.md}"
    size: "30px"

  task-badge-3:
    backgroundColor: "{colors.badge-peach}"
    textColor: "{colors.on-surface}"
    typography: "{typography.badge-number}"
    rounded: "{rounded.md}"
    size: "30px"

  task-badge-4:
    backgroundColor: "{colors.badge-lemon}"
    textColor: "{colors.on-surface}"
    typography: "{typography.badge-number}"
    rounded: "{rounded.md}"
    size: "30px"

  task-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    border-bottom: "1px solid {colors.border-subtle}"

  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px"
    shadow: "0 2px 12px rgba(0,0,0,0.10)"

  day-card-story:
    backgroundColor: "{colors.card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "20px"
    shadow: "0 4px 16px rgba(0,0,0,0.12)"

  avatar-circle:
    backgroundColor: "{colors.surface-secondary}"
    rounded: "{rounded.full}"
    size: "44px"

  checkmark-done:
    backgroundColor: "{colors.checkmark}"
    textColor: "{colors.on-checkmark}"
    rounded: "{rounded.full}"
    size: "28px"

  checkmark-done-hover:
    backgroundColor: "{colors.text-secondary}"
    textColor: "{colors.on-checkmark}"
    rounded: "{rounded.full}"
    size: "28px"

  star-badge:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.on-checkmark}"
    rounded: "{rounded.full}"
    size: "20px"
    typography: "{typography.caption}"

  story-screen-bg:
    backgroundColor: "{colors.story-bg}"

  photo-grid-row:
    rounded: "{rounded.sm}"
    height: "80px"

  section-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.h1}"
    padding: "16px 16px 8px 16px"

  friend-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    border-bottom: "1px solid {colors.border-subtle}"
---

# Her75 Design System

## Overview

Her75 is a 75-day fitness challenge tracker for women aged 20–40 who take accountability seriously and share their journey socially. The interface is editorial-minimal: nearly everything lives on white surfaces with black text, relieved by four warm pastel badge colors that bring life and legibility to numbered task lists. The script typeface on key moments ("day one") adds an intimate, journaling tone. Two anti-patterns to avoid at all costs: heavy dark gradients or neon colors (this is not a gym app for men), and over-complicating the task list with decorative clutter (the clarity of the list is its strength).

## Colors

The palette is deliberately restrained. White (`#FFFFFF`) is both the screen background and the card surface — there is no second gray tier for most screens; the app breathes on white. Black (`#0A0A0A`) handles all primary text. Secondary text (`#6B6B6B`) serves labels, counters, and "Day 75" subtitles.

The four pastel badge colors are the only real chromatic payload in the UI: amber (`#F7C84A`), sage green (`#B5CCA8`), peach (`#F0C4B0`), and lemon (`#EDE89A`). These colors are directly observed on the numbered task badges in the "Follow your routine" screen. They are muted, earthy pastels — not saturated primaries. They must never be replaced with vibrant or neon equivalents.

`story-bg` (`#C8DCF0`) is a blue-sky pale, visible only as the background of the social "day one" story card. It is not a brand color — it reads as a feed/story context color, differentiating the social layer from the personal task layer.

`accent-green` (`#5BAD6B`) is used sparingly: the ★ star badge in the story view only. It signals a positive/active state. At WCAG AA on white it passes for large text; use it only on small badges with sufficient contrast margin.

The chip/pill components (challenge selector: "✓ 75 Soft" etc.) are white-on-white with a subtle gray border (`#E0E0E0`) and a faint drop shadow — they float against the photo collage rows below.

## Typography

Two families coexist: a serif display for marketing-layer headers, and a clean sans-serif for all in-app functional text, with one script accent for key emotional moments.

**Playfair Display** (or equivalent high-contrast transitional serif) handles marketing/store screenshot titles ("Start *your* challenge"). Inside the app itself, Playfair is not visible — it is a store-presence font. The mixed roman + italic within the same headline is characteristic of Playfair Display's editorial use.

**Caveat** (or equivalent brush-script Google Font) is what "day one" appears to be — a casual handwritten script. It signals a personal journaling entry, not a system label. Use it only for this type of "day N" moment title, never for task text.

**Inter** (or system sans-serif) handles 100% of functional UI: section titles like "75 Day Hard", task text, friend names, badges, labels, captions. It is set at regular weight for body copy and bold/semibold for section headers. Letter-spacing is slightly tight on headers (`-0.02em`) for a modern editorial feel.

## Layout

The spacing scale is base-4. The primary content rhythm is `16px` horizontal padding on list rows and cards, `12px` vertical padding per row. Section headers use `16px` padding top/bottom. The overall density is **comfortable** — not tight, not generous. Each task row is approximately 56–64px tall (12px padding × 2 + ~15px line-height text + some breathing room). The photo collage grid rows are approximately 80px tall.

No explicit grid is observed; the layout is single-column, full-bleed list with `16px` side gutters. Cards use `rounded.lg` (16px) and sit inset within the screen flow. There is no visible horizontal scrolling or multi-column grid in any of the app screens.

## Elevation & Depth

Elevation is minimal and purposeful:

- **Flat layer** (task rows, friend rows): no shadow, separated only by `1px` `border-subtle` divider lines.
- **Floating chips** (challenge selector pills): very light shadow `0 1px 3px rgba(0,0,0,0.08)` + `1px` border. They hover above the photo grid below.
- **Cards** (day-card, standard card): soft shadow `0 2px 12px rgba(0,0,0,0.10)`. No hard borders.
- **Story overlay card** (day one card): slightly stronger shadow `0 4px 16px rgba(0,0,0,0.12)` to lift it off the blue-sky story background.

The system avoids multi-layer stacking. Dark mode is not used; all depth relies on white vs. near-white surfaces and gentle shadow.

## Shapes

Corner radius philosophy is **graduated by component class**:

- **Pill/full-round** (`9999px`): challenge selector chips only. Their full roundness signals an optional/selectable tag, not a primary action.
- **Card round** (`16px`): floating cards (day-one card, standard info cards). Large radius reads as friendly, non-threatening.
- **Badge round** (`12px`): numbered task badges. Slightly softer than a square, clearly distinct from the pills.
- **Photo rows** (`8px`): subtle rounding on collage image rows, barely noticeable — just softens hard photo edges.
- **Avatar** (`9999px`): user profile images are always circular, standard for social context.
- **Checkmark button** (`9999px`): the completion circle is fully round, a strong visual anchor for "done."

Sharp corners (`0px`) are never used; the brand is approachable, not corporate.

## Components

**chip-challenge** — the "✓ 75 Soft" selector pills. White background, full-radius pill, 1px gray border, faint drop shadow. Label font (13px/500). Checkmark `✓` prefix is part of the text label, not a separate icon component. They sit centered over their respective photo-grid row.

**task-badge-1/2/3/4** — numbered badges on task rows. Fixed 30px × 30px square with `rounded.md` (12px). Each has a distinct pastel fill: amber → sage → peach → lemon in task order 1→2→3→4. Number is 13px/700 centered. Background color is the only differentiator between badges — shape, size, and typography are identical.

**task-row** — full-width row with 16px horizontal padding, 12px vertical, 1px bottom border. Left: task-badge. Right: body text (15px/400). No chevron or secondary action visible.

**checkmark-done** — 28px circle, filled `#111111`, with a white ✓ inside. Used on the friends list to indicate a completed task. This is a "display state" icon, not an interactive button in the friends view.

**day-card-story** — white card (rounded 16px, shadow) floating over `story-bg`. Contains script-font title ("day one"), date range in label font, numbered task list in body font. Appears in the social/story feed layer.

**friend-row** — similar structure to task-row but with: circular avatar left, name + "Day N" stacked text center, and a column of mini task checkmarks right. Rows are separated by 1px dividers, no card wrapping.

**avatar-circle** — 44px circular image container. No border visible, no ring. Used in friend rows and story view.

**star-badge** — 20px green circle with a ★ symbol. Appears in the story view to mark an "active" or "starred" entry. Accent green fill.

## Do's and Don'ts

**Do's:**
- Keep the background pure white on all task and tracking screens — the pastels are in the badges, not the background
- Use the four pastel badge colors in their fixed task-order sequence (amber → sage → peach → lemon)
- Use the script font only for emotional/personal moment titles (day markers, journey milestones)
- Keep task rows clean: badge + text, 1px divider, nothing else
- Use full-radius pills only for challenge-selector type chips, never for primary action buttons
- Maintain the soft shadow on floating cards — it is the only depth signal

**Don'ts:**
- Never use dark backgrounds, gradients, or neon accent colors — this is not a male-coded gym app
- Never make the pastel badges saturated or high-contrast — they must remain muted and calm
- Never mix the script font with body text — Caveat is a display-only accent
- Never add borders to task rows (use dividers only, not full card borders around each row)
- Never center-align task text — all list content is left-aligned
- Never use more than four badge colors — the system has exactly four task slots and four pastels
