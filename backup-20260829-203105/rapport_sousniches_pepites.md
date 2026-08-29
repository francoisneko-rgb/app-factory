# Rapport — Approfondissement des pépites (Appfigures related keywords)

Date : 2026-08-27 · Source : Appfigures Keyword Inspector (related keywords, iOS US)

## Méthode
Pour chaque pépite identifiée, on a extrait ses mots-clés liés (related keywords) pour
découvrir les **sous-niches de 2e niveau** à demande réelle (Popularité > 30) et
concurrence battable (< 80). Fichiers : `appfigures_raw/related_*.csv`.

## Pépites consolidées (demande réelle + concurrence battable)

### 1. Challenges fitness 75 jours — FAMILLE LA PLUS SOLIDE
| Mot-clé | Popularité | Compétitivité | Verdict |
|---|---|---|---|
| 75 hard | 55 | 61 | Pépite |
| 75 day challenge | 49 | 62 | Pépite |
| 75 hard challenge | 41-44 | 52-53 | Pépite majeure |
| 75 soft challenge | 34 | 60 | Pépite (version douce) |
Marché fragmenté (aucun géant, apps récentes notées 4.45-5.00). Stack React Native simple.
→ **Top candidat produit.**

### 2. House design / Home design IA
| Mot-clé | Popularité | Compétitivité |
|---|---|---|
| house design | 67 | 68 | Pépite majeure |
| home design | 53 | 76 | Sous-pépite |
| maison (FR) | 50 | 67 | Surprenant |
| decoration | 32 | 72 | Sous-pépite |
Tendance AppRadar FORTE : AI Home Design +21.8%, Archo +27.4%. Plus complexe (3D/jeu).
→ **Pépite à forte demande, à creuser (jeu de déco React Native).**

### 3. Habit tracker + challenges
| Mot-clé | Popularité | Compétitivité |
|---|---|---|
| habit tracker | 58 | 79 | Pépite |
| everyday | 55 | 79 | Sous-pépite |
| streaks | 48 | 85 | |
Leader Finch (4.94, 12.3K) mais angles variés. Stack simple.

### 4. Bien-être / self-love / wellness
| Mot-clé | Popularité | Compétitivité |
|---|---|---|
| wellness | 36 | 76 | Pépite |
| finch self care pet | 44 | 61 | Pépite (concept gamifié) |
| manifest | 43 | 83 | Demande réelle |
| affirmations | 38 | 89 | Demande réelle |
| mental health | 49 | 87 | Demande forte, comp élevée |

### 5. Journaling
| Mot-clé | Popularité | Compétitivité |
|---|---|---|
| journal | 61 | 92 | Bouché (Apple domine) |
| stoic | 43 | 60 | Pépite journaling stoïque |
Les sous-niches précises (gratitude journal, stoic journal) = pop 5 (micro-niches).

### 6. Fitness / bien-être corps
| Mot-clé | Popularité | Compétitivité |
|---|---|---|
| home workout | 48 | 68 | Pépite |
| yoga | 50 | 67 | Pépite |
| balance | 43 | 60 | Pépite méditation |

## Constats clés
1. **Les challenges fitness (75 hard/soft/day)** = le cluster le plus cohérent : demande réelle
   (34-55), concurrence battable (60-62), marché fragmenté, stack simple React Native.
2. **House design/home design** = plus grosse demande (67) + tendance IA forte, mais complexe.
3. **Bien-être (wellness, finch self-care)** = demandes réelles, concepts gamifiés différenciants.
4. Les micro-niches trop précises (gratitude journal, stoic journal, challenges variés 21/28/45
   jours) = pop 5, peu de volume → à éviter sauf pour compléter un produit.

## Recommandation
Prioriser pour un produit React Native simple : **75 Hard challenge** (fragmenté, simple) puis
**wellness/self-care gamifié** (Finch-like) et **home design jeu de déco**. Les fichiers
détaillés sont dans `brain/marche/scoring/appfigures_raw/`.
