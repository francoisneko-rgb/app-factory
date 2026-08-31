---
name: animations-lottie
description: Animations Lottie et Rive dans Expo — modules officiels, usages typiques.
---
# Animations (Lottie / Rive)

## Lottie
- `lottie-react-native` (module Expo officiel) pour les animations JSON Lottie.
- Usages : onboarding, états vides, micro-feedbacks.

## Rive
- `@rive-app/react-native` pour les animations interactives Rive (état-driven).

## Règles
1. Préférer des animations légères (binaire/texture) — la perf mobile est prioritaire.
2. Ne pas animer les surfaces critiques avant le gauntlet-loop (rendu réel jugé).
3. Test de perf sur device bas de gamme Android avant de multiplier les animations.