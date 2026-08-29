# Analyse des pépites — fonction, stack technologique, complexité

Date : 2026-08-27 · Source : Appfigures (Popularité/Compétitivité iOS) + AppRadar (tendance)

## Méthode
Pour chaque pépite (demande réelle Popularité > 30 + concurrence battable < 80), on analyse :
- **Fonction** : ce que fait l'application
- **Stack technologique** : ce qu'il faut pour la construire
- **Complexité** : effort technique (1 = très simple, 5 = très complexe)
- **Verdict de faisabilité** pour notre factory Flutter

---

## 1. House design (67/68) — MAJEURE
**Fonction** : applications de design d'intérieur / plan de maison. Deux profils distincts dans le
classement : (a) **jeux de déco** (Design Home, Redecor, Decor Life — gamifiés, collection), et
(b) **vrais outils 3D** (Live Home 3D, Home Design 3D, Home Planner AI — plan 2D/3D, meubles).
**Stack** :
- Option jeu : moteur 2D + assets déco, mécanique match/collection (Flutter suffit, simple)
- Option outil 3D : **moteur 3D temps réel** (Flutter 3D via CustomPainter/FireGL, ou Unity/React
  Native + Three.js), gestion meubles 2D/3D, catalogues, AR (LiDAR) pour projection meubles
**Complexité** : 4/5 (la vraie 3D est complexe ; le jeu de déco est plus simple)
**Verdict** : le **jeu de déco** (Design Home-like) est faisable en Flutter ; l'outil 3D est plus
risqué. Forte demande, concurrence modérée → bonne pépite si on part sur le jeu de déco.

## 2. 75 Hard challenge (44/52) — MAJEURE
**Fonction** : tracker de challenge 75 jours (habitudes quotidiennes : 2 séances sport, 1 galon
d'eau, lecture 10 pages, pas de cheat meal, photo journalière). Check-lists, streaks, rappels.
**Stack** : Flutter pur, local storage + éventuellement sync cloud. Listes, calendrier, streaks,
notifications push, partage social. **Aucune 3D, aucun backend lourd.**
**Complexité** : 1/5 (très simple)
**Verdict** : **FORT — idéal pour notre stack.** Marché fragmenté (aucun géant, apps récentes
4.45-5.00), demande réelle 44, comp 52. Monétisable par abonnement.

## 3. Habit tracker (58/79)
**Fonction** : suivi d'habitudes (tâches quotidiennes, streaks, rappels, stats, widgets).
**Stack** : Flutter + local storage + notifications + widgets iOS. Simple.
**Complexité** : 1/5
**Verdict** : marché concurrentiel mais demande forte (58). Faisable, mais moins différenciant
qu'un 75 Hard. Bonne base.

## 4. Home workout (48/68)
**Fonction** : programmes d'entraînement à domicile (vidéos, exercices sans équipement, plans).
**Stack** : Flutter + vidéos (hébergées ou embarquées) + suivi de progression + éventuellement
camera/form-check IA (plus complexe). Vidéo + log + plans.
**Complexité** : 2/5 (sans camera IA), 4/5 (avec form-check)
**Verdict** : faisable, leaders (Leap Health) bien établis mais comp 68 acceptable.

## 5. Yoga (50/67)
**Fonction** : cours de yoga (vidéos/animations, poses, programmes, timer).
**Stack** : Flutter + vidéos/animations 2D de poses + timer + programmes.
**Complexité** : 2/5
**Verdict** : faisable, comp modérée. Différencier (yoga pour cible précise : seniors, post-partum).

## 6. Stoic journaling (43/60)
**Fonction** : journal de réflexion stoïque — citation du jour, prompts de réflexion, gratitude,
notes philosophiques, suivi d'humeur. Motivation/inspiration quotidienne.
**Stack** : Flutter pur + contenu (citations stoïques) + journal local + prompts quotidiens +
éventuellement IA (génération de réflexions). Aucune complexité technique.
**Complexité** : 1/5
**Verdict** : **FORT — simple, monétisable, tendance bien-être.** Recoupe "philosophy app" (3.92).

## 7. Journaling / bien-être général
**Fonction** : journal intime, gratitude, mood tracker, notes de bien-être, prompts d'inspiration,
recommandations quotidiennes, citations motivantes.
**Stack** : Flutter pur + contenu + journal + prompts + éventuellement IA (recommandations).
**Complexité** : 1/5
**Verdict** : **FORT — très simple, grande variété de sous-niches.** Tendance bien-être forte
(recoupe balance 43/60, gratitude, affirmation).

## 8. Snorelab / ronflement (39/61)
**Fonction** : détection et analyse du ronflement (microphone), enregistrement nocturne, stats,
amélioration du sommeil.
**Stack** : Flutter + **traitement audio (micro)** + analyse du son (détection ronflement) +
stockage audio. Le traitement audio demande du natif (plugin).
**Complexité** : 3/5 (audio processing, batterie, vie privée)
**Verdict** : faisable mais plus technique (audio). Demande réelle 39.

## 9. Passport photo maker (43/56)
**Fonction** : générer une photo d'identité conforme (recadrage, fond, dimensions par pays).
**Stack** : Flutter + caméra + traitement image (recadrage, suppression fond IA) + règles par pays.
**Complexité** : 2/5 (avec IA fond), 3/5 (règles multi-pays)
**Verdict** : faisable, recoupe le cluster AI photo. Demande réelle 43.

## 10. Parrot / voice changer (52/78)
**Fonction** : changer sa voix (effets, enregistrement, partage).
**Stack** : Flutter + **traitement audio temps réel** (pitch, modulation) + natif audio.
**Complexité** : 3/5 (audio temps réel)
**Verdict** : faisable mais audio plus technique. Demande réelle 52.

---

## Recommandation de priorité (faisabilité × demande × concurrence)
1. **Journaling / bien-être / stoïque** — complexité 1/5, forte demande, tendance forte. LE plus simple.
2. **75 Hard challenge** — complexité 1/5, marché fragmenté, demande réelle. Excellent.
3. **Habit tracker** — complexité 1/5, demande forte.
4. **House design (jeu de déco)** — demande très forte, faisable en jeu.
5. **Home workout / Yoga** — complexité 2/5, demande forte.

Les pépites **journaling/bien-être/stoïque + 75 Hard** sont les plus adaptées à notre stack
Flutter (simple, monétisable, demande réelle, concurrence battable).
