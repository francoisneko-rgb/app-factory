# Données de marché — Challenges 75 jours (Niche 4)

Date : 2026-08-28 · Sources : Appfigures (popularité/compétitivité/related/rankings iOS), iTunes search, app-store-scraper, App Store web.
Focus : iOS US (marché à argent). Stack cible : React Native.

---

## 1. Popularité / Compétitivité des mots-clés (Appfigures)

| Mot-clé | Popularité | Compétitivité | Verdict |
|---|---|---|---|
| 75 hard | 55 | 61 | Pépite |
| 75 day challenge | 49 | 62 | Pépite |
| 75 hard challenge | 41-44 | 52-53 | Pépite majeure |
| 75 soft challenge | 34 | 60 | Pépite (version douce) |
| 75 soft | 6 | 60 | faible demande isolée |
| 75 hard tracker | 25 | 49 | sous-niche |
| 75 day hard challenge | 5 | 46 | |
| 75 day soft challenge | 5 | 52 | |
| 75 challenge | 5 | 52 | |
| 70 days challenge | 5 | 40 | |
| 45 day challenge | 5 | 49 | |
| 100 day challenge | 5 | 51 | |
| 28 days challenge | 5 | 40 | |
| 21 days challenge | 5 | 62 | |
| 75 hard workout challenge | 5 | 41 | |

**Lecture :** la demande réelle (Popularité > 30) est portée par 4 mots-clés "75 hard", "75 day challenge",
"75 hard challenge", "75 soft challenge". Compétitivité 52-62 = **faible à modérée, battable**.
Aucun géant. Le 75 Hard (marque, programme d'Andy Frisella) tire toute la demande.

### Related keywords (appfigures_raw)
- `related_habit.csv` : 75 hard 55/61, 75 day challenge 49/62, 75 soft challenge 34/60 — confirmé depuis le cluster habit tracker.
- `related_fitness_challenge.csv` : challenge 6/62, workout challenge 5/66, 30 day fitness challenge 9/49,
  28 days exercise challenge 5/55, 90 day workout challenge 5/54, 75 hard workout challenge 5/41.
- `consolidation_mots_cles.csv` : atomic habits 9/64, 75 hard tracker 25/49, habit tracker 58/79 (lié).

---

## 2. Classement "75 hard challenge" (Appfigures, rankings_75_hard_challenge.csv)

| # | App | Développeur | Note | Ratings | Catégorie | Ancienneté |
|---|---|---|---|---|---|---|
| 1 | 75 Hard The Official App | 44SEVEN MEDIA | 2.50* | 8* | Health & Fitness | 6 ans |
| 2 | 75 Days Challenge Tough & Soft | BeHard | 4.83 | 231* | Health & Fitness | 3 ans |
| 3 | Her 75 day challenge with friends | My Viral Agent | 4.79 | 389 | Health & Fitness | récente |
| 4 | 75 Hard: Challenge Tracker | Shay alon Vash | 5.00 | 7 | Health & Fitness | récente |
| 5 | 75 Day Challenge: Soft Edition | Inkolab | 4.45 | 11 | Health & Fitness | 2 ans |
| 6 | Habit Tracker Goal & ADHD Planner | InnerGrow | 4.73 | 1.5K* | Productivity | 8 ans |
| 7 | 75 Days Challenge: Better | Alexander Parnev | 4.67 | 15 | Health & Fitness | 2 ans |
| 8 | 75 Days Challenge - Reset75 | EHM TECH | 4.86 | 14 | Health & Fitness | récente |
| 9 | 75 Tough & Soft Challenge | Solowei | — | — | Health & Fitness | 2 ans |
| 10 | Her Glow Up: 75 Day Challenge | David | 5.00 | 3 | Health & Fitness | 2 jours |

> ⚠️ Les ratings/notes Appfigures sont un échantillon US récent et sous-estiment fortement.
> Données réelles iTunes (2026-08-28) :
> - **75 Hard (officiel)** : id1502228408, note **4.55**, **6 405** ratings, 44SEVEN MEDIA, version 1.7.2, sorti 2020.
> - **75 Days Challenge Tough & Soft (BeHard)** : id6450723685, note **4.82**, **8 614** ratings, sorti 2023.
> - **Her 75** : id6746784659, note **4.82**, **4 923** ratings, sorti 2025 (My Viral Agent).
> - **Habit Tracker (InnerGrow)** : id1438388363, note **4.79**, **145 925** ratings, sorti 2019 (Productivity).

---

## 3. Panorama des 10 apps réelles (iTunes search + scrape, 2026-08-28)

| App | ID | Développeur | Note | Ratings | Sortie | Monétisation |
|---|---|---|---|---|---|---|
| 75 Hard (officiel) | 1502228408 | 44SEVEN MEDIA | 4.55 | 6 405 | 2020 | Free + **abonnement requis** |
| 75 Days Challenge Tough & Soft | 6450723685 | BeHard, Inc. | 4.82 | 8 614 | 2023 | Free + BeHard Pro ($12.99/m, $39.99/an) |
| Her 75 | 6746784659 | My Viral Agent | 4.82 | 4 923 | 2025 | Free + abo ($7.99/w, $14.99/m, $49.99/an) |
| Habit Tracker | 1438388363 | InnerGrow | 4.79 | 145 925 | 2019 | Free + **lifetime $8.99** (pas d'abonnement) |
| 75 Days Challenge: Better | 6667095733 | Alexander Parnev | 4.79 | 677 | 2024 | Free |
| Reset75 | 6761861091 | EHM TECH | 4.86 | 69 | 2026 | Free (data locale) |
| 75 Tough & Soft Challenge | 1582137526 | Solowei Group | 4.23 | 3 734 | 2021 | Free + abonnement |
| 75 Day Challenge: Soft Edition | 6670955917 | Inkolab | 4.72 | 394 | 2024 | Free |
| 75 Hard: Challenge Tracker | 6752606716 | Shay alon Vash | 4.78 | 135 | 2025 | Free |
| 75 Day Program - Tough Habits | 1535074304 | justin frazer | 4.77 | 2 474 | 2020 | Free + $1.99 ad-free |

---

## 4. Données clés (synthèse)

- **Aucun géant à ratings massifs dans le segment "75 jours" strict.** Le plus gros dédié = BeHard 8 614.
  (Habit Tracker InnerGrow est à 145K mais c'est un tracker généraliste, pas spécifique 75 jours.)
- **Marché fragmenté** : ~10 apps récentes, beaucoup d'entrants 2025-2026 (Reset75, Her 75, Her Glow Up,
  Challenge Tracker, Petal 75 Soft, etc.) → niche en construction, pas de leader écrasant.
- **Le leader "officiel" 75 Hard (44SEVEN) est faible** : note Appfigures 2.50, et même en réel 4.55 avec
  plaintes récurrentes (abonnement imposé, pas de widget/water tracker). → faiblesse exploitable.
- **Demande réelle confirmée** sur 4 mots-clés (34-55 pop). Cross-niche évident avec habit tracker (58).
- **Monétisation dominante : abonnement** (BeHard, Her 75, Solowei) OU **lifetime 1x** (Habit Tracker, $1.99).
  Le lifetime est populaire auprès des utilisateurs ("NOT a monthly subscription thing").
