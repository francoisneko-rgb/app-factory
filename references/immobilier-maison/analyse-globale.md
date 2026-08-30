# ANALYSE — IMMOBILIER / MAISON (2026-08-30)

## 1. Ce que c'est
Apps immobilières : recherche de maison/location, mortgage calculator, gestion locative.

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| Zillow | 530K | (géant publicitaire) | Ads | — |

## 3. Description des leaders
- **Zillow** : recherche immobilière, valorisation, location. GÉANT (monétisation publicitaire + lead gen).

## 4. Pépites battables (extraits CSV)
- `rental homes (52/27)` ⭐, `commercial real estate (39/56)`, `tenant cloud (33/53)`,
  `realtor com (65/45)`, `budget car rental (59/55)`

## 5. Monétisation
- **B2B / leads / publicité** (pas direct utilisateur).
- Mortgage calculators = gratuit/free.

## 6. Verdict
- **Note : 5/10** : géants (Zillow/Redfin), data immobilière coûteuse, B2B complexe.
- **Pépite** : `rental homes (52/27)` — comp très basse mais marché difficile pour un indie.

---

## 9. ANALYSE APPROFONDIE (2026-08-30) — Zillow & Apartment List

### Données récupérées (dossier `references/immobilier-maison/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| Zillow Real Estate & Rentals (id 310738695, Zillow.com) | ✅ | 7 (6 + icône) | 200 (RSS) | **530K dl, revenus IAP = null** (Ads/leads B2B) |
| Apartment List: Apt rentals (id 659694038, Apartment List Inc.) | ✅ | 8 (7 + icône) | 200 (RSS) | **100K dl, revenus IAP = null** (leads) |

### Zillow — ce qu'il fait exactement
- **Le mastodonte immobilier US** : millions de listings achat/location, **Zestimate**
  (estimation de valeur), **BuyAbility** (budget d'achat selon finances + taux), **Sky Tours**
  (visites 3D), recherche partagée en couple, connexion agents, pré-approbation Zillow Home
  Loans. Note 4.80 (**7.2M d'avis !**), sorti 2009, mis à jour 2026-08-27.
- **Monétisation** : **B2B** (agents qui paient pour leads, publicité) — pas de revenus directs
  utilisateur → les revenus in-app Appfigures sont nuls mais l'entreprise est énorme.

### Apartment List — ce qu'il fait exactement
- **Recherche de locations personnalisée** : **Rental Matchmaker Quiz** (5 min) → "Perfect
  Matches" vs "Flex Matches", **swipe** (Tinder-like) pour shortlister, filtres par
  commodités/dates d'emménagement/temps de trajet. Note 4.69 (500K avis), sorti 2013.
- **Monétisation** : B2B (propriétaires/property managers paient pour leads premium) — gratuit
  côté utilisateur.

### Voix des utilisateurs — Zillow (plaintes = opportunités)
1. **Coordonnées revendues/sur-sollicitation** : "Do not put your information in the app for a
   realtor to return a call" — en donnant ses coordonnées, on est spammé d'agents. Plainte
   récurrente (scam 10, agent 33).
2. **Fake/obsolète** : "they don't list most of the details around the houses", prix/loc dispo
   pas à jour ("Information is not accurate"), annonces fantômes.
3. **Géolocalisation fausse** : "The house will be down the street, two miles away, or even all
   the way across the county from where the map shows it".
4. **Mêmes recommandations en boucle** : "recommends me the same apartments over and over" +
   propriétaires jamais joignables.
5. **Ce qui fait rêver** : **Zestimate** ("Zestimates are Helpful"), trouvé sa maison via
   l'app, street view/angles, planification d'achat (mortgage info), alertes.

### Voix des utilisateurs — Apartment List (plaintes = opportunités)
1. **"Will give everyone your personal and contact info"** : inscription = données partagées avec
   les property managers → spam. (spam 10, scam 14).
2. **"Zero Responsiveness"** : appels/emails sans réponse des proprios — le lead ne débouche pas.
3. **"WORST APP"** : bug de login qui bloque tout ("doesn't allow you to log in properly").
4. **Pas de support client** : "No Customer Support? I emailed multiple times… no one seems to be
   home".
5. **Ce qui fait rêver** : le **quiz/matchmaker** ("the way you can choose the filters is
   amazing", "sort by various priorities such as distance to work, budget, amenities"), swipe UX,
   a trouvé son appart ("I found my new apartment via Apartment List").

### Synthèse monétisation
- **AUCUNE monétisation directe utilisateur** (rev null sur les deux) : le marché immobilier
  grand public est un **jeu B2B/leads**. Pour un indie, imiter Zillow/Apartment List = se lancer
  dans la course aux données immobilières + réseau d'agents = **hors de portée**.
- **Gap exploitable** : les plaintes sont à 100% sur la **confiance et l'expérience** (fausses
  annonces, spam, non-réponse, données revendues). Un outil **sans partage de données**, qui
  **vérifie les annonces**, pourrait capter de la confiance — mais le problème = **d'où viennent
  les données ?** (les APIs MLS sont fermées/coûteuses).

### Stack RN + difficulté
- **Zillow-like** : RN + cartes + **API MLS/IDX** (licence coûteuse, réservée aux agents
  certifiés) + base de données massive. Complexité **5/5**. Mur : l'accès aux données.
- **Apartment List-like** : RN + intégration d'annonces (scraping/API propriétaires). Complexité
  **3/5** mais mur légal/données.
- **Angle viable sans données immobilières** : les **outils autour** (calculateurs mortgage,
  checklist visite, comparateur de quartiers) — pas de listing, que de la valeur utilitaire.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **"Home buying checklist & trackers"** : checklist de visite (points à vérifier par pièce),
  comparateur de maisons visitées (photos, notes, prix), suivi des étapes d'achat (offre,
  inspection, closing). **Aucune donnée MLS requise** = pas de mur de données. Monétisation :
  one-shot $4.99 ou freemium. Demande `rental homes (52/27)` / `real estate (55/50)`.
2. **"Mortgage calculator + plan"** : calculateurs (achat vs location, refinance, amortissement)
  + épargne apport — utilitaire pur, RN trivial, monétisation IAP pro.
3. **"Neighborhood/commute comparator"** : comparaison de quartiers (temps de trajet, écoles,
  coût de vie) pour les déménageurs — données publiques (census, écoles) sans API MLS.
4. **NE PAS refaire un portail d'annonces** : données fermées + B2B = mur insurmontable.

### Verdict
- **Zillow / Apartment List : 4/10 (inattaquables sur les listings)** — leçon = leurs plaintes
  (spam, données revendues, annonces fausses) montrent un **marché de la confiance** non servi,
  mais le vrai mur est l'accès aux données. Un indie doit rester **hors listings**.
- **Pépite réaliste** : outils de **préparation/achat** (checklist, comparateur, mortgage) —
  demande réelle (`rental homes 52`, `real estate`), zéro mur de données, stack RN 2/5.