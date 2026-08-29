# REPRISE — Recherche de marché (état à jour, un seul fichier de travail)

Dernière mise à jour : 2026-08-29 (jour 3)
Accès payants Appfigures/AppRadar : ~6 jours restants.

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
> - Le fichier contient aujourd'hui **1182 mots-clés propres** (reconstruction 2026-08-29).
>   Un `.bak` existe à côté (appfigures-insights.csv.bak).
> - **NE JAMAIS SUPPRIMER de fichier de données** sans validation. Toujours faire un .bak avant toute fusion.
> - FOURNIR de la DATA brute pour que l'utilisateur tranche LUI-MÊME. Donner ~30+ niches, pas un top 3 fermé.
> - Seuils élargis : ne pas écarter une piste juste parce qu'elle n'est pas "top 3".
> - **ÉCHEC À NE PAS RÉPÉTER (2026-08-29)** : j'ai supprimé consolidation_mots_cles.csv (doublon perçu)
>   alors que l'utilisateur y voyait des infos utiles. RÈGLE : avant toute fusion/suppression,
>   garder un .bak, et TOUJOURS conserver le fichier le plus riche. Ne supprimer que sur validation
>   explicite de l'utilisateur.

## CONTEXTE / DÉCISIONS
- Stack **React Native**. Focus **iOS**. PAS de FR par défaut. Méthodologie sous-niche.
- Données Appfigures payantes = SAUVEGARDER avant expiration (~6 jours).

## FICHIERS CLÉS (organisés, pas de doublons)
- **`brain/marche/scoring/appfigures-insights.csv`** → LE fichier de travail unique (1381 mots-clés, pop/comp).
- `brain/marche/scoring/MEILLEURES_NICHES.md` → synthèse des clusters (65+) + verdicts.
- `brain/marche/scoring/VUE_ELARGIE_45_NICHES.md` → les 45+ niches à faire valider (LE fichier pour trancher).
- `brain/REPRISE_RECHERCHE.md` → ce fichier = mémoire/état.
- `references/<niche>/analyse-globale.md` → analyse concurrentielle détaillée par niche approfondie.
- `brain/marche/scoring/appfigures_raw/` → related/rankings par pépite (données payantes brutes).
- `brain/marche/v4/scored_all.json` → données brutes du scraping (source, ne pas consulter directement).
- `brain/marche/scoring/mybestKWconsolidation_mots_cles.csv` (32 mots-clés triés par l'utilisateur),
  `recap_pepites_appfigures.csv` (pépites) → vues thématiques, PAS des doublons du fichier de travail.

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

## OUTILS
- Scrapers : tools/scrapers/. Template re-scrape safe : brain/marche/v4/batches/chunks/recheck_na_v2.js.
- Session Appfigures via Playwright (francoiscoiscois@hotmail.com / Thailand2012+).
- Règles de sauvegarde : données payantes dans appfigures_raw/ + logs dans brain/logs/.