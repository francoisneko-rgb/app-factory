---
version: alpha
name: BuilderOS Challenge
description: Design system chaleureux et motivant pour une app de challenge fitness 75 jours, ciblant un public mixte 20-40 ans en mode light.

colors:
  primary: "#FF6B35"
  on-primary: "#FFFFFF"
  primary-soft: "#FFF0EB"
  accent: "#E8354A"
  on-accent: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#1A1A1A"
  surface-raised: "#FAF9F7"
  surface-card: "#FFFFFF"
  on-surface-secondary: "#6B6B6B"
  on-surface-tertiary: "#A0A0A0"
  border: "#EBEBEB"
  border-strong: "#D0D0D0"
  task-water: "#4EACD8"
  task-food: "#F5A623"
  task-reading: "#9B6B3A"
  task-workout: "#E8354A"
  task-photo: "#9B59B6"
  success: "#2ECC71"
  on-success: "#FFFFFF"
  warning: "#F5A623"
  on-warning: "#FFFFFF"
  error: "#E8354A"
  on-error: "#FFFFFF"
  info: "#4EACD8"
  on-info: "#FFFFFF"
  overlay: "rgba(0,0,0,0.40)"

typography:
  display:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.03em
  h1:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  h3:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.005em
  body:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  body-medium:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
  caption:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.01em
  label:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.06em
    fontFeature: "tnum"
  day-counter:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -0.04em

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 28px
  full: 999px

spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    height: 52px
  button-primary-pressed:
    backgroundColor: "#E55A25"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    height: 52px
  button-primary-disabled:
    backgroundColor: "{colors.border}"
    textColor: "{colors.on-surface-tertiary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
    height: 52px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "13px 28px"
    height: 52px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.full}"
    padding: "13px 28px"
    height: 52px
  card-task:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "16px"
  card-task-completed:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "16px"
  card-stat:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.h3}"
    rounded: "{rounded.xl}"
    padding: "20px"
  chip-default:
    backgroundColor: "{colors.border}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    height: 30px
  chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    height: 30px
  progress-ring:
    backgroundColor: "{colors.border}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 80px
  progress-bar-track:
    backgroundColor: "{colors.border}"
    rounded: "{rounded.full}"
    height: 6px
  progress-bar-fill:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: 6px
  day-badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "4px 10px"
    height: 28px
  nav-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-tertiary}"
    typography: "{typography.caption}"
    height: 56px
  nav-tab-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    height: 56px
  input-field:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
    height: 52px
  calendar-cell-default:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    size: 36px
  calendar-cell-today:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    size: 36px
  calendar-cell-completed:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    size: 36px
  calendar-cell-failed:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    size: 36px
  toast-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
  toast-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
  section-header:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.h2}"
    padding: "0px 0px 8px 0px"
  avatar:
    backgroundColor: "{colors.border}"
    rounded: "{rounded.full}"
    size: 44px
---

# BuilderOS Challenge Design System

## Overview

BuilderOS Challenge est le design system d'une application de défi fitness 75 jours, destinée à un public mixte de 20-40 ans qui veut se transformer physiquement et mentalement. Le système doit inspirer l'action immédiate tout en rassurant sur la durée — chaleureux mais sérieux, motivant sans être agressif. Le danger à éviter absolument : devenir une app de tracking froid et clinique (comme les apps de sport génériques) ou, à l'opposé, trop "pastel kawaii" (comme les mauvais trackers d'habitudes). La direction choisie est **orange chaleureux + structure épurée** — inspirée de "75 Soft" (chaleur, lisibilité, cercles de progression) en gardant la rigueur de "BeHard" (hiérarchie forte, cartes d'action claires) et la clarté éditoriale de "Her 75" (typographie percutante, espaces respirants). On choisit un fond blanc avec des accents orange vif : c'est la direction la plus universelle, la plus lisible, et la plus susceptible de bien vieillir dans les stores.

## Colors

La palette tourne autour d'un **orange primaire (#FF6B35)** — ni trop agressif, ni trop pêche, il évoque l'effort, l'énergie matinale, la transformation. Il fonctionne aussi bien sur fond blanc qu'en teinte douce (`primary-soft #FFF0EB`) pour les états complétés ou les fonds de cartes. L'**accent rouge-framboise (#E8354A)** est réservé aux alertes et aux éléments de tension dramatique (streak en danger, tâche critique). Le fond est blanc pur (`#FFFFFF`) avec des surfaces légèrement écrantées (`#FAF9F7`) pour créer de la profondeur sans ombre. Les couleurs de tâches (bleu eau, orange nourriture, marron lecture, rouge entraînement, violet photo) permettent une identification instantanée des catégories de règles — évitant les labels en mode dense. Tous les pairs texte/fond respectent le WCAG AA (ratio ≥ 4.5:1) : `on-surface #1A1A1A` sur `surface #FFFFFF` donne 19:1.

## Typography

Inter est choisi pour sa lisibilité parfaite en petite taille sur mobile, sa géométrie neutre qui laisse le contenu parler, et sa disponibilité cross-platform via Google Fonts. La hiérarchie est volontairement marquée : le **day-counter** (72px, 800, -0.04em) est le moment de fierté central dans le dashboard — le chiffre du jour doit frapper au premier regard. Le **display** (40px, 800) sert aux titres de section marketing ou d'onboarding. Les **h1/h2/h3** descendent régulièrement avec un tracking négatif qui maintient la cohérence compacte. Le `label` utilise `tnum` (chiffres tabulaires) pour aligner les compteurs dans les listes de tâches. On évite tout serif dans l'UI — Her 75 utilise du serif pour son identité éditoriale, mais en app de suivi quotidien, le serif ralentit la lecture.

## Layout

Grille mobile 390px, marges horizontales de 20px (`spacing.5`), gouttières de 12px (`spacing.3`). Densité : **confortable** — inspiré de "75 Soft" dont les cartes de tâches sont généreuses et faciles à toucher (48px+ de hauteur de zone tactile). Le rythme de base est à 4px (spacing.1) ; les sauts principaux à 16px, 24px, 32px. Section headers ont 24px au-dessus, 12px en dessous. Les listes de tâches utilisent 12px entre les items. La tab bar fait 56px de hauteur (standard iOS safe area). Jamais de layout à deux colonnes sur les écrans d'action (dashboard, checklist) — une seule colonne avec des cartes full-width garantit les zones tactiles et la lisibilité.

## Elevation & Depth

Système d'élévation minimal à **deux niveaux** : flat (surface blanche, pas d'ombre) et raised (surface `#FAF9F7` + ombre douce `0 2px 8px rgba(0,0,0,0.06)`). Les modaux et bottom sheets utilisent `0 -4px 24px rgba(0,0,0,0.12)`. Pas d'ombre portée forte (style "neumorphism" ou cartes avec ombre épaisse) — ça vieillit mal et pollue la lecture sur petits écrans. La séparation entre niveaux se fait principalement par le contraste de fond (blanc vs off-white), pas par des ombres.

## Shapes

Philosophie **ronde et cohérente** : les boutons CTA sont entièrement ronds (`rounded.full`) pour une qualité "haptic" satisfaisante. Les cartes de tâches et les cartes de stat utilisent `rounded.xl` (20px) — généreux mais pas bubble. Les chips de filtre sont `rounded.full`. Les cellules de calendrier sont `rounded.md` (12px) pour qu'elles paraissent comme des tuiles distinctes. Les inputs sont `rounded.lg` (16px). Règle structurelle : les éléments interactifs primaires (boutons, chips sélectionnés) sont plus ronds que les éléments de contenu (cartes, sections) — le rayon signal l'interactivité.

## Components

**Boutons** : le CTA principal (`button-primary`) est orange, pleine largeur sur mobile, hauteur 52px, texte medium 16px. L'état pressé assombrit légèrement (#E55A25). Le bouton secondaire a un border 2px primary sur fond blanc. Ghost pour les actions de navigation contextuelle. **Cartes de tâches** (`card-task`) : fond blanc, ombre légère, icône colorée par catégorie à gauche, nom + objectif en corps, badge de streak ou de progression en badge discret à droite. L'état complété bascule sur fond `primary-soft` avec texte barré — satisfaction visuelle immédiate. **Anneaux de progression** (`progress-ring`) : cercle SVG 80px, piste gris clair, remplissage orange, chiffre central en `h3`. Un par grande catégorie sur le dashboard. **Calendrier** : grille 7 colonnes, cellules 36px × 36px, jour actuel en `primary-soft`, jours complétés en `primary` plein, jours échoués en `error`. **Navigation tab** : 5 icônes maximum, icône active colorée en primary, label en 12px. **Chips** : filtre "Difficile / Moyen / Facile" — pattern vu chez BeHard et Her 75, fondamental dans la niche. **Day badge** : pastille orange avec "Jour X" — présente dans toutes les apps concurrentes comme ancre temporelle.

## Do's and Don'ts

**DO :**
- Utiliser `primary` (#FF6B35) comme unique couleur d'accent interactif — cohérence totale.
- Toujours afficher le numéro du jour en évidence sur le dashboard (c'est la récompense psychologique centrale).
- Colorer les icônes de tâche par catégorie (`task-water`, `task-food`, etc.) pour la reconnaissance instantanée.
- Respecter les zones tactiles minimum : 48px de hauteur pour tout élément cliquable.
- Utiliser `rounded.full` exclusivement pour les boutons et chips — jamais pour les cartes ou modaux.
- Maintenir une densité confortable : au moins 12px entre les items de liste.

**DON'T :**
- Ne jamais utiliser plus de 2 couleurs vives sur le même écran (risque de foire visuelle type "Habit Tracker coloré").
- Ne jamais mettre du texte blanc sur fond `primary-soft` — le contraste est insuffisant (ratio ~2.5:1).
- Ne jamais utiliser un fond sombre ou dark mode dans la version v1 — hors scope, incohérent avec le ton chaleureux light.
- Ne jamais créer de grille à 2 colonnes pour les cartes de tâches — les zones tactiles seraient trop petites.
- Ne jamais utiliser de serif dans l'UI native (réservé uniquement aux assets marketing/store screenshots).
- Ne jamais afficher plus de 6 tâches au-dessus du fold sans scroll indicator — surcharge cognitive immédiate.
