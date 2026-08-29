# Rapport Phase 1 — Croisement iOS App Store (complément TOP3)

- **Date** : 2026-08-21
- **Agent** : chercheur-niches (orchestrateur)
- **But** : combler l'angle mort de la phase 1 (qui ne scrutait que Google Play) en
  croisant les 3 niches finalistes sur l'App Store iOS (US/EN). Data scrapée via
  `tools/scrapers/ios-search.js` + `scrape-app-ios.js` (app-store-scraper, gratuit).

> Contexte outil : Appfigures est câblé (`appfigures.js`) mais le compte free n'a pas
> l'add-on **Public Data API** (payant) → `products/search`, `ranks`, `reviews`,
> `reports/ratings` renvoient 403 pour toute app non possédée. On reste donc sur les
> scrapers gratuits qui fournissent la même donnée.

---

## 1. Daily affirmations — cross-platform

| App | Android (GP) | iOS (AS) |
|---|---|---|
| I am (Monkey Taps) | 10M+ installs, 310k ratings, 4.80, 2016 | **728k reviews, 4.84, 2014 (12 ans)** |
| Mantra | — | 34k reviews, 4.84, 2017 |
| Affirmations for You | — | 3k reviews, 4.78, 2021 |

- **Leader « I am » est massif et VIEUX sur les deux stores** : 2014 sur iOS, 2016 sur
  Android, ~728k reviews iOS. Base installée énorme, interface datée → place pour un
  acteur moderne au design soigné.
- **Entrants récents confirment la place** : « Daily Affirmations & Widgets » (4.81),
  « Daily Affirmations - Affirmotl » (5.0, neuf), « Self Love » (4.77) — tous sur le
  haut de la recherche iOS. Même signal que l'entrant Android 2023 (4.88★).
- **Demande très haute et confirmée sur iOS** (leader 728k reviews iOS > 310k Android).
- Monétisation iOS : IAP présents (non détaillés ici), modèle premium/lifetime existant.

## 2. Mood tracker — cross-platform

| App | Android (GP) | iOS (AS) |
|---|---|---|
| Daylio | 10M+ installs, 460k ratings, 4.73, 2015 | 61k reviews, 4.77, 2017 |
| **Finch (self-care pet)** | 10M+ installs, 613k ratings, 4.88, 2021 | **742k reviews, 4.95, 2021** |
| How We Feel | — | 29k reviews, 4.87, 2022 (100% free, non-profit) |

- **Finch est LA cassure, confirmée cross-platform** : 742k reviews iOS + 613k Android,
  note 4.95 iOS, lancé en 2021 (5 ans). C'est le leader émotionnel de la niche désormais,
  bien devant Daylio (61k iOS / 460k Android).
- **Tendance la plus forte du panel, doublement confirmée** : gamification self-care
  (pet + tâches + streaks) domine un marché que Daylio vieillit.
- **Mais** : l'incumbent qui casse (Finch) est puissant et bien financé → concurrence
  d'exécution élevée pour un nouvel entrant. La barre design/game est haute.

## 3. Gratitude journal — cross-platform

| App | Android (GP) | iOS (AS) |
|---|---|---|
| Gratitude (Hapjoy) | 5M+ installs, 168k ratings, 4.88, 2018 | 45k reviews, 4.88, 2018 |
| Gratitude Plus | — | 18k reviews, 4.86, 2019 |
| Good Things | — | 1.7k reviews, 4.89, 2018 |
| Presently | 1M+ installs, 41k ratings, 4.90, 2019 (100% free) | — |

- **TAM plus petit que les 2 autres niches** : leader iOS à 45k reviews (vs 728k pour
  affirmations). Demandes moindres sur les deux stores.
- Écosystème très fragmenté (journal + gratitude + mood se chevauchent). Angle freemium
  monétisé encore ouvert (Presently / How We Feel restent 100% gratuits).
- Faisabilité très haute mais volume de marché plus faible.

---

## 4. Lecture data-first des 3 niches

| Niche | Volume cross-platform | Tendance | Vieux leader ? | Entrant récent prouvé ? | Barre d'exécution |
|---|---|---|---|---|---|
| Daily affirmations | Très haute (leader 728k iOS) | Oui | Oui (2014/2016) | Oui (2021-2025) | Design/visuels |
| Mood tracker | Très haute | Forte (Finch) | Daylio oui, mais Finch puissant | Oui (Finch) | Gamification + design |
| Gratitude journal | Moyenne | Faible-moyenne | Non (leader récent) | Moins net | — |

**Le croisement iOS ne change pas le classement, il le renforce :**
- **Daily affirmations reste #1** : c'est la seule niche avec un VIEUX méga-leader (2014/2016,
  ~728k reviews iOS) ET des entrants récents qui cassent régulièrement. Volume massif
  cross-platform + place démontrée pour un nouvel acteur soigné + faisabilité maximale.
- Mood tracker confirme la tendance la plus forte (Finch) mais avec un incumbent neuf et
  redoutable (barre gamification haute).
- Gratitude journal a un TAM visiblement plus petit.

> Verdict inchangé mais affermi : **recommandation #1 = Daily affirmations**. Le risque
> principal reste le design/les visuels (à traiter au gauntlet-loop). L'appétit iOS
> (leader 728k reviews) valide aussi une publication App Store dès le départ.
