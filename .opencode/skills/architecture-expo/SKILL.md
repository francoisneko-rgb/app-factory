---
name: architecture-expo
description: Stack et standards 2026 — structure projet, données, état, packages, services.
---
# Architecture Expo — Stack 2026 de la factory

## Création de projet
- TOUJOURS partir de `template-app/` (clone préconfiguré), jamais de zéro.
- Dernier SDK Expo (55+). Structure src/ : app/ (routes Expo Router), components/,
  lib/ (storage, api), utils/, constants/ (tokens de thème).
- Installer un package : TOUJOURS `npx expo install <pkg>` (version compatible SDK
  garantie) — jamais npm install direct pour des packages natifs.

## Stack imposée
| Besoin | Outil | Note |
|---|---|---|
| Langage | TypeScript strict | — |
| Navigation | Expo Router (file-based, groupes (tabs), _layout) | — |
| Styling | NativeWind (Tailwind via className) + tokens centralisés | Alternative acceptée : Uniwind (plus rapide, plus récent) |
| État local simple | Context API | Suffit pour thème, préférences |
| État app | Zustand + persistance MMKV | — |
| État serveur | TanStack Query (QueryClientProvider, queryKey/queryFn) | Dès le 1er appel HTTP |
| Données structurées | expo-sqlite + Drizzle ORM (schéma TS, drizzle-kit) | Drizzle Studio pour déboguer |
| Clé-valeur simple | react-native-mmkv | 30x plus rapide qu'AsyncStorage ; exige un dev build (pas Expo Go) |
| Formulaires | react-hook-form + zod | Validation typée |
| Listes | FlashList | — |
| Animations/gestes | Reanimated + Gesture Handler | Thread UI, voir performance-expo |
| Auth (si besoin) | Clerk | Composants RN natifs excellents |
| Monétisation | RevenueCat derrière PaywallService | Skill paywall-monetisation |
| Analytics | PostHog (events nommés dès le MVP) | — |
| Crashs/monitoring | Sentry (plugin Expo) | Dès le départ |
| Review de code IA | CodeRabbit sur les PR GitHub | Qualité en solo |
| Backend | Aucun par défaut → Expo API Routes (secrets côté serveur, EAS Hosting) → Supabase (Postgres) → InstantDB (temps réel) | Dans cet ordre de complexité |

## Hygiène de code (obligatoire)
- Un seul endroit pour les couleurs/tokens (constants/theme.ts) — zéro valeur en dur.
- Handlers de stockage dans lib/ (fonctions getX/addX), pas d'appels storage dans l'UI.
- Recharger les données au focus d'un écran : useFocusEffect (expo-router), pas useEffect seul.
- Nommer les écrans XxxScreen, composants PascalCase.tsx, utilitaires camelCase.ts.
- Skill performance-expo appliqué systématiquement.
- expo-haptics sur les actions de succès (micro-polish pro).
- eas.json avec 3 profils : development (dev client), preview (APK interne pour tests),
  production (autoIncrement). CI : EAS Workflows (push git → build/submit).
- Limites Expo Go connues : notifications push (SDK 53+), MMKV → créer un development
  build (eas build --profile development) dès qu'un module natif custom est requis.