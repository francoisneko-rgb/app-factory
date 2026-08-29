# Analyse globale — Tai Chi Senior (Niche B)

Date : 2026-08-28 · Sources : Appfigures (pop/comp + App Intelligence), avis iOS (scraping
web App Store), scraping metadata. Stack cible : React Native.

---

## 1. Fiche marché
- **Demande** : tai chi **33/70**, tai chi for beginners free **37/60** (Appfigures).
  Volume réel : Fast Builder 23K ratings (en 11 mois). Demande réelle + marché US vieillissant.
- **Concurrence** : compétitivité **60-70** (modérée). **Aucun géant** ne domine. Le leader
  (Fast Builder) est un **entrant récent** (2025) → niche prouvée comme battable/en croissance.
- **Tendance** : fitness seniors / équilibre / prévention des chutes = segment en croissance
  (marché US vieillissant), pas de signal négatif.
- **Positionnement** : niche "tai chi" + sous-niche **seniors / 7 min / chaise**.

## 2. Besoin & cible
- **Problème résolu** (issu des avis) : raideur, perte d'équilibre, douleurs (genoux, dos,
  hanches), peur de tomber, apps de fitness trop intenses, besoin d'un exercice doux et
  accessible aux seniors.
- **Persona** : (a) **60-80 ans** qui veut maintenir mobilité/équilibre sans blessure
  ("maintain and not lose ground") ; (b) **débutant de tout âge** rebuté par l'intensité ;
  (c) **senior à mobilité réduite** (routines chaise).
- **Job to be done** : "Donne-moi une routine douce, courte et guidée de tai chi qui améliore
  mon équilibre et ma mobilité, adaptée à mon âge, sans me blesser ni me juger."

## 3. Concurrents — panorama + monétisation

| App | Force | Faiblesse | Modèle |
|---|---|---|---|
| Tai Chi for Beginners Seniors (Fast Builder, 23K) | programme 28 jours, prix raisonnable, essai sans CB, sentiment 95% | **timing trompeur**, pas de progression, répétitions, pas d'offline/TV | Free + abo |
| 7 Minute Chi (4.8K) | simplicité 7 min, narration calme, IAP sans abo | **revenu <$5K** (IAP), peu de séquences, pas d'explication | Free + IAP |
| Tai Chi for Seniors Beginners (YUAN QI, 2.3K) | ton empathique, routines chaise+debout, accessibilité | petit volume, VoiceOver perfectible | Free + abo |

### SYNTHÈSE MONÉTISATION (apps n°1-2, ce qui marche)
- **Modèle : freemium + abonnement** (Fast Builder $65K, YUAN QI Subs). **7 Minute Chi en
  IAP uniques = <$5K**.
- **Prix constatés** : Fast Builder abo annuel "reasonable" (perçu), essai **sans carte
  bancaire** = différenciant fort pour seniors.
- **Ce que les users en pensent** : acceptent l'abonnement si prix raisonnable + pas de CB
  pour essayer ("No cc info asked for", "The price for a year is reasonable"). Détestent
  les "big discount then expensive" (promotions trompeuses).
- **Leçon** : **l'abonnement est le bon modèle** ici (vs IAP unique qui ne scale pas). Les
  seniors valorisent l'**essai sans carte bancaire** et un **prix annuel raisonnable**.

### Estimation revenus des concurrents (Appfigures App Intelligence, Jul 2026, monde)
> ⚠️ ESTIMATIONS à valeur indicative (Appfigures), pas des chiffres officiels.

| App | Est. Downloads | Est. Revenue (After Fees) | Revenue Sources | Sentiment |
|---|---|---|---|---|
| **Tai Chi Beginners Seniors** (Fast Builder) | **20K** | **$65K/mois** | Subs, IAPs, +1 | 95% (1.3K) |
| **7 Minute Chi** | <5K | **<$5K/mois** | IAPs | 98% (61) |
| **Tai Chi Seniors Beginners** (YUAN QI) | <5K | **<$5K/mois** | Subs, IAPs | 89% (606) |

→ Fast Builder = **$65K/mois** sur un entrant de 11 mois. Le modèle abonnement tai chi
senior est rentable. **Insight : l'IAP unique (7 Minute Chi) rapporte ~0 alors que l'abo
(Fast Builder) rapporte $65K** dans la même niche.

## 4. Stack technique & complexité
- **React Native** : lecteur vidéo / animations d'avatars (démonstration de mouvements),
  programmes/routines, **progression + niveaux**, notifications, **mode hors-ligne**,
  **cast TV / grand écran**, abonnement (RevenueCat), accessibilité (VoiceOver).
- **Complexité : 2/5** (faible). Le plus gros travail = **contenu** (vidéos ou animations
  des mouvements de tai chi) + progression algorithmique.
- **Effort** : 4-6 semaines MVP (routines 7-15 min préprogrammées, avatar/vidéo, progression).

## 5. Monétisation de NOTRE app
- **Modèle conseillé** : freemium + **abo annuel ~$19.99-29.99/an** (aligné Fast Builder),
  **essai gratuit 7 jours SANS carte bancaire** (différenciant seniors, anti-promo
  trompeuse), annulation 1 tap.
- **Fourchettes** : essai sans CB → $24.99/an ou $3.99/mois. Positionnement "raisonnable,
  honnête, adapté aux seniors".
- **Potentiel estimé** : à 1 % du volume Fast Builder (200 dl/mois) avec $25 ARPU/an →
  ~$5K/an ; à 10 % (2K dl/mois) → ~$50K/an. Scénario réaliste année 1 : **$20-50K/an**
  avec un bon ASO "senior" + ton empathique.

## 6. Gaps & opportunités
- **① Timing réaliste** (plainte n°1 Fast Builder) : afficher le temps réel incluant les
  repos → promesse ASO "honest workout timing".
- **② Progression qui suit l'utilisateur** (plainte Fast Builder) : niveaux qui évoluent,
  PAS de reset à 28 jours.
- **③ Zéro répétition** (plainte Fast Builder) : routines algorithmiquement variées.
- **④ Mode hors-ligne + cast TV / grand écran** (plainte Fast Builder, seniors en voyage /
  aiment le grand écran).
- **⑤ Revoir un exercice / guidance des mouvements** (plainte 7 Minute Chi + YUAN QI) :
  expliquer chaque mouvement avant de commencer.
- **⑥ Accessibilité VoiceOver complète** (plainte YUAN QI) : différenciateur fort pour une
  audience âgée/malvoyante.
- **⑦ Ton empathique/bienveillant** (copier YUAN QI : "without any pressure") + routines
  **chaise + debout**.
- **⑧ Essai sans carte bancaire + prix annuel honnête** (anti-promotions trompeuses).

## 7. Verdict & décision
- **Note : 3.5/5.** Demande réelle (37/60), pas de géant, preuve d'entrée récente réussie
  (Fast Builder 23K ratings en 11 mois, $65K/mois), stack simple. Plaintes claires et
  exploitables.
- **Reco : VALIDER comme piste solide, surtout en cross-niche avec mobility/souplesse**
  (niche 5 déjà analysée, même cible seniors et même stack). Meilleur angle : **"le tai chi
  senior honnête et bienveillant"** — timing réaliste, progression continue, zéro répétition,
  offline + TV, essai sans CB, ton empathique + routines chaise. Anti-Fast Builder
  (timing/progression/répétitions), anti-7 Minute Chi (modèle abo, pas IAP).
- **Risques** : (a) le contenu (vidéos/animations de tai chi) demande un investissement ;
  (b) Fast Builder est en forte croissance — agir vite ; (c) demande modérée (33-37) — la
  niche est rentable mais pas massive ; (d) **strong cross-niche** avec mobility/souplesse
  pour mutualiser le contenu et la cible seniors.
- **Alternative** : bundler tai chi + qigong + mobility seniors dans une seule app
  "senior fitness doux".
