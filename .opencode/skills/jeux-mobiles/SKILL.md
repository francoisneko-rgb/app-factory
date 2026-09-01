---
name: jeux-mobiles
description: Création de jeux mobiles en React Native/Expo — 2D (cartes, mots, éducatif) et 3D simple, sans moteur externe.
---
# Jeux mobiles dans la factory

## Principe fondateur
Il N'EXISTE PAS de moteur de jeu tout-en-un en React Native (pas de Unity/Godot
équivalent). On compose à partir de briques éprouvées. C'est une force pour la
factory : un jeu 2D reste une app Expo standard — toute la chaîne (scraping, gauntlet,
ASO, EAS, Remotion) s'applique sans modification.

## Interdit
- react-native-game-engine (RNGE) : dormant depuis 2020, pas de rendu GPU. Jamais.
- Phaser en WebView : runtime séparé, sensation non native, review store risquée. Jamais.
- Unity : hors scope de cette factory (projet séparé si un jour nécessaire).

## Stack 2D — par niveau de jeu
### Niveau 1 — UI-driven (cartes, mots/Scrabble-like, quiz, éducatif, tour par tour)
Le choix par défaut. Aucune librairie de jeu :
- Chaque pièce (carte, lettre, tuile) = un composant RN (View/Pressable + Image/SVG).
- Reanimated pour toutes les animations (thread UI, 60fps) ; Gesture Handler pour
  drag & drop, tap, swipe (voir skill performance-expo).
- État de partie : Zustand. Persistance progression/scores : MMKV.
- expo-haptics sur les actions (pioche, victoire) ; expo-audio pour sons/musique.
- Assets : pipeline IA existant — Recraft (SVG vectoriel, rendu via react-native-svg
  ou Skia) + API image Google pour les illustrations.

### Niveau 2 — 2D dynamique (particules, effets custom, animations nombreuses)
Ajouter @shopify/react-native-skia : seul chemin GPU crédible en RN (Metal/Vulkan,
via JSI). Rendu des sprites/effets sur canvas Skia, boucle de jeu pilotée par
Reanimated (useFrameCallback / shared values). Règle de perf issue du terrain :
pré-rendre ce qui est statique en Skia Picture (dessiné UNE fois, pas 60×/seconde).

### Niveau 3 — Physique 2D (gravité, collisions, rebonds, explosions)
Ajouter matter-js (moteur physique TypeScript) : Matter simule, Skia rend, Reanimated
orchestre sur le thread UI. Combo documenté officiellement par Expo.

## Stack 3D simple (jeux enfants, objets manipulables, scènes interactives)
- Moteur : react-native-filament (rendu PBR C++ natif, Metal iOS / Vulkan Android,
  thread séparé, compatible New Architecture et Expo).
- Modèles : fichiers .glb UNIQUEMENT — générés par la pipeline IA (Meshy/Tripo via
  skill assets-3d), convertir tout autre format en GLB. Configurer metro.config.js
  pour les assets .glb. Dépendance : react-native-worklets-core.
- Scène minimale : <FilamentView> + <DefaultLight> + modèle GLB + <Camera>.
- Physique 3D simple : Bullet (inclus dans filament).
- AR (optionnel) : @stewmore/expo-ar (une vue Expo, ARKit + ARCore).
- À éviter : expo-gl/expo-three sauf scène très simple (rendu sur thread JS,
  OpenGL ES déprécié sur iOS).
- LIMITES HONNÊTES : pas d'éditeur visuel, physique basique, pas de gros mondes.
  Au-delà → projet Unity séparé, hors factory.

## RÈGLE MONÉTISATION JEUX (bloquante, à valider au G3)
- Catégorie App Store "Enfants" : INTERDIT d'y inclure analytics tiers (PostHog) et
  publicité comportementale (AdMob). Donc : jeux enfants → modèle payant ou achat
  unique (RevenueCat), SANS PostHog/Sentry côté enfant.
- Jeux "famille"/grand public → stack standard (freemium, pubs, PostHog) autorisée.
- Le product-manager DOIT trancher cette règle dans le PRD avant tout développement.

## Notes de production
- Les jeux restent soumis aux mêmes gates (G1-G7) et au gauntlet-loop (écrans de jeu,
  icône, screenshots store — comparés aux jeux concurrents scrapés).
- Screenshots de gameplay réels pour le store : capturer sur device, pas de mockups.
- Vidéo marketing : capturer du gameplay réel + habillage Remotion.