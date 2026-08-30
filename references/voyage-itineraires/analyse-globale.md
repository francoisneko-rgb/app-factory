# ANALYSE — VOYAGE / ITINÉRAIRES (2026-08-30)

## 1. Ce que c'est
Apps de planification de voyage : itinéraires, trip planner, suivi de vols, packing list, hôtels.

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| TripIt | 50K | **$160K** | Subs | — |
| Roadtrippers | 5K | $55K | Subs | — |

## 3. Description des leaders
- **TripIt** : agrège tous tes emails de voyage → un itinéraire unique. Abonnement Pro.
- **Roadtrippers** : planificateur de road trip (lieux, itinéraires).

## 4. Pépites battables (extraits CSV)
- `trip planner`, `flight tracker`, `packing list`, `travel itinerary`,
  `allegiant air (64/46)`, `roadie driver (62/36)`, `city mapper (53/47)`, `packr (57/53)`
- Sous-niches : packing list (Packr, PackPoint), suivi de vols, itinéraires par ville.

## 5. Monétisation
- **Abonnement** (TripIt Pro).
- Commission/affiliation pour réservation.

## 6. Stack & difficulté
- **Stack RN** : RN + API voyage/flights. Complexité 2-3/5.
- Difficulté : données voyage (API) + concurrence Booking/Expedia.

## 7. Ce qu'il faudrait faire (si on choisit)
1. Choisir UNE sous-niche simple : **packing list** (Packr $57/53), tracker de vols, itinéraire par ville.
2. Produit utilitaire simple.
3. Monétisation abo léger ou IAP.

## 8. Verdict
- **Note : 6.5/10** : demande réelle, monétisation prouvée (TripIt $160K).
- **Pépite** : packing list (Packr/PackPoint) — simple, RN pur, utilité réelle.

---

## ANALYSE APPROFONDIE (2026-08-31) — TripIt & Packr

### Données récupérées (dossier `references/voyage-itineraires/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| TripIt: Travel Planner (id 311035142, TripIt/SAP Concur) | ✅ | 11 (10 + icône) | 10 | **$160K/mois**, 50K dl — Subs Pro |
| Packr Travel Packing List (id 1208312901, Jeremie Leroy) | ✅ | 6 (5 + icône) | 10 | **$10K/mois**, 5K dl — IAP Premium |

### TripIt — ce qu'il fait exactement
- **L'itinéraire automatique** : forwarder les emails de réservation (vol, hôtel, voiture) à `plans@tripit.com` → tout est agrégé dans un seul itinéraire. "Nearly 20 million travelers".
- **Promesses ASO** : "world's highest-rated travel planner", "No more frantically searching through your inbox", "even when you're offline", "Siri shortcuts", upload PDF/boarding passes/digital passport QR.
- **TripIt Pro à $48.99/an** : alertes vol temps réel, notifications remboursement baisse de prix, points tracker, maps aéroport, alerts disruption. "For roughly the price of checking your bags".
- Note 4.84 (308 870 avis !), sorti 2009 (17 ans), acquis par SAP Concur. Très actif.

### Packr — ce qu'il fait exactement
- **Smart packing list** : la liste se construit AUTO depuis destination + dates + activités + météo. Apprend de chaque voyage. Multi-destination, sync via compte Apple, offline, partage, pets.
- **Promesses ASO** : "you never forget a thing", "Packr learns from each of your trips", "packing over a million items", "Better prepared", "Less stress".
- Dev **solo** (Jeremie Leroy), note 4.62 (7 071 avis), sorti 2017, mis à jour 2026-08-28. Freemium → Premium (IAP).
- **$10K/mois avec 5K dl = $2/download**. Interop avec TripIt (import itinéraires).

### Voix des utilisateurs — TripIt (ce qui fait rêver)
1. **"TripIt saved my holiday"** : les alertes de vol annulé AVANT l'airline (à 1h45 du matin) = valeur vitale. La feature qui fait les 5 étoiles.
2. **"Game changer" pour voyageurs fréquents** : business travelers, familles, croisières (il parse les itinéraires de croisière !).
3. **Zéro papier** : "Rather than using a travel agency... tons of paper in my folder" → tout est remplacé par l'app.
4. **"Travel Scheduling at its finest"** : "gives me flight notifications almost before the Airline sends them".

### Voix des utilisateurs — TripIt (plaintes = opportunités)
1. **Pro pas toujours justifié** : "$48 membership not worth the price", "Point tracker is worthless considering most airlines have their own apps". Le Pro est critiqué.
2. **UI iPad/iPhone pauvre** : "User interface is inadequate from iPad and iPhone", pas de drag & drop, pas de duplication d'événement, "accidentally merge two different vacations into one trip".
3. **Confusion quand on modifie les réservations** : doublons de vols si on renvoie un itinéraire modifié.
4. **Confidentialité** : collecte de PII ("Sad to see them gobbling PII now") — sensibilité réelle.
5. **Pas fait pour les activités** : "It's great for reservations and confirmations, not for activities".

### Voix des utilisateurs — Packr (ce qui fait rêver)
1. **"The only packing list system that has ever worked with my AuDHD brain"** — organisation pour neurodivergents = promesse puissante.
2. **Custom lists infinies** : "I can have a list for my Disney World trips and Disney cruises", cello trips, carry-on vs checked.
3. **"It had said the weather... so I knew what to pack"** : la météo intégrée évite le sur-packaging.
4. **"I know I'll be using it for every trip from now on"** : habitude fidélisante.
5. **Support dev solo réactif** : "Jeremie is always super-responsive".

### Voix des utilisateurs — Packr (plaintes = opportunités)
1. **Friction onboarding (plainte récente)** : "Why do they need your personal info??... I just want to create a packing list" (dates de voyage + genre obligatoires avant création de liste) — le seul avis 1★. → **Ne PAS demander de données perso à l'onboarding.**
2. **Pas d'archive** : "Packr deletes old lists, so users have to redo any lists for trips" → archivage auto des anciennes listes.
3. **Glitches** : catégories qui restent collées, impossible à supprimer.

### Synthèse monétisation
- **TripIt** : freemium + Pro $48.99/an. $160K/mois. Le Pro est la cible des plaintes → marge d'amélioration.
- **Packr** : freemium + IAP Premium. $10K/mois (dev solo, donc très confortable). $2/download.
- Les deux sont du **freemium utilitaire** : la valeur gratuite suffit, le payant est "confort".

### Stack RN + difficulté
- **TripIt-like** : parsing d'emails + agrégation + notifications temps réel. Complexité 3/5 (parsing = le mur). Données voyage = API.
- **Packr-like** : RN pur (listes, templates, météo). Complexité **1/5**. Dev solo prouvé.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **Packing list amélioré (la pépite)** : Packr fait $10K/mois en solo avec une app simple. On peut faire mieux :
   - **Onboarding zéro friction** (pas de données perso — la plainte #1 de Packr).
   - **Archivage auto** des listes (2e plainte).
   - **Import des réservations** via emails (comme TripIt) → packing list auto depuis l'itinéraire réel.
   - Angle **"packing list + météo + rappels"** pour le voyageur occasionnel US.
2. **NE PAS attaquer TripIt frontal** : l'agrégation d'emails + 17 ans de données + SAP Concur = moat énorme. Mais le **Pro est critiqué** : un "TripIt-lite" avec alertes vol basiques à $19/an pourrait prendre les non-Pro.
3. **Book/itinéraire par activité** : les plaintes TripIt montrent un gap "activités" (réservations oui, activités non).

### Verdict
- **TripIt : 160K/mois établi, mais Pro critiqué (valeur faible perçue) et UI vieillissante** → angle "TripIt killer simple" risqué (moat email-parsing) mais le mécontentement Pro est réel.
- **Packr : 10K/mois dev solo, stack trivial, frictions identifiées précisément (onboarding, archive)** → **la pépite la plus battable du cluster**. Vérifier `packing list`, `packr` sur Appfigures (Packr déjà 57/53).
- **Recommandation : packing list "2.0"** — les plaintes Packr (onboarding, archive) + le gap TripIt (activités) donnent un produit différencié et simple.