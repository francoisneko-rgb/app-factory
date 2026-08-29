# Enseignements
Ce qui a marché, ce qui a échoué, les frictions de la chaîne. Alimenté après chaque
lancement et chaque friction rencontrée.

| Date | App/Phase | Problème ou succès | Enseignement | Action corrective |
|---|---|---|---|---|
| 2026-08-21 | Phase 1 (scrapers) | Les scrapers `tools/scrapers/*.js` utilisaient l'ancienne API CJS de `google-play-scraper` ; la v10 installée est ESM avec export `.default` → `gplay.search is not a function` | Toujours vérifier la version d'une lib scraper avant exécution ; l'API change entre majeurs | Corrigé : `require('google-play-scraper').default` ajouté sur les 5 scrapers GP. Documenter dans un check-setup |
| 2026-08-21 | Phase 1 (scrapers) | `top-charts.js` v10 ne expose que TOP_FREE/TOP_PAID/GROSSING (pas NEW_FREE/NEW_PAID) | Ne pas dépendre des collections « nouveautés » en v10 | Détection des nouveautés via le champ `released` des apps des charts |
| 2026-08-21 | Phase 1 (scrapers) | `scrape-search.js` ne renvoie pas le champ `installs` (uniquement via `scrape-app.js`) | La recherche sert à la découverte + mots clés ; les volumes s'obtiennent app par app | Toujours compléter par `scrape-app.js` sur les leaders avant de scorer |
| 2026-08-21 | Phase 1 (Appfigures) | Le plan « Free Forever » liste des features (ratings, ranks, reviews, public) MAIS sans l'add-on payant **Public Data API**, tout endpoint sur une app non possédée renvoie 403 « Partner API Access required » / 404 | La liste `accessible_features` du root ne garantit pas l'accès réel aux données concurrentes ; il faut activer l'add-on en crédits | Testé réellement : seul `/` répond. Pour la recherche concurrentielle, utiliser les scrapers gratuits (google-play-scraper + app-store-scraper) qui donnent la même donnée. Réévaluer Appfigures uniquement pour les apps du compte ou si l'add-on est activé |
| 2026-08-21 | Phase 1 (App Store) | `scrape-app-ios.js` (app-store-scraper) : le volume de notes s'appelle `reviews` (pas `usersRatingCount`), `score` = note moyenne ; `released`/`updated` en ISO | Connaître le schéma de réponse avant de scorer | `ios-search.js` + `ios-reviews.js` créés ; `reviews` = compteur de notes |
