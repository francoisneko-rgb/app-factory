---
name: scraping-concurrents
description: Télécharge metadata, avis, screenshots et icônes des apps concurrentes.
---
# Scraping concurrents

## Outils (dans tools/scrapers/, npm install déjà fait)
- `node scrape-app.js <packageName> [pays] [langue]` — metadata complète Google Play
- `node scrape-app-ios.js <appId> [pays]` — metadata complète App Store
- `node scrape-reviews.js <packageName> <nombre>` — avis Google Play (JSON)
- `node download-assets.js <packageName> <dossier>` — icône + screenshots en PNG
- `node top-charts.js [catégorie]` — top charts Google Play

## Organisation des données
Tout dans `brain/apps/<app>/concurrence/<concurrent>/` :
- `metadata.json` — metadata brute
- `avis.json` — avis extraits
- `assets/` — icône + screenshots (RÉFÉRENCES du gauntlet-loop, ne pas effacer)

## Règles
- Scraper les 5 à 10 leaders, pas plus (signal > bruit).
- Toujours sauvegarder le JSON brut avant toute analyse.
- Pays/langue par défaut : marché cible de l'app (us/en sauf indication contraire).
