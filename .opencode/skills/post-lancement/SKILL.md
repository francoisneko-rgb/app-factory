---
name: post-lancement
description: Boucle d'amélioration continue après publication— avis, analytics, ASO, cadence.
---
# Post-lancement (commande "PILOTE")

## Rythme ：hebdomadaire par app publiée
1. AVIS ：lis TOUS les nouveaux avis de notre app (stores). Classe ：bugs / demandes /
   plaintes / éloges. Un bug signalé 2 fois = correctif prioritaire(EAS Update si JS).
2. ANALYTICS ：via le MCP PostHog, vérifie le funnel (onboarding → aha → paywall。
   Un drop-off anormal = hypothèse de correctif documentée dans brain/apps/<app>/。
3. ASO ：positions des mots clés maîtres(Appfigures si actif, sinon scrapers)；
   ajuste titre/description si un mot clé longue traîne émerge dans les avis。
4. CADENCE ：1 mise à jour par app toutes les 2-3 semaines minimum(les stores
   favorisent les apps maintenues)。Notes de version orientées bénéfice。
5. LOG ：brain/apps/<app>/pilotage/AAAA-MM-JJ.md — métriques, décisions, actions。
6. REMONTÉE USINE ：tout apprentissage généralisable → brain/learnings.md。

## Évolutions post-publication（OPENSPEC）
Toute évolution d'une app publiée（feature, fix majeur）passe par OpenSpec
（propose→apply→verify→archive）, jamais par un prompt direct. Les bugs simples
restent en prompt de réparation classique（workflow-agents）.