---
version: alpha
name: Challenge 75
description: Design system for a 75-day fitness challenge app — fusing the structured, colorful task-ring UI of 75 Soft with the editorial white-space and serif typography of Her 75.

colors:
  # --- Backgrounds & Surfaces ---
  background: "#FFFFFF"
  surface: "#F9F9F7"
  surface-alt: "#F2F1EE"
  surface-card: "#FFFFFF"

  # --- Primary text ---
  on-background: "#111111"
  on-surface: "#1A1A1A"
  on-surface-secondary: "#6B6B6B"
  on-surface-tertiary: "#AAAAAA"

  # --- Brand accent (corail chaud, extrait de 75 Soft header) ---
  accent: "#FF6B5B"
  on-accent: "#FFFFFF"
  accent-soft: "#FFF0EE"

  # --- Category colors (anneaux 75 Soft — extraits des rings) ---
  cat-water: "#4DC8D8"       # teal / cyan
  cat-food: "#F4A24A"        # orange doré
  cat-reading: "#F0C84A"     # jaune-or
  cat-workout: "#E8507A"     # rose-framboise
  cat-water-bg: "#E8F8FA"
  cat-food-bg: "#FEF3E7"
  cat-reading-bg: "#FEFAE7"
  cat-workout-bg: "#FDEDF2"

  # --- Challenge header gradients (extraits des fonds marketing 75 Soft) ---
  gradient-coral-start: "#FF8070"
  gradient-coral-end: "#FF5A47"
  gradient-teal-start: "#5BCFDA"
  gradient-teal-end: "#2BB8C8"
  gradient-amber-start: "#F5B84C"
  gradient-amber-end: "#F09B20"
  gradient-pink-start: "#F06090"
  gradient-pink-end: "#E0407A"

  # --- Progress / completion ---
  success: "#34C759"
  on-success: "#FFFFFF"
  success-soft: "#E8F8EE"
  warning: "#FF9F0A"
  on-warning: "#FFFFFF"
  error: "#FF3B30"
  on-error: "#FFFFFF"

  # --- UI chrome ---
  border: "#E8E8E4"
  border-strong: "#C8C8C4"
  overlay: "#00000040"

  # --- Numbered rule badges (Her 75 — fond clair par numéro) ---
  badge-1: "#F5E8D8"   # beige chaud
  badge-2: "#D8EEF0"   # bleu pâle
  badge-3: "#F5D8D8"   # rose pâle
  badge-4: "#D8F0E4"   # vert pâle
  badge-5: "#E8D8F5"   # lavande pâle

typography:
  # --- Display éditorial (Her 75 style — titres marketing en serif italic) ---
  display-serif:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontFeature: "\"liga\" 1, \"kern\" 1"

  display-serif-italic:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "ital 1"

  # --- Headings in-app (75 Soft style — sans bold, net, lisible) ---
  h1:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"

  h2:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"

  h3:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.005em"

  # --- Body (Her 75 style — propre, aéré, lisible) ---
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"

  body-medium:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0em"

  # --- Small / caption ---
  caption:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.01em"

  caption-bold:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"

  # --- Numéro de jour (grand chiffre dashboard) ---
  day-number:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.03em"

  # --- Calendrier (petits numéros de cellule) ---
  calendar-cell:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "0em"

  # --- Label bouton ---
  button-label:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "0.005em"

rounded:
  none: "0px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  xxl: "28px"
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
  "20": "80px"

components:
  # --- Ring de progression (cercle de tâche, style 75 Soft) ---
  task-ring:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    size: "80px"

  task-ring-water:
    backgroundColor: "{colors.cat-water-bg}"
    textColor: "{colors.cat-water}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    size: "80px"

  task-ring-food:
    backgroundColor: "{colors.cat-food-bg}"
    textColor: "{colors.cat-food}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    size: "80px"

  task-ring-reading:
    backgroundColor: "{colors.cat-reading-bg}"
    textColor: "{colors.cat-reading}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    size: "80px"

  task-ring-workout:
    backgroundColor: "{colors.cat-workout-bg}"
    textColor: "{colors.cat-workout}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    size: "80px"

  # --- Carte de tâche (liste des règles, style Her 75) ---
  rule-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px"
    height: "64px"

  # --- Badge numéroté (Her 75 — numéros 1-5 avec fond teinté) ---
  rule-badge:
    backgroundColor: "{colors.badge-1}"
    textColor: "{colors.on-surface}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    size: "36px"

  # --- Cellule calendrier 75 jours (75 Soft) ---
  calendar-cell-default:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.calendar-cell}"
    rounded: "{rounded.sm}"
    size: "36px"

  calendar-cell-completed:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.calendar-cell}"
    rounded: "{rounded.sm}"
    size: "36px"

  calendar-cell-today:
    backgroundColor: "{colors.on-background}"
    textColor: "{colors.background}"
    typography: "{typography.calendar-cell}"
    rounded: "{rounded.sm}"
    size: "36px"

  calendar-cell-future:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface-tertiary}"
    typography: "{typography.calendar-cell}"
    rounded: "{rounded.sm}"
    size: "36px"

  # --- Bouton principal ---
  button-primary:
    backgroundColor: "{colors.on-background}"
    textColor: "{colors.background}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
    height: "52px"

  button-primary-pressed:
    backgroundColor: "#333333"
    textColor: "{colors.background}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
    height: "52px"

  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
    height: "52px"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
    height: "52px"

  # --- Chip de difficulté (75 Hard / Medium / Soft) ---
  chip-difficulty:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    height: "28px"

  chip-difficulty-active:
    backgroundColor: "{colors.on-background}"
    textColor: "{colors.background}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    height: "28px"

  # --- Header de défi (fond coloré avec titre en blanc) ---
  challenge-header:
    backgroundColor: "{colors.gradient-coral-start}"
    textColor: "{colors.background}"
    typography: "{typography.h2}"
    rounded: "{rounded.xxl}"
    padding: "24px"

  # --- Card de progression (surface blanche, légère ombre) ---
  progress-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "20px"

  # --- Tag "COMPLETED" (style 75 Soft — fond vert) ---
  tag-completed:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    height: "24px"

  # --- Avatar social (Her 75 — cercle avec photo) ---
  avatar-sm:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    size: "36px"

  avatar-lg:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    size: "56px"

  # --- Bottom nav bar ---
  nav-bar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: "83px"
---

# Challenge 75 Design System

## Overview

Challenge 75 est une application de défi fitness sur 75 jours, destinée à un public mixte de 20 à 40 ans pratiquant un suivi quotidien de règles d'hygiène de vie. L'expérience émotionnelle visée est : **motivant, éditorial, rigoureux** — une app qui ressemble à un carnet de transformation personnelle premium, pas à un tracker générique. Le système fusionne deux esthétiques réelles et éprouvées : la structure colorée et les anneaux de progression de 75 Soft, et le raffinement éditorial blanc, les typographies serif italic et la respiration généreuse de Her 75. Anti-patterns absolus : jamais d'interface surchargée façon dashboard analytics, jamais de fond sombre par défaut, jamais de typographie sans-serif générique seule sans contrepoint serif pour les moments éditoriaux.

## Colors

La palette repose sur un **fond blanc pur (#FFFFFF) et une surface légèrement chaude (#F9F9F7)** hérités de Her 75 — ce blanc dominant crée la respiration éditoriale et fait ressortir les couleurs de catégorie. Les quatre couleurs de catégorie sont extraites des anneaux de progression de 75 Soft : **teal (#4DC8D8)** pour l'eau, **orange doré (#F4A24A)** pour l'alimentation, **jaune-or (#F0C84A)** pour la lecture, **rose-framboise (#E8507A)** pour l'entraînement. Chaque catégorie possède aussi un fond pâle (ex. `cat-water-bg: #E8F8FA`) pour les états de fond des rings ou cartes — ces teintes à ~10% de saturation assurent la lisibilité sans agresser. L'accent principal est un **corail chaud (#FF6B5B)** dérivé des headers marketing de 75 Soft, utilisé pour les CTA et les indicateurs de progression primaires. Les boutons principaux utilisent le noir pur (#111111) sur blanc, héritage direct de Her 75, qui renforce l'aspect éditorial et premium. Tous les couples texte/fond respectent le contraste WCAG AA (ratio ≥ 4.5:1 pour le body text).

## Typography

Deux familles en dialogue permanent, hérité du style de Her 75 : **Playfair Display** (ou Georgia en fallback) pour les titres éditoriaux, utilisé en italic bold pour les moments de mise en scène (en-têtes de sections marketing, citations de motivation, titres de challenge) ; **Inter** (ou SF Pro en fallback système iOS) pour toute l'interface fonctionnelle — navigation, labels, chiffres de progression, corps de règles. Ce duo serif/sans-serif n'est pas ornemental : il crée une hiérarchie émotionnelle claire — le serif italic dit "transformation, aspiration" ; le sans-serif dit "aujourd'hui, action concrète". Le type scale couvre 8 niveaux : `display-serif-italic` (40px/700 italic) → `h1` (28px/700) → `h2` (22px/700) → `h3` (17px/600) → `body` (15px/400) → `caption` (12px/400). Le `day-number` (64px/800) est un token spécial pour l'affichage du numéro de jour courant sur le dashboard — chiffre héroïque, très présent. Le `calendar-cell` (13px/500) est dimensionné pour tenir dans une grille 75 cellules sur ~320px de large.

## Layout

Le spacing suit une **base 4px**, avec les paliers 4/8/12/16/20/24/32/40/48/64/80 — identique au rythme visible dans les deux apps analysées. La densité est **comfortable** : les cartes de règles ont 16px de padding interne, les sections sont séparées par 24-32px, les anneaux de tâche ont des gaps de 16px entre eux. Largeur de référence : 390px (iPhone 15 Pro). La grille du calendrier 75 jours utilise 10 colonnes × 8 lignes, cellules de 36px avec gap de 4px — ces valeurs sont directement mesurées depuis l'écran "Day 49" de 75 Soft où le calendrier complet est visible. Les contenus mobiles ont un padding horizontal de 20px (left/right safe area). Le bottom nav bar est à hauteur fixe 83px (safe area iOS incluse).

## Elevation & Depth

Le système suit une **philosophie presque plate**, fidèle aux deux références. Her 75 est entièrement flat : zéro ombre, séparation par couleur de fond et whitespace. 75 Soft utilise des ombres très douces sur les cards de tâche flottantes. La règle : les cartes de tâche (`progress-card`) reçoivent `box-shadow: 0 2px 8px rgba(0,0,0,0.06)` — suffisant pour indiquer la superposition sans surcharger. Les headers de challenge (fonds colorés) ont `border-radius: 28px` et aucune ombre, leur fond coloré suffit à les détacher. Les modales et drawers utilisent `overlay: rgba(0,0,0,0.25)`. Les chips, badges et cellules calendrier sont strictement plates. Aucun effet de profondeur via dégradés simulant une 3D.

## Shapes

Le système utilise une **philosophie de rayon variable par composant**, directement extraite des apps référence : les boutons principaux et chips de difficulté sont **fully rounded** (`border-radius: 9999px`) — signal de modernité et de légèreté inspiré de Her 75. Les cartes de tâche et cards de progression utilisent `border-radius: 16-20px` (xl) — arrondi généreux qui donne un caractère "soft" cohérent avec le nom de l'app. Les cellules du calendrier sont à `border-radius: 8px` (sm) — arrondi léger mais présent, évite le look trop rigide d'une grille carrée. Les badges de règles numérotés (style Her 75) utilisent `border-radius: 12px` (md). Règle générale : plus un élément est petit et interactif, plus son rayon tend vers le full ; plus un élément est un conteneur de contenu, plus le rayon est modéré.

## Components

**Task rings** : 4 variants par catégorie (water/food/reading/workout), chacun avec fond pâle de sa couleur et stroke coloré en SVG circulaire. Taille 80px. Le label de progression (ex. "3/3") est centré en `caption-bold`. État completed : stroke 100%, icône checkmark au centre.

**Rule cards** (style Her 75) : fond blanc, hauteur 64px, badge numéroté à gauche (fond teinté selon position, `badge-1` à `badge-5`), texte en `body` à droite, chevron ou checkbox à l'extrême droite. `border-radius: 16px`, légère ombre `0 2px 8px rgba(0,0,0,0.06)`.

**Calendrier 75 jours** : grille 10×8 de cellules `calendar-cell` (36px, `border-radius: 8px`). Quatre états : `default` (fond surface-alt, texte secondaire), `completed` (fond accent corail, texte blanc), `today` (fond noir, texte blanc), `future` (fond surface-alt, texte tertiary). Les cellules completées créent un pattern visuel de progression — motivant au coup d'œil.

**Challenge header** : bloc à fond coloré plein (un des 4 gradients de catégorie), texte du titre en `h2` blanc, sous-titre en `body` blanc à 80% d'opacité. `border-radius: 28px`. Dimensions : pleine largeur, hauteur variable ~160-200px.

**Boutons** : `button-primary` (noir/blanc, fully rounded) pour les CTA principaux type "Commencer le défi" — directement extrait de Her 75. `button-accent` (corail/blanc) pour les actions dans contexte de défi actif. `button-ghost` (transparent/texte) pour les actions secondaires.

**Chips de difficulté** : 3 variantes (Hard/Medium/Soft), `fully rounded`, style pill. Inactif : fond surface-alt, texte secondaire. Actif : fond noir, texte blanc. Gap entre chips : 8px.

**Navigation bar** : 5 icônes SF Symbols (home, friends, calendar, photo, settings), fond blanc, séparation par bordure top `1px solid border`, hauteur 83px.

## Do's and Don'ts

**Do:**
- Utiliser le serif italic (Playfair Display) pour tous les titres de section éditoriale et les écrans de bienvenue — c'est la signature de Her 75 qui crée l'aspiration.
- Utiliser les 4 couleurs de catégorie de manière cohérente et exclusive : teal = eau, orange = alimentation, jaune = lecture, rose = entraînement. Jamais de variation ad hoc.
- Laisser respirer : minimum 24px entre les sections, 20px de padding horizontal sur les écrans. Le whitespace est de l'information.
- Utiliser le noir pur (#111111) pour les boutons principaux sur fond blanc — l'élégance éditoriale de Her 75 vient de ce contraste maximal simple.
- Afficher les 75 jours du calendrier entiers et visibles d'un seul écran ou scroll minimal — la vue globale est la principale récompense visuelle.
- Conserver les fonds de cards blancs sur fond surface légèrement teinté — la différence subtile de fond crée la séparation sans border ni ombre lourde.

**Don't:**
- Ne jamais mettre de fond sombre (dark mode) par défaut — les deux apps référence sont exclusivement light, et le fond blanc est structurel à l'esthétique éditoriale.
- Ne jamais mélanger les couleurs de catégorie : pas d'eau en orange, pas d'entraînement en teal — la cohérence sémantique des couleurs est le système de navigation implicite.
- Ne jamais utiliser le serif italic pour les labels fonctionnels (boutons, champs, navigation) — le serif est réservé aux moments éditoriaux ; tout ce qui est "actionnable" reste en sans-serif.
- Ne jamais ajouter plus de 4 rings de catégorie sur le dashboard — au-delà, la densité brise le rythme aéré hérité de Her 75.
- Ne jamais utiliser des ombres lourdes (elevation 4+) — le système est quasi-flat, les ombres fortes détruisent l'aspect éditorial.
- Ne jamais afficher les numéros de règle en texte brut — ils doivent toujours être dans un badge de couleur (`badge-1` à `badge-5`) pour créer le rythme visuel Her 75.
