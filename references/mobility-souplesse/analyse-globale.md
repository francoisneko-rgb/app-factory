# Analyse globale — Mobility / Souplesse (Niche A)

Date : 2026-08-28 · Sources : Appfigures (pop/comp + App Intelligence), avis iOS (50/app),
scraping metadata. Stack cible : React Native.

---

## 1. Fiche marché
- **Demande** : mobility **53/58** (Appfigures). Snorelab 39/61, HRV/athlytic 47/67 en
  sous-niches connexes. Volume réel confirmé (Bend 173K ratings, 15M users annoncés).
- **Concurrence** : compétitivité **58** (modérée-battable). Pas de géant type
  Apple Fitness+/Nike. Leaders = marques (Bend grand public, pliability/GOWOD niche CrossFit).
- **Tendance** : stretching/mobilité = segment fitness en croissance (seniors + sportifs),
  pas de signal négatif AppRadar.
- **Positionnement** : niche "mobility/souplesse" + sous-niches (snorelab, HRV, tai chi).

## 2. Besoin & cible
- **Problème résolu** (issu des avis 1-3★) : douleurs (dos, hanches, genoux) dues à la
  sédentarité/âge, raideur, manque de routine d'étirements, confusion sur quoi étirer.
- **Persona** : (a) **40-65 ans** actif modéré qui veut rester mobile et sans douleur
  ("especially going into your 50s", "desk job hero") ; (b) **athlète CrossFit/HIXX/tennis**
  qui veut performance et récupération ; (c) **débutant** qui ne sait pas étirer.
- **Job to be done** : "Donne-moi une routine d'étirements courte, guidée et personnalisée
  qui me rend plus mobile et sans douleur, sans me prendre la tête ni me culpabiliser."

## 3. Concurrents — panorama + monétisation

| App | Force | Faiblesse | Modèle |
|---|---|---|---|
| Bend (173K) | simplicité, widget, reminders, prix juste | pression abo, onboarding long | Free + abo annuel |
| pliability (9.9K) | contenu pro, test mobilité, marque CrossFit | **facturation scandale**, prix $180/an, bugs | Free trial + abo $180/an |
| GOWOD (3.3K) | test mobilité, protocoles personnalisés, ARPU top | **paiement hors App Store**, bugs, répétitif | Free + abo premium |
| Stretching at Home / Stretch / Umo / STRETCHIT | petits acteurs, angle "à la maison" | petits volumes | Free + IAP/abo |

### SYNTHÈSE MONÉTISATION (apps n°1-2, ce qui marche)
- **Modèle : freemium + abonnement annuel** partout (Bend, pliability, GOWOD). Aucun
  one-time fee ; les users **acceptent l'abo annuel s'il est "cheap"** (Bend) et le
  détestent s'il est cher/opaque (pliability $180, GOWOD contournement Apple).
- **Prix constatés** : Bend ~$29-40/an (perçu "affordable") ; pliability ~$180/an
  (perçu "scandaleux") ; GOWOD premium (perçu cher, d'où plaintes).
- **Ce que les users en pensent** : "the membership is cheap and there's so many perks"
  (Bend) vs "dark patterns in cancellation" (pliability) vs "looks like a scam" (GOWOD).
- **Leçon** : le segment accepte un **abo annuel modéré ($20-40/an)** avec une facturation
  **cristalline** (reminders, annulation facile, pas de contournement Apple). La
  transparence de facturation est le critère n°1 de confiance.

### Estimation revenus des concurrents (Appfigures App Intelligence, Jul 2026, monde)
> ⚠️ ESTIMATIONS à valeur indicative (Appfigures), pas des chiffres officiels.

| App | Est. Downloads | Est. Revenue (After Fees) | Revenue Sources | Sentiment |
|---|---|---|---|---|
| **Bend** | 340K | **$1M/mois** | Subs, IAPs | 100% (7.8K) |
| **GOWOD** | 10K | **$380K/mois** | Subs, IAPs, +1 | 67% (119) |
| **pliability** | <5K | **$40K/mois** | Subs | n/d |

→ Le marché est **réellement rémunérateur** : Bend encaisse ~$1M/mois, GOWOD $380K/mois
sur un volume faible (ARPU extrême). Potentiel total segment ≈ $1.4M/mois sur 3 apps.

## 4. Stack technique & complexité
- **React Native** : écrans (routines, exercices, test), vidéos (module natif vidéo +
  stockage), **notifications + widgets** (fidélisation), animations, HealthKit (optionnel),
  **test de mobilité** (formulaire visuel, éventuellement caméra), abonnement (RevenueCat).
- **Complexité : 2/5** (faible). Pas de 3D, pas de capteurs lourds. Le plus gros travail =
  **contenu** (illustrations/vidéos d'exercices) et le test de mobilité.
- **Effort** : 4-6 semaines MVP (contenu généré/illustré, routines préprogrammées).

## 5. Monétisation de NOTRE app
- **Modèle conseillé** : freemium + **abo annuel ~$19.99-29.99/an** (sous Bend, sans le
  "cheap" perçu trop haut), essai gratuit 7 jours, annulation 1 tap, rappel avant
  renouvellement (anti-pliability).
- **Fourchettes** : essai gratuit → abo $24.99/an ou $3.99/mois (positionnement
  "affordable" assumé dans l'ASO).
- **Potentiel estimé** : à 1 % du volume Bend (3.4K downloads/mois) avec $25 ARPU/an →
  ~$85K/an ; à 5 % (17K dl/mois) → ~$425K/an. Scénario réaliste année 1 : **$50-150K/an**
  avec un bon ASO + qualité de contenu.

## 6. Gaps & opportunités
- **① Facturation transparente** (plaintes massives pliability/GOWOD) : abo unique clair,
  annulation facile, reminders avant renouvellement, **jamais de contournement d'Apple** →
  promesse ASO "no dark patterns, cancel anytime".
- **② Pression abo au lancement** (Bend) : onboarding court, timer stretch gratuit offert,
  pas de paywall immédiat.
- **③ Test de mobilité + routine personnalisée** (le feature aimé de GOWOD/pliability,
  absent de Bend) : test simple (10 mouvements) → programme quotidien personnalisé.
- **④ Apple Health + métriques** (demande explicite GOWOD) : intégration HealthKit,
  suivi ROM, stats.
- **⑤ Streak sans culpabilité** (anti-Bend) : mode "catch-up" / "rest day" qui ne brise
  pas la streak.
- **⑥ Widget + reminders** (copier Bend, c'est le moteur de fidélisation).
- **⑦ Mobilité réelle vs stretching statique** (plaintes pliability/GOWOD) : flows actifs,
  nerve glides, mobilisations dynamiques.
- **⑧ Filtre accessoires** (foam roller/bands) + mode senior (timer lent, instructions
  lisibles).

## 7. Verdict & décision
- **Note : 4/5.** Demande réelle (53/58), marché rémunérateur (Bend $1M/mois), stack
  simple, plaintes claires et exploitables.
- **Reco : VALIDER comme piste sérieuse.** Meilleur angle : **"mobility app moderne,
  honnête sur le prix, avec test de mobilité personnalisé + widget"** — anti-Bend
  (paywall/pression), anti-pliability (facturation), anti-GOWOD (US, transparence).
- **Risques** : (a) le contenu d'exercices (vidéos/illustrations) demande un investissement ;
  (b) Bend est bien établi côté grand public (173K) — attaquer par la sous-niche
  "test de mobilité + personnalisation + honnêteté" plutôt que frontalement ;
  (c) marché FR chez GOWOD → rester US.
- **Alternative cross-niche** : combiner mobility + snorelab/HRV (capteurs) pour élargir.

---

### Fichiers créés (à plat, dans references/mobility-souplesse/)
- donnees-marche.md · bend.md + bend.metadata-ios.json + bend.avis-ios.json + screenshots-bend/
- pliability.md + pliability.metadata-ios.json + pliability.avis-ios.json + screenshots-pliability/
- gowod.md + gowod.metadata-ios.json + gowod.avis-ios.json + screenshots-gowod/
- analyse-globale.md (ce fichier)