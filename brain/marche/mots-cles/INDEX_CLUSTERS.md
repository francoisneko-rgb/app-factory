# INDEX — CLUSTERS DE MOTS-CLÉS (étude de marché)

> 📌 **COMMENCE ICI.** Récap des clusters + fiches détaillées (note, app, avantages, inconvénients).
> Données : `brain/marche/mots-cles/<cluster>.csv` (toutes les lignes brutes, sans filtre).
> Colonnes CSV : `cluster,app,keyword,popularity,competitiveness,num_apps,rank,importance`.
> JSON sources (archivage) : `_brut/`.
> **60 clusters, ~340 000 mots-clés bruts.** Reverse keyword mining Appfigures (organic keywords
> des apps leaders, avec volume + concurrence pour CHAQUE mot).

---

# 📊 TABLEAU RÉCAPITULATIF (60 clusters)

> Note /10 = demande × concurrence × monétisation × faisabilité RN. 📝 voir fiches détaillées ci-dessous.

## FAMILLE FITNESS / SPORT
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| challenges-75j | `challenges-75j.csv` | 640 | **8/10** | 75 day challenge (49/59), 75 hard challenge (41/48), her 75 (44/44) |
| fitness-timers | `fitness-timers.csv` | 2 350 | **8/10** | interval timer (56/13) ⭐, boxing timer (47/59), darts scorer (42/42) |
| repas-nutrition | `repas-nutrition.csv` | 11 905 | **8/10** | factor meals (56/44), menu fit (54/36) |
| fitness-workout | `fitness-workout.csv` | 16 216 | **7.5/10** | workout planner (52/58), workout app free (50/48), weight tracker (48/36) |
| fitness-specifique | `fitness-specifique.csv` | 4 601 | 6.5/10 | yoga, pilates, pedometer, kettlebell |
| workout-cible | `workout-cible.csv` | 7 415 | 5.5/10 | free workout apps for women (34/53), chair yoga seniors (30/59) |
| voiture-transport | `voiture-transport.csv` | 1 953 | 7/10 | theory test (67/57) ⭐, 4 in 1 theory test (54/44) |
| sports-boxing | `sports-boxing.csv` | 2 411 | 6.5/10 | crossfit open (34/30), boxing timer |

## FAMILLE SANTÉ / BIEN-ÊTRE
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| sante-suivi | `sante-suivi.csv` | 4 174 | 6.5/10 | heat index (39/56), arret tabac (36/40), peptide tracker |
| sommeil-sons | `sommeil-sons.csv` | 4 568 | 6/10 | decibel meter free (36/48), white noise, snorelab |
| femmes-sante | `femmes-sante.csv` | 6 819 | 6.5/10 | pregnancy test checker (47/53), clear tok (51/40), contraction timer |
| seniors-sante | `seniors-sante.csv` | 2 432 | 5.5/10 | brain training, puzzles for adults |

## FAMILLE MENTAL / PSYCHO
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| bien-etre-mental | `bien-etre-mental.csv` | 14 641 | 6.5/10 | how we feel (57/59), gratitude plus (49/57), stoic |
| journaling-prod | `journaling-prod.csv` | 4 736 | 6/10 | tagebuch (43/45), xmind (42/47), diario personal |
| psychologie-mental | `psychologie-mental.csv` | 10 777 | 6.5/10 | grow therapy (54/53), how we feel, adhd planner |
| journaling-specifique | `journaling-specifique.csv` | 4 271 | 5/10 | — (volumes faibles) |
| bien-etre-cible | `bien-etre-cible.csv` | 3 465 | 5/10 | stress watch (54/62) |
| psychologie-specifique | `psychologie-specifique.csv` | 2 574 | 5.5/10 | habit tracker ADHD (58/64) |

## FAMILLE ÉDUCATION / APPRENTISSAGE
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| education-scolaire | `education-scolaire.csv` | 16 006 | 5.5/10 (IA math ⭐) | goth ai math (57/63), math ai (53/54) |
| education-kids | `education-kids.csv` | 11 743 | 7/10 | learning games for kids (55/48), common app (64/48) |
| langues-apprentissage | `langues-apprentissage.csv` | 6 997 | 6/10 | learn spanish, duolingo |
| productivite-etude | `productivite-etude.csv` | 19 579 | 6.5/10 | pomodoro, flashcards, study planner |
| education-codage | `education-codage.csv` | 850 | 5/10 | Tynker, codeSpark |

## FAMILLE JEUX
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| jeux-educatifs-enfant | `jeux-educatifs-enfant.csv` | 22 574 | **8/10** | girl games (61/34) ⭐, offline games (72/45), cooking games (66/68) |
| jeux-2d-hypercasual | `jeux-2d-hypercasual.csv` | 4 125 | **7.5/10** | idle games (61/69), outline (50/37), water sort |
| jeux-casual | `jeux-casual.csv` | 3 511 | 7/10 | word games (62/59), sudoku free (56/46), belote (54/40) |
| jeux-societe | `jeux-societe.csv` | 2 479 | 7/10 | heads up (68/59), free games for adults (60/53), kahoot (62/72) |
| jeux-enfant | `jeux-enfant.csv` | 5 650 | 7/10 | horse games (56/61), animal games (54/58), princess (52/67) |
| jeux-2d | `jeux-2d.csv` | 1 034 | 5.5/10 | merge, match 3, bubble shooter |
| jeux-3d | `jeux-3d.csv` | 15 282 | 6/10 (Unity) | clash royale (76/50), fc mobile (72/52) |

## FAMILLE SPIRITUALITÉ
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| islam | `islam.csv` | 4 986 | 7/10 | muslim pro (54/59), rencontre musulman (35/20) ⭐, qibla boussole |
| astrologie | `astrologie.csv` | 2 101 | 6/10 | astrotalk (56/45), costar, the pattern |
| christianisme | `christianisme.csv` | 7 428 | 3/10 | — (comp 93+, bouché) |
| religion-autre | `religion-autre.csv` | 209 | 3/10 | — (volume trop faible) |

## FAMILLE CRÉATION / CONTENU / DESIGN
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| creation-contenu-rs | `creation-contenu-rs.csv` | 58 953 | 7/10 | faceapp (65/65), pic collage (64/71), dazz cam (67/55) |
| photo-voix-ia | `photo-voix-ia.csv` | 5 553 | 6/10 | voice changer (62/47), design home |
| art-creatif | `art-creatif.csv` | 2 236 | 5.5/10 | drawing, knitting, crochet, embroidery |
| diy-design | `diy-design.csv` | 2 668 | 5/10 | logo maker, mockup, interior design |

## FAMILLE HOBBIES / PASSIONS
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| animaux-oiseaux | `animaux-oiseaux.csv` | 3 060 | 6/10 | bug identifier (51/48), dog whistle (49/47) |
| plantes-jardin | `plantes-jardin.csv` | 4 275 | 6/10 | plant identifier, plant care |
| musique-outils | `musique-outils.csv` | 5 296 | 5/10 | music making app, metronome gratuit (45/45) |
| hobbies-depense | `hobbies-depense.csv` | 1 536 | 6/10 | dji fly (62/53), vivino (48/72), total wine |
| collection-hobby | `collection-hobby.csv` | 1 259 | 5/10 | LEGO, vinyl, discogs |
| outdoor-nature | `outdoor-nature.csv` | 1 160 | 5/10 | hiking, camping, geocaching, mushroom |
| peche-pleinair | `peche-pleinair.csv` | 910 | 5/10 | fishing license (33/47), fishing booker (30/42) |
| bricolage-diy | `bricolage-diy.csv` | 1 140 | 5/10 | woodworking, home improvement |

## FAMILLE VIE PRATIQUE / FINANCE / VOYAGE
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| finance-personnelle | `finance-personnelle.csv` | 8 120 | 6.5/10 | budget planner (51/48), money tracker, debt payoff |
| finance-enfant | `finance-enfant.csv` | 1 266 | 5/10 | rooster money (46/48), kiwipop (35/43) |
| voyage-itineraires | `voyage-itineraires.csv` | 9 170 | 6.5/10 | trip planner, flight tracker, packing |
| immobilier-maison | `immobilier-maison.csv` | 3 764 | 5/10 | rental homes (52/27) ⭐, realtor com (65/45) |
| wedding-occasions | `wedding-occasions.csv` | 2 070 | 6/10 | wedding planning app (41/56), cvent events |

## FAMILLE OUTILS / TECH
| Cluster | CSV | # mots | Note | Pépites clés |
|---|---|---|---|---|
| utilitaires | `utilitaires.csv` | 3 117 | 5/10 | compass, file manager, vpn |
| outils-telephone | `outils-telephone.csv` | 5 190 | 4/10 | fire tv remote (52/56), smart remote |
| communication-proches | `communication-proches.csv` | 2 079 | 5/10 | find my phone (67/73), phone tracker |
| media-lecture | `media-lecture.csv` | 5 363 | 5.5/10 | bookmory, reading tracker |
| watch-faces | `watch-faces.csv` | 1 999 | 7.5/10 | watch faces free (31/50), wear os (43/46) |
| motion-games | `motion-games.csv` | 269 | 4/10 | just dance controller (45/52) |
| seniors-vie | `seniors-vie.csv` | 2 459 | 4/10 | lds tools, gospel library |

---

# 📋 FICHES DÉTAILLÉES PAR CLUSTER

> **Note /10** = demande × concurrence × monétisation × faisabilité RN.
> **Best-seller** = app leader avec REVENU RÉEL mesuré (si connu) — sinon non mentionné.
> **Stack RN** = modules natifs nécessaires au-delà du RN pur.

---

## 🏆 TOP CLUSTERS (notes 7.5-8/10)

### CHALLENGES 75 JOURS — ⭐ 8/10
- **Genre** : tracker de challenge 75 jours (checklists quotidiennes, streaks, rappels, calendrier).
- **Stack RN** : pur RN + notifs locales. Complexité 1/5.
- ✅ Avantages : marché FRAGMENTÉ (aucun géant, l'app officielle notée 2.5★) ; stack ultra simple ;
  demande réelle multi-mots (75 hard, 75 day, 75 soft) ; monétisation abonnement.
- ⚠️ Inconvénients : effet de mode/saisonnier ; beaucoup de clones ; rétention limitée après 1-2 cycles.
- 💰 Best-seller : BeHard 75 Days ~$65K/mois, 75 Hard officiel ~$15K (mais très mal noté → ouvert).

### TIMERS SPORT (interval/tabata/boxing/darts/crossfit) — ⭐ 8/10
- **Genre** : minuteurs spécialisés sport (rounds boxe, EMOM, tabata) + scorekeepers (darts/volley).
- **Stack RN** : pur RN + audio (cloche). Complexité 1/5.
- ✅ Avantages : compétitivité ULTRA basse (interval timer 56/13, crossfit open 34/30) ;
  demande réelle ; stack trivial ; plusieurs sous-niches sport précises.
- ⚠️ Inconvénients : faible valeur perçue → monétisation limitée (freemium/pub) ; concurrence
  des timers génériques iOS ; marché de niche (pas massif).
- 💰 Best-seller : Interval Timer ~$50K/mois.

### MEAL PREP PLANNER — ⭐ 8/10 (déjà approfondi)
- **Genre** : planification de repas + recettes + liste de courses + macros.
- **Stack RN** : RN + API nutrition + (option) IA import recettes. Complexité 3/5.
- ✅ Avantages : monétisation PROUVÉE ($50-65K/mois x3 leaders) ; demande réelle ; gaps clairs
  (macros libres, swap ingrédients, recettes simples) ; ReciMe prouve le potentiel IA ($3M).
- ⚠️ Inconvénients : contenu recettes = travail éditorial constant ; leaders établis 7-13 ans ;
  ReciMe impose la barre de l'import IA.
- 💰 Best-seller : ReciMe ~$3M/mois, eMeals ~$65K, Mealime ~$55K, MealPrepPro ~$50K.

### FITNESS / WORKOUT PLANNER — ⭐ 7.5/10
- **Genre** : planificateur d'entraînement (plans, séances, progression, logs, vidéos).
- **Stack RN** : RN + vidéos + (option) HealthKit. Complexité 2-3/5.
- ✅ Avantages : demande MASSIVE (fitness 64+) ; mots longue traîne battables (workout planner 52/58,
  weight tracker 48/36) ; cross-niche riche (workout + femmes, + seniors, + réhab).
- ⚠️ Inconvénients : géants écrasants (Fitbod $2M, Hevy $1M, Strong $510K) ; contenu vidéo coûteux ;
  rétention difficile.
- 💰 Best-seller : Fitbod ~$2M/mois, Hevy ~$1M/mois, Strong ~$510K/mois.

### WATCH FACES — ⭐ 7.5/10 (déjà approfondi)
- **Genre** : galerie de cadrans Apple Watch + créateur de faces (photos, complications).
- **Stack RN** : RN + module natif watchOS (WatchKit) + galerie. Complexité 3/5.
- ✅ Avantages : monétisation PROUVÉE ($100K+) ; UI des leaders datée → différenciable ;
  contenu éditorial réutilisable.
- ⚠️ Inconvénients : Apple limite l'installation de faces tierces ; dépendance écosystème Apple Watch ;
  design à produire.
- 💰 Best-seller : Facer ~$100-140K/mois, Clockology ~$35K, WatchMaker ~$25K.

### JEUX ÉDUCATIFS ENFANT — ⭐ 8/10
- **Genre** : jeux éducatifs pour enfants (2-8 ans) : lettres, chiffres, formes, logique, dessin.
- **Stack RN** : RN 2D + (option) moteur de jeu. Complexité 2-3/5.
- ✅ Avantages : 164 pépites battables ! girl games (61/34), cooking games (66/68), offline games
  (72/45), baby games (61/62) ; marchés NON-ANGLAIS quasi libres (italien, espagnol, allemand) ;
  RN 2D faisable.
- ⚠️ Inconvénients : qualité attendue haute (Toca Boca, Lingokids) ; monétisation abonnement+pub ;
  rétention enfants = renouveau de contenu constant.
- 💰 Best-seller : Toca Boca (géant éducatif), Lingokids, ABCmouse.

---

## 🥈 BONS CANDIDATS (notes 6.5-7/10)

### THEORY TEST / CODE DE LA ROUTE — 7/10
- **Genre** : quiz/exam blanc permis de conduire (questions, révisions, tests par pays).
- **Stack RN** : pur RN. Complexité 1/5.
- ✅ Avantages : demande 67 (très forte), comp 44-57 (battable) ; stack quiz simple ; cross-niche étude.
- ⚠️ Inconvénients : contenu réglementaire à mettre à jour ; apps officielles par pays ; monétisation
  one-shot faible.

### JEUX CASUAL / RÉFLEXION (word/sudoku/belote/échecs/mahjong) — 7/10
- **Genre** : jeux de réflexion 2D (mots, sudoku, cartes, casse-tête).
- **Stack RN** : RN + logique de jeu + pub/IAP. Complexité 2/5.
- ✅ Avantages : mots à comp 40-59 (sudoku free 56/46, belote 54/40) ; RN 2D friendly ; variété énorme.
- ⚠️ Inconvénients : marché ultra concurrentiel (NYT Games) ; monétisation faible (pub) sauf gros volume.

### JEUX SOCIÉTÉ / PARTY (heads up, kahoot, mots) — 7/10
- **Genre** : jeux de société/party en 2D (devine-moi, quiz, mots, crosswords).
- **Stack RN** : RN 2D. Complexité 2/5.
- ✅ Avantages : heads up (68/59), free games for adults (60/53), kahoot (62/72) ; dépense réelle ;
  RN 2D faisable.
- ⚠️ Inconvénients : Kahoot/NYT établis ; besoin social/multi pour le party game (backend).

### JEUX ENFANT GÉNÉRAL — 7/10
- **Genre** : jeux enfants par thème (dinosaures, voitures, princesses, animaux, cuisine, coloriage).
- **Stack RN** : RN 2D. Complexité 2/5.
- ✅ Avantages : horse games (56/61), animal games (54/58), princess (52/67), dames (42/34).
- ⚠️ Inconvénients : concurrence élevée sur "kids games" ; besoin d'un angle (thème ou langue).

### JEUX 2D HYPERCASUAL — 7.5/10 (RN-friendly)
- **Genre** : jeux hyper-casual (color sort, water sort, merge, idle, flappy, brain out).
- **Stack RN** : RN PUR (pas besoin Unity !). Complexité 1-2/5.
- ✅ Avantages : FAIT POUR RN ; idle games (61/69), outline (50/37), water sort ; dev rapide.
- ⚠️ Inconvénients : marché ultra saturé ; UA coûteuse ; durée de vie courte des hits. Idéal portfolio.

### ISLAM (quran/prayer/qibla/azkar) — 7/10 (déjà validé)
- **Genre** : suite spirituelle (prières, qibla, coran, azkar, calendrier).
- **Stack RN** : RN + géoloc + calculs astronomiques. Complexité 2/5.
- ✅ Avantages : demande multi-pays ; muslim pro (54/59), rencontre musulman (35/20) ⭐ ; stack simple.
- ⚠️ Inconvénients : Muslim Pro établi (~$110K) ; multi-langues nécessaire ; exactitude religieuse.
- 💰 Best-seller : Muslim Pro ~$110K/mois, Athkar ~$35K/mois.

### CRÉATION CONTENU RÉSEAUX SOCIAUX — 7/10
- **Genre** : éditeurs vidéo/photo, reels, collages, stickers, emojis, icônes, planificateurs Insta.
- **Stack RN** : RN + vidéo/image natives (lourd). Complexité 3-4/5.
- ✅ Avantages : 241 pépites ! faceapp (65/65), pic collage (64/71), dazz cam (67/55) ; énorme demande.
- ⚠️ Inconvénients : géants (CapCut, Canva, Picsart) ; éditeurs vidéo = techniques ; freemium.

### ÉDUCATION ENFANTS / KIDS LEARNING — 7/10
- **Genre** : apprentissage enfants (lecture, maths, lettres, phonics) gamifié.
- **Stack RN** : RN 2D. Complexité 2/5.
- ✅ Avantages : learning games for kids (55/48), common app (64/48), homeschool (54/57) ; comp battable.
- ⚠️ Inconvénients : SplashLearn/ABCmouse établis ; contenu pédagogique à produire.

---

## 🥉 À SUIVRE (notes 5.5-6.5/10)

### BIEN-ÊTRE MENTAL / JOURNALING — 6.5/10
- **Genre** : journal, gratitude, affirmations, mood tracker, mindfulness.
- **Stack RN** : pur RN. Complexité 1-2/5.
- ✅ Avantages : sous-niches libres (gratitude, stoïque, self-love) ; stack simple ; tendance forte.
- ⚠️ Inconvénients : géants (Calm $4M, Headspace $2M) ; responsabilité santé mentale ; monétisation
  difficile sans différenciation.
- 💰 Best-seller : Calm ~$4M/mois, Headspace ~$2M, I Am Affirmations ~$700K.

### PSYCHOLOGIE / NEURODIVERSITÉ (ADHD, HSP, thérapie) — 6.5/10
- **Genre** : outils ADHD (planner, timers), suivi humeur/troubles, accès thérapie.
- **Stack RN** : RN + notifs + (option) IA. Complexité 2-3/5.
- ✅ Avantages : apps ADHD en plein boom ; grow therapy (54/53) ; audience fidèle.
- ⚠️ Inconvénients : compétition ADHD IA naissante (adhd planner 36/92) ; thérapie = régulé/sensible ;
  audience de niche.
- 💰 Best-seller : BetterHelp (géant thérapie), Tiimo (ADHD, croissance).

### FEMMES-SANTÉ (maternité, cycle, ménopause) — 6.5/10
- **Genre** : suivi grossesse, cycle, fertilité, ménopause, baby tracker.
- **Stack RN** : RN + notifs + HealthKit. Complexité 2/5.
- ✅ Avantages : marché durable ; pregnancy test checker (47/53), clear tok (51/40) ; niches battables.
- ⚠️ Inconvénients : Flo/Ovia géants ; confidentialité données santé ; responsabilité médicale.
- 💰 Best-seller : Flo (géant), Ovia, WTE.

### PRODUCTIVITÉ / ÉTUDE (pomodoro, flashcards, planner) — 6.5/10
- **Genre** : outils d'étude et productivité (pomodoro, flashcards, planning, notes).
- **Stack RN** : pur RN. Complexité 1-2/5.
- ✅ Avantages : 225 pépites ; pomodoro, flashcards, study planner ; stack simple.
- ⚠️ Inconvénients : marché très concurrentiel (Anki, Quizlet, Notion) ; monétisation faible.

### FINANCE PERSONNELLE (budget, dépenses, crypto, dette) — 6.5/10
- **Genre** : budget, suivi dépenses, épargne, dette, crypto, investissement.
- **Stack RN** : RN + (option) agrégation bancaire. Complexité 2-3/5.
- ✅ Avantages : budget planner (51/48), money tracker (45/49) ; demande réelle ; abonnement possible.
- ⚠️ Inconvénients : géants (YNAB, Mint) ; confiance/data bancaire ; régulation finance.

### VOYAGE / ITINÉRAIRES — 6.5/10
- **Genre** : planification de voyage, itinéraires, vols, hôtels, packing.
- **Stack RN** : RN + API voyage. Complexité 2-3/5.
- ✅ Avantages : trip planner, flight tracker ; demande forte ; niches (packing, itineraries).
- ⚠️ Inconvénients : Booking/Expedia géants ; données voyage coûteuses ; commission faible.

### SOMATIQUE SANTÉ SUIVI (médicaments, migraine, diabète, arrêt tabac) — 6.5/10
- **Genre** : rappels médicaments, suivi migraine, diabète, sevrage.
- **Stack RN** : RN + notifs + HealthKit. Complexité 2/5.
- ✅ Avantages : monétisation santé solide ; heat index (39/56), arret tabac (36/40) ; Medisafe prouve.
- ⚠️ Inconvénients : Medisafe établi ; régulation santé ; confiance.

---

## ⚠️ NICHE / COMPLEXE (notes 4-5.5/10)

- **SANTE-SUIVI / ANATOMIE** (5.5) : anatomy, heat index — besoin contenu médical.
- **EDUCATION-CODAGE** (5) : coding kids — Tynker établi, contenu pédagogique.
- **EDUCATION-SCOLAIRE hors IA math** (5) : worksheets/grades capturés par IXL/Khan.
- **ANIMAUX / IDENTIFICATION** (6) : bug identifier (51/48), dog whistle (49/47) — Merlin (gratuit) domine.
- **PLANTES / JARDIN** (6) : plant identifier — PictureThis/Planta établis, IA coûteuse.
- **IMMOBILIER / LOCATION** (5) : rental homes (52/27) ⭐ mais Zillow/Redfin géants, data coûteuse.
- **JEUX-3D (Unity)** (6) : clash royale, fc mobile — GEANTS à gros budgets, pour plus tard.
- **OUTDOOR / NATURE** (5) : hiking, camping — AllTrails domine, cartes coûteuses.
- **MUSIQUE-OUTILS** (5) : accordeur, métronome — beaucoup d'apps gratuites, audio natif.
- **PÊCHE** (5) : fishing — Fishbrain ($2M) leader.
- **WEDDING / OCCASIONS** (6) : wedding planning app (41/56) — The Knot/Zola établis mais niches.
- **HOBBIES-DÉPENSE** (6) : drones (DJI), vin (Vivino) — audiences riches mais leaders établis.
- **OUTILS TÉLÉPHONE / TÉLÉCOMMANDE** (4) : fragmentation, niche technique.
- **MOTION GAMES (Just Dance)** (4) : capteurs motion complexes, licences musicales.
- **SENIORS-VIE (non santé)** (4) : volume faible, niche religieuse/mormone surtout.
- **RELIGION-AUTRE** (3) : volume trop faible.
- **CHRISTIANISME** (3) : 0 pépite battable, YouVersion domine (comp 93+).

---

# 📌 MÉTHODE DE LECTURE DE LA NOTE
- **8-10** : fonce (demande + comp battable + monétisation prouvée + faisable).
- **6-7.5** : bon candidat mais angle différenciant obligatoire.
- **4-5.5** : niche ou complexe — à faire seulement si intérêt perso fort.
- **<4** : écarter dans l'état actuel.

# 💎 TOP 8 POUR UNE PREMIÈRE APP (recommandation)
1. **Challenges 75 jours** (8/10) — simple, marché fragmenté
2. **Timers sport** (8/10) — comp 13-30, ultra simple
3. **Jeux éducatifs enfant** (8/10) — 164 pépites, RN 2D
4. **Meal prep planner** (8/10) — déjà analysé $50-65K/mois
5. **Workout planner** (7.5/10) — demande massive, longue traîne
6. **Watch faces** (7.5/10) — monétisation prouvée
7. **Jeux 2D hypercasual** (7.5/10) — fait pour RN
8. **Theory test / code** (7/10) — demande 67, quiz simple