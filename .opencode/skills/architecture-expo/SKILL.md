---
name: architecture-expo
description: Standards d'architecture React Native + Expo — structure, state, design system, qualité.
---
# Architecture Expo / React Native

## Setup nouveau projet
- `npx create-expo-app@latest apps/<app> --template` (template avec Expo Router + TypeScript)
- Installer les Expo Skills officielles pour agents si disponibles (docs.expo.dev/skills).

## Stack imposée
1. TypeScript strict. Expo Router (file-based, dossier app/).
2. Styling : NativeWind (classes Tailwind via className). Tokens de design dans un
   theme central (couleurs, espacements, rayons, typographies) — ZÉRO valeur en dur.
   Le designer livre le design system, le dev le traduit en tokens.
3. État : Zustand. Données serveur : TanStack Query. Stockage local : MMKV ou
   AsyncStorage (pas de backend pour la première app).
4. Monétisation : RevenueCat (react-native-purchases / plugin Expo) derrière une
   abstraction PaywallService. Voir skill paywall-monetisation.
5. Analytics : PostHog (événements nommés dès le MVP : onboarding, aha, paywall).
   Crashs : Sentry (plugin Expo officiel).
6. Icône + splash : config app.json (adaptive icon Android : foreground/background
   séparés, zone sûre respectée — voir skill icones-app).
7. Tests : Jest pour la logique, Maestro pour les parcours E2E critiques.
8. Doc : serveur MCP Expo (docs live, versions SDK) avant d'utiliser un module inconnu ;
   Context7 MCP en complément. Rester dans les modules Expo SDK curés en priorité.

## Règle Android
Le bouton retour Android est interceptable via BackHandler / navigation d'Expo Router,
mais un paywall incompressible nuit aux avis. Pattern : croix différée 3-5 s. Voir
skill paywall-monetisation.