# PLAN MAÎTRE — APP FACTORY

## Vision
Une usine à applications mobiles pilotée par OpenCode : recherche de marché data-first,
analyse concurrentielle automatisée, développement Expo / React Native autonome avec
contrôle qualité par boucle gauntlet, publication et marketing semi-automatisés. L'humain
(toi) valide aux checkpoints stratégiques ; les agents exécutent le reste.

## Principe directeur : DATA-FIRST
Aucune décision produit sans données. On ne part jamais d'une idée : on part du marché.
Chaque niche est scorée sur des données réelles (mots clés, top charts, avis, vélocité,
monétisation des concurrents) avant tout investissement de temps.

## Les 9 phases et leurs checkpoints (GATES)

| Gate | Phase | Ce que font les agents | Ce que tu valides |
|---|---|---|---|
| G1 | 1. Recherche marché | Mots clés, tendances, top charts, scoring des niches | La niche à creuser |
| G2 | 2. Analyse concurrentielle | Scraping stores, avis, screenshots, gaps, monétisation | L'angle produit |
| G3 | 3. Spec produit | PRD : promesse, parcours utilisateur, features, monétisation | Le PRD |
| G4 | 4. Design | Design system + écrans générés en images | Le style graphique |
| — | 5. Développement | App Expo/React Native complète, autonome, gauntlet sur surfaces critiques | — |
| G5 | 6. Test device | Build APK sur ton téléphone, itérations UX | Le produit final |
| G6 | 7. Export | Build signé + fiches store complètes | La publication |
| G7 | 8-9. Marketing | Direction créative → validation → assets en autonomie | La direction créative |

## Stratégie de démarrage (important)
Première app = complexité MINIMALE : pas de backend custom, monétisation simple
(achat unique ou pub), un seul marché. Objectif : valider toute la chaîne de production
de bout en bout et encaisser un premier revenu. Chaque friction est documentée dans
`brain/learnings.md`. Ensuite seulement, on monte en ambition (abonnements, backend,
multi-marchés).

## Stack technique (ADR-003)
- Framework : Expo SDK + React Native + TypeScript
- Routing/état : Expo Router, Zustand, TanStack Query, NativeWind
- CI/CD : EAS Build/Submit/Update — 15 builds iOS + 15 Android/mois gratuits, puis ~2-4 $/build iOS à l'usage
- Crashs : Sentry
- Tests : Jest (logique) + Maestro (E2E)
- Mises à jour OTA : EAS Update (correctifs JS sans review store)

## Contrôle qualité : la boucle gauntlet (surfaces critiques uniquement)
Pour chaque surface critique (onboarding, home, paywall, icône, screenshots store,
visuels marketing) :
1. Un agent builder produit le candidat.
2. Un agent critique (contexte neuf, jamais le raisonnement du builder) compare en test
   AVEUGLE le candidat contre les assets des concurrents leaders scrapés en phase 2.
3. Défaite = retour au builder avec les motifs précis. Plafond : 5 rounds (coût tokens).
4. Verdicts loggés dans `brain/logs/`.

## La mémoire (brain/)
- `brain/niches.md` — toutes les niches explorées et leurs scores (jamais ré-analysées deux fois)
- `brain/tendances.md` — tendances détectées, datées
- `brain/decisions.md` — pourquoi chaque choix a été fait (format ADR)
- `brain/learnings.md` — frictions et enseignements post-lancement
- `brain/apps/<app>/` — tout ce qui concerne une app (scraps concurrents, PRD, assets)
- `brain/logs/` — journal daté de chaque exécution

## Coûts récurrents (ordre de grandeur)
- Google Play : 25 $ une fois. Apple Developer : 99 $/an.
- EAS Build : 15 builds iOS + 15 Android/mois gratuits, puis ~2-4 $/build iOS à l'usage
  (builds cloud, certifs Apple gérées automatiquement — aucun Mac requis).
- EAS Update : mises à jour OTA JS illimitées selon le plan.
- Appfigures : API au crédit, plans abordables (bien moins cher que Sensor Tower).
- RevenueCat : gratuit sous un seuil de revenus mensuels — parfait pour démarrer.
- Sentry : gratuit sous un seuil d'événements — crashs dès le MVP.
- Scrapers (google-play-scraper, app-store-scraper) : gratuits et open source.
