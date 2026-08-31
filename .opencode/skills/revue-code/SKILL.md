---
name: revue-code
description: Boucle de revue de code par PR — CodeRabbit + correctifs batch + règles de merge.
---
# Revue de code (obligatoire avant tout merge)

## Boucle standard par feature
1. Branche dev (ou feature/*), commit, push, ouverture de PR vers main.
2. CodeRabbit review automatiquement : lire TOUS les commentaires (il attrape de vrais
   bugs : appels web-only comme window.href qui crashent en natif, validations toujours
   true, SplashScreen.preventAutoHideAsync manquant, clés commitées).
3. Correctifs : utiliser la fonction "prompt for all review comments" (batch) ou fixer
   un par un. Pour chaque suggestion critique, demander à l'agent de VÉRIFIER si c'est
   un vrai bug avant de corriger (les deux IA se contrôlent).
4. Merger uniquement quand la review est propre et la feature testée sur device.
5. Extension CodeRabbit dans l'éditeur = review locale possible avant même la PR.

## Critères de merge bloquants
- ESLint propre. Pas de `any` TypeScript. Pas de clé/secrète dans le repo.
- Aucune régression sur les écrans existants (vérification visuelle).
- Log dans brain/logs/ pour les décisions non triviales.