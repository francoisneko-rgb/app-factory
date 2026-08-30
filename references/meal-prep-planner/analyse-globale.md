# MEAL PREP PLANNER — Analyse globale (2026-08-30)

## 1. Fiche marché
- Demande : Popularité Appfigures **32** (réelle, >30) pour "meal prep planner". Compétitivité **NA**
  (non calculée) = marché pas saturé sur ce mot précis. Les sous-mots (weekly/daily meal planner)
  ont des données NA (volume présent).
- Concurrence réelle : **3 leaders abonnement** (MealPrepPro $50K, Mealime $55K, eMeals $65K/mois)
  + **1 géant import** (ReciMe $3M/mois).
- Tendance : meal prep / batch cooking = durable (vie active, inflation alimentaire, santé).
- Positionnement : croisement "food" + "fitness/nutrition" + "organisation familiale".

## 2. Besoin & cible
- Problème : "quoi manger ce soir ?" = décision quotidienne épuisante + perte de temps/gaspi.
- Persona : familles occupées (US/UK/AU), personnes en objectif santé/macros, cuisiniers qui
  sauvegardent des recettes partout et les perdent.
- JTBD : "Planifier ma semaine de repas + générer ma liste de courses en <10 min."

## 3. Concurrents — panorama + monétisation
- **ReciMe** : GEANT. $3M/mois, 760K downloads. Import de recettes depuis n'importe où
  (Instagram/TikTok/web) via IA + meal plan + grocery list. Note 4.75, sentiment 94%.
- **MealPrepPro** : leader "meal prep" pur. $50K/mois, <5K downloads, note 4.59. Génère plans
  + macros + grocery list. Points faibles (avis) : macros non librement personnalisables,
  pas de swap d'ingrédient, pas de vidéos, portions trop grosses, unités en oz.
- **Mealime** : $55K/mois, 15K downloads, note 4.80 (le mieux noté). Le plus "clean".
  Points faibles : recettes parfois compliquées/wordy, peu de slow-cooker, veut + de recettes simples.
- **eMeals** : $65K/mois, <5K downloads, note 4.42. Le plus vieux (13 ans), intégration
  Walmart/Kroger. Points faibles : bugs favoris, recettes en doublon, pas de notes, renouvellement auto.
- **Eat This Much** : $15K/mois, sentiment dégradé (40%). 
- **Tasty (BuzzFeed)** : $10K/mois malgré 865K ratings, sentiment 49% → les utilisateurs se détournent.

### Synthèse monétisation
- Modèle dominant : **freemium + abonnement** (mois/an) + IAP. Mealime $2.99/mois Pro, MealPrepPro
  trial 7j + mensuel/annuel.
- Les "planificateurs" convertissent peu de downloads (<15K) mais très bien en revenus ($50K-$65K).
- ReciMe prouve qu'une **fonction "import IA" différenciante** peut exploser le marché ($3M).

## 4. Stack technique & complexité
- React Native : **faisable, complexité 3/5**. Plan de repas (calendrier, listes), recettes,
  grocery list (catégories/rayons), macros/calories (API nutrition), notifications.
- Pour différencier : **import de recettes via IA** (vision/URL parsing) = module natif + LLM
  (ReciMe le fait déjà — répliquable), + Apple Health sync, + widgets.
- Pas de backend lourd (données recettes en base + synchro cloud optionnelle).

## 5. Monétisation de NOTRE app
- Modèle conseillé : **freemium + abonnement $4.99-$9.99/mois ou $39.99/an** (ou lifetime).
- Fourchettes constatées : $10K-$65K/mois pour les petits leaders, $3M pour ReciMe.
- Potentiel réaliste : même 1/10 de ReciMe = $300K/mois ; 1/5 de MealPrepPro = $10K/mois.
- Angle gagnant : **reprendre la mécanique ReciMe (import IA de recettes) mais avec le design
  et les fonctions de meal planner que les utilisateurs réclament** (macros libres, swap
  d'ingrédients, portions ajustables, vidéos, slow-cooker, notes de cuisine).

## 6. Gaps & opportunités (issus des avis)
1. **Macros librement personnalisables** — plaintes récurrentes sur MealPrepPro (impossible
   d'entrer ses propres macros pour match un plan d'entraînement). → différenciateur fort.
2. **Swap d'ingrédients / portions ajustables** — demandé partout (swap sides, ingrédients,
   tailles de portions). Mealime propose des substituts d'ingrédient (apprécié).
3. **Snack temporaire / ajout rapide** — impossible chez MealPrepPro (obligé de créer une "recette"
   permanente pour un snack). Frustration identifiée.
4. **Recettes simples + slow-cooker/instant pot** — les utilisateurs se lassent des recettes
   "fancy" multi-étapes. Demande de recettes rapides et "one-pot".
5. **Notes de cuisine sur les favoris** — eMeals ne permet pas d'annoter ses recettes modifiées.
6. **Bug favoris + recherche** — eMeals perd des favoris, pas de recherche de recette sur la page
   d'accueil.
7. **Vidéos de recettes** — MealPrepPro n'a pas les moyens de produire des vidéos ; un produit
   qui génère des vidéos pas-à-pas (ou importe) a un avantage.

## 7. Verdict
- Note : **4/5**. Demande réelle (32), concurrence battable sur le mot-clé précis (comp NA),
  monétisation PROUVÉE ($50K-$65K/mois pour 3 apps sans géant insurmontable).
- **ReciMe ($3M) est la preuve que le marché n'est pas fermé** : une bonne fonction IA import
  + un produit propre peut capter massivement.
- Reco : **APPROFONDIR** — très bonne candidate. Stack RN faisable, marché monétisé,
  gaps clairs identifiés dans les avis (macros libres, swap, simplicité).
- Risques : ReciMe est un concurrent sérieux (bien exécuté, très aimé) ; le contenu recettes
  demande du travail éditorial ; les apps "planificateurs" sont établies depuis 7-13 ans.
- Complexité tech 3/5 → effort moyen, rentabilité démontrée par 4 concurrents.