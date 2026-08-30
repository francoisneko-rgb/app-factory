# ANALYSE — HOBBIES / DÉPENSE (drones, vin, whisky, collection) (2026-08-30)

## 1. Ce que c'est
Apps pour hobbies où les gens dépensent : drones (DJI), vin, whisky, café, collection (LEGO,
vinyle, montres).

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| AllTrails (cross) | 2M | $9M | Subs | — |
| Vivino (vin) | 130K | **$520K** | Subs | — |
| DJI Fly | 510K | (hardware) | — | — |
| Discogs (vinyl) | 45K | ~0 (marketplace) | — | — |

## 3. Description des leaders
- **Vivino** : scanner de vins, achat, notes — abonnement Wine+.
- **DJI Fly** : pilotage de drones (lié au hardware DJI).

## 4. Pépites battables (extraits CSV)
- `dji fly (62/53)`, `vivino (48/72)`, `total wine (57/71)`, `whiskey searcher`,
  `filtru coffee`, `key collector comics`
- Sous-niches : tracker de cave à vin, journal whisky, tracker café.

## 5. Monétisation
- **Subs** (Vivino $520K).
- Les amateurs de hobbies paient (niche riche).

## 6. Verdict
- **Note : 6/10** : audiencess riches qui dépensent, monétisation possible (Vivino $520K),
  mais leaders consacrés.
- **Pépite** : journal/tracker de collection (whisky, vin, café) — simple, RN pur, niche fidèle.

---

## 9. ANALYSE APPROFONDIE (2026-08-30) — Vivino & DJI Fly

### Données récupérées (dossier `references/hobbies-depense/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| Vivino: Drink The Right Wine (id 414461255, Vivino ApS) | ✅ | 9 (8 + icône) | 200 (RSS) | **$520K/mois**, 130K dl — Subs |
| DJI Fly (id 1479649251, DJI) | ✅ | 5 (4 + icône) | 200 (RSS) | **gratuit**, 510K dl — hardware |

### Vivino — ce qu'il fait exactement
- **Scan d'étiquette → note, avis, accords mets-vins** : 16M de vins, 245K domaines, 70M
  d'utilisateurs. Scan des **cartes de restaurants entières**, recherche par cépage/région/style/
  plat, **achat direct** (500+ marchands), **journal personnel**, **cave digitale** (collection),
  score "Match for You" (personnalisation). Note 4.84 (136K avis), 14 langues.
- Lancé 2011, mis à jour 2026-08-25. **Monétisation : Wine+ (sub)** + **commission marketplace**
  (achat de vin) — double monétisation.

### DJI Fly — ce qu'il fait exactement
- **App de pilotage officielle DJI** (Mini, Mavic, Air, Avata, Neo, Flip) : interface de vol,
  QuickTransfer (transfert sans fil), **Fly Spots** (lieux de vol), **DJI Academy** (tutoriels
  débutant→pro). Note **3.63** (4.7K avis — très bas pour DJI), 1.49 Go (!), 17 langues.
- **Companion hardware** : elle ne sert qu'avec un drone DJI → modèle "perte leader" (l'app
  vend le drone, pas l'app). Score bas car bugs critiques en vol = dangereux.

### Voix des utilisateurs — Vivino (plaintes = opportunités)
1. **Achat décevant** : "don't use to buy wine!", "I ordered six bottles… [problème de
   livraison]", "terrible wine buying" — le **commerce intégré a une mauvaise réputation**.
2. **Déclin perçu + push commercial** : "App has become almost useless", "Slow and steady
   decline", "sold to the highest bidder" (regret de l'époque simple), "always try to get you
   to [pay]" → les anciens utilisateurs déplorent la transformation en boutique.
3. **Bug de scan** : "the functionality of this app is completely useless and does not work at
   all" (après update) — le scan (cœur de l'app) casse parfois.
4. **Ce qui fait rêver** : "You need Vivino!! I tell everyone I know", "Takes the guess work
   out of wine buying", **"restaurant staff must-have"** (les sommeliers/serveurs l'utilisent
   au travail !), "digital cellar… once you have scanned the bottle", découverte et
   apprentissage du vin ("I wanted to get more into accurately describing wines").

### Voix des utilisateurs — DJI Fly (plaintes = opportunités)
1. **Crashs = perte de données de vol** : "the app crashed, and I lost all of [the footage]"
   — perdre ses vidéos de drone est une catastrophe émotionnelle.
2. **Batterie/chauffe** : "uses a massive amount of battery charge, overheats the phone" (iPhone
   8) — l'app est lourde (1.5 Go).
3. **Compatibilité limitée** : "DOESN'T support the phantom series just mavic series", "no SDK
   for Mavic 3" — frustration des possesseurs de matériel non supporté.
4. **Menus complexes** : "options buried in menus", "not always intuitive".
5. **Privacy** : "HUGE PRIVACY RISK" (scandales DJI) — inquiétude récurrente.
6. **Ce qui fait rêver** : "super beginner-friendly", "very user friendly if you have never
   flown", "before you fly in any area it [checks]" (géofencing sécurité), "camera modes are
   easy", "saved my M[avic]".

### Synthèse monétisation
- **Vivino** : **$520K/mois pour 130K dl = $4/download** + la commission marketplace (revenus
  invisibles dans l'estimate). Modèle double (sub + e-commerce) validé sur audience riche.
- **DJI Fly** : 0$ direct — vend du hardware. **Preuve que le marché drone est captif du
  hardware** : pas d'app drone standalone rentable en vue (les "Go Fly for DJI Drones" et cie
  sont des accessoires mal notés).
- **Gap exploitable** : le **"cellar/journal" de Vivino est une brique simple** (scan barcode +
  collection + notes) que les utilisateurs adorent mais qui se noie dans la transformation
  e-commerce. Un **journal de collection spécialisé** (vin OU whisky OU café) avec une
  **expérience pure (pas d'achat intégré)** peut capter les nostalgiques ("sold to the highest
  bidder").

### Stack RN + difficulté
- **Vivino-like** : RN + **scan de code-barres (VisionKit)** + scan d'étiquette (OCR) + base de
  données produits (le mur = la **base de 16M de vins** — à construire par crowdsourcing) +
  marketplace (le mur #2). Complexité **3/5**.
- **Journal de collection pur** (whisky/vin/café) : RN + barcode + base (initiale ~10-50K
  produits, extensible) + UI soignée. Complexité **2/5**. C'est LA version abordable.
- **DJI Fly-like** : **NON** — nécessite SDK propriétaire DJI + hardware + crashs en vol =
  responsabilité. Hors scope RN grand public.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **"Whisky journal / spirit tracker"** : les collectionneurs de whisky (et le marché
   secondaire des bouteilles rares) sont une niche riche et fidèle, mal servie (le leader du
   créneau "whiskey searcher" est faible). Journal : bouteilles possédées/essayées, notes de
   dégustation, wishlist, valeur estimée. Monétisation : one-shot $4.99 + modules premium.
2. **"Cave à vin simplifiée"** : le digital cellar de Vivino sans la boutique — scan rapide,
   valeur de la cave, suggestions "à boire maintenant". Angle : **anti-commerce** (pas d'achat,
   pas de commission) = différentiation directe contre le déclin perçu de Vivino.
3. **Tracker café** (Filtru existe mais faible) : café de spécialité, recettes, ratios,
   torréfacteurs — communauté geek du café, dépense réelle ($15-30/bag).
4. **Ne PAS toucher au pilotage de drone** (captif hardware DJI).

### Verdict
- **Vivino : 6.5/10 comme modèle** — la brique "journal + scan" plaît (4.84★) mais les
  utilisateurs fuient la transformation e-commerce. Un tracker de collection épuré, honnête,
  sans boutique, est une fenêtre réelle sur une audience qui dépense.
- **DJI Fly : 3/10 (inattaquable, captif hardware)** — à ignorer pour nous, mais ses avis
  montrent un besoin non servi : **planifier/trouver des spots de vol légaux** (Fly Spots est
  rudimentaire) → une app "drone flight spots & weather" pure pourrait exister SANS pilotage.