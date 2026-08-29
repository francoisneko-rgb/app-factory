# Rapport Phase 1 — Recherche marché (G1)

- **Date** : 2026-08-21
- **Agent** : chercheur-niches
- **Pipeline** : App Factory — Phase 1 (Gate G1)
- **Marché scruté** : Google Play US (lang EN) + contrôles FR
- **Stratégie alignée** : première app à complexité minimale (pas de backend, monétisation simple, solo dev Flutter 2-4 semaines)

---

## 1. Méthodologie

1. **Partir du marché, pas d'idées.** 13 secteurs candidats choisis pour leur compatibilité avec une première app simple (productivité, bien-être, utilitaires, mini-jeux, finance perso, tracking).
2. **Recherche Google Play** via `scrape-search.js` (marché US/EN) pour chaque niche : 20-25 apps, conservation des titres = vrais mots clés du marché. Contrôles FR sur 2 niches prometteuses.
3. **Métadonnées leaders** via `scrape-app.js` : installs, ratings (volume + note), ancienneté (`released`), fraîcheur (`updated`), IAP (`IAPRange`), ads. 21 apps leaders scrapées.
4. **Top charts** via `top-charts.js` sur HEALTH_AND_FITNESS (100) et PRODUCTIVITY (60) pour détecter les apps qui breaktent.
5. **Scoring** selon la grille pondérée de `brain/niches.md` :
   - Demande 25 % · Concurrence (inversée) 25 % · Monétisation 25 % · Tendance 15 % · Faisabilité 10 %.
   - Chaque sous-score 0-10, reposant sur des chiffres scrapés (installs, ratings, vélocité = ratings/années depuis release, IAP).
6. **Tendances** : vélocité d'avis comparée, apps récentes dans les charts, signaux de marché (TikTok manifestation, gamification self-care).

> Note outil : les scrapers `tools/scrapers/*.js` utilisaient l'ancienne API CJS de `google-play-scraper`. Corrigés pour la v10 ESM (`require('google-play-scraper').default`). `top-charts.js` ne expose que TOP_FREE/TOP_PAID/GROSSING (pas de NEW_FREE/NEW_PAID en v10). Aucune clé API utilisée.

---

## 2. Niches explorées — données chiffrées

### Niche 1 — Hydration / Water reminder
| App (leader) | Installs | Ratings | Note | Released | Updated | IAP | Ads |
|---|---|---|---|---|---|---|---|
| Drink Water Reminder (Leap) | 5,000,000+ | 31,036 | 4.46 | avr 2018 | 2024 | $2.99 | oui |

Niche saturée (25+ apps, scores 4.5-4.8). Leap Fitness domine. Panier faible. Vélocité ~3.7k/yr (mature). Faisabilité très haute (timer + log).

### Niche 2 — Intermittent fasting tracker
| App (leader) | Installs | Ratings | Note | Released | Updated | IAP | Ads |
|---|---|---|---|---|---|---|---|
| Fasting (Leap) | 50,000,000+ | 975,850 | 4.79 | oct 2019 | 2026 | $0.99-$79.99 | oui |

Demande massive mais leaders lourds (AI food scanner, calorie counter, barcode). Vélocité ~141k/yr. Concurrence très haute. Faisabilité devenue faible (features IA/caméra).

### Niche 3 — Habit tracker
| App (leader) | Installs | Ratings | Note | Released | Updated | IAP | Ads |
|---|---|---|---|---|---|---|---|
| HabitNow | 5,000,000+ | 92,067 | 4.72 | mai 2019 | 2026 | $0.99-$11.99 | non |

Très saturé (Loop, Habitica, TickTick, Forest). Panier faible. Vélocité ~12.8k/yr.

### Niche 4 — Gratitude journal
| App | Installs | Ratings | Note | Released | Updated | IAP | Ads |
|---|---|---|---|---|---|---|---|
| Gratitude (Hapjoy) | 5,000,000+ | 168,227 | 4.88 | mar 2018 | 2026 | $3.99-$59.99 | non |
| Presently | 1,000,000+ | 41,609 | 4.90 | fév 2019 | 2026 | aucune (100% free) | non |

Demande haute. Leader fort mais Presently reste 100% gratuit sans monétisation = angle « beau + freemium simple » ouvert. Vélocité ~20k/yr. Faisabilité très haute (journal + prompts + reminder).

### Niche 5 — Daily affirmations ⭐
| App | Installs | Ratings | Note | Released | Updated | IAP | Ads |
|---|---|---|---|---|---|---|---|
| I am (Monkey Taps) | 10,000,000+ | 310,687 | 4.80 | fév 2016 | 2026 | $2.99-$169.99 | oui |
| Daily Affirmations: Motivation | 100,000+ | 3,831 | 4.88 | déc 2023 | 2026 | $1.99-$11.99 | non |
| ThinkUp | 100,000+ | 4,624 | 4.40 | nov 2016 | 2025 | $1.99-$49.99 (lifetime $24.99) | non |

Demande très haute. Leader ancien (2016, 10 ans). Un entrant de déc 2023 a atteint 100k+ installs et 4.88★ = place démontrée pour un nouvel acteur soigné. Monétisation haute (subs + lifetime). Vélocité leader ~29.5k/yr. Faisabilité maximale (base de citations + reminders + widget, zéro backend).

### Niche 6 — Posture reminder
| App (leader) | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Posture Reminder (Puntogris) | 10,000+ | 166 | 2.65 | nov 2020 | $1.99 |

Demande très faible (leader à 10k installs, note 2.65). Niche fragmentée en « exercices de posture ». Rejetée.

### Niche 7 — Pomodoro focus timer
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Focus To-Do | 10,000,000+ | 284,093 | 4.62 | fév 2018 | $1.99-$11.99 |
| Forest | 10,000,000+ (~49M max) | 811,520 | 4.35 | aoû 2014 | $0.99-$59.99 |

Demande très haute mais duopole Focus To-Do + Forest. Panier faible. Mature. Rejetée pour première app.

### Niche 8 — PDF document scanner
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Adobe Scan | 100,000,000+ | 3,028,079 | 4.63 | mai 2017 | $1.99-$69.99 |

Demande massive mais imbatable (Adobe, CamScanner). Faisabilité faible (OCR/caméra). Rejetée pour première app.

### Niche 9 — Color by number (casual)
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Happy Color (X-FLOW) | 100,000,000+ (~342M max) | 3,881,506 | 4.57 | jan 2018 | $1.99-$7.99 |

Géant du contenu. Faisabilité faible (40k+ assets graphiques). Rejetée.

### Niche 10 — Plant watering reminder
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Plant Watering Reminder (Futasaji) | 50,000+ | 1,016 | 4.53 | nov 2021 | $6.99 |
| Ploi (devjah) | 10,000+ | 120 | 4.55 | aoû 2023 | $5.99-$59.99 (sub) |

Niche sous-desservie (leader 50k) mais demande faible. Risque de petit TAM. Faisabilité haute.

### Niche 11 — Mood tracker
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Daylio | 10,000,000+ (~19M max) | 460,263 | 4.73 | aoû 2015 | $0.99-$79.99 |
| Finch (self-care pet) | 10,000,000+ | 613,058 | 4.88 | mai 2021 | $1.99-$399.99 |
| Breeze | 1,000,000+ | 52,769 | 4.23 | mai 2021 | $3.99-$7.99 (sub) |

Demande très haute. Daylio fort mais VIEILLIT (11 ans). **Finch casse le marché** : 613k ratings en 5.3 ans = ~115k/yr (vs 42k/yr pour Daylio), note 4.88, gamification. Tendance la plus forte du panel. Monétisation haute (subs).

### Niche 12 — Sleep sounds / white noise
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Sleep Sounds (Beforest) | 1,000,000+ | 21,116 | 4.73 | mai 2020 | $7.99-$9.99 |

Demande modérée-haute. Pas de méga-leader pur (Calm = méditation large). Place pour un acteur ciblé. Faisabilité bonne (audio + mixer + timer, zéro backend).

### Niche 13 — Expense budget tracker
| App | Installs | Ratings | Note | Released | IAP |
|---|---|---|---|---|---|
| Money Manager (Realbyte) | 10,000,000+ (~23M max) | 462,217 | 4.62 | mar 2013 | $2.49-$20.99 |

Leader âgé (13.5 ans). Très saturé. Mature. Rejetée.

---

## 3. Tableau de scoring final

| Rang | Niche | Demande | Conc. (inv) | Monét. | Tendance | Faisab. | **Score /10** |
|---|---|---|---|---|---|---|---|
| 1 | Daily affirmations | 8 | 5 | 8 | 7 | 9 | **7.20** |
| 2 | Mood tracker | 8 | 4 | 8 | 8 | 8 | **7.00** |
| 3 | Gratitude journal | 7 | 5 | 7 | 6 | 9 | **6.55** |
| 4 | Sleep sounds / white noise | 5 | 6 | 6 | 6 | 8 | 5.95 |
| 5 | Intermittent fasting | 9 | 2 | 8 | 6 | 3 | 5.95 |
| 6 | Plant watering reminder | 3 | 7 | 6 | 4 | 9 | 5.50 |
| 7 | Pomodoro focus timer | 8 | 2 | 4 | 4 | 8 | 4.90 |
| 8 | PDF document scanner | 9 | 1 | 6 | 4 | 2 | 4.80 |
| 9 | Hydration / water reminder | 6 | 3 | 4 | 4 | 9 | 4.75 |
| 10 | Expense budget tracker | 8 | 2 | 4 | 4 | 6 | 4.70 |
| 11 | Habit tracker | 7 | 2 | 4 | 4 | 7 | 4.55 |
| 12 | Color by number | 9 | 1 | 5 | 4 | 2 | 4.55 |
| 13 | Posture reminder | 2 | 6 | 3 | 3 | 9 | 4.10 |

Pondération : Demande 25% · Concurrence 25% · Monétisation 25% · Tendance 15% · Faisabilité 10%.

---

## 4. TOP 3 + recommandation #1

### TOP 3

| # | Niche | Score | Raison principale |
|---|---|---|---|
| 1 | Daily affirmations | 7.20 | Demande très haute (leader 10M+), leader vieillissant (2016), entrant 2023 à 4.88★ prouve la place, monétisation lifetime+subs, faisabilité maximale |
| 2 | Mood tracker | 7.00 | Tendance la plus forte (Finch gamifié, ~115k ratings/yr, 4.88★), demande très haute, monétisation haute |
| 3 | Gratitude journal | 6.55 | Demande haute, angle freemium laissé ouvert (Presently 100% free), faisabilité très haute |

### Recommandation #1 : Daily affirmations

**Pourquoi** : c'est la meilleure combinaison demande × faisabilité × monétisation simple alignée avec la stratégie « première app ».
- **Demande prouvée** : le leader « I am » (Monkey Taps) cumule **10M+ installs et 310k ratings**, preuve d'un gros volume de marché.
- **Concurrence battable** : le leader date de **2016 (10 ans)** et un entrant récent (déc 2023) atteint déjà **100k+ installs avec 4.88★** : la place pour un acteur soigné, au design moderne, existe et est démontrée.
- **Monétisation simple** : modèles existants mêlent IAP + abonnements + **lifetime à $24.99** (ThinkUp). On peut lancer avec un simple « premium unlock » unique ou pub, sans RevenueCat/abonnement.
- **Faisabilité maximale** : base de citations + reminders + widget, **zéro backend**, solo dev Flutter en 2-4 semaines.
- **Tendance positive** : la niche « manifestation/self-love » est portée par TikTok, et l'entrant 2023 confirme la vélocité.

**Risque principal** : la niche est visual/brand-heavy (le design et les visuels font vendre). À mitiger par le gauntlet-loop sur onboarding + icône + screenshots store.

---

## 5. Concurrents à scraper en Phase 2 (niche #1 — Daily affirmations)

appId à passer à l'analyste-concurrents (scraping metadata + avis + assets) :

1. `com.hrd.iam` — I am - Daily affirmations (LEADER, 10M+, Monkey Taps)
2. `com.daily.affirmations.motivation.positive.quotes.free` — Daily Affirmations: Motivation (entrant 2023, 4.88★, référence « jeune acteur qui casse »)
3. `com.think.up` — ThinkUp (modèle lifetime $24.99, référence monétisation)
4. `i.am.com.affirmation` — Daily Affirmations・Positive Me (Navis Apps)
5. `dev.armandojimenez.believe` — Believe: Daily Affirmations (Believe PR)

> Niches #2 et #3 mises en file d'attente (backup si la phase 2 révèle un mur sur la niche #1) :
> - Mood tracker : `net.daylio`, `com.finch.finch`, `com.basenjiapps.breeze`
> - Gratitude journal : `com.northstar.gratitude`, `journal.gratitude.com.gratitudejournal`

---

## 6. Problèmes rencontrés

- **Scrapers cassés à l'arrivée** : `google-play-scraper@10.x` est ESM avec export par défaut ; les scrapers utilisaient `require('google-play-scraper')` (CJS ancien). **Corrigé** sur les 5 scrapers Google Play (`.default` ajouté). Consigné dans `brain/learnings.md`.
- `top-charts.js` v10 ne expose pas NEW_FREE/NEW_PAID (uniquement TOP_FREE/TOP_PAID/GROSSING) : détection de nouveautés faite via la date `released` des apps des charts.
- Aucun échec réseau. Aucune clé API utilisée.

---

## 7. Suite recommandée

- **Gate G1 à valider** : niche retenue = **Daily affirmations**.
- Lancer Phase 2 (analyste-concurrents) sur les 5 appId ci-dessus : metadata complète, avis (plaintes/gaps), screenshots/icônes pour le gauntlet.
- Ne pas modifier `pipeline/etat.md` ici (rôle orchestrateur) — mais la file d'attente à inscrire est : `daily-affirmations` (statut : en analyse concurrents), backup `mood-tracker` et `gratitude-journal`.
