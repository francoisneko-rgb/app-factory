---
name: gauntlet-loop
description: Boucle qualité builder/critique contre référence réelle, pour les surfaces critiques.
---
# Gauntlet-loop

## Principe
Méthode de contrôle qualité multi-agents : un builder produit, un critique indépendant
(contexte neuf, sans le raisonnement du builder) compare le résultat à une RÉFÉRENCE
RÉELLE en test aveugle. Défaite = nouveau round. Plafond : 5 rounds (coût tokens).

## Surfaces concernées (uniquement celles-ci)
Onboarding, écran d'accueil, paywall, icône d'app, screenshots store, visuels marketing.
JAMAIS sur le code utilitaire ou les écrans secondaires.

## Protocole
1. RÉFÉRENCE : assets des concurrents leaders dans `brain/apps/<app>/concurrence/`
   + mockups validés au gate G4. Sans référence réelle, pas de gauntlet.
2. CRITÈRES : définis AVANT le round 1 (ex. icône : lisible en 48px, se détache dans
   une grille de 20 icônes concurrentes, évoque la promesse).
3. BUILDER : produit le candidat (screenshot réel de l'app, pas une intention).
4. CRITIQUE : agent `critique`, contexte neuf, test aveugle, verdict structuré.
5. DÉFAITE : le builder reçoit UNIQUEMENT les écarts classés par impact, corrige,
   nouveau round.
6. VICTOIRE ou plafond : on arrête. Log obligatoire dans `brain/logs/`.

## Règle d'arrêt
Si 5 rounds sans victoire : escalader à l'utilisateur avec candidat + référence +
historique des verdicts. Ne jamais boucler indéfiniment.
