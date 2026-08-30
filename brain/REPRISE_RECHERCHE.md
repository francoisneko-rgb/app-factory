# REPRISE — Recherche de marché (état à jour, un seul fichier de travail)

Dernière mise à jour : 2026-08-30 (jour 4, fin)
Accès payants Appfigures : ~3 jours restants.

## ✅ ÉTAT FINAL JOUR 4 (2026-08-30) — RECHERCHE MARCHÉ COMPLÈTE
**La recherche de marché est terminée** : 60 clusters sondés (~340 000 mots-clés bruts),
~30 clusters approfondis avec revenus Appfigures confirmés + avis + screenshots.
Voir règle 17 AGENTS.md pour le résumé complet + INDEX_CLUSTERS.md pour le détail.
- Les 60 CSV de mots-clés bruts : `brain/marche/mots-cles/`
- Les analyses approfondies : `references/<cluster>/analyse-globale.md`
- Les 3 plus gros gaps documentés : Facer (watch-faces, leader cassé), Planta (soin plantes
  honnête), post-partum (femmes-santé).
- **PROCHAINE ÉTAPE** : choix utilisateur d'1-2 sous-niches → PRD (G3).

> ⚠️ **PRÉFÉRENCES UTILISATEUR (à respecter absolument)**
> - **Updates FRÉQUENTS** : points réguliers, pas de longs silences.
> - **PAS DE BOUCLE** : ne jamais tourner des heures sur une même tâche. Si blocage → s'arrêter, sauvegarder, point.
> - **ORGANISATION STRICTE** : UN SEUL fichier de travail par tâche. PAS de duplication de données
>   dans plusieurs fichiers. L'utilisateur ne consulte qu'un ou deux fichiers.
> - **FICHIER DE TRAVAIL UNIQUE (données marché)** : `brain/marche/scoring/appfigures-insights.csv`
>   = TOUS les mots-clés + popularité + compétitivité, format STRICT `keyword,popularity,competitiveness`
>   (une ligne = un mot-clé, PAS d'URL, PAS de nom d'app dans ce fichier). Trié par popularité décroissante.
>   Ne PAS créer d'autre fichier CSV qui duplique ces données.
> - Les apps leaders + liens App Store vivent dans `appfigures_raw/rankings_*.csv` et `references/<niche>/`
>   (PAS dans le fichier de mots-clés).
> - Le fichier contient aujourd'hui **1182 mots-clés propres** (reconstruction 2026-08-29
>   depuis scored_all.json + localstorage_scrape.json + les lignes valides de l'ancien insights).
>   Format strict `keyword,popularity,competitiveness`. Un `.bak` existe à côté.
> - **NE JAMAIS SUPPRIMER de fichier de données** sans validation. Toujours faire un .bak avant toute fusion.

## ⚠️ RÈGLE D'ORGANISATION (2026-08-30, IMPORTANT)
> - **TOUTE l'étude de marché / mots-clés vit dans UN SEUL dossier consultable** :
>   `brain/marche/mots-cles/`. L'utilisateur ne regarde QUE ce dossier.
> - **Format = CSV uniquement** pour tout ce que l'utilisateur doit lire (LibreOffice).
>   JAMAIS de JSON pour l'utilisateur. Les JSON bruts vont dans `mots-cles/_brut/` (archivage caché).
> - **Un CSV par cluster** dans `mots-cles/` (nom = cluster, ex. `fitness-workout.csv`),
>   colonnes uniformes : `cluster,keyword,popularity,competitiveness,apps,rank`.
> - **`mots-cles/INDEX_CLUSTERS.md` = LE fichier d'entrée** que l'utilisateur lit en premier
>   (tableau récap des clusters, # mots, meilleures pépites, statut).
> - Un cluster n'est approfondi (dossier `references/<cluster>/` + screenshots + monétisation)
>   QUE s'il est prometteur (pop≥30 & comp<80) et validé.
> - Ne JAMAIS disperser les données de marché dans plusieurs dossiers sans raison.
> - FOURNIR de la DATA brute pour que l'utilisateur tranche LUI-MÊME. Donner ~30+ niches, pas un top 3 fermé.
> - Seuils élargis : ne pas écarter une piste juste parce qu'elle n'est pas "top 3".
> - **JAMAIS de libellé inventé** : les noms de dossiers/niches doivent être le mot-clé EXACT de la data
>   (ex. "chores" et "chores tracker", PAS "chores-kids" que j'avais inventé). Ne pas ajouter d'intention
>   ("pour enfants", "pour seniors"...) sans que la data ne la montre.
> - **Méthode de tri** : la popularité brute MENT (les géants gemini/subway/tesla sont en haut mais
>   inutilisables, comp 90-100). Utiliser la colonne `score` (pop - comp) ou le filtre pop≥30 ET comp<80.
>   209 mots-clés sont de vraies opportunités dans le fichier.
> - Présenter TOUTES les opportunités à l'utilisateur (209), pas seulement 5 "validés".
> - **NE PAS RÉÉCRIRE appfigures-insights.csv** : l'utilisateur le colorie/l'organise. N'ajouter que
>   de nouvelles lignes en FIN de fichier. Ne jamais remplacer les lignes existantes (perte de coloriage).
> - **SEUILS APFIGURES** (règle empirique, standards ASO) :
>   - Popularité ≥ 40 = demande réelle · ≥ 30 = minimum intéressant · < 25 = trop faible.
>   - Compétitivité < 60 = très battable · 60-75 = modéré (battable en spécialisant) ·
>     > 75 = dur · > 85 = quasi impossible (géants).
>   - **CIBLE : Popularité ≥ 40 ET Compétitivité ≤ 60** (demande réelle + pas de géant).
> - **LACUNE CONFIRMÉE (2026-08-29)** : je n'ai pas assez creusé les MOTS-CLÉS LONGUE TRAÎNE
>   (ex. "journaling for seniors", "meditation for women") avec AppFigures. Le fichier a surtout
>   des mots génériques (546 mots à 1 terme). C'EST le travail prioritaire que AppFigures doit
>   servir à faire avant expiration (~5 jours). Funnel longue traîne : mot générique → déclinaisons
>   (audience, usage, objet) → scorer chaque déclinaison sur AppFigures.
> - **SAUVEGARDER à chaque validation/étape importante** : git commit + push après chaque
>   décision validée par l'utilisateur.
> - **ÉCHEC À NE PAS RÉPÉTER (2026-08-29)** : j'ai supprimé consolidation_mots_cles.csv (doublon perçu)
>   alors que l'utilisateur y voyait des infos utiles. RÈGLE : avant toute fusion/suppression,
>   garder un .bak, et TOUJOURS conserver le fichier le plus riche. Ne supprimer que sur validation
>   explicite de l'utilisateur.
> - **NE PAS FILTRER/TRIER POUR L'UTILISATEUR (décision 2026-08-30, IMPORTANT)** : l'utilisateur veut
>   TOUTES les données brutes en CSV, sans filtre pop/comp ni tri. Il trie/filtre lui-même dans
>   LibreOffice. Un CSV ne doit JAMAIS être limité à un sous-ensemble de mots-clés (ex. pop≥30 & comp<80).
>   Donner le maximum de mots possible (des milliers par cluster), surtout avant perte d'accès aux
>   outils payants. Les CSV par cluster = TOUTES les lignes brutes, colonnes
>   `cluster,app,keyword,popularity,competitiveness,num_apps,rank,importance`.

## CONTEXTE / DÉCISIONS
- Stack **React Native**. Focus **iOS**. PAS de FR par défaut. Méthodologie sous-niche.
- Données Appfigures payantes = SAUVEGARDER avant expiration (~6 jours).

## FICHIERS CLÉS (organisés, pas de doublons)
- **`brain/marche/scoring/appfigures-insights.csv`** → LE fichier de travail unique (1182 mots-clés, pop/comp).
- `brain/marche/scoring/MEILLEURES_NICHES.md` → synthèse des clusters (65+) + verdicts.
- `brain/marche/scoring/VUE_ELARGIE_45_NICHES.md` → les 45+ niches à faire valider (LE fichier pour trancher).
- `brain/REPRISE_RECHERCHE.md` → ce fichier = mémoire/état.
- `references/<niche>/analyse-globale.md` → analyse concurrentielle détaillée par niche approfondie.
- `brain/marche/scoring/appfigures_raw/` → related/rankings par pépite (données payantes brutes).
- `brain/marche/v4/scored_all.json` → données brutes du scraping (source, ne pas consulter directement).
- `brain/marche/scoring/mybestKWconsolidation_mots_cles.csv` (32 mots-clés triés par l'utilisateur),
  `recap_pepites_appfigures.csv` (pépites) → vues thématiques, PAS des doublons du fichier de travail.

## ✅ SAUVEGARDE GITHUB (configuré 2026-08-29)
- **Repo : https://github.com/francoisneko-rgb/app-factory** (public), branche `main`.
- Outil : `gh` (GitHub CLI) installé et connecté en tant que `francoisneko-rgb`.
- Procédure : `git add -A` → `git commit` → `git push origin main`.
- `.gitignore` exclut : images/audio/vidéo (png, jpg, mp4...), APK/IPA/archives, `.env`,
  `config/api-keys.env`, snapshots `.playwright-mcp/`, `brain/logs/`.
- Règle : **faire un commit + push régulier** après chaque étape significative (la donnée de
  recherche ne doit plus jamais être perdue).

## NICHE APPROFONDIES AVEC REVENUS (2026-08-29) — nouvelles pistes validées à l'analyse
| Niche | Pop/Comp | Leader | Revenue/mois | Modèle | Verdict |
|---|---|---|---|---|---|
| **watch faces** | 53/70 | Watch Faces by Facer | **$100K** (Facer total $140K) | Subs+IAP | ✅ 4/5, approfondir |
| **medication reminder** | 36/65 | Medisafe | **$55K** | Subs+IAP | ✅ 4/5, stack simple |

Détails : `references/watch-faces/analyse-globale.md`, `references/medication-reminder/analyse-globale.md`.

## TOP NICHES (récapitulatif élargi — voir VUE_ELARGIE pour le détail complet)
Pickleball (34/28), Timers sport (40-60/42-61), Islam (40-60/58-73), Mobility (53/58),
Challenges 75 jours (34-55/52-62), Astrologie (47-62/45-72), Voice changer (62/60),
Fishing (46-60/60-73), **Watch faces (53/70)**, **Medication reminder (36/65)**, + 35 autres
dans VUE_ELARGIE_45_NICHES.md.

## PROBLÈME NA CORRIGÉ (2026-08-29)
- Re-scrape des 57 mots NA : 3 vrais ajouts (watch faces 53/70, medication reminder 36/65,
  launcher 33/63). Le reste = micro-mots (pop 5) sans intérêt.
- LEÇON : pour tout NA, re-vérifier à la main les mots plausibles avant d'écarter.

## PROCHAINES ÉTAPES
1. **L'utilisateur valide d'autres niches** depuis le CSV/VUE_ELARGIE (il trouve qu'on a
   sélectionné trop peu de pistes).
2. Approfondir les niches choisies (rankings + revenue Appfigures + fiche analyse-globale).
3. Décision finale → PRD (G3).

## ✅ REPRISE DEMAIN (2026-08-29 au coucher) — MÉTHODE VALIDÉE LONGUE TRAÎNE
**Ce que l'utilisateur veut (règle 15 AGENTS.md) :**
- **L'utilisateur choisit 30-50 thèmes/seeds** (jamais 3-5). L'agent ne choisit PAS pour lui.
- La vraie matière = les POOLS d'autocomplétion intacts (188k mots) : v1 60k/353 seeds,
  v2 53k/393, v3 11k/281, v4 63k/682. Format keyword,seed.
- **Liste des seeds à montrer à l'utilisateur** : `brain/marche/longue-traine/seeds-complets.csv`
  (1597 seeds uniques, colonne seed+pool). C'est LA source pour l'ÉTAPE 1.
- **ÉTAPE 1** : montrer les seeds classés par thème → l'utilisateur en choisit 30-50.
- **ÉTAPE 2** : pour chaque thème, creuser les déclinaisons longue traîne depuis les pools +
  scorer sur AppFigures (pop/comp).
- **ÉTAPE 3** : tracer chaque requête (mot, résultat, "scoré"/"pas continué"). 3-4 échecs → passer
  au thème suivant (pas de boucle).
- **ÉTAPE 4** : remonter les données scorées, L'UTILISATEUR valide.
- **STRUCTURE** : dossier `brain/marche/longue-traine/` (seeds-a-explorer.csv, requetes-scorees.csv),
  ajouter les mots en FIN d'appfigures-insights.csv (sans toucher l'existant ni le coloriage).
- **AppRadar = à désabonner** (ne sert pas au workflow).
- **Fichier de travail protégé** : ne jamais réécrire les lignes existantes de appfigures-insights.csv
  (l'utilisateur le colorie).

## À VÉRIFIER À LA REPRISE
- Session Appfigures toujours active (~5 jours restants). Si expirée → informer l'utilisateur.
- Le fichier `appfigures-insights.csv` contient 1182 mots + colonne score. 209 vraies opportunités
  (pop>=30 & comp<80).

## OUTILS
- Scrapers : tools/scrapers/. Template re-scrape safe : brain/marche/v4/batches/chunks/recheck_na_v2.js.
- Session Appfigures via Playwright (francoiscoiscois@hotmail.com / Thailand2012+).
- Règles de sauvegarde : données payantes dans appfigures_raw/ + logs dans brain/logs/.