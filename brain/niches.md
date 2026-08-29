# Base de données des niches
Chaque niche explorée est consignée ici avec son score. Ne jamais ré-analyser une niche
déjà présente sans raison explicite (marché changé, > 6 mois).

## Grille de scoring (sur 10, pondéré)
- Demande (volume mots clés, taille des leaders) — 25 %
- Concurrence (force des leaders, saturation) — 25 % (score inversé : faible concurrence = bon score)
- Monétisation (modèles des concurrents, panier moyen) — 25 %
- Tendance (croissance, vélocité des avis, Google Trends) — 15 %
- Faisabilité (complexité technique pour nous) — 10 %

| Date | Niche | Demande | Concurrence | Monétisation | Tendance | Faisabilité | Score | Statut |
|---|---|---|---|---|---|---|---|---|
| 2026-08-21 | Daily affirmations | 8 | 5 | 8 | 7 | 9 | 7.20 | #1 retenue (G1) |
| 2026-08-21 | Mood tracker | 8 | 4 | 8 | 8 | 8 | 7.00 | Backup #2 |
| 2026-08-21 | Gratitude journal | 7 | 5 | 7 | 6 | 9 | 6.55 | Backup #3 |
| 2026-08-21 | Sleep sounds / white noise | 5 | 6 | 6 | 6 | 8 | 5.95 | Rejetée (faible demande) |
| 2026-08-21 | Intermittent fasting | 9 | 2 | 8 | 6 | 3 | 5.95 | Rejetée (faisabilité) |
| 2026-08-21 | Plant watering reminder | 3 | 7 | 6 | 4 | 9 | 5.50 | Rejetée (faible demande) |
| 2026-08-21 | Pomodoro focus timer | 8 | 2 | 4 | 4 | 8 | 4.90 | Rejetée (duopole) |
| 2026-08-21 | PDF document scanner | 9 | 1 | 6 | 4 | 2 | 4.80 | Rejetée (faisabilité) |
| 2026-08-21 | Hydration / water reminder | 6 | 3 | 4 | 4 | 9 | 4.75 | Rejetée (saturée) |
| 2026-08-21 | Expense budget tracker | 8 | 2 | 4 | 4 | 6 | 4.70 | Rejetée (saturée) |
| 2026-08-21 | Habit tracker | 7 | 2 | 4 | 4 | 7 | 4.55 | Rejetée (saturée) |
| 2026-08-21 | Color by number | 9 | 1 | 5 | 4 | 2 | 4.55 | Rejetée (faisabilité) |
| 2026-08-21 | Posture reminder | 2 | 6 | 3 | 3 | 9 | 4.10 | Rejetée (faible demande) |

> Grille : Demande 25 % · Concurrence (inversée) 25 % · Monétisation 25 % · Tendance 15 % · Faisabilité 10 %.
> Détail chiffré par niche : voir `brain/rapports/2026-08-21-phase1-recherche-marche.md`.

## Nouveaux candidats — balayage large 2026-08-24 (proxies pop/comp, score complet à venir en G2)
| Date | Niche | Demande | Concurrence | Monétisation | Tendance | Faisabilité | Score | Statut |
|---|---|---|---|---|---|---|---|---|
| 2026-08-24 | Body/full-body tracking games | 9 | 8 | ? | 6 | 7 | ? | Validé G1 → G2 |
| 2026-08-24 | Active games kids (outdoors/camp) | 8 | 6 | ? | 6 | 8 | ? | Validé G1 → G2 |
| 2026-08-24 | Fitness programme personnalisé | 8 | 8 | ? | 5 | 6 | ? | Validé G1 → G2 |

> Proxies 2026-08-24 : leaders body-tracking notés 2.2-2.8 (fenêtre majeure), kids active games 3.3-4.1, fitness perso leader 1.2.
> Détail : `brain/rapports/2026-08-24-phase1-balayage-mots-cles.md`.

---

## Recherche de marché V2 — Phase B (scoring Appfigures + AppRadar) 2026-08-27
Grille : Demande 25 (Appfigures popularity) / Concurrence inversée 25 (compétitivité + Phase A GP)
/ Monétisation 25 / Tendance 15 (AppRadar growth) / Faisabilité 10.

| Rang | Niche (cluster) | Dem | CInv | Mono | Tren | Feas | Score | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | AI photo : restore / enhance / passport | 19.3 | 18.2 | 22.5 | 13 | 8 | **81.0** | RECOMMANDÉE — IA photo explose (AI Face Aging +50.9%, Gen Art +21.9%) |
| 2 | Voice changer | 22.1 | 18.2 | 17.5 | 9 | 9 | **75.8** | FORTE — 62/60, parrot 52/78, faisable |
| 3 | Home/interior design IA (room planner) | 18.9 | 11.8 | 20 | 9 | 6 | **65.7** | BONNE — room planner 53/74 |
| 4 | Background remover | 21.1 | 6.8 | 17.5 | 9 | 8 | **62.4** | MOYENNE — demande forte, comp forte |
| 5 | Therapy / journal santé mentale | 6.4 | 17.3 | 17.5 | 11 | 8 | **60.2** | MOYENNE — niche confiance, demande modérée |
| 6 | Kids games / education | 23.2 | 2.7 | 20 | 7 | 6 | **58.9** | ÉCARTÉE — dem forte MAIS comp 94 énorme, majors |
| 7 | AI companion / chat | 12.9 | 1.4 | 20 | 13 | 7 | **54.3** | RISQUÉE — comp 97, CF 60/83 |
| 8 | Baby names | 1.8 | 18.6 | 15 | 8 | 9 | **52.4** | FAIBLE demande |
| 9 | Hairstyle IA try-on | 2.5 | 9.1 | 20 | 11 | 7 | **49.6** | FAIBLE seed, try-on 56/78 |
| 10 | Motion / Active kids | 1.8 | 21.4 | 15 | 8 | 3 | **49.2** | RÉSERVE — pas indexé Appfigures, tracking dur |
| 11 | Co-parenting | 4.6 | 12.3 | 15 | 9 | 8 | **48.9** | FAIBLE demande |
| 12 | Air quality / pollen | 2.1 | 13.6 | 12.5 | 8 | 9 | **45.2** | FAIBLE, saturé weather |

> Données : `brain/marche/scoring/appfigures-insights.csv`, `appfigures-related.md`, `appradar-download-trends.csv`.
> Log : `brain/logs/2026-08-27-phaseB-scoring.md`.

---

## Recherche de marché — Jour 2 (2026-08-28) — NOUVEAUX clusters découverts
Grille : Demande 25 / Concurrence inversée 25 / Monétisation 25 / Tendance 15 / Faisabilité 10.

| Rang | Niche (cluster) | Dem | CInv | Mono | Tren | Feas | Score | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Pickleball scheduler | 8.5 | 9.5 | 8 | 9 | 8 | **8.6** | 🏆 PÉPITE #1 (comp 28, marché vide) |
| 2 | Islam (athkar/azkar/qibla) | 9 | 8 | 8 | 7 | 9 | **8.3** | 🏆 TOP cluster complet (8+ mots-clés 40-60) |
| 3 | Plant care (soins/rappels) | 8 | 7 | 7.5 | 7 | 8 | **7.6** | ✅ BON |
| 4 | Meal planning (cross-niche) | 7.5 | 7 | 7.5 | 6.5 | 8 | **7.3** | ✅ INTÉRESSANT |
| 5 | Cleaning / routines maison | 7 | 7 | 7 | 6 | 9 | **7.1** | ✅ BON |
| 6 | Pilates ciblé | 7.5 | 7 | 7 | 7 | 7 | **7.1** | ✅ BON |
| 7 | Tai chi senior | 7 | 7 | 7 | 6.5 | 8 | **7.0** | ✅ BON |
| 8 | Book tracker (sous-niche) | 7.5 | 7 | 7 | 6 | 8 | **7.1** | ⚠️ INTÉRESSANT |

> Détail + données : `brain/marche/scoring/NICHES_JOUR2.md`, `appfigures_raw/` (27 related + 5 rankings).
> Écartés sans volume : grief, lgbtq, breakup, self esteem, trading journal, envelope budget,
> cash stuffing, adhd women, transcribe (géants), chess (géant), period tracker (géants).

---

## Recherche de marché — Vague 3 (2026-08-28) — nouveaux clusters (20-29)
Grille : Demande 25 / Concurrence inversée 25 / Monétisation 25 / Tendance 15 / Faisabilité 10.
Données : ~53 nouveaux mots-clés uniques scorés Appfigures (98 → 151 lignes insights).

| Rang | Niche (cluster) | Dem | CInv | Mono | Tren | Feas | Score | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Mobility/souplesse | 8.5 | 8 | 7.5 | 7 | 9 | **8.0** | ✅ TOP vague 3 (53/58) |
| 2 | Digital wellness (screen time/appblock) | 8 | 7 | 8 | 9 | 8 | **7.9** | ✅ BON (49-50/63-80) |
| 3 | Spirit box / tarot | 8 | 8 | 8 | 6 | 8 | **7.7** | ✅ BON (53/62, 31/56) |
| 4 | Sheet music (maker/lecteur) | 7.5 | 7 | 8 | 6 | 7 | **7.3** | ✅ BON (22/60-53/61) |
| 5 | Cat games (jeu 2D) | 8.5 | 6 | 7.5 | 7 | 7 | **7.3** | ✅ BON (53-67/74-79) |
| 6 | Chores kids / parental | 7 | 7 | 7.5 | 6 | 9 | **7.2** | ✅ BON (32-35/67-77) |
| 7 | Snorelab / détection ronflement | 7 | 8 | 7 | 6 | 7 | **7.0** | ✅ BON (39/61) |
| 8 | Puzzle logique (nonogram/sudoku) | 7.5 | 6 | 7 | 5 | 7 | **6.6** | ✅ BON (52/67) |
| 9 | Journaling ciblé (reflect/shadow) | 6 | 8 | 7 | 6 | 9 | **6.9** | ⚠️ INTÉRESSANT |
| 10 | Crochet / compteur rangs | 6.5 | 8 | 6.5 | 5 | 8 | **6.8** | ⚠️ INTÉRESSANT |
| 11 | Air fryer (cuisine) | 6.5 | 8 | 6.5 | 5 | 8 | **6.8** | ⚠️ INTÉRESSANT |
| 12 | Crypto / wallet | 7 | 5 | 5 | 5 | 3 | **5.3** | ⚠️ RISQUÉE (conformité) |

> Écartés sans volume (Pop 5) : reward chart, moon phase, cocktaIL, fall detection,
> wall pilates, postpartum, origami, sewing, knitting, sheet music direct.
> Vague 3 ajoutée à `appfigures-insights.csv` (151 lignes) et `MEILLEURES_NICHES.md` clusters 20-29.

---

## Recherche de marché — Vague 4 (2026-08-28) — approfondissement + exhaustivité (clusters 30-40)
Grille : Demande 25 / Concurrence inversée 25 / Monétisation 25 / Tendance 15 / Faisabilité 10.
Données : ~60 nouveaux mots-clés uniques scorés Appfigures (151 → 211 lignes insights).

| Rang | Niche (cluster) | Dem | CInv | Mono | Tren | Feas | Score | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Audio outils (equalizer/bass) | 8.5 | 8 | 7.5 | 7 | 7 | **7.9** | ✅ BON (53-56/58-62) |
| 2 | Astrologie (astrotalk/costar) | 8.5 | 7 | 8 | 7 | 8 | **7.9** | ✅ BON (56/45, 62/72) |
| 3 | Time tracking / mind map | 7.5 | 8 | 7.5 | 6 | 8 | **7.6** | ✅ BON (clockify 50/61, xmind 42/47) |
| 4 | Weight loss (santé) | 8 | 7 | 7.5 | 6 | 8 | **7.5** | ✅ BON (49/69) |
| 5 | QR/barcode (utilitaires) | 7.5 | 6.5 | 6 | 5 | 9 | **6.8** | ⚠️ MOYEN (volume, mono ads) |
| 6 | Savings / bill organizer | 7 | 7 | 7 | 5 | 8 | **6.9** | ⚠️ INTÉRESSANT |
| 7 | Pet desk (santé animaux) | 7 | 7.5 | 7 | 6 | 8 | **7.1** | ⚠️ INTÉRESSANT |
| 8 | Cross stitch pattern maker | 6 | 8 | 7 | 5 | 8 | **6.8** | ⚠️ INTÉRESSANT |
| 9 | Éducation kids (splash/anatomy) | 7.5 | 6 | 7 | 6 | 6 | **6.6** | ⚠️ INTÉRESSANT |
| 10 | Islam sous-angles (nusuk) | 7.5 | 7 | 7 | 6 | 8 | **7.2** | ✅ renforce cluster 13 |
| — | Voyage/hiking | — | — | — | — | — | — | ❌ ÉVITER (géants) |

> Écartés (micro Pop 5 / géants) : chakra, dream meaning, podcast editor, bill reminder,
> e-signature, estimate, invoice, flashcards, kanban, password manager (tête), intermittent
> fasting (leader Simple), hiking (géants), itinerary planner (95), travel (100), umrah (micro).
> Vague 4 ajoutée à `appfigures-insights.csv` (211 lignes) et `MEILLEURES_NICHES.md` clusters 30-40.

---

## Recherche de marché — Vague 5 / salve v4 (2026-08-28) — liste 68 candidats (clusters 41-50)
Grille : Demande 25 / Concurrence inversée 25 / Monétisation 25 / Tendance 15 / Faisabilité 10.
Données : ~70 nouveaux mots-clés scorés Appfigures (211 → 281 lignes insights).

| Rang | Niche (cluster) | Dem | CInv | Mono | Tren | Feas | Score | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Timers sport (interval/tabata/boxing) | 9 | 9 | 7.5 | 7 | 9 | **8.7** | ✅✅ TOP (55/44, 47/61, 47/59) |
| 2 | Pêche / fishing | 9 | 7.5 | 7.5 | 6 | 7.5 | **8.0** | ✅ BON (59/73) |
| 3 | Chasse / hunting | 8.5 | 7 | 7.5 | 6 | 8 | **7.8** | ✅ BON (54) |
| 4 | Oiseaux / birding | 8 | 7 | 7.5 | 6 | 6.5 | **7.4** | ✅ BON (52, birda 39/66) |
| 5 | Aquarium | 8 | 7.5 | 7 | 5 | 8 | **7.5** | ✅ BON (47/64) |
| 6 | Outdoor marin (marine traffic/surf) | 7.5 | 7 | 7 | 6 | 8 | **7.3** | ✅ BON (53/61, 34/76) |
| 7 | Golf GPS/tracker | 7 | 6.5 | 8 | 5 | 6.5 | **6.8** | ✅ BON (30-35/74-78) |
| 8 | Autisme (neurodivergents) | 7 | 7.5 | 7 | 5 | 8 | **7.1** | ⚠️ INTÉRESSANT (30/61) |
| 9 | HRV / récupération (athlytic) | 7.5 | 7 | 7 | 6 | 5 | **6.7** | ⚠️ INTÉRESSANT (47/67, watch) |
| 10 | Animaux divers (dog whistle) | 7.5 | 7 | 6.5 | 5 | 8 | **7.0** | ⚠️ INTÉRESSANT (49) |

> Écartés (micro / géants / pollués) : betta, fish identifier, tinnitus, cbt, masker,
> migraine, headache, ivf, mushroom, flower, first aid, bug out bag, wilderness, emergency,
> couch to 5k (94), marathon, disc golf, tennis, vo2 max, breathwork, wim hof, bonsai,
> orchid, succulent, whisky, wine, sommelier, cigar, archery, climbing, bouldering,
> cycling computer, horseback, equestrian, skateboarding, reptile, snake (jeux), aquarium
> fish, survival (jeux), pregnancy (95), ovulation (94).
> Vague 5 ajoutée à `appfigures-insights.csv` (281 lignes) et `MEILLEURES_NICHES.md` clusters 41-50.

---

## Recherche de marché — Salve HOBBIES/PASSIONS (2026-08-29) — 90 mots-clés (clusters 63-64)
Grille : Demande 25 / Concurrence inversée 25 / Monétisation 25 / Tendance 15 / Faisabilité 10.
Données : 90 nouveaux mots-clés hobbies scorés Appfigures (485 → 575 lignes insights).
Méthode : vérification rankings OBLIGATOIRE pour chaque pépite apparente (leçon salve sports).

| Rang | Niche (cluster) | Dem | CInv | Mono | Tren | Feas | Score | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Light meter / lux mètre (photo+plantes) | 8.5 | 7.5 | 7.5 | 7 | 9 | **8.1** | ⭐ PÉPITE (49/75, rankings 100 % utilitaires) |
| 2 | Jeux-cartes : bridge (contract bridge) | 8 | 7.5 | 6.5 | 5 | 8 | **7.2** | ✅ renforce cluster jeux-cartes (51/63) |
| 3 | TCG collection (mtg/vinyl) | 7 | 6 | 7 | 5 | 7 | **6.5** | ⚠️ piste 2e rideau (head = marques/jeux officiels) |
| — | Faux positifs (tea 61, candle 59, goat 67, sporcle 50, gold 46, lego 67) | — | — | — | — | — | — | ❌ trafic capté marques/apps homonymes/jeux/trading |

> Pépites strictes (Pop>30, Comp<80, rankings réels) : light meter 49/75 (seule), bridge 51/63.
> Faux positifs démasqués par rankings : tea (ATI TEAS nursing exam), candle (apps couples),
> goat (marketplace sneakers), sporcle (jeux trivia), gold (trading), lego (marque), warhammer
> (jeux), poker (jeux+argent), magic the gathering (jeu officiel).
> Micro sans volume (Pop 5-27) : tout le reste des hobbies (collection, artisanat, modélisme,
> identification nature, boissons, cuisine, agriculture) — ~80 mots-clés.
> Salve hobbies ajoutée à `appfigures-insights.csv` (575 lignes) et `MEILLEURES_NICHES.md` clusters 63-64.
