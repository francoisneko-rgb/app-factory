# INDEX — CLUSTERS DE MOTS-CLÉS (étude de marché)

> 📌 **COMMENCE ICI.** Tous les mots-clés par cluster sont dans ce dossier.
> Format : **un CSV par cluster** = TOUTES les données brutes, SANS filtre.
> Colonnes : `cluster,app,keyword,popularity,competitiveness,num_apps,rank,importance`
> (une ligne = 1 mot-clé d'une app). L'utilisateur trie/filtre lui-même dans LibreOffice.
> Données brutes JSON (source) : dossier `_brut/` (archivage, pas à consulter directement).

## Méthode
Reverse keyword mining Appfigures : pour chaque cluster, extraction des **organic keywords**
(mots où les apps rankent réellement) des apps leaders, avec pop/comp/rank pour CHAQUE mot.
= demande prouvée (pas d'autocomplétion).

## Clusters sondés (28 clusters, ~147 000 mots-clés)

| Cluster | Fichier CSV | # mots bruts | Meilleure pépite (pop/comp) | Statut |
|---|---|---|---|---|
| fitness-workout | `fitness-workout.csv` | 16 216 | workout planner (54/40), weight tracker (48/36), workout app (50/48) | 🟢 À approfondir |
| bien-etre-mental | `bien-etre-mental.csv` | 14 641 | — | 🟢 À approfondir |
| education-kids | `education-kids.csv` | 11 743 | learning games for kids (55/48), educational games for kids (31/48) | 🟢 À approfondir |
| repas-nutrition | `repas-nutrition.csv` | 11 905 | meal prep planner (32/NA) | 🟢 Déjà approfondi |
| christianisme | `christianisme.csv` | 7 428 | — | 🟡 |
| islam | `islam.csv` | 4 986 | — | 🟢 Déjà validé |
| journaling-prod | `journaling-prod.csv` | 4 736 | tagebuch (43/45), xmind (42/47) | 🟢 |
| sommeil-sons | `sommeil-sons.csv` | 4 568 | white noise, brown noise | 🟢 |
| plantes-jardin | `plantes-jardin.csv` | 4 275 | plant identifier | 🟢 |
| sante-suivi | `sante-suivi.csv` | 4 174 | medication reminder | 🟢 Déjà approfondi |
| media-lecture | `media-lecture.csv` | 5 363 | bookmory, language | 🟡 |
| photo-voix-ia | `photo-voix-ia.csv` | 5 553 | voice changer | 🟢 |
| animaux-oiseaux | `animaux-oiseaux.csv` | 3 060 | dog whistle, bird identifier | 🟢 |
| utilitaires | `utilitaires.csv` | 3 117 | — | 🟡 |
| astrologie | `astrologie.csv` | 2 100 | astrotalk, co-star | 🟢 |
| fitness-timers | `fitness-timers.csv` | 2 349 | interval timer | 🟢 |
| sports-boxing | `sports-boxing.csv` | 2 410 | pickleball, boxing timer | 🟢 |
| watch-faces | `watch-faces.csv` | 1 999 | watch faces | 🟢 Déjà approfondi |
| peche-pleinair | `peche-pleinair.csv` | 910 | fishing | 🟡 |
| challenges-75j | `challenges-75j.csv` | 640 | 75 hard | 🟢 Déjà validé |

### Nouveaux clusters sondés le 30/08 (8 ajoutés)
| Cluster | Fichier CSV | # mots bruts | Meilleure pépite (pop/comp) | Statut |
|---|---|---|---|---|
| psychologie-mental | `psychologie-mental.csv` | 10 777 | ADHD planner, anxiety, CBT | 🟢 À approfondir |
| langues-apprentissage | `langues-apprentissage.csv` | 6 997 | learn spanish, japanese, duolingo | 🟢 À approfondir |
| femmes-sante | `femmes-sante.csv` | 6 819 | pregnancy, period, menopause | 🟢 À approfondir |
| regimes-specifiques | `regimes-specifiques.csv` | 6 327 | keto, carnivore, paleo, fasting | 🟢 À approfondir |
| outils-telephone | `outils-telephone.csv` | 5 190 | TV remote, screen mirror, connect PC | 🟡 |
| jeux-casual | `jeux-casual.csv` | 3 510 | chess, mahjong, solitaire, word, sudoku | 🟢 À approfondir |
| seniors-sante | `seniors-sante.csv` | 2 432 | brain training, senior fitness | 🟢 À approfondir |
| motion-games | `motion-games.csv` | 269 | Just Dance like | 🟡 |

**TOTAL : 28 clusters sondés, ~147 000 mots-clés bruts.**

## Lecture des scores
- **Popularity** : demande réelle. ≥40 = forte, ≥30 = minimum intéressant, <25 = faible.
- **Competitiveness** : <60 = très battable, 60-75 = modéré, >75 = dur.
- **Num_apps** : nombre d'apps dans le résultat de ce mot.
- **Rank** : position de l'app leader sur ce mot (plus bas = mieux ranké).
- **Importance** : poids du mot pour l'app source.

## Statuts
- 🟢 = cluster à approfondir → créer un dossier `references/<cluster>/`
- 🟡 = à voir
- ⚪ = pas encore sondé
