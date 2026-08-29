---
name: aso-metadata
description: Optimisation des fiches store — titres, mots clés, descriptions qui convertissent.
---
# ASO — Metadata store

## Sources de mots clés (par ordre de valeur)
1. Le vocabulaire réel des avis utilisateurs (skill analyse-avis)
2. Les titres/sous-titres des concurrents qui rankent
3. Les suggestions de recherche des stores
4. Appfigures pour volumes/difficulté si configuré

## Règles Google Play
- Titre : 30 car. max, mot clé principal + promesse
- Description courte : 80 car., le bénéfice n°1
- Description longue : mots clés répétés naturellement 3-5 fois, scannable (émojis sobres, listes)

## Règles App Store (plus tard)
- Titre 30 car. + sous-titre 30 car. = les deux seuls champs indexés avec le champ
  mots clés (100 car., séparés par virgules, sans espaces, jamais de doublons avec le titre)

## Copywriting
- Bénéfices > fonctionnalités. "Perds 5 kg" > "Tracker de calories".
- Preuve sociale chiffrée si disponible.
- Localiser par marché, ne jamais traduire mot à mot les mots clés.

## Livrable
`brain/apps/<app>/store/<locale>/` : title.txt, short_description.txt,
full_description.txt, keywords.txt — prêts pour fastlane.
