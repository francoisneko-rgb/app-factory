---
version: 2
name: 75 Challenge — Thème « éditorial pastel » (adapté de cible-75soft-her75-v2)
source: references/__designs__/cible-75soft-her75-v2 (système Her75)
status: validé comme base — maquette v2 à valider (gate G4-a)
mood: éditorial-minimaliste, clair, calme, pastel, journal intime
audience: hommes & femmes, tous âges adultes (pas genré)
dark-mode: non utilisé (le système respire sur fond blanc)
---

# 75 Challenge — Thème de l'app

## 1. Vision du thème

L'app **75 Challenge** reprend l'esthétique éditoriale-minimaliste du système
« Her75 » : tout vit sur du **blanc** avec du **texte noir**, et la seule charge
chromatique est portée par **quatre pastels** (ambre → sauge → pêche → citron)
attribués aux numéros des tâches. Une **police script** (Caveat) marque les
moments émotionnels — le « jour N » — comme une entrée de journal intime.
Une **sérif de vitrine** (Playfair Display) ne sert que pour les accroches
store/marketing, jamais dans l'app.

Le thème est **unisexe et neutre** : on conserve la clarté, la douceur et le
calme des pastels, sans le prisme « féminin/social » de Her75. En v1, **pas de
fonction sociale** : on retire les écrans amis/story, on garde le squelette
personnel (accroche → choix challenge → contrat → paywall → dashboard → boucle
quotidienne).

Deux anti-patterns interdits partout : **fonds sombres / dégradés / néon**
(ce n'est pas une app de gym masculine), et **liste de tâches surchargée**
(la clarté de la liste est sa force).

## 2. Couleurs

Palette volontairement restreinte. Le blanc est fond ET surface de carte — il
n'y a pas de second étage gris : l'app respire sur le blanc. Le noir gère tout
le texte principal.

| Rôle | Token | Valeur |
|---|---|---|
| Fond / surface | `surface` | `#FFFFFF` |
| Texte principal | `on-surface` | `#0A0A0A` |
| Surface secondaire (zones tampon) | `surface-secondary` | `#F7F7F5` |
| Texte secondaire (labels, compteurs) | `text-secondary` | `#6B6B6B` |
| Texte tertiaire (légendes) | `text-tertiary` | `#A0A0A0` |
| Filets / bordures subtiles | `border-subtle` | `#E8E8E6` |
| Badge tâche 1 | `badge-amber` | `#F7C84A` |
| Badge tâche 2 | `badge-sage` | `#B5CCA8` |
| Badge tâche 3 | `badge-peach` | `#F0C4B0` |
| Badge tâche 4 | `badge-lemon` | `#EDE89A` |
| Coche « fait » | `checkmark` | `#111111` |
| Texte sur coche | `on-checkmark` | `#FFFFFF` |
| Chip (fond) | `chip-bg` | `#FFFFFF` |
| Chip (bordure) | `chip-border` | `#E0E0E0` |
| Texte sur chip | `on-chip` | `#0A0A0A` |
| Erreur | `error` | `#E05252` |
| Succès / positif | `success` | `#5BAD6B` |

Règles de couleur :
- Les 4 pastels sont **le seul vrai payload chromatique** de l'UI. Ils sont
  **mats, terreux, désaturés** — jamais remplacés par des équivalents vifs/néon.
- Le vert accent `#5BAD6B` ne sert qu'aux **états positifs discrets** (succès,
  petit badge ★ si un jour est pleinement validé). Jamais en fond de CTA.
- Le **noir `#0A0A0A`** est la couleur des **CTA principaux** (boutons pleins) :
  dans un système blanc/noir, le noir plein est le seul vrai point d'appel à
  l'action. Voir § Composants.

## 3. Typographie

Trois familles cohabitent : une sérif de vitrine, un script émotionnel, et une
sans-serif fonctionnelle.

| Style | Famille | Taille | Graisse | Usage |
|---|---|---|---|---|
| `display` | Playfair Display (serif) | 32px | 700 | Accroches store/marketing uniquement (« Start *your* challenge »). Italique mixé dans le titre. |
| `script` | Caveat (brush) | 28px | 600 | **Uniquement** les marqueurs « jour N » (ex. « day 32 »). Jamais sur du texte de tâche. |
| `h1` | Inter | 24px | 700 | Titres d'écran (« 75 Day Hard », « Your Rules »). `-0.02em` |
| `h2` | Inter | 18px | 600 | Sous-titres / titres de sections. `-0.01em` |
| `body` | Inter | 15px | 400 | 100 % du texte fonctionnel. |
| `body-medium` | Inter | 15px | 500 | Lignes un peu renforcées. |
| `label` | Inter | 13px | 500 | Labels, puces challenge. |
| `caption` | Inter | 11px | 400 | Légendes, compteurs, dates. `+0.01em` |
| `badge-number` | Inter | 13px | 700 | Chiffres des badges de tâche. |

Règles de typo :
- **Caveat ne se mélange jamais** au texte de corps — c'est un accent
  d'affichage réservé au moment émotionnel.
- **Playfair ne se voit pas dans l'app** : c'est une police de présence en
  store, pas une police d'interface.
- Le texte de liste est **toujours aligné à gauche** ; jamais centré.

## 4. Layout

- Échelle d'espacement **base-4**. Rythme : padding horizontal `16px` sur
  lignes/cartes, padding vertical `12px` par ligne. En-têtes de section
  `16px` haut/bas.
- Densité **confortable**. Ligne de tâche ≈ 56–64px de haut.
- Colonne **unique, pleine largeur** avec gouttières latérales de `16px`.
  Pas de multi-colonnes ni de scroll horizontal.

## 5. Élévation & profondeur

Minimale et intentionnelle :
- **Couche plate** (lignes de tâches) : sans ombre, séparée par filet `1px`
  `border-subtle`.
- **Puces flottantes** (sélecteur de challenge) : ombre très légère
  `0 1px 3px rgba(0,0,0,0.08)` + bordure `1px`.
- **Cartes** : ombre douce `0 2px 12px rgba(0,0,0,0.10)`, sans bordure dure.
- Pas de mode sombre ; la profondeur repose sur blanc vs quasi-blanc + ombres
  douces. L'ombre douce des cartes est **le seul signal de profondeur**.

## 6. Formes (coins arrondis)

Rayons **gradués par classe de composant** :
- **Pilule / plein** (`9999px`) : uniquement les puces de sélection de
  challenge, jamais les CTA principaux.
- **Carte** (`16px`) : cartes flottantes.
- **Badge** (`12px`) : badges numérotés des tâches.
- **Photo** (`8px`) : grilles de photos (progress pic).
- **Coche** (`9999px`) : le cercle de validation, ancre visuelle du « fait ».
- Les **coins vifs (0px) ne sont jamais utilisés** — la marque est
  accueillante, pas corporate.

## 7. Composants

### 7.1 chip-challenge (sélecteur de challenge)
Puces « 75 Hard / 75 Soft / 75 Medium » : fond blanc, pilule pleine, bordure
`1px` grise, ombre très légère. Label `13px/500`. Le `✓` fait partie du texte
du label, pas un icône séparé. Se positionnent au-dessus de leur grille/zone.

### 7.2 task-badge (1→4)
Badges numérotés sur les lignes de tâches. Carré fixe `30×30px`, rayon `12px`.
Chaque position a sa pastille : ambre → sauge → pêche → citron dans l'ordre des
tâches 1→2→3→4. Chiffre `13px/700` centré. Seule la **couleur de fond**
différencie les badges ; la forme, la taille, la typo sont identiques.
> En 75 Challenge, on peut aller au-delà de 4 tâches (règles custom). Pour les
> badges 5+, on recycle le gris `surface-secondary` avec bordure, ou on boucle
> la séquence des 4 pastels (décision à trancher — voir § 9).

### 7.3 task-row (ligne de tâche)
Ligne pleine largeur, padding `16px` horizontal / `12px` vertical, filet bas
`1px`. Gauche : badge. Droite : texte `15px/400`. **Rien d'autre** (pas de
chevron, pas de bordure pleine autour de la ligne).

### 7.4 checkmark-done / undone (coche de validation)
Cercle `28px`. Fait : rempli `#111111` + ✓ blanc. À faire : cercle vide avec
bordure `2px` `border-subtle`. C'est un état affiché / une cible tactile pour
valider une tâche.

### 7.5 primary-button (CTA principal — AJOUT)
Le Her75 interdit les pilules en CTA principal ; on définit donc le CTA
principal comme un **rectangle plein noir** :
- Fond `#0A0A0A`, texte `#FFFFFF`, Inter `15px/600`, rayon `16px`,
  padding `14px 24px`, pleine largeur pour les actions d'engagement
  (« Commencer », « Je m'engage », « Débloquer »).
- État pressé : fond `#333` (léger éclaircissement).
- **Jamais en pilule** ; jamais en pastel.

### 7.6 secondary-button / ghost (CTA secondaire)
Fond blanc, texte noir, bordure `1px` `border-subtle`, rayon `16px`, même
padding. Utilisé pour « Retour », actions non engageantes.

### 7.7 signature-area (contrat signé au doigt — AJOUT)
Zone de dessin du contrat (signature au doigt, type BeHard) :
- Carte blanche, rayon `16px`, ombre douce, bordure pointillée interne
  `1.5px dashed border-subtle` pour guider la zone de signature.
- Le trait signé est noir `#0A0A0A`, épaisseur ~3px, main levée.
- Sous la zone : texte label (« Signez ici ») + bouton « J'accepte » (CTA
  noir) et une croix d'annulation discrète visible.

### 7.8 paywall-card (offre — AJOUT)
Carte d'offre (achat unique + abonnement) :
- Deux options en cartes blanches `16px`, ombre douce. L'option mise en avant
  a un **liseré noir `2px`** (pas de pastel pour rester sobre) + badge « Populaire ».
- Prix en `h1`/noir ; détail en `caption`.
- **Croix de fermeture toujours visible** (pas de piège), annulation 1 tap
  affichée. Textes de prix en clair, jamais de renouvellement caché.

### 7.9 day-card (carte du jour)
Carte blanche `16px`, ombre `0 4px 16px rgba(0,0,0,0.12)`. Contient le
titre script (« day one »), la plage de dates en `caption`, et la liste
numérotée en `body`. Utilisée pour les moments de récap du jour.

## 8. Do's and Don'ts

**Do :**
- Garder les fonds **blancs purs** sur tous les écrans de suivi/tâches — les
  pastels vivent dans les badges, pas dans le fond.
- Utiliser les **4 pastels en séquence fixe** ambre → sauge → pêche → citron.
- Utiliser le **script (Caveat) uniquement** pour les titres de moments
  émotionnels (« jour N »).
- Garder les **lignes de tâches propres** : badge + texte + filet 1px, rien
  d'autre.
- Utiliser les **pilules pleines uniquement** pour les puces de sélection de
  challenge, **jamais** pour les CTA principaux (ceux-ci sont des rectangles
  pleins noirs).
- Maintenir l'**ombre douce des cartes** — le seul signal de profondeur.
- CTA principal = **noir plein**, seule vraie couleur d'action.

**Don't :**
- Jamais de **fonds sombres, dégradés ou néon**.
- Ne jamais **saturer les pastels** — ils restent mats et calmes.
- Ne jamais **mélanger la police script** avec le texte de corps.
- Ne jamais **encadrer chaque ligne de tâche** comme une carte (filets fins
  uniquement).
- Ne jamais **centrer** le texte de liste.
- Ne jamais utiliser plus de **4 pastels de badges** (ou alors on boucle la
  séquence — décision § 9).
- Ne jamais faire des **CTA principaux en pilule ou en pastel**.

## 9. Questions ouvertes du thème (à trancher)
1. **Badges 5+** (tâches custom au-delà de 4) : boucler la séquence des 4
   pastels, ou passer en gris neutre ? Reco : boucler la séquence pour garder
   la couleur par position et la lisibilité des listes longues.
2. **Nombre exact d'écrans dans la maquette v2** : je propose la couverture
   complète du parcours (accroche → choix → contrat → paywall → dashboard →
   tâches → calendrier) sans les écrans sociaux (hors v1).
3. **Nom de marque** : non figé ; la maquette utilise le nom de travail
   « 75 Challenge » — le thème est indépendant du nom final (obligé de
   contenir « 75 »).
