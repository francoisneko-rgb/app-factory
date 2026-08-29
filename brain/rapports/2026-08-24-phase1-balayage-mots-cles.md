# Balayage large mots-clés — 2026-08-24

## Objectif
Étendre les racines fournies (clusters kids/camera/fitness + 90 suffixes génériques) en
suggestions longue traîne et classer par popularité / concurrence / opportunité.

## Source de données (honnêteté méthodologique)
- **Appfigures** : le compte Free Forever n'a PAS l'add-on "Public Data API" (test réel = 403).
  Aucune donnée de volume de recherche Appfigures exploitable. → source remplacée par :
  **Google Suggest** (expansion longue traîne réelle, sans clé) + **scrapers Google Play &
  App Store** (présence et force des apps rankées).
- Les indicateurs `popularity` et `competition` sont des **proxies** dérivés du nombre et de
  la force des apps rankées sur chaque terme (0-100), **PAS des volumes de recherche réels**.
  La popularité ici = densité/presence ; la concurrence = note moyenne + force du leader.

## Dataset complet
`brain/keywords/keywords-2026-08-24.json` (109 racines, ~850 termes, apps rankées par terme).
Analyse scorée : `brain/keywords/analysis-2026-08-24.json`.

## Top angles "white space" (demande présente + leader faible/absent)
Opportunité = popularité − concurrence. Leader faible = note du top < 4.0.

| Angle | Popularité | Concurrence | Opportunité | Leader actuel (note) | Verdict |
|---|---|---|---|---|---|
| Full/body tracking games | 96-98 | 76-86 | **12-20** | Driver4VR 2.4 / PinoFBT 2.8 | **URGENT — niche vide, notes catastrophiques** |
| Motion tracking games kids | 100 | 88 | 12 | Elev8 (aucune note) | **URGENT — leader sans note** |
| Active games kids outdoors | 100 | 86 | 14 | Wild Animals VR 3.3 | forte demande, leader médiocre |
| Active games kids camp | 98 | 88 | 12 | Little Panda 4.1 | opportunité |
| Motion sport games (AR) | 100 | 88 | 12 | Motion Sport Games AR 4.5 | angle viable |
| Interactive motion kids | 100 | 88 | 14 | Motion Sport Games AR 4.5 | bonne |
| Kids song / cinema / movies | 100 | 88 | 12-14 | leaders 3.9-4.2 | moyen |
| Fitness "your way" (perso) | 96 | 59 | **37** | Well onTarget 1.2 | **Angle program perso très sous-exploité** |

## Clusters prioritaires utilisateur — réalité mesurée
- **Camera fitness / AI form check (adultes)** : les termes longue traîne (`AI fitness
  tracker camera`, `camera fitness kids`) donnent **0 suggestion Google** → requêtes
  nouvelles/non indexées. Les résultats store sont saturés par des apps génériques
  (Home Workout 4.86, Down Dog). Or les apps "form checker" présentes sont **médiocres**
  (Gym Lens sans note, BodBot 4.56) → **vraie fenêtre** pour un camera/AI form checker bien fait.
- **Pose estimation yoga** : saturé par majors (Daily Yoga, Down Dog 4.87) ; les apps dédiées
  pose avec note 3.9-4.3. Concurrence forte mais note des challengers moyenne.
- **Home workout no-equipment** : duopole saturé (Home Workout 4.86). Éviter frontal.

## Angles d'attaque recommandés (à valider par gate)
1. **Camera body-tracking pour kids / famille** (jeux de mouvement) — concurrence quasi nulle
   sur le segment, notes leaders 2-4.5. S'appuie sur la compétence technique "tracking".
2. **AI form-checker (gym / yoga)** orienté note/qualité : attaquer les apps au form-check
   médiocre (Gym Lens/BodBot) avec meilleure UX + correction de posture réelle.
3. **Program fitness personnalisé** ("your way" : adapté au matos dispo) — leader noté 1.2.

## Suite
Phase suivante (G2) : scraper les apps concurrentes des angles retenus (metadata, avis,
monétisation) avec `scraping-concurrents` + `gauntlet-loop` sur les surfaces critiques.
→ **Attendre validation utilisateur sur le choix du/des angle(s).**