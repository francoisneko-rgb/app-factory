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

## Clusters sondés (43 clusters, ~200 000 mots-clés)

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

### Nouveaux clusters sondés le 30/08 (7 ajoutés, vague 3)
| Cluster | Fichier CSV | # mots bruts | Meilleure pépite (pop/comp) | Statut |
|---|---|---|---|---|
| musique-outils | `musique-outils.csv` | 5 296 | guitar tuner, piano, drum machine, beat maker | 🟢 À approfondir |
| seniors-vie | `seniors-vie.csv` | 2 459 | senior phone, genealogy, old photos restore | 🟢 À approfondir |
| art-creatif | `art-creatif.csv` | 2 236 | drawing, knitting, crochet, embroidery | 🟢 À approfondir |
| collection-hobby | `collection-hobby.csv` | 1 259 | LEGO, vinyl, coin, stamp | 🟡 |
| outdoor-nature | `outdoor-nature.csv` | 1 160 | hiking, camping, geocaching, mushroom | 🟢 À approfondir |
| bricolage-diy | `bricolage-diy.csv` | 1 140 | woodworking, home improvement | 🟡 |
| religion-autre | `religion-autre.csv` | 209 | hindu, buddhist, judaism | 🟡 |

### Nouveaux clusters sondés le 30/08 (8 ajoutés, vague 4)
| Cluster | Fichier CSV | # mots bruts | Meilleure pépite (pop/comp) | Statut |
|---|---|---|---|---|
| productivite-etude | `productivite-etude.csv` | 19 579 | pomodoro, flashcards, study planner | 🟢 À approfondir |
| voyage-itineraires | `voyage-itineraires.csv` | 9 170 | trip planner, flight tracker, packing | 🟢 À approfondir |
| finance-personnelle | `finance-personnelle.csv` | 8 120 | budget, expense, investment, crypto, debt | 🟢 À approfondir |
| fitness-specifique | `fitness-specifique.csv` | 4 601 | yoga, pilates, pedometer, kettlebell | 🟢 À approfondir |
| immobilier-maison | `immobilier-maison.csv` | 3 764 | real estate, mortgage, apartment | 🟡 |
| communication-proches | `communication-proches.csv` | 2 079 | family locator, find my phone | 🟢 À approfondir |
| voiture-transport | `voiture-transport.csv` | 1 953 | fuel, car maintenance, parking, driving test | 🟡 |
| jeux-2d | `jeux-2d.csv` | 1 034 | merge, match 3, bubble shooter | 🟡 |

**TOTAL : 43 clusters sondés, ~200 000 mots-clés bruts.**

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

---

# 📊 ANALYSE DES CLUSTERS — quels sont les plus prometteurs ? (2026-08-30)

> Méthode : croisement des **pépites réelles** extraites des CSV (pop≥30 & comp<60, non-marques,
> longue traîne 2+ mots) avec les **niches déjà approfondies** (revenus réels Appfigures) et la
> **faisabilité React Native**. ⚠️ Les CSV bruts contiennent du bruit (marques, mots hors-sujet où
> les grosses apps rankent par hasard) — l'analyse ci-dessous filtre ce bruit.

## 🏆 TIER 1 — CLUSTERS LES PLUS PROMETTEURS (demande forte + concurrence battable + faisable)

### 1. Challenges 75 jours — déjà validé (le plus solide)
- Pépites : `75 day challenge (49/59)`, `75 hard challenge (41/48)`, `75 soft challenge (34/59)`, `her 75 (44/44)`
- Pourquoi : marché **fragmenté** (aucun géant), l'app "officielle" notée 2.5★, entrants récents.
  Stack React Native **très simple** (1/5). Monétisation abonnement.
- Revenus constatés : les leaders font quelques K$/mois mais le marché est prenable.

### 2. Fitness / workout planner — demande énorme, comp battable sur les mots précis
- Pépites : `workout planner (52/58)`, `workout app free (50/48)`, `weight tracker (48/36)`,
  `fitness app (52/57)`, `workout: planner (53/40)`
- Pourquoi : fitness = demande massive (64+). Les mots "planner/tracker" ont comp 36-58 (battable).
  Un produit React Native avec **planning + suivi + progression** est faisable (2/5).
- Attention : les géants (MyFitnessPal, Fitbod) dominent les mots génériques, il faut viser
  les **longue traîne** (workout planner, weight tracker).

### 3. Timers sport (interval / tabata / boxing) — comp ULTRA basse
- Pépites : `interval timer (56/13)` ⭐, `interval timer:(56/53)`, `boxing timer (47/59)`,
  `darts scorer (42/42)`, `crossfit open (34/30)`
- Pourquoi : **compétitivité 13-30** = quasi aucune barrière. Demande réelle (47-56).
  Stack ultra simple (1/5). Marché de niche sport précis (boxing, crossfit, darts).
- Revenus constatés : Interval Timer ~$50K/mois.

### 4. Meals prep planner — déjà validé et approfondi ($50-65K/mois)
- Pépites : `factor meals (56/44)`, `menu fit (54/36)`, `blood pressure app for iphone (52/47)` (cross-niche)
- Pourquoi : 3 leaders à $50-65K/mois, ReciMe à $3M. Stack RN faisable (3/5).
- Déjà analysé en détail : `references/meal-prep-planner/`.

### 5. Watch faces — déjà validé ($100K+)
- Pépites : `watch faces free (31/50)`, `smart watch app (37/51)`, `wear os (43/46)`
- Pourquoi : monétisation PROUVÉE (Facer $100-140K, Clockology $35K). RN faisable (3/5, module watchOS).

### 6. Code de la route / theory test (voiture-transport) — pépite surprise
- Pépites : `theory test (67/57)` ⭐, `4 in 1 theory test (54/44)`, `theorie 24 (52/40)`,
  `driving test cancellations (48/52)`
- Pourquoi : **demande 67** (très forte), comp 44-57 (battable). Stack très simple (quiz/flashcards).
  Cross-niche avec productivité/étude.

## 🥈 TIER 2 — TRÈS BONS CANDIDATS (à creuser)

### 7. Jeux casual / réflexion (non-3D) — RN friendly
- Pépites : `word games (62/59)`, `sudoku free no ads (56/46)`, `word search puzzles for adults (51/55)`,
  `belote gratuit (54/40)`, `coin identifier free app (36/49)`
- Pourquoi : mots à comp 40-59, demande réelle. Idéal React Native (jeux 2D simples).
  Monétisation pub/IAP. 🟢 fort.

### 8. Islam — déjà validé (demande solide multi-pays)
- Pépites : `muslim pro (54/59)`, `qibla boussole (40/53)`, `namaz vakitleri (43/29)`,
  `coran francais (42/48)`, `rencontre musulman (35/20)` ⭐ (dating musulman comp 20 !)
- Pourquoi : demande sur plusieurs mots (quran, prayer, qibla, azkar), comp modérée.
  Stack simple. Monétisation abonnement.

### 9. Bien-être mental / journaling — demande forte mais leaders établis
- Pépites : `how we feel (57/59)`, `gratitude plus (49/57)`, `anxiety relief games (34/55)`,
  `stoic` (43/60, déjà validé), `diary (51/67)`
- Pourquoi : Calm/Headspace dominent les gros mots, mais les **sous-niches** (gratitude, stoïque,
  anxiété, self-love) restent battables. Stack simple.

### 10. Psychologie / neurodiversité (ADHD, hypersensibilité, thérapie)
- Pépites : `grow therapy (54/53)`, `how we feel (57/59)`, `adhd planner` (36/92 fort mais cher),
  `anxiety` (demande)
- Pourquoi : les apps ADHD sont en plein boom (Tiimo, ADHD Organizer). Demande réelle mais
  compétition IA naissante. Angle à trouver (ADHD women, HSP).

### 11. Femmes-santé (maternité, ménopause, cycle)
- Pépites : `pregnancy test checker (47/53)`, `peptide tracker (53/58)`, `clear tok (51/40)`,
  `contraction timer (60/65)` (déjà validé en timers)
- Pourquoi : marché durable (santé féminine), Flo/Ovia dominent mais niches battables.
  Stack simple. Sensibilité données à respecter.

### 12. Sommeil / sons (white noise, décibel)
- Pépites : `decibel meter free (36/48)`, `noise level meter (31/50)`, `db meter (45/56)`,
  `white noise` (34/66), `brown noise` (33/62), `snorelab` (39/61)
- Pourquoi : BetterSleep/SnoreLab monétisent bien ($500K+). Sons = contenus réutilisables.

## 🥉 TIER 3 — À SUIVRE (potentiel mais plus risqué ou complexe)

### 13. Animation musique / créatif
- Pépites : `music making app (32/59)`, `metronome gratuit (45/45)`, `gitarre stimmen (46/51)`
- Pourquoi : audio = plus technique RN. Mais sous-niches accordeur/métronome simples.

### 14. Animaux / oiseaux (identification)
- Pépites : `bug identifier (51/48)`, `dog whistle (49/47)`, `free bird song identifier (32/54)`
- Pourquoi : demande réelle (49-52), comp battable (47-54). Merlin domine mais niches libres.

### 15. Immobilier / location
- Pépites : `rental homes (52/27)` ⭐, `commercial real estate (39/56)`, `tenant cloud (33/53)`
- Pourquoi : `rental homes` comp 27 = très battable. Mais marché B2C difficile (Zillow/Redfin).

### 16. Outdoor / nature
- Pépites : `fishing license (33/47)`, `deep dive fishing (31/59)`, `geocaching`
- Pourquoi : niches hobby fidèles, monétisation abonnement. Plus petit volume.

### 17. Pêche
- Pépites : `fishing license (33/47)`, `fishing booker (30/42)`, `onx hunt` (59/77)
- Pourquoi : Fishbrain leader, mais outils licence/spots battables.

## 🚫 CLUSTERS À ÉCARTER (dans l'état actuel)
- **christianisme** : 0 pépite battable (YouVersion/Bible dominent, comp 93+). Sauf sous-niche très fine.
- **religion-autre** (hindu/bouddhiste/juif) : trop peu de volume (3 pépites).
- **motion-games** (Just Dance) : 5 pépites, besoin capteur motion → complexe RN, demandes faibles.
- **outils-telephone** : pépites rares, marché très fragmenté.
- **seniors-vie** : belles idées mais volume faible (16 pépites, surtout niche mormone/religieuse).

## 💎 LE RÉSUMÉ POUR DÉCIDER (top 8 à considérer pour une première app)
1. **Challenges 75 jours** — simple, marché fragmenté, demande validée
2. **Timers sport** (boxing/crossfit/darts) — comp 13-30, ultra simple
3. **Workout planner** — demande massive, comp battable sur longue traîne
4. **Meal prep planner** — déjà analysé ($50-65K/mois)
5. **Theory test / code de la route** — demande 67, comp battable, quiz simple
6. **Jeux réflexion 2D** (word/sudoku/belote) — RN friendly, comp 40-59
7. **Islam** — demande multi-pays, plusieurs angles battables
8. **Watch faces** — monétisation prouvée ($100K+)

> Prochaine étape suggérée : choisir 1-2 de ces clusters → analyse concurrentielle approfondie
> (rankings, revenus, avis, screenshots) → PRD.
