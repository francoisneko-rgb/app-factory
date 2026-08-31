---
name: performance-expo
description: Règles de performance React Native/Expo — threads, React Compiler, worklets, debugging.
---
# Performance Expo (règles non négociables)

## Modèle mental : 2 threads
- Thread JS : ta logique, state, appels API. Il DÉCIDE quoi afficher.
- Thread UI : rendu, touchers, animations. Il EXÉCUTE l'affichage.
- Si le thread JS est bloqué (calcul lourd synchrone), TOUTE l'app gèle : les événements
  s'empilent en file et l'UI ne se rafraîchit plus. Jamais de boucle/calcul lourd synchrone.

## Règles
1. TypeScript partout, strict. const/let (jamais var), import/export (require uniquement
   pour les assets images).
2. ESLint activé sur chaque app — corriger avant build, pas après.
3. React Compiler : activé par défaut depuis SDK 54 — vérifier que
   experiments.reactCompiler n'est PAS désactivé dans app.json. Il élimine les re-renders
   inutiles automatiquement. Ne PAS ré-écrire de memo/useCallback manuels sauf si le
   compilateur est indisponible. Santé du projet : npx react-compiler-healthcheck@latest.
4. APIs React 19 modernes : hook `use`, passer le contexte directement comme provider.
5. Animations : TOUJOURS via Reanimated (tournent sur le thread UI — l'app reste fluide
   même si le JS est chargé). Gestes : react-native-gesture-handler.
6. Listes : JAMAIS FlatList/ScrollView pour des listes longues ou dynamiques → FlashList
   (@shopify/flash-list).
7. Calculs lourds (traitement d'image, crypto, math, parsing massif) : react-native-worklets
   — createWorkletRuntime + runOnRuntime pour déporter sur un thread séparé avec la
   directive 'worklet'. Le thread JS reste libre, l'UI reste réactive.
8. Debugging perf : DevTools (touche J) → Profiler → activer "Highlight updates when
   components render" pour repérer les re-renders parasites.
9. Tester la performance sur un DEVICE RÉEL — le simulateur tourne sur le hardware du PC
   et ne reflète pas la réalité.