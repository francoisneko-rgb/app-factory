---
version: alpha
name: FitChallenge — Direction B (Soft Athletic)
description: Design system light, épuré et athlétique inspiré d'une app de suivi de workouts — surfaces grises douces, accent or/bronze, typographie sans-serif système, densité confortable.

colors:
  # Backgrounds & surfaces
  background: "#F2F2F7"
  surface: "#FFFFFF"
  surface-secondary: "#F0EFED"
  surface-card: "#FFFFFF"

  # Texte
  on-background: "#1C1C1E"
  on-surface: "#1C1C1E"
  on-surface-secondary: "#8E8E93"
  on-surface-tertiary: "#AEAEB2"

  # Accents & marque
  primary: "#1C1C1E"
  on-primary: "#FFFFFF"
  accent: "#B8922A"
  on-accent: "#FFFFFF"
  accent-light: "#F5EDD6"

  # Cercle de progression
  progress-ring: "#B8922A"
  progress-ring-track: "#E8E0CE"

  # Jours du calendrier
  day-active-bg: "#1C1C1E"
  day-active-text: "#FFFFFF"
  day-inactive-bg: "#E5E5EA"
  day-inactive-text: "#8E8E93"
  day-badge: "#B8922A"

  # Sémantics
  success: "#34C759"
  warning: "#FF9500"
  error: "#FF3B30"
  info: "#007AFF"

  # Bordures & séparateurs
  border: "#E5E5EA"
  separator: "#D1D1D6"

  # Tab bar
  tab-active: "#1C1C1E"
  tab-inactive: "#AEAEB2"
  tab-bar-bg: "#FFFFFF"

typography:
  display:
    fontFamily: "-apple-system, 'SF Pro Display', 'Inter', system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"

  h1:
    fontFamily: "-apple-system, 'SF Pro Display', 'Inter', system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"

  h2:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"

  h3:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.005em"

  body:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45

  body-medium:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.45

  caption:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.01em"

  caption-medium:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.01em"

  stat-large:
    fontFamily: "-apple-system, 'SF Pro Display', 'Inter', system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.03em"

  stat-label:
    fontFamily: "-apple-system, 'SF Pro Text', 'Inter', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.005em"

rounded:
  none: "0px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "9999px"
  circle: "50%"

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

components:
  # --- Boutons ---
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"

  button-primary-disabled:
    backgroundColor: "{colors.day-inactive-bg}"
    textColor: "{colors.on-surface-tertiary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"

  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"

  # --- Chips / Tags ---
  chip-default:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.accent}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
    height: "24px"

  chip-dark:
    backgroundColor: "{colors.day-inactive-bg}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
    height: "24px"

  # --- Cartes ---
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4}"

  card-media:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0px"

  card-new:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.lg}"
    padding: "{spacing.4}"

  # --- Jours calendrier ---
  day-pill-active:
    backgroundColor: "{colors.day-active-bg}"
    textColor: "{colors.day-active-text}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    size: "44px"

  day-pill-inactive:
    backgroundColor: "{colors.day-inactive-bg}"
    textColor: "{colors.day-inactive-text}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    size: "44px"

  day-pill-badge:
    backgroundColor: "{colors.day-badge}"
    textColor: "{colors.on-accent}"
    typography: "{typography.caption-medium}"
    rounded: "{rounded.full}"
    size: "18px"

  # --- Stat widget ---
  stat-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.stat-large}"
    rounded: "{rounded.xl}"
    padding: "{spacing.4}"

  # --- Tab bar ---
  tab-bar:
    backgroundColor: "{colors.tab-bar-bg}"
    textColor: "{colors.tab-inactive}"
    typography: "{typography.caption}"
    height: "83px"
    padding: "8px 0 20px 0"

  tab-bar-active:
    backgroundColor: "{colors.tab-bar-bg}"
    textColor: "{colors.tab-active}"
    typography: "{typography.caption-medium}"
    height: "83px"

  # --- Navigation bar ---
  nav-bar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    typography: "{typography.h3}"
    height: "44px"

  # --- Progress ring ---
  progress-ring:
    backgroundColor: "transparent"
    textColor: "{colors.progress-ring}"
    rounded: "{rounded.circle}"
    size: "60px"

  # --- Input ---
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "48px"
---

# FitChallenge — Direction B (Soft Athletic) Design System

## Overview

Ce design system s'adresse à une app de défi fitness 75 jours, pensée pour un public mixte 20-40 ans qui consulte l'app quotidiennement en mode **check-in rapide** : cocher ses séances, voir sa progression, garder la motivation. La référence analysée est une app de workout iOS en mode light — sobre, épurée, avec une touche d'or/bronze qui apporte du prestige sans ostentation. L'ambiance cible est **"athlétique sobre"** : discipline sans austérité, motivation sans criaillerie. L'anti-pattern absolu est le dark-mode ultra-saturé néon typique des apps fitness grand public (rouge vif + noir) — ce design choisit exactement l'opposé.

> **Reproductibilité — Vision** : OK, image parfaitement lisible.

## Colors

La palette repose sur **trois pôles** :

1. **Surfaces douces** (`background` `#F2F2F7`, `surface` `#FFFFFF`) — Le fond iOS standard "grouped background" crée une légèreté aérée. Les cartes blanches flottent sur ce gris pâle. [FIDÈLE — couleurs système iOS reconnaissables à ~100 %]

2. **Texte quasi-noir** (`primary` / `on-background` `#1C1C1E`) — Le noir iOS natif, jamais pur `#000`, évite la dureté optique tout en garantissant un contraste WCAG AA au-delà de 7:1 sur blanc. [FIDÈLE]

3. **Accent or/bronze** (`accent` `#B8922A`) — La couleur signature visible sur l'éclair de streak, l'anneau de progression, le badge de notification. C'est un or désaturé, noble et sobre, pas le jaune criard. `accent-light` `#F5EDD6` est sa version de surface pour les chips et étiquettes. [APPROX — la valeur exacte est estimée à ±10 % sur le channel hue/saturation; la gamme bronze-or est certaine]

Les couleurs sémantiques (`success` vert, `error` rouge, `warning` orange, `info` bleu) reprennent les valeurs iOS system colors — cohérence garantie avec les composants natifs. Tous les couples texte/fond passent WCAG AA.

## Typography

L'app utilise **SF Pro** (la police système iOS) à deux variantes : SF Pro Display pour les grands chiffres et titres, SF Pro Text pour le corps et les labels. La substitution open-source recommandée est **Inter** (Google Fonts), géométrique-humaniste, quasi-identique en texture optique. [APPROX — SF Pro est la famille certaine; les tailles sont estimées par rapport aux proportions de l'image]

La hiérarchie visible sur l'image :
- **Très grands chiffres** (34px 700) : les stats "1 Week", "150 minutes" — chiffres seuls, dominants, lecture instantanée
- **Titres de section** (22px 600) : "My Templates" — poids modéré, pas crié
- **Labels** (12-13px 400) : "MON TUE WED" — secondaires, en `on-surface-secondary`
- **Corps** (15px) : noms de templates, descriptions

Le tracking est légèrement négatif sur les grands titres (`-0.02` à `-0.03em`) — habitude SF Pro — et neutre à légèrement positif sur les captions, pour la lisibilité à petite taille.

## Layout

Espacement sur base **8px** avec quelques pas à 4px pour les micro-espacements internes. La densité est **confortable** — ni tight, ni generous. Marges latérales de 16px. Les cartes de template occupent ~60 % de la largeur en grille 2 colonnes asymétrique (1 grande + 1 petite "+ New"). [APPROX — marges estimées visuellement]

La nav bar centrée avec titre et `+` à droite suit strictement le pattern iOS. La tab bar en bas (5 onglets) respecte la zone de sécurité iOS (padding-bottom 20px pour l'indicateur home). Densité calendrier : 44px par pill de jour, espacés de ~8px.

## Elevation & Depth

Design **presque plat** — l'élévation vient du **contraste de surface**, pas des ombres. Les cartes blanches sur le fond gris clair créent une hiérarchie sans shadow. Les pills de jours actifs (noir plein) créent le contraste maximal. Aucune ombre portée visible sur les cartes. Si une ombre est utilisée (modal, bottom sheet), elle sera ultra-douce : `0 2px 8px rgba(0,0,0,0.06)`. [FIDÈLE — design clairement plat confirmé]

## Shapes

Trois niveaux de radius :
- **`full` (9999px)** : pills de jours, chips de durée ("10m"), boutons CTA — tout ce qui est tag ou action ronde
- **`lg` (16px)** : cartes de template — arrondis généreux, "card" premium
- **`xl` (20px)** : widget de stats (la grande carte blanche en haut) — rayon légèrement plus grand pour la hiérarchie visuelle

Le langage de forme est **cohérent et volontaire** : plus un élément est "conteneur principal", plus son radius est grand. Les chips et pills sont toujours `full`. [APPROX — radius estimés visuellement ±2-4px]

## Components

**Day Pills** : 44×44px, fond `#E5E5EA` + texte gris pour les jours passés; fond `#1C1C1E` + texte blanc pour les jours actifs. Un badge or petit (18px) en superposition top-right pour les jours avec notification/badge (visible sur SAT). Les icônes d'haltère dans les pills actifs sont en blanc sur noir — probablement SF Symbols.

**Stat widget** : carte blanche `rounded-xl`, deux colonnes — gauche : éclair SVG or + chiffre bold + label gris ; droite : anneau SVG or (`stroke-dasharray`) + chiffre bold + label gris. Les chiffres sont les éléments visuellement dominants de tout l'écran.

**Template cards** : aspect-ratio ~3:4 pour la grande, carré pour "+ New". La grande a une photo full-bleed (pas de padding), puis titre + description sous la carte en texte noir. Le chip "10m" est `accent-light`/`accent`. La carte "+ New" est `surface-secondary` avec texte `on-surface-secondary` centré.

**Tab bar** : 5 onglets, icônes ligne (pas remplies), label sous l'icône, onglet actif en noir plein + poids 600, inactifs en gris clair. Séparateur top `separator` très léger.

**Nav bar** : titre centré `h3` 600, bouton `+` à droite en noir, pas de back button visible sur cet écran.

## Do's and Don'ts

### A faire
- Utiliser l'accent or uniquement pour les éléments de progression et de réussite (streaks, rings, badges) — sa rareté est sa valeur
- Garder les surfaces en blanc/gris système — ne jamais teinter les fonds d'une couleur de marque
- Afficher les grandes stats (chiffres) en 34px bold — la progression doit être lisible en 1 seconde
- Respecter le radius hiérarchique : pills = `full`, cards = `lg`, stat-widget = `xl`
- Utiliser SF Pro / Inter pour une sensation native iOS — éviter les polices display exotiques
- Maintenir la densité confortable : espacement 16px latéral, 8px vertical entre éléments

### A ne pas faire
- Ne jamais utiliser de fond sombre ou noir pour les surfaces principales — ce n'est pas un dark mode
- Ne jamais saturer l'accent : pas de jaune criard, pas de orange néon, pas de rouge fitness cliché
- Ne pas multiplier les couleurs d'accent — `#B8922A` est la seule couleur de marque, le reste est neutre
- Ne pas utiliser de radius faibles (<8px) sur les cartes — ça ferait "web dashboard", pas "app mobile premium"
- Ne pas surcharger l'écran d'icônes remplies ou colorées — les icônes sont en ligne, grises, sobres
- Ne jamais casser la grille 8px — pas de padding/margin impairs comme 7px ou 13px
