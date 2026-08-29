---
name: architecture-flutter
description: Standards d'architecture Flutter du projet — structure, state management, qualité.
---
# Architecture Flutter

## Structure (feature-first)
```
lib/
  main.dart
  core/          # thème, constantes, utils, routing
  features/
    <feature>/
      data/      # sources, modèles, repos
      domain/    # logique métier
      ui/        # écrans, widgets, controllers
```

## Règles
1. State management : Riverpod. Pas de setState hors widgets purement locaux.
2. Thème : tout vient de `theme.dart` (généré par le designer). Zéro couleur/typo en dur.
3. Navigation : go_router, routes nommées centralisées.
4. Monétisation : RevenueCat (purchases_flutter) derrière une abstraction `PaywallService`
   pour pouvoir changer de provider sans toucher l'UI.
5. Analytics : événements nommés dès le MVP (onboarding complété, aha moment, paywall vu).
6. Localisation : arb files dès le départ, même si une seule langue au lancement.
7. `flutter analyze` sans warning avant tout build. Tests unitaires sur domain/.
8. Doc à jour via Context7 MCP avant d'utiliser un package inconnu.

## Première app (mode chaîne de production)
Complexité minimale : pas de backend custom, stockage local (shared_preferences/Hive),
monétisation simple. Le but est de valider la chaîne, pas de construire une cathédrale.
