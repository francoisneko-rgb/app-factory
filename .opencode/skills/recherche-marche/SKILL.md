---
name: recherche-marche
description: Étude de marché data-first — mots clés, taille de niche, concurrence, scoring.
---
# Recherche de marché

## Quand l'utiliser
Phase 1, ou toute exploration d'une nouvelle niche.

## Étapes
1. Mots clés : liste de départ (FR + EN), puis expansion via la recherche store
   (`node tools/scrapers/scrape-search.js "<mot-clé>"`) — les suggestions et titres
   des apps trouvées révèlent les vrais mots clés du marché.
2. Taille de la demande : nombre d'installs des leaders (champ `installs` du scraper),
   volume des avis. Si Appfigures est configuré ({env:APPFIGURES_API_KEY}), croiser
   avec les estimations de téléchargements et revenus.
3. Concurrence : ancienneté des leaders, note moyenne, fréquence de mise à jour.
   Des leaders notés < 4.0 ou non mis à jour depuis > 1 an = opportunité.
4. Monétisation : prix, IAP, abonnements visibles dans la metadata.
5. Scoring selon la grille de `brain/niches.md`. Consigner TOUT, même les niches rejetées.

## Livrable
Rapport dans `brain/rapports/` avec top niches scorées + recommandation argumentée.
