---
name: icones-app
description: Icône d'app et splash via config Expo — adaptive icon Android, zone sûre, pipeline gauntlet.
---
# Icônes & splash (Expo)

## Génération
Configuration `app.json` (icon, adaptiveIcon foreground/background, splash) — Expo génère
toutes les tailles au prebuild. Pas d'outil tiers type flutter_launcher_icons.

## Règles icône
1. Foreground/background séparés pour Android (adaptive icon), zone sûre respectée (66 % central).
2. L'icône est LE levier de conversion store n°1 : tester contre les leaders du cluster.
3. iOS : icône sans transparence ni texte.

## Pipeline
Comme toute surface critique : l'icône passe par le gauntlet-loop contre les icônes des
concurrents leaders (grille), plafond 5 rounds.