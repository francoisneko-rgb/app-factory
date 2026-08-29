---
name: radar-tendances
description: Détection des tendances — apps qui breaktent, recherches émergentes, signaux faibles.
---
# Radar tendances

## Signaux à surveiller (par ordre de fiabilité)
1. Vélocité des avis : une app récente qui accumule les avis vite = croissance réelle.
   Comparer `ratings` total à la date de sortie (champ `released` du scraper).
2. Top charts "nouveautés" : `node tools/scrapers/top-charts.js` par catégorie —
   repérer les apps < 6 mois dans le top 100.
3. Google Trends (via Playwright MCP) : requêtes en breakout sur les mots clés de niche.
4. Appfigures ({env:APPFIGURES_API_KEY}) : classements et mouvements si configuré.
5. Reddit / TikTok (via Playwright) : "is there an app for...", plaintes récurrentes.

## Règles
- Dater et sourcer chaque signal dans `brain/tendances.md`.
- Un signal isolé = hypothèse. Deux signaux convergents = piste. Trois = opportunité.
- Recouper systématiquement avec le scoring de niche avant de recommander.
