# Fichier de reprise — pour quand tu réouvres le projet

Dernière mise à jour : 2026-08-21

## Demande explicite de l'utilisateur à la réouverture
1. **Changer de modèle LLM** : l'utilisateur trouvait que GLM-5.2 consommait trop de
   tokens pour des tâches basiques. Traité : la session tourne sur un modèle plus
   efficient (deepseek-v4-flash). Si besoin d'ajuster, le proposer au prochain échange.

## Où on en est dans le pipeline
- **Phase 1 (Recherche marché, gate G1)** : EN APPROFONDISSEMENT (non validé).
  - 13 niches scorées. TOP 3 : 1) Daily affirmations (7.20), 2) Mood tracker (7.00),
    3) Gratitude journal (6.55).
  - **Croisement iOS réalisé (2026-08-21)** : ne change pas le classement, le renforce.
    Daily affirmations #1 affermi (leader « I am » 728k reviews iOS / 2014 + entrants
    récents qui cassent). Voir `brain/rapports/2026-08-21-phase1-ios-crosscheck.md`.
  - **L'utilisateur n'a PAS validé le gate G1.** Il veut prendre son temps (au moins
    une semaine) et faire une vraie étude de marché approfondie avant de choisir une
    niche. Ne pas le presser. (« Mon but n'est pas de courir comme un lapin pour
    prendre une première application pourrie. »)

## Appfigures — constat IMPORTANT (2026-08-21)
- Client câblé (`tools/scrapers/appfigures.js`, probe d'accès) mais **inutilisable pour
  la recherche concurrentielle sur le plan free** : l'add-on **Public Data API** (payant,
  en crédits) est requis. Sans lui, `products/search`, `products/{store}/{id}`, `ranks`,
  `reviews`, `reports/ratings` renvoient 403/404 pour toute app non possédée.
- **Décision** : on ne dépend PAS d'Appfigures. Les scrapers gratuits
  (google-play-scraper + app-store-scraper) fournissent la même donnée concurrentielle.
  Réévaluer Appfigures uniquement si l'utilisateur active Public Data (utile plus tard
  pour les apps du compte : ranks/ratings/sales historiques).
- Clés toujours valides (root 200, user id 526698, 1000 appels/j, usage 0).

## Prochaines étapes quand l'utilisateur reprend
1. Continuer l'étude de marché approfondie SANS presser l'utilisateur sur le gate G1.
2. Si approfondissement supplémentaire : avis utilisateurs iOS (nouveau `ios-reviews.js`)
   sur les leaders de la niche #1 pour affiner les gaps (la phase 2 / analyse-avis reste
   gated sur G1).
3. Quand l'utilisateur valide G1 : lancer la phase 2 (analyste-concurrents) sur les 5
   appId daily affirmations listés dans `pipeline/etat.md` + le nouvel `ios-reviews.js`.

## Fichiers modifiés/créés pendant cette session (2026-08-21)
- `tools/scrapers/appfigures.js` : nouveau (client Appfigures thin + probe).
- `tools/scrapers/ios-search.js` : nouveau (recherche App Store).
- `tools/scrapers/ios-reviews.js` : nouveau (avis App Store).
- `brain/rapports/2026-08-21-phase1-ios-crosscheck.md` : nouveau (croisement TOP3).
- `brain/logs/2026-08-21-phase1-deepening-ios.md` : nouveau.
- `brain/tendances.md`, `brain/learnings.md` : enrichis.

## Fichiers créés pendant la session précédente (2026-08-21)
- `config/api-keys.env` : ajout des 4 variables Appfigures (était 1 vide).
- `pipeline/etat.md` : niche proposée (daily affirmations) + file d'attente + concurrents
  phase 2 identifiés (à NE PAS lancer tant que G1 non validé).
- `brain/rapports/2026-08-21-phase1-recherche-marche.md`, `brain/niches.md`,
  `brain/tendances.md`, `brain/learnings.md`, `brain/logs/2026-08-21-phase1-recherche.md`.

## Rappel important (AGENTS.md)
- Pas de franchissement de gate sans validation explicite de l'utilisateur.
- L'utilisateur veut une étude de marché approfondie (plusieurs jours à une semaine)
  avant de valider G1. Ne pas le presser.
- DATA-FIRST : toute recommandation s'appuie sur des données scrapées.
