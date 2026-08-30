# Données de marché — Timers Sport (Niche 2)

Date : 2026-08-28 · Sources : Appfigures (related/rankings), app-store-scraper, avis iOS/Play.
Focus : iOS US. Stack cible : React Native.

---

## 1. Popularité / Compétitivité (Appfigures)

| Mot-clé | Popularité | Compétitivité | Verdict |
|---|---|---|---|
| interval timer | 55 | 44 | ✅✅ TOP |
| tabata | 47 | 61 | ✅ |
| boxing timer | 47 | 59 | ✅ |
| interval | (forte) | — | |

**Lecture :** timers sport = **TOP cluster** (55/44 sur interval timer : demande forte, compétitivité
basse). Tabata (47/61) et boxing timer (47/59) confirment. C'est un cluster de demande réelle et
compétitivité battable.

## 2. Classement réel des apps (app-store-scraper, 2026-08-28)

| App | Dev | Note | Ratings | Sortie | Monétisation |
|---|---|---|---|---|---|
| Interval Timer (Float Tech) | Float Tech | 4.84 | 86 170 | 2016 | Free + IAP ~$3 |
| Seconds Interval Timer | Runloop | 4.69 | 23 565 | 2011 | Free + IAP pro one-time |
| Interval Timer (Neo Pixel) | Neo Pixel Labs | 4.49 | 19 066 | 2010 | Free + ads + IAP/abo |
| Boxing Timer Pro | SimpleTouch | 4.85 | 6 739 | 2011 | one-time $3 + abo récent |

---

## 3. Données clés (synthèse)

- **Leaders établis et anciens** (2010-2016) avec gros volumes (19K-86K ratings) MAIS :
  - **UI datée** (Seconds = "bare-bones", Neo Pixel vieux).
  - **Passage à l'abonnement** mal vécu (Boxing Timer Pro = scandale, Float Tech paywall).
  - **Pubs intrusives** (Neo Pixel) et **abo Apple Watch** décevant.
- **Point d'accord massif** : les utilisateurs détestent l'abonnement et adorent le **one-time fee**
  (Seconds, Float Tech ~$3) → le one-time est le modèle plébiscité.
- **Désirs non servis** : spoken words (au lieu de bips), ne pas couper la musique, external display,
  sauvegarde nommée des timers, "Up next", watch inclus, création de timers gratuite.

## 4. Verdict
Cluster **TOP** (55/44). Faisable en RN (timers, notifs, audio, watch, external display via module natif).
Différencier par : **one-time fee sans abo, UI moderne, spoken voice, musique préservée, watch inclus,
external display**.

---

## 5. REVENUS CONFIRMÉS (Appfigures, juillet 2026 — MAJ 2026-08-30)

| App | Downloads/mois | Revenue/mois | Sources | Note | Sentiment | Pays top |
|---|---|---|---|---|---|---|
| **Interval Timer (Float Tech)** | **40K** | **$50K** | Subs, IAPs | 4.81 (312K) | 95% | DE 19%, UK 13%, FR 12% |
| Boxing Interval Timer | <5K | **<$5K** | Subs, IAPs, +1 | 4.76 (41K) | 89% | MX 28%, VN 15% |
| intervals - CrossFit Timer | <1K | ~0 | — | — | — | — |

**LEÇON MAJEURE : le marché des timers n'est PAS homogène.**
- `interval timer` GÉNÉRAL = **$50K/mois** (la grosse machine : 40K downloads, note 4.81, 312K ratings).
- Le **timer de boxe/mma** spécifique = **<$5K/mois** (petit volume : <5K dl).
- ⇒ Le modèle gagnant = **timer intervalle généraliste**, PAS le timer par sport niche.
- La monétisation réelle = **abonnement + IAPs** (pas "juste pub") : les gens paient pour le
  pro (sons, rounds, watch, sauvegardes). Contrairement à l'idée "personne ne paie pour un timer",
  Interval Timer FAIT $50K/mois en subs+IAPs.

## 6. Description des apps leaders (ce qu'elles font exactement)
- **Interval Timer** : timer d'intervalles simple et beau (drag pour régler work/rest/rounds,
  musique préservée, voix ou bips de guidage, audio en arrière-plan, fonctionne avec Apple Watch).
  Freemium + abo pro.
- **Boxing Interval Timer** : round timer pour boxe/MMA/wrestling/BJJ/Muay Thai/HIIT/Tabata/CrossFit.
  Sons et temps configurables (prépa, round, warning, rest). Simple et efficace.
- **Seconds Interval Timer** : timer pro, circuits, presets, Apple Watch, niveaux (one-time pro).
