---
version: alpha
name: Her75
description: Design system for a 75-day fitness challenge app targeting women aged 20-40, built on an editorial monochrome aesthetic with warm off-white surfaces, soft amber task numbering, and structured serif/sans typographic contrast.

colors:
  # --- Core surfaces (from app UI screens only) ---
  background: "#FAFAF7"
  # Source: main screen background in screens 3 and 4 (challenge list, friends list) — a warm off-white, not pure white
  surface: "#FFFFFF"
  # Source: task cards and friend-row cards in screen 4 (the white card behind "Walk 10,000 steps / Read 10 pages / Workout")
  surface-elevated: "#F5F3EE"
  # Source: the slightly warmer, cream-toned background of the day-one card in screen 2, distinct from pure white

  # --- Text (from app UI screens only) ---
  on-background: "#1A1A1A"
  # Source: primary text — "75 Day Hard", task titles ("Follow a strict diet", "Do two 45-minute workouts"), friend names "Maddy", "Anna", "Blake" in screen 4; all near-black, not pure #000
  on-surface: "#1A1A1A"
  # Source: same near-black, used on card text in screens 2 and 4
  on-surface-secondary: "#7A7A7A"
  # Source: secondary/meta text — "mar 16 → april 24" date range in screen 2, "+6,256 joined" in screen 3, "11:45am" timestamps in screen 4; mid-gray
  on-surface-tertiary: "#AAAAAA"
  # Source: very subtle text — faint labels like "Day 75" under friend names in screen 4; light gray

  # --- Accent (from app UI screens only) ---
  accent: "#5B8A6F"
  # Source: the green circular checkmark badge on "Maddy" in screen 4 (the filled check circle on completed tasks); a muted forest green
  accent-star: "#4A90D9"
  # Source: the blue star icon in the top-right of screen 2 (the "official" badge button) — bright medium blue on the teal/blue card header
  header-card: "#5BB8C8"
  # Source: the top bar/header area in screen 2 ("you · 2min") — a clear teal/cyan pill background

  # --- Task number badges (from app UI screens only) ---
  badge-1: "#F5D6C0"
  # Source: numbered circle badge "1" in screen 3 beside "Follow a strict diet" — soft peach/salmon
  badge-2: "#D6E8D4"
  # Source: numbered circle badge "2" in screen 3 beside "Do two 45-minute workouts" — soft sage green
  badge-3: "#F5E8C0"
  # Source: numbered circle badge "3" in screen 3 beside "Read 10 pages of non-fiction" — soft warm amber/yellow
  badge-4: "#C0D4F5"
  # Source: numbered circle badge "4" in screen 3 beside "Take a progress picture" — soft periwinkle blue
  badge-neutral: "#E8E4DE"
  # Source: task number pills in screen 2 ("1 stric diet", "2 workouts, 1 outside") — warm light gray pill background

  # --- Challenge level chips (from app UI screen 1 only) ---
  chip-background: "#FFFFFF"
  # Source: the white rounded chip background for "✓ 75 Day Hard", "✓ 75 Medium", "✓ 75 Soft" in screen 1
  chip-text: "#1A1A1A"
  # Source: the near-black text inside those chips

  # --- Semantic states ---
  success: "#5B8A6F"
  # Source: same green as accent — the filled checkmark on completed tasks in screen 4
  error: "#D94A4A"
  # Source: inferred red for error states — not directly visible but consistent with system; using a muted red that harmonizes with the palette
  warning: "#E8B84B"
  # Source: warm amber consistent with badge-3 palette above

typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    # Source: The large serif "day one" text in screen 2 — clearly a high-contrast display serif, italic weight visible
  display-italic:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontFeature: "italic"
    # Source: "day one" in screen 2 appears in italic display serif — a deliberate editorial choice
  h1:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    # Source: "75 Day Hard" heading in screen 3 — large, bold serif
  h2:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0em"
    # Source: section sub-headers like "+6,256 joined" label in screen 3 — medium weight sans
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
    # Source: task body text — "Follow a strict diet (no cheat meals, no alcohol)", "Do two 45-minute workouts per day, one must be outside" in screen 3
  body-medium:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0em"
    # Source: task labels with slightly more emphasis, "Walk 10,000 steps", "Read 10 pages" in screen 4
  caption:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.01em"
    # Source: "mar 16 → april 24" date range, "11:45am" timestamps, "Day 75" labels — small metadata text
  caption-medium:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
    # Source: "you · 2min" text in the header pill of screen 2 — slightly bolder small text

rounded:
  none: "0px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "9999px"
  # Source evidence:
  # - Task number badges in screen 3: fully circular → full
  # - Friend row avatar circles in screen 4: fully circular → full
  # - Challenge-level chips "✓ 75 Day Hard" in screen 1: pill shape → full
  # - The "day one" card in screen 2: soft rounded corners ~12-16px → lg
  # - Task rows in screen 3: slight rounding ~8px on the badge containers → sm
  # - Main content cards in screen 4 (friend rows): ~8px rounding → sm/md

spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  10: "40px"
  12: "48px"
  # Source: Estimated from visual rhythm in screen 3 and 4.
  # Row internal padding ~16px. Gap between rows ~8-12px. Left margin of task text ~16px from badge.
  # Card padding ~16-20px horizontal. Avatar gap to text ~12px.

components:
  # Challenge level chip (screen 1)
  chip-challenge:
    backgroundColor: "{colors.chip-background}"
    textColor: "{colors.chip-text}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    # The "✓ 75 Day Hard" white pill floating over the photo grid

  # Task number badge (screen 3 — colored circles 1-4)
  badge-task:
    backgroundColor: "{colors.badge-neutral}"
    textColor: "{colors.on-background}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    size: "28px"
    # Swap backgroundColor to badge-1/2/3/4 for colored variants

  badge-task-peach:
    backgroundColor: "{colors.badge-1}"
    textColor: "{colors.on-background}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    size: "28px"

  badge-task-sage:
    backgroundColor: "{colors.badge-2}"
    textColor: "{colors.on-background}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    size: "28px"

  badge-task-amber:
    backgroundColor: "{colors.badge-3}"
    textColor: "{colors.on-background}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    size: "28px"

  badge-task-blue:
    backgroundColor: "{colors.badge-4}"
    textColor: "{colors.on-background}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    size: "28px"

  # Task row (screen 3 — challenge task list item)
  task-row:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    # Left: colored number badge. Right: task description text. Full-width row.

  # Day card (screen 2 — "day one" card with date and checklist)
  day-card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "20px"
    # Title in display-italic serif. Date in caption. Checklist items in body.

  # Friend row (screen 4 — activity feed row per friend)
  friend-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    # Left: circular avatar photo. Center: name (h2) + day (caption). Right: task checklist with green check badges.

  # Completion checkmark badge (screen 4)
  check-badge:
    backgroundColor: "{colors.success}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    size: "20px"

  # Header pill (screen 2 — "you · 2min" teal pill)
  header-pill:
    backgroundColor: "{colors.header-card}"
    textColor: "{colors.surface}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    padding: "4px 12px"

  # Navigation / primary CTA button
  button-primary:
    backgroundColor: "{colors.on-background}"
    textColor: "{colors.background}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "14px 32px"

  button-primary-disabled:
    backgroundColor: "{colors.on-surface-tertiary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
---

# Her75 Design System

## Overview

Her 75 is a 75-day fitness challenge app for women aged 20–40. The interface must feel editorial, aspirational, and intimate — like a premium wellness journal brought to life on a phone. The product sits at the intersection of accountability, community, and self-improvement. The visual identity should say "serious commitment, beautiful execution." Anti-patterns: avoid gym-bro neon/dark UI; avoid pastel bubble maximalism; avoid clinical white medical sterility.

## Colors

The palette is built on a single monochrome axis — warm off-white (#FAFAF7) as the base, near-black (#1A1A1A) as the primary text — broken only by a precisely curated set of soft pastel accents for task number badges (peach, sage green, warm amber, periwinkle). These badge colors are the only chromatic notes in the UI; they create visual rhythm without noise. The muted forest green (#5B8A6F) serves as the success/completion color — naturalistic and earned, not a loud traffic-light green. The teal header pill (#5BB8C8) and blue star (#4A90D9) in screen 2 are isolated to the "official challenge" widget context and should not leak into the main task/list UI. All text on white and off-white surfaces easily exceeds WCAG AA contrast (near-black on off-white ≈ 14:1 ratio).

## Typography

The system uses a dual-typeface strategy: a high-contrast display serif (Playfair Display or equivalent — visible in the "day one" heading of screen 2) for hero moments and screen titles, paired with a geometric humanist sans-serif (Inter or SF Pro) for all functional UI text — task names, timestamps, friend names, captions. The serif is used sparingly and always at large scale, never for body text. Its italic weight is a key expressive tool — it appears in the "day one" heading. The sans body text is set at 15px with comfortable 1.5 line-height for legibility in longer task descriptions. Caption text drops to 12px for metadata (dates, times, day count).

## Layout

The spacing scale is a clean 4px base grid. Typical row height for task items is ~48–56px. Internal card padding sits at 16–20px. The UI uses a generous single-column layout with no visible grid gutters — content flows naturally from top to bottom. Density is comfortable-to-generous: rows breathe, there is white space between sections. The number badges and avatar circles create a strong left-margin visual anchor on list screens.

## Elevation & Depth

The UI is nearly flat. Elevation is communicated by background-color contrast (surface #FFFFFF lifting slightly above background #FAFAF7) rather than shadows. No drop shadows visible on task rows or cards in screens 3 and 4. The "day one" card in screen 2 appears to have a very subtle shadow or border — if used, keep it a 1px border in a warm light gray (#E8E4DE) rather than a box-shadow. The challenge level chips in screen 1 appear to use a white fill against the photo grid — no visible shadow. Shadow = clean 0 1px 4px rgba(0,0,0,0.06) at most, as a rare elevation signal.

## Shapes

Fully circular shapes dominate the accent layer: number badges, avatar photos, completion checkmarks — all circles. The main content cards and rows use subtle rounding (8–16px), never sharp corners. The challenge-level chips are pill-shaped (border-radius: 9999px). This creates a visual grammar where circle = identity/status/count, pill = label/chip, and soft rectangle = content container. Never use sharp 0px corners on interactive elements in this system.

## Components

**Task row**: the primary repeating unit. Left-anchored colored circle badge (number 1–5 with pastel fill), followed by task description text in body weight. Full-width, ~48px tall, background matches the page. No border; rows are separated by whitespace alone.

**Day card**: the "day one" summary card (screen 2) is a cream-toned surface card with display-italic serif title, date range in caption gray, then a numbered checklist of daily tasks in body weight. Rounded corners ~12–16px.

**Friend row**: screen 4. Circular avatar (40–48px) on the left, friend name in body-medium + "Day 75" in caption below, then a horizontal stack of micro-task labels on the right ("Walk 10,000 steps", "Read 10 pages", "Workout", "Follow a strict diet") with a green check badge on completed ones. Timestamp in caption-gray below. These rows do not have visible dividers — whitespace separates them.

**Challenge chip**: white pill with near-black text + checkmark, floating over a photo mosaic in screen 1. Elevation: flat, white fill creates contrast against the photo.

**Completion check badge**: filled forest-green circle with white checkmark icon. 20px diameter. Signals task completed. Used inline in friend rows.

## Do's and Don'ts

**Do's:**
- Use the display serif at large scale (24px+) only, always for screen titles or hero moments
- Use the four pastel badge colors (peach, sage, amber, periwinkle) exclusively for task numbering — they create identity for each task position
- Keep the background warm off-white (#FAFAF7), never pure #FFFFFF — it's the thermal quality that makes the UI feel premium, not clinical
- Use circular shapes for identity elements (avatars, badges, status dots) — it's the core shape grammar of this system
- Let whitespace do the separating work between rows — no borders or dividers needed
- Use the forest green (#5B8A6F) as the one and only completion/success signal

**Don'ts:**
- Never use neon, saturated, or vibrant colors anywhere in the UI — this system is deliberately desaturated
- Never use a dark/black background for main screens — this is a light-mode-only system
- Never use the teal or blue accent colors (#5BB8C8, #4A90D9) outside the "official challenge" widget context — they are widget-specific, not system-wide accents
- Never use the display serif at body or caption sizes — it becomes illegible and loses its premium quality
- Never add heavy drop shadows or card borders — flatness is intentional and signals confidence
- Never exceed 5 task rows per screen without a "& More" collapse pattern (as shown in screen 1)
