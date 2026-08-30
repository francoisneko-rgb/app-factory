# Analyse globale — Timers Sport (Niche 2)

Date : 2026-08-28 · Panorama + gaps + angle gagnant RN.

---

## 1. Tableau comparatif des leaders

| App | Dev | Note | Ratings | Angle | Monétisation |
|---|---|---|---|---|---|
| Interval Timer | Float Tech | 4.84 | 86 170 | HIIT/interval simple | Free + IAP $3 |
| Seconds Interval Timer | Runloop | 4.69 | 23 565 | Tabata/HIIT versatile | Free + IAP pro one-time |
| Interval Timer | Neo Pixel | 4.49 | 19 066 | Tabata free | Free + ads + IAP/abo |
| Boxing Timer Pro | SimpleTouch | 4.85 | 6 739 | Boxing/MMA round timer | one-time $3 + abo |

## 2. Ce qui marche (likes)
- **One-time fee** plébiscité (Seconds, Float Tech ~$3) — "It is a one time fee, as opposed to a monthly subscription".
- **Spoken words** au lieu de bips (Float Tech) + musique non coupée.
- **Affichage clair** work/rest/round + historique/stats + repeat.
- **External display** (Boxing Timer, salles) + Workout DJ.
- Versatilité (Seconds : simple → complexe), templates HIIT/Tabata/Circuit.

## 3. Plaintes récurrentes
- **Passage à l'abonnement après achat** (Boxing Timer Pro = scandale ; Float Tech paywall création timers).
- **Pubs intrusives** (Neo Pixel) + régressions.
- **Abo Apple Watch** décevant (Neo Pixel).
- **UI datée/bare-bones** (Seconds), pas de nommage des timers (Float Tech), pas de "Up next".
- Custom timers verrouillés derrière paywall.

## 4. GAPS exploitables
- **One-time fee SANS abo forcé** (le scandale n°1 du segment).
- **UI moderne et propre** (tous sont datés).
- **Spoken voice + musique préservée**.
- **Watch inclus** sans abo caché.
- **External display** (grand écran) + Workout DJ.
- **Sauvegarde nommée des timers** + "Up next" + création gratuite.

## 5. ANGLE GAGNANT pour notre app React Native

**"Le timer d'entraînement moderne, à la fois simple et puissant, à prix unique."**

Positionnement : timer interval/HIIT/Tabata/boxing avec UI moderne, **spoken voice**, **musique préservée**,
**external display**, **watch inclus**, **one-time fee** (anti-abonnement). Copier la simplicité de Float Tech
+ la versatilité de Seconds + l'external display de Boxing Timer, sans les pubs/abos.

Stack RN : timers précis (setInterval/audio), notifs, audio (module natif), watch (watchOS via RN),
external display (AirPlay/HDMI), historique local. Complexité faible-moyenne.

**Verdict : TOP cluster.** Demande 55, compétitivité 44 (battable), leaders anciens et frustrants
(abos, pubs, UI datée), stack simple. Le one-time fee + UI moderne + watch inclus sont des différenciateurs nets.

---

## 6. MAJ 2026-08-30 — REVENUS CONFIRMÉS (Appfigures) + NOTE
- **Note cluster : 8/10** (demande réelle + comp battable + monétisation PROUVÉE + stack simple).
- **Interval Timer fait $50K/mois** (Subs+IAPs) avec 40K downloads — preuve que les gens PAYENT pour
  un timer bien fait (contrairement à l'intuition "personne ne paie pour un timer").
- **Attention** : le timer de boxe/mma spécifique fait <$5K/mois → viser le **timer intervalle
  généraliste**, pas le timer par sport.
- Le créneau : reprendre Interval Timer ($50K) avec **one-time fee** (le scandale n°1 du segment est
  l'abonnement) + UI moderne + watch + external display.
