# ANALYSE — VOITURE / TRANSPORT (2026-08-30)

## 1. Ce que c'est
Apps auto et transport : entretien voiture, carburant, parking, code de la route, EV charging,
location, stationnement.

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| Driving Theory Test 2025 | 10K | **$35K** | IAP/sub | — |
| myFuelLog | — | (petit) | — | — |
| ParkMobile/PayByPhone | — | (commission parking) | — | — |

## 3. Description des leaders
- **Driving Theory Test** : préparation au code (questions officielles).
- **myFuelLog / Fuel Record** : suivi de carburant/kilométrage.
- **PayByPhone/ParkMobile** : payer le stationnement (commission).

## 4. Pépites battables (extraits CSV)
- `theory test (67/57)` ⭐, `4 in 1 theory test (54/44)`, `driving test cancellations (48/52)`,
  `fuel record`, `car maintenance`, `parking (57/13)` (Metropolis), `flo ev charging (49/50)`
- Sous-niches : code de la route (par pays), entretien auto, EV charging, rappels de révision.

## 5. Monétisation
- **IAP/abo** pour le code de la route.
- **Commission** pour le parking (B2B).
- Abo pour l'entretien auto.

## 6. Stack & difficulté
- **Stack RN** : RN + (parking) paiement + (EV) API. Complexité 2/5.
- Difficulté : le contenu officiel (code) pour theory test.

## 7. Ce qu'il faudrait faire (si on choisit)
1. Choisir UNE sous-niche : **code de la route** (le plus demandé, 67/57), entretien auto,
   EV charging tracker.
2. Produit utilitaire simple.
3. Monétisation IAP/abo.

## 8. Verdict
- **Note : 7/10** (le cluster le plus fort de la famille "vie pratique") : demande 67 sur theory test,
  stack simple.
- **Pépite** : theory test / code de la route (quiz simple, demande forte, comp battable).
- Attention : contenu officiel requis (licence des questions).

---

## ANALYSE APPROFONDIE (2026-08-31) — myFuelLog, Fuel Record & PayByPhone

### Données récupérées (dossier `references/voiture-transport/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| myFuelLog: Car Maintenance (id 443693213, acty) | ✅ | 6 (5 + icône) | 10 | **$5K/mois** — payant $1.99 |
| Fuel Record: Gas Cost Tracker (id 1459147872, Takeshi Ejiri) | ✅ | 7 (6 + icône) | 10 | rev. non détecté (trop petit) — IAP |
| PayByPhone Parking (id 448474183, PayByPhone) | ✅ | 6 (5 + icône) | 10 | rev. non détecté (B2B), **880K dl/mois** |

### myFuelLog — le dinosaure du cluster (MORT = leçon)
- **Payant $1.99**, sorti 2011, **PAS mis à jour depuis 2017** (version 4.8.7, 9 ans de retard), score **2.7** (10 avis).
- **Ce qu'il fait** : track fill-ups, dépenses auto, kilométrage, export iTunes/Mail/Dropbox, logo constructeur.
- **Avis** : "Used to be great... the mileage calculation is completely off", "doesn't launch on iOS 14", "no way to delete vehicles", "developer doesn't respond". Les utilisateurs fuient vers Fuelly.
- **Leçon** : une app utilitaire qui ne se met plus à jour meurt. Le marché fuel log EST vivant (Fuelly 4.74, Fuel Record actif) mais il faut du maintien continu.

### Fuel Record — le modèle "solo qui marche"
- **Dev solo** (Takeshi Ejiri, Japon), note 4.59 (174 avis), sorti 2019, actif (mis à jour 2026-05).
- **Promesse ASO** : "No complicated steps. No hassle. Quick to log, easy to keep going — even if you usually give up." Simplicité radicale = l'angle.
- **Features** : logging ultra-rapide (faster than scanning receipts), charts clairs (fuel economy, mileage, cost), multiple vehicles.
- **Avis quasi tous 5★** : "The input system is easy and intuitive", "track and graph your fuel economy over time is very valuable", "Easy to use, read and understand".
- **Plaintes (2)** : (1) "You have to pay $4.99 for iCloud backup" — le backup payant fait fuir (utilisateur parti), (2) "Would have been great if maintenance records can be also added" — demande de feature.
- **Monétisation** : IAP (ad-free $0.99 + iCloud backup $4.99). Revenus trop petits pour Appfigures = <$5K/mois mais dev solo rentable.

### PayByPhone — le modèle B2B (pas à copier)
- **880K downloads/mois** (massif), note 4.85 (753 813 avis !), 95M drivers, 1 300+ locations, 11 langues.
- **Modèle** : frais de transaction + contrats villes/opérateurs (B2B2C). Revenus non détectés car commission.
- **Avis** : éloges (facilité, extension à distance, "saves all your vehicle and payment information"), plaintes (customer service refus de remboursement, UI confuse pour trouver le spot, notifications inutiles, "New users beware" — piège des tickets pour débutants).
- **Leçon** : le parking mobile = marché B2B fermé (contrats villes). **Ne PAS y aller.**

### Synthèse monétisation
- **Fuel logs** : payant one-shot (myFuelLog $1.99) OU IAP (ad-free/backup). Marché de petits revenus ($5K/mois max pour le leader Fuelly probablement), mais **dev solo viable**.
- **Parking** : B2B, hors scope.

### Stack RN + difficulté
- **Fuel log** : RN pur (formulaires, calculs MPG, charts, multi-véhicules). Complexité **1/5**. Pas d'API nécessaire. Le mur = la maintenance continue + différenciation.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **Fuel log "2.0" qui corrige les plaintes du marché** :
   - **Backup iCloud/CloudKit GRATUIT** (la plainte #1 de Fuel Record — le $4.99 iCloud backup fait fuir).
   - **Maintenance records inclus** (demande exprimée : "Would have been great if maintenance records can be also added").
   - **Delete/replace vehicles** (la plainte myFuelLog).
   - **CSV export/import gratuit** (les utilisateurs fuient myFuelLog avec des années de données).
   - Mise à jour régulière (myFuelLog = contre-exemple).
2. **L'angle gagnant** : "fuel log simple + maintenance reminders" = croisement fuel + car maintenance. La demande `fuel record` + `car maintenance` sur Appfigures à vérifier.
3. **Monétisation** : IAP one-shot (lifetime ~$4.99) plutôt qu'abo — les utilisateurs de fuel logs sont des bricoleurs frugaux, le marché n'absorbe pas l'abo (preuve : les 3 apps du cluster sont payant one-shot/IAP, pas d'abo).

### Verdict
- **myFuelLog : MORT** (pas de mise à jour depuis 2017, score 2.7) → ses utilisateurs historiques sont à récupérer, mais il est payant donc peu d'utilisateurs.
- **Fuel Record : preuve solo viable** mais micro-revenus. La demande est réelle mais **modeste**.
- **PayByPhone : hors scope** (B2B).
- **Note révisée du créneau fuel log : 5/10** — revenus faibles, marché de bricoleurs frugaux, mais stack trivial et opportunité de corriger des plaintes précises (backup payant, maintenance, delete véhicule). **Le cluster voiture-transport reste dominé par le theory test (déjà analysé dans theory-test/) comme meilleure sous-niche.**