# Analyse globale — Escape Room / Puzzle (Niche C)

Date : 2026-08-28 · Sources : Appfigures (rankings + App Intelligence), avis iOS, scraping.
Stack cible : React Native.

---

## 1. Fiche marché
- **Demande** : escape room games **54/51**, escape game **45/70**, escape room **46/60**.
  Volume réel : leader 98K ratings (Room Escape 50), Rooms & Exits 110K dl/mois.
- **Concurrence** : compétitivité **51** (basse !) sur "escape room games". Concurrents =
  devs indépendants (chinois, UK, serbe), UI 10 ans, apps frustrantes. Pas de géant type
  Playrix/King sur ce mot-clé précis.
- **Tendance** : puzzle/escape = genre stable et accessible ; l'IA permet de générer du
  contenu d'énigmes plus vite.
- **Positionnement** : sous-niche "escape room / puzzle" des jeux de logique (cluster 20).

## 2. Besoin & cible
- **Problème résolu** : ennui/besoin de stimulation mentale, envie de challenge sans
  engagement, "escape room à la maison" (sans payer 30€/perso en réel).
- **Persona** : (a) **casual puzzler 25-50** (mobile, sessions 5-15 min) ; (b) **fan
  d'escape rooms réelles** qui veut la simulation ; (c) **familles/enfants** (mode
  non-horreur demandé) ; (d) **étudiants/parents** (cité par les avis : "helps you in
  School", observation).
- **Job to be done** : "Donne-moi des salles d'escape stimulantes, logiques et
  gratifiantes sur mon téléphone, sans me bombarder de pubs ni me forcer à payer pour
  continuer."

## 3. Concurrents — panorama + monétisation

| App | Force | Faiblesse | Modèle |
|---|---|---|---|
| Rooms & Exits (Webelinx, 14K) | **contenu premium** (graphismes, histoire), $250K/mois | coins chers, énigmes illogiques | Free + ads + IAP hints |
| 50 Tiny Room Escape (Kiary, 24K) | récent, graphismes nets, US 74% | **IAP no-ads non honoré**, energy system, bugs | Free + ads + keys/IAP |
| Room Escape: 50 rooms (Zhonglian, 98K) | volume historique, gratuit, simple | UI 10 ans, ad-wall, glitches | Free + ads + IAP hints |
| Escape Room: Can you escape? (30K) | gros volume | UI datée | Free + ads |
| Escape Rooms: Room Escape / Tiny Room Story | petits acteurs | petits volumes | Free + IAP |

### SYNTHÈSE MONÉTISATION (apps n°1-2 qui se vendent le mieux)
- **Modèle unique du segment : free + video ads + IAP hints/keys** (pas d'abonnement).
- **Prix constatés** : IAP no-ads ~$7 (Kiary) ; hints en coins (100-300 coins) ; keys
  pour débloquer les niveaux (Kiary).
- **Ce que les users en pensent** : "paid $7 to remove ads, still get ads after every
  room" (Kiary = le scandale) ; "far too many ads" (Zhonglian) ; "hints too expensive"
  (Webelinx).
- **Leçon** : le segment accepte **free + ads + IAP raisonnables** MAIS exige que les
  **IAP soient honorées** et que les pubs **ne cassent pas le jeu**. Le meilleur revenu
  (Webelinx $250K) vient du **contenu premium**, pas des IAP forcées.

### Estimation revenus des concurrents (Appfigures App Intelligence, Jul 2026, monde)
> ⚠️ ESTIMATIONS à valeur indicative (Appfigures), pas des chiffres officiels.

| App | Est. Downloads | Est. Revenue (After Fees) | Revenue Sources | Sentiment |
|---|---|---|---|---|
| **Rooms & Exits** | 110K | **$250K/mois** | IAPs, Ads | 94% (734) |
| **50 Tiny Room Escape** | 55K | **$15K/mois** | IAPs, Ads | 84% (1.1K) |
| **Room Escape: 50 rooms** | 25K | **$10K/mois** | IAPs, Ads | 92% (1.4K) |

→ Le marché total ≈ **$275K/mois** sur les 3 leaders. Concentré sur Webelinx (contenu
premium). Un nouvel entrant avec un bon contenu + monétisation propre peut viser
$20-50K/mois rapidement puis plus.

## 4. Stack technique & complexité
- **React Native** : jeu point-and-click 2D (RN + Skia/React Native Game Engine), scènes
  par salle, inventaire, puzzles (cadenas, combinaisons, glisser-déposer), hints,
  vidéo ads (AdMob), IAP (RevenueCat), sauvegarde cloud (anti-perte de progression).
- **Complexité : 3/5** (modérée). Pas de 3D lourde (Webelinx fait du 2.5D stylisé ; un
  2D propre suffit). Le gros travail = **contenu** : 20-50 salles × énigmes + art.
- **Effort** : 8-10 semaines pour un pack de 25-50 salles (art simple + énigmes
  générées/éditées).

## 5. Monétisation de NOTRE app
- **Modèle conseillé** : **free + pubs non-intrusives (1 hint = 1 ad, jamais d'ad-wall) +
  IAP one-time** : "No Ads forever" $4.99 (HONORÉ, anti-Kiary) + packs de salles
  premium $1.99-4.99 (anti-grind, façon Webelinx). PAS d'energy system.
- **Fourchettes** : IAP no-ads $4.99 ; pack d'histoires $2.99 ; hints illimités $1.99.
- **Potentiel estimé** : 20-50K dl/mois × ARPU $0.5-1.5 → **$10-75K/mois** réaliste une
  fois le trafic ASO installé (Rooms & Exits fait $2.3/download). Année 1 : $50-200K.

## 6. Gaps & opportunités
- **① IAP "No Ads" HONORÉE** (le scandale n°1 de Kiary) : promesse ASO "No Ads means No
  Ads" — différenciateur net et vérifiable.
- **② Pas d'energy system** (anti-Kiary) : jouer sans limite, ou limite généreuse
  (5 keys/jour gratuites, jamais bloquant).
- **③ Pubs non-cassantes** (anti-Zhonglian/Kiary) : pas d'ad-wall entre les niveaux, pas
  de pub qui freeze, 1 ad volontaire = hint.
- **④ Énigmes logiques et testées** (plaintes transverses "random guesses") : playtesting,
  indices contextuels (montrer les étapes manquées au lieu de la solution).
- **⑤ Économie équilibrée** (anti-Webelinx) : hints abordables, coins gagnables en jeu
  (pas de grind 3 heures).
- **⑥ Mode "no horror" / family-friendly** (1★ Webelinx : "not for prudes") : thèmes
  non-effrayants → élargit l'audience enfants/familles.
- **⑦ Sauvegarde cloud + anti-bug** (progression perdue Kiary) : sync iCloud, pas de
  perte de progression.
- **⑧ Histoire + chapitres** (la recette Webelinx à $250K) : 2-3 histoires, personnages,
  récompenses.

## 7. Verdict & décision
- **Note : 4/5.** Demande réelle (54/51 = le meilleur ratio), stack faisable, leaders
  datés et frustrants, modèle prouvé ($250K/mois Webelinx).
- **Reco : VALIDER comme piste solide.** Meilleur angle : **"l'escape room moderne et
  honnête"** — 50 salles au contenu soigné (thèmes variés, famille-friendly), zéro
  ad-wall, IAP "No Ads" honorée, hints logiques, pas d'energy system. Anti-Kiary (IAP
  non honorée), anti-Zhonglian (ad-wall), anti-Webelinx (économie équilibrée).
- **Risques** : (a) le **contenu** (art + énigmes) est le vrai coût — 50 salles de
  qualité demandent du travail ; (b) concurrence de volume (98K ratings leader) mais
  faible qualité → l'ASO sur "escape room games" (comp 51) est accessible ; (c) le genre
  jeu = attrition élevée, nécessite des updates réguliers (nouvelles salles) ; (d) les
  jeux peuvent nécessiter un processus de review plus strict.
- **Comparé aux autres niches** : moins de revenus potentiels que mobility (Bend $1M)
  mais demande stable et modèle simple, idéal en 2e app.

---

### Fichiers créés (à plat, dans references/escape-room/)
- donnees-marche.md · room-escape-50.md + room-escape-50.metadata-ios.json + room-escape-50.avis-ios.json + screenshots-room-escape-50/
- tiny-room-escape.md + tiny-room-escape.metadata-ios.json + tiny-room-escape.avis-ios.json + screenshots-tiny-room-escape/
- rooms-exits.md + rooms-exits.metadata-ios.json + rooms-exits.avis-ios.json + screenshots-rooms-exits/
- analyse-globale.md (ce fichier)