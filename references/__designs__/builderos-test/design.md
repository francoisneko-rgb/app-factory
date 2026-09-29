# DESIGN.md — Référence : Apps 75-Day Challenge (75 Soft / Her 75)
*Extrait le 2026-09-28 depuis captures App Store apple.com*
*Sources : "75 Day Challenge Soft Edition" (id6670955917) + "Her 75" (id6746784659)*

---

## 0. Contexte d'extraction

### Applications analysées
- **App A** — *75 Day Challenge – Soft Edition* : tracker de challenge 75 jours, public mixte, interface colorée avec rings et calendrier.
- **App B** — *Her 75* : version féminine du challenge 75, esthétique éditoriale haut de gamme, public femmes fitness.

### Perturbations marketing ignorées
- Fonds colorés plats (salmon, teal, yellow, hot-pink) derrière les maquettes téléphone
- Titres publicitaires en gras/couleur ("Transform Your Life in 75 Days", "Become that girl")
- Silhouettes de téléphone iPhone factices (chrome device)
- Texte Apple Store (barre de navigation, sidebar catégories)

### Qualité d'extraction (sans crops)
- **App A** : très bonne — 4 écrans d'app lisibles à travers le chrome marketing. Textes, icônes, couleurs des composants tous lisibles.
- **App B** : excellente — 4+4 écrans (images 2 et 3 se chevauchent partiellement). Typographie, hiérarchie, composants très clairs.

---

## 1. Analyse par écran — App A (75 Soft)

### Écran 1 — Dashboard / Day 1 (écran principal)
- **Type** : Home dashboard
- **Fond** : blanc pur `#FFFFFF`
- **Header** : "Day 1" en semibold ~22pt, couleur `#1A1A1A`, hamburger menu icon gris
- **Citation motivationnelle** : texte petit ~13pt, gris moyen `#888888`, italique centré
- **Progress bar 0%** : gris clair, fine (4px), largeur pleine
- **Calendrier horizontal** : numéros 14→18 dans des chips carrés arrondis (radius ~8px), fond `#F0EEE8` (beige clair), sélectionné en `#E8A87C` (terracotta/salmon clair)
- **Section "Daily Tasks 1/4"** : label + compteur en terracotta `#E8A87C`
- **Task rings** : 4 rings circulaires, ~80px diam, fond gris très clair, tracé coloré
  - Drink water : ring bleu-teal `#4ECDC4`
  - Eat well : ring orange `#F4A261`
  - Read 10 pages : ring jaune `#FFD166`
  - Train 45 mins : ring rose/corail `#F86B6B`
- **Sous-labels** : texte ~11pt, gris `#888888`

### Écran 2 — Calendar / Day 49 Completed
- **Type** : Vue calendrier / progression
- **Fond** : blanc pur
- **Header** : "75 Soft" bold, share icon, identique hiérarchie
- **Badge "COMPLETED"** : pill/chip jaune moutarde `#FFD166`, texte blanc ou sombre, bold ~11pt, radius pill
- **Grille numérique 1→75** : chiffres colorés avec teinte pour les jours passés (terracotta `#E8A87C`), jours futurs gris
- **Liste tâches** : icône couleur + nom tâche + détail sub-label, séparateurs fins gris `#F0F0F0`
  - Icônes : lignes simples, stroke 1.5px, couleur correspondant à la tâche

### Écran 3 — Challenge Setup
- **Type** : Configuration / formulaire
- **Fond** : blanc cassé/cream `#FAFAF8`
- **Header modal** : "Dismiss" + "Set Up Your Challenge" centré bold + "Start" en terracotta
- **Liste de règles** : rows avec icône barbell/fork/book/dumbbell en gris foncé, titre bold ~15pt, sous-titre gris ~13pt, chevron `>` gris clair
- **Compteur** : badge "4/8" pill terracotta
- **CTA primaire** : bouton "Add" arrondi (radius ~12px), fond terracotta `#E8885A`, texte blanc bold
- **CTA secondaire** : "Restore" outlined, même radius, texte terracotta
- **Toggle** : iOS style, off = gris `#C7C7CC`
- **Section label** : "Forgiving Mode" avec icône hand, texte descriptif gris petit

### Écran 4 — Add Rule (modal)
- **Type** : Formulaire / création
- **Fond** : blanc pur
- **Navigation modal** : "Cancel" + "Add Rule" centré bold + "Create" en bleu système (ou terracotta)
- **Champs texte** : "Walk", "10 000 steps", "Split task in 2" — texte noir direct, fond transparent, séparateurs fins
- **Contrôles stepper** : boutons `−` `+` circulaires (~28px), fond gris `#F2F2F7`
- **Grille d'icônes** : 6×5 icônes SF Symbols, ~28px, gris moyen `#8E8E93`, fond transparent
- **Sélecteur couleur** : chips circulaires ~24px — palette : vert `#34C759`, rouge/coral `#FF453A`, bleu `#007AFF`, violet `#BF5AF2`, rose `#FF2D55`, orange `#FF9500`, vert clair `#30D158`, bleu-gris `#5AC8FA`

---

## 2. Analyse par écran — App B (Her 75)

### Écran 1 — Splash / Hero (image 2)
- **Type** : Marketing/onboarding hero
- **Fond** : blanc pur `#FFFFFF`
- **Photo** : pleine hauteur, noir & blanc (woman in athletic wear), pas de fond coloré — minimalisme éditorial
- **Typographie** : serif élégant, probablement **Playfair Display** ou similaire (Didot-like), "Become that girl" — italic serif en noir, très grande (~36-40pt), line-height serré
- *(Pas d'UI fonctionnelle visible — écran marketing pur)*

### Écran 2 — Challenge Selection (images 2 & 3)
- **Type** : Liste / sélection de challenge
- **Fond** : blanc pur
- **Header** : absent (top-level scroll)
- **Rows challenge** : chaque row = photo horizontale 3-col (mosaïque), badge texte "✓ 75 Day Hard / Medium / Soft / & More"
  - Badge : pill fond blanc avec bordure légère, texte noir ~13pt semibold, checkmark `✓` préfixé
  - Photos : edge-to-edge dans le row, radius ~8px
  - Row height ~120px

### Écran 3 — "Make it official" / Social proof card
- **Type** : Partage social / carte communautaire
- **Fond** : bleu ciel très clair `#D6EEFF` ou `#C8E6FF` (fond de la photo/carte)
- **Carte "day one"** : fond blanc `#FFFFFF`, radius ~16px, ombre légère
  - Texte "day one" : serif italic lowercase, ~18pt, noir
  - Sous-titre date : small caps ou semibold ~11pt, gris
  - Liste rules : numérotée 1-4, texte ~13pt, gris foncé `#3A3A3A`
  - Dernier item "progress pic" : gris plus léger
- **Photo de fond** : lifestyle (woman outdoors, Méditerranée), filtre naturel chaud
- **Badge utilisateur** : avatar rond + "you" + temps "2min" + badge étoile vert `#34C759`

### Écran 4 — Routine / Todo list (images 2 & 3)
- **Type** : Liste de tâches du jour
- **Fond** : blanc pur
- **Header** : "75 Day Hard" bold serif ~24pt, sous-titre "+6,256 joined" gris clair, photo hero cropped
- **Rows tâches** : numérotées 1-5
  - Numéro : dans un chip carré arrondi (~28px), fond couleur pastel
    1. Beige/crème `#F5ECD7`
    2. Rose pâle `#FADADD`
    3. Beige-rosé `#F5E6D3`
    4. Bleu très pâle `#E8F4FD`
    5. Neutre clair `#F0F0F0`
  - Texte tâche : bold ~15pt, noir `#1A1A1A`
  - Sous-texte détail : ~13pt, gris `#6B6B6B`
  - Pas de chevron, pas de switch — lecture seule

### Écran 5 — Social Feed (image 3)
- **Type** : Feed amis / activité sociale
- **Fond** : blanc pur
- **Rows amis** : avatar rond ~52px, prénom bold + "Day 75", checkmark vert rempli `#34C759` (~20px)
- **Sous-tâches listées** : texte ~13pt, gris, indentées sous l'avatar
  - "Walk 10,000 steps", "Read 10 pages", "Workout", "Follow a strict diet + heure"
- **Séparateurs** : lignes `#F0F0F0` 1px

---

## 3. Tokens derivés — Design System synthèse

> Décision de synthèse : on fusionne les deux apps en un système cohérent.
> App A apporte la **couleur et la structure fonctionnelle** ; App B apporte la **typographie éditoriale et le minimalisme premium**.

### 3.1 Palette

```
/* Backgrounds */
--color-bg-primary:     #FFFFFF    /* fond principal */
--color-bg-secondary:   #FAFAF8    /* fond cartes, modals (cream très léger) */
--color-bg-tertiary:    #F5F5F0    /* fond chips, inputs */
--color-bg-skeleton:    #F0F0F0    /* skeleton loaders, séparateurs */

/* Brand — terracotta/salmon (App A dominant) */
--color-brand-primary:  #E8885A    /* CTA, accent fort, rings actifs */
--color-brand-light:    #F4B896    /* états hover, fills légers */
--color-brand-xlight:   #FEF0E8    /* backgrounds tintés */

/* Tâches / catégories (4 couleurs fonctionnelles App A) */
--color-task-water:     #4ECDC4    /* teal — hydratation */
--color-task-food:      #F4A261    /* orange — nutrition */
--color-task-read:      #FFD166    /* jaune — lecture/mental */
--color-task-train:     #F86B6B    /* rose-rouge — sport */

/* Chips tâches Her 75 (pastels) */
--color-chip-1:         #F5ECD7    /* crème — règle 1 */
--color-chip-2:         #FADADD    /* rose pâle — règle 2 */
--color-chip-3:         #F5E6D3    /* pêche — règle 3 */
--color-chip-4:         #E8F4FD    /* bleu pâle — règle 4 */

/* Success / Status */
--color-success:        #34C759    /* vert iOS — completed, checkmark */
--color-success-light:  #E8F8EE    /* fond success subtil */

/* Neutrals */
--color-neutral-900:    #1A1A1A    /* texte principal */
--color-neutral-700:    #3A3A3A    /* texte secondaire fort */
--color-neutral-500:    #6B6B6B    /* texte secondaire */
--color-neutral-400:    #888888    /* texte tertiaire, placeholders */
--color-neutral-300:    #C7C7CC    /* toggles off, bordures */
--color-neutral-100:    #F2F2F7    /* fond chips gris, steppers */

/* Overlay */
--color-overlay:        rgba(0,0,0,0.04)  /* ombres très légères */
```

### 3.2 Typographie

```
/* Familles */
--font-serif:    "Playfair Display", "Didot", Georgia, serif   /* titres éditoriaux Her 75 */
--font-sans:     "SF Pro Display", "SF Pro Text", -apple-system, sans-serif  /* tout le reste */

/* Échelle (base 16px = 1rem) */
--text-xs:       11px / 16px  weight 400  /* labels sous-icônes, timestamps */
--text-sm:       13px / 18px  weight 400  /* descriptions, sous-titres */
--text-base:     15px / 22px  weight 400  /* corps de liste, contenu */
--text-md:       17px / 24px  weight 600  /* titres de section, row labels */
--text-lg:       22px / 28px  weight 700  /* titres d'écran (Day 1, 75 Soft) */
--text-xl:       28px / 34px  weight 700  /* titres hero */
--text-2xl:      36px / 42px  weight 700  /* serif éditorial (Become that girl) */

/* Variantes */
--text-serif-italic-lg:  Playfair Display Italic, 28px/34px  /* titres Her 75 */
--text-serif-italic-xl:  Playfair Display Italic, 36px/42px  /* hero éditorial */
--text-label:    11px / 16px  weight 500  letterspacing +0.5px  /* badges, chips */
--text-caption:  13px / 18px  weight 400  color neutral-400     /* sous-labels */
```

### 3.3 Espacements (grille 4pt)

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px   /* padding horizontal standard */
--space-5:   20px
--space-6:   24px   /* padding vertical section */
--space-8:   32px   /* gap entre sections */
--space-10:  40px   /* marges top écran */
--space-12:  48px
--space-16:  64px

/* Layout */
--screen-h-padding:   16px
--screen-v-padding:   20px
--card-padding:       16px
--list-item-v-pad:    12px
--list-item-h-pad:    16px
```

### 3.4 Rayons (border-radius)

```
--radius-sm:    6px     /* chips, badges petits */
--radius-md:    10px    /* cartes standard, inputs */
--radius-lg:    16px    /* cartes Her 75, modals */
--radius-xl:    24px    /* bottom sheets */
--radius-pill:  999px   /* badges "COMPLETED", chips de couleur */
--radius-icon:  8px     /* containers icônes carrés */
```

### 3.5 Ombres

```
/* App A : quasiment pas d'ombres — minimaliste flat */
--shadow-none:   none

/* App B : ombres très subtiles sur les cartes */
--shadow-card:   0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)

/* Séparateurs préférés aux ombres */
--border-separator:  1px solid #F0F0F0
```

### 3.6 Icônes

```
Style :     SF Symbols (iOS natifs) — stroke, 1.5px, pas de fill sauf état actif
Tailles :   20px (list rows) / 24px (section headers) / 28px (grille création)
Couleur :   neutral-400 par défaut / couleur fonctionnelle si tâche active
```

---

## 4. Composants clés

### TaskRing — Anneau de progression circulaire
```
Diamètre :    80px (compact) / 96px (standard)
Track :       fond neutral-100, stroke 6px
Progress :    stroke couleur fonctionnelle (water/food/read/train), strokeLinecap round
Centre :      icône SF Symbol 24px, couleur = couleur fonctionnelle si >0%, sinon neutral-300
Label :       text-xs neutral-500, centré en bas, max 2 lignes
```

### TaskRow — Ligne de tâche (App A + App B)
```
Height :         56px min
Left :           icône 20px (couleur fonctionnelle) dans container 36px, radius-icon
Content :        titre text-base semibold + sous-titre text-sm neutral-400
Right :          chevron gris (éditable) ou checkmark vert (validé)
Séparateur :     border-separator à gauche du texte (pas full-width)
```

### ChallengeChip — Chip numérotée (Her 75 style)
```
Size :      28×28px, radius-icon
Fond :      couleur pastel selon index (chip-1 à chip-4, cycle)
Texte :     number bold, text-sm, neutral-900
```

### BadgePill — Badge statut
```
Height :    24px, padding 6px 12px, radius-pill
Variantes :
  - completed : fond color-read (#FFD166), texte neutral-900, bold
  - challenge-type : fond blanc, border neutral-300, checkmark prefix
  - count : fond brand-xlight, texte brand-primary
```

### CalendarGrid — Grille 75 jours
```
Grid :      10 colonnes
Cell :      24×24px, texte text-xs
Passé :     fond brand-light, texte blanc
Aujourd'hui : fond brand-primary, texte blanc, ring brand-xlight
Futur :     fond transparent, texte neutral-300
```

### PrimaryButton
```
Height :      48px, radius-md (10px)
Fond :        brand-primary #E8885A
Texte :       text-md bold, blanc
Padding :     horizontal 24px
États :       pressed = brand-primary + 10% sombre, disabled = neutral-300
```

### SecondaryButton (outlined)
```
Height :      48px, radius-md
Border :      1.5px brand-primary
Texte :       text-md bold, brand-primary
Fond :        transparent
```

### SocialRow — Ligne d'ami (Her 75 feed)
```
Left :        avatar rond 52px
Content :     prénom text-md bold + "Day X" text-sm neutral-400 (colonne)
Right :       checkmark vert 20px si completed
Sub-tasks :   liste texte text-sm neutral-400, indentée 16px, avec heure
```

---

## 5. Ton et langage visuel

### Mots-clés du ton
**Motivant, clean, accessible, sérieux sans être austère**

- App A : énergique, coloré, ludique mais structuré — public : tous niveaux
- App B : éditorial, aspirationnel, premium minimaliste — public : femmes millennials fitness
- Synthèse : **warm minimal** — blanc dominant, 1-2 accents couleur par écran, typographie mixte (sans + serif ponctuel pour les moments héroïques)

### Anti-patterns identifiés (à éviter)
- **Gradients** : absents dans les deux apps — rester flat/solid
- **Dark mode forcé** : les deux apps sont full light-mode
- **Densité élevée** : les deux respirent — min 56px par row, padding généreux
- **Couleurs vives sans contexte** : les couleurs fonctionnelles (water/food/read/train) servent à identifier, pas à décorer
- **Serif partout** : le serif est réservé aux titres héroïques et moments éditoriaux — le corps est en sans-serif propre

### Positionnement différenciateur (décisions par défaut)
1. **Couleur accent** → terracotta/salmon `#E8885A` plutôt que bleu iOS standard — plus chaleureux, plus identitaire
2. **Typo** → mixte SF Pro + Playfair Display italic — signal "premium editoral" vs apps fitness génériques
3. **Rings de progression** → plus parlant visuellement qu'une barre de progression flat
4. **Chips colorées numérotées** (Her 75) → meilleure lisibilité de l'ordre des tâches que des bullets

---

## 6. Décisions par défaut (mode sans input utilisateur)

| Dimension | Décision prise | Justification |
|---|---|---|
| Produit ciblé | App fitness/challenge 75 jours | Source des captures |
| Public | 25-40 ans, femmes prioritairement, fitness aspirationnel | Her 75 dominant visuellement |
| Mode | Light only | Les deux apps sont full light |
| Accent | Terracotta `#E8885A` | Plus chaud et différenciant que bleu |
| Serif | Playfair Display | Correspond au tone éditorial Her 75 |
| Densité | Aérée (≥56px rows, padding 16-20px) | Standard observé dans les deux apps |
| Ombres | Minimalistes (App B seulement) | Flat preferred |
| Icônes | SF Symbols stroke | Natif iOS, cohérent avec les apps |
| Couleurs tâches | 4 couleurs fonctionnelles fixes | Pattern App A, mémorable |

---

*Fichier produit par extraction visuelle d'après captures App Store — 2026-09-28*
*Source : 75 Day Challenge Soft Edition + Her 75 — références uniquement, pas de copie identique*
