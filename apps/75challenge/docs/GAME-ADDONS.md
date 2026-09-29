# GAME-ADDONS — Équiper une app-jeu depuis le template golden

> Le template de base n'inclut AUCUNE librairie de jeu (reste standard).
> Pour un projet de jeu, installer les addons du bon niveau. Méthode complète :
> skill `.opencode/skills/jeux-mobiles`. Toujours `npx expo install` (version SDK garantie).

## Niveau 1 — UI-driven (cartes, mots/Scrabble-like, quiz, éducatif, tour par tour)
Aucune librairie de jeu. Déjà présent dans le template : Reanimated, Gesture Handler,
Zustand, MMKV. À ajouter selon besoin :

```bash
npx expo install expo-audio expo-haptics react-native-svg
```

## Niveau 2 — 2D dynamique (particules, effets custom, animations nombreuses)
```bash
npx expo install @shopify/react-native-skia
```
Perf : pré-rendre le statique en Skia Picture (dessiné UNE fois, pas 60×/seconde).

## Niveau 3 — Physique 2D (gravité, collisions, rebonds, explosions)
```bash
npx expo install @shopify/react-native-skia
npm install matter-js
npm install -D @types/matter-js
```
Combo : Matter simule → Skia rend → Reanimated orchestre (thread UI).

## 3D simple (jeux enfants, objets manipulables, scènes interactives)
```bash
npx expo install react-native-worklets-core react-native-filament
```
- Modèles : fichiers `.glb` UNIQUEMENT (pipeline IA : Meshy/Tripo).
- Configurer `metro.config.js` pour les assets `.glb`.
- Scène minimale : `<FilamentView>` + `<DefaultLight>` + modèle GLB + `<Camera>`.
- AR optionnel : `npm install @stewmore/expo-ar`.

## Rappels
- Ne pas mélanger avec react-native-game-engine / Phaser WebView / Unity (interdits).
- Catégorie App Store "Enfants" : pas d'analytics tiers ni de pubs comportementales
  → modèle payant/achat unique (RevenueCat). À trancher au PRD (G3).
- Les jeux passent par les mêmes gates (G1-G7) + gauntlet-loop.
- Screenshots de gameplay RÉELS sur device (pas de mockups) pour le store.