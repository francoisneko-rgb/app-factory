# Analyse globale — Plant Care / Soins & Rappels (Niche A)

Date : 2026-08-28 · Sources : Appfigures (pop/comp + App Intelligence), avis iOS (scraping
web App Store), scraping metadata. Stack cible : React Native.

---

## 1. Fiche marché
- **Demande** : plant care free **53/70**, plant care app 32/70, plant identifier 54/79
  (Appfigures). Volume réel : Planta 208K ratings, Blossom 311K. Demande réelle confirmée.
- **Concurrence** : compétitivité **70** (modérée). Géants sur l'**identification**
  (PictureThis, PlantIn), mais l'angle **soins/rappels** a des leaders monétisés et
  attaquables.
- **Tendance** : intérêt stable/fort pour les plantes d'intérieur (segment « plant parent »),
  pas de signal négatif AppRadar.
- **Positionnement** : niche "plant care" → sous-niche **soins/rappels** (notre angle) vs
  identification.

## 2. Besoin & cible
- **Problème résolu** (issu des avis) : on **oublie d'arroser/fertiliser/rempoter** ses
  plantes, on ne sait pas **quand et combien** arroser, on tue ses plantes par sur/sous-
  arrosage, confusion sur les soins spécifiques.
- **Persona** : (a) **plant parent débutant** qui tue ses plantes et veut des rappels ;
  (b) **collectionneur** (20-50 plantes) qui veut un organiser/suivre ; (c) **jardinier
  d'intérieur** qui veut des soins adaptés à son environnement.
- **Job to be done** : "Rappelle-moi exactement quand et combien arroser/soigner chacune de
  mes plantes, adapté à MA maison et à MON climat, sans me culpabiliser ni me ruiner."

## 3. Concurrents — panorama + monétisation

| App | Force | Faiblesse | Modèle |
|---|---|---|---|
| Planta (208K, $480K) | rappels adaptatifs (météo/pot/lumière), snooze, journal photo, partage | base de plantes incomplète (climats extrêmes/légumes), paywall, facturation | Free + abo |
| Blossom (311K, $110K) | volume, AI botanist (diagnostic), rappels multi | **identification très faillible**, pas d'ajout manuel, **sentiment 0%**, peu maintenu | Free + abo |
| Greg (32K, $50K) | communauté, algorithme qui apprend, personnalisation | **paywall abusif** (tout derrière Super Greg, abo hebdo), algo non fiable climats, bugs | Free + abo |
| Plant Daddy (310) | spécialiste pur du rappel, simple | petit volume | Free |

### SYNTHÈSE MONÉTISATION (apps n°1-2, ce qui marche)
- **Modèle : freemium + abonnement annuel/mensuel** partout (Planta, Blossom, Greg). Pas de
  one-time fee dominant. Revenue Sources : **Subs + IAPs** sur les 3.
- **Prix constatés** : abo ~$2.30-5/mois (perçu "affordable" chez Blossom), Greg = **abo
  hebdomadaire** (perçu abusif). Le **revenu est porté par l'abonnement** (Planta $480K).
- **Ce que les users en pensent** : acceptent de payer pour **des rappels intelligents et
  spécifiques** ("VERY specific" = compliment n°1 sur Planta) ; **détestent** le paywall
  bloquant tout (Greg : "cannot do anything without premium") et les abos oubliés (free
  trial piégeux).
- **Leçon** : l'abonnement est accepté SI la valeur (rappels adaptatifs + spécificité) est
  réelle, MAIS il faut **laisser le tracking de base gratuit** (anti-Greg) et une
  **facturation honnête** (anti free-trial piégeux).

### Estimation revenus des concurrents (Appfigures App Intelligence, Jul 2026, monde)
> ⚠️ ESTIMATIONS à valeur indicative (Appfigures), pas des chiffres officiels.

| App | Est. Downloads | Est. Revenue (After Fees) | Revenue Sources | Sentiment |
|---|---|---|---|---|
| **Planta** | **50K** | **$480K/mois** | Subs, IAPs | 85% (1.7K) |
| **Blossom** | <5K | **$110K/mois** | Subs, IAPs, +1 | **0%** (35) |
| **Greg** | <5K | **$50K/mois** | Subs, IAPs | 86% (273) |

→ Le segment est **réellement rémunérateur** : Planta encaisse ~$480K/mois, Blossom $110K,
Greg $50K. **Potentiel total ≈ $640K/mois** sur 3 apps. L'angle soins/rappels rapporte.

## 4. Stack technique & complexité
- **React Native** : liste de plantes + collection, **rappels/notifications** (fidélisation),
  **widgets**, journal photo, **algorithme d'arrosage** (règles + météo + pot), éventuelle
  identification IA (API vision, optionnelle — pas nécessaire pour le MVP soins), abonnement
  (RevenueCat), météo (API).
- **Complexité : 2/5** (faible). Le plus gros travail = **contenu** (base de données de
  soins par plante) et la **qualité de l'algorithme de rappel**.
- **Effort** : 4-6 semaines MVP (base de soins pour les plantes d'intérieur courantes +
  rappels + widgets).

## 5. Monétisation de NOTRE app
- **Modèle conseillé** : freemium généreux (tracking d'arrosage + rappels basiques GRATUITS
  — anti-Greg) + **abo annuel ~$19.99-29.99/an** (ou $2.99-3.99/mois) pour : rappels
  avancés multi-soins, météo adaptative, identification illimitée, base de plantes étendue,
  journal photo, widgets avancés.
- **Fourchettes** : essai gratuit 7 jours **sans piège** (rappel avant renouvellement,
  annulation 1 tap) → $24.99/an. Positionnement "honnête et abordable".
- **Potentiel estimé** : à 1 % du volume Planta (500 downloads/mois) avec $25 ARPU/an →
  ~$12.5K/an ; à 5 % (2.5K dl/mois) → ~$62K/an. Scénario réaliste année 1 : **$20-60K/an**
  avec un bon ASO + une base de soins de qualité.

## 6. Gaps & opportunités
- **① Rappels de base GRATUITS** (anti-Greg : le paywall sur le tracking d'arrosage est la
  plainte n°1) → promesse ASO "free watering reminders".
- **② Modes climatiques personnalisables** (anti-Planta/Blossom/Greg : climats extrêmes
  mal gérés — désert, altitude, haute humidité). Algorithme ajustable manuellement.
- **③ Ajout de plantes personnalisées / custom plant + légumes & comestibles** (plaintes
  Blossom/Greg/Planta).
- **④ Identification précise OU contournement** : ajout manuel + recherche par nom robuste
  + filtre (anti-Blossom dont le sentiment est à 0% à cause de ça). Positionnement "pas
  besoin d'identification parfaite pour un bon soin".
- **⑤ Snooze + gestion des rappels en retard** (plainte Blossom/Planta) : snooze simple,
  vider les rappels en retard en un tap.
- **⑥ Export Excel/CSV + tri par nom** (plainte Blossom).
- **⑦ Facturation transparente** (anti free-trial piégeux Greg, regrets Blossom) : annulation
  1 tap, rappel avant renouvellement.
- **⑧ Widget + notifications intelligentes** (pas de notifs météo inutiles en hiver —
  plainte Blossom).
- **⑨ Journal photo + progression** (copier Planta, moteur d'engagement).

## 7. Verdict & décision
- **Note : 4/5.** Demande réelle (53/70), marché rémunérateur (Planta $480K/mois), stack
  simple, plaintes claires (identification, paywall Greg, climats) et exploitables.
- **Reco : VALIDER comme piste sérieuse.** Meilleur angle : **"l'app de soins/rappels
  honnête et adaptative"** — rappels d'arrosage gratuits (anti-Greg), modes climatiques
  personnalisables (anti-tous), ajout de plantes custom + comestibles, identification
  suffisante + ajout manuel (anti-Blossom), facturation transparente. Ne pas attaquer
  frontalement l'identification (géants) : se positionner sur **le soin**, pas la photo.
- **Risques** : (a) le contenu (base de soins par plante) demande un investissement ;
  (b) Planta est bien établi (208K, $480K) — attaquer par la sous-niche "gratuité des
  rappels + climats + personnalisation" ; (c) Blossom a un énorme stock de ratings mais est
  affaibli (fenêtre).
- **Alternative cross-niche** : combiner plant care + water reminder / garden planning.
