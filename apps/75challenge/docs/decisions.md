# 75 Challenge — Décisions d'architecture (ADR)

> ADR locaux de l'app (constitution : `apps/<app>/docs/decisions.md`). Source : `specs/plan.md` (G3.6, 2026-09-29).
> Format : statut · contexte · décision · conséquences.

---

## ADR-75C-001 — Stockage : MMKV seul, pas de Drizzle/SQLite en v1

- **Statut** : Acceptée (G3.6).
- **Contexte** : la spec impose « 100 % sur l'appareil » (FR-029) mais laisse le choix
  MMKV/Drizzle au plan technique. Les données sont un graphe d'objets liés (attempt → days →
  rules) de volume faible (~75 jours × ~10 règles), sans requête complexe ni jointure.
- **Décision** : UNIQUE source de vérité = `react-native-mmkv` (clés `profile`, `challenge`)
  via Zustand persist. Aucun SQLite/Drizzle en v1 ; `expo-sqlite`, `drizzle-orm`,
  `drizzle-kit`, `src/db/`, `drizzle.config.ts` retirés. Photos en fichiers
  (`expo-file-system` documentDirectory), URIs seules dans MMKV.
- **Conséquences** : zéro migration, zéro schéma à maintenir, tests reducers purs ; limite
  pratique = données JSON compactes (respectée). Si une feature v2 (stats croisées, export
  complet) exige du SQL, migration vers Drizzle documentée.

## ADR-75C-002 — Signature au doigt : implémentation maison (SVG + Gesture Handler)

- **Statut** : Acceptée (G3.6).
- **Contexte** : FR-003/004 : zone de signature effaçable, bouton actif seulement si signé,
  **l'image n'est jamais persistée** (seul le fait d'avoir signé est mémorisé).
- **Décision** : composant `SignaturePad` maison : `react-native-svg` (Path) + Gesture Handler
  (déjà en stack), trait noir ~3px, bouton effacer, expose un booléen `signed`. Zéro image
  générée/persistée.
- **Conséquences** : pas de dépendance WebView, style 100 % conforme DESIGN.md §7.7, léger et
  testable au geste (Maestro) ; rejet de `react-native-signature-canvas` (WebView, bugs
  Android, sur-dimensionné).

## ADR-75C-003 — Export image partage : react-native-view-shot + expo-sharing

- **Statut** : Acceptée (G3.6).
- **Contexte** : FR-026 : image au thème pastel (jour N/X, règles cochées, dates, nom), formats
  9:16 et 1:1, feuille native, aucune donnée serveur.
- **Décision** : la carte de partage est une vraie vue RN rendue hors-écran en 2 tailles
  (9:16 / 1:1), capturée par `react-native-view-shot`, écrite en PNG temporaire
  (`expo-file-system`), partagée via `expo-sharing`.
- **Conséquences** : le design system est réutilisé tel quel (pas de ré-implémentation canvas) ;
  dépendances natives à ajouter (view-shot, sharing) — compatibles SDK 57.

## ADR-75C-004 — Moteur 25/50/75 : TypeScript pur testable

- **Statut** : Acceptée (G3.6).
- **Contexte** : le moteur (durée 25/50/75, doses dynamiques FR-005, dates de fin FR-006,
  strict/souple FR-009, reprise FR-010, édition FR-008) EST le produit (US2) et sa panne
  détruit la confiance → doit être exhaustivement testé.
- **Décision** : `src/lib/challenge/` = `engine.ts` + `presets.ts` + `dates.ts` en TS pur,
  **zéro import React Native** → testable Jest sans émulateur. Les écrans ne contiennent
  aucune logique métier.
- **Conséquences** : suite de tests unitaires couvrant presets/endDate/complétion/strict/souple
  ; le moteur est importable par le store et les écrans sans couplage.

## ADR-75C-005 — Paywall : RevenueCat (achat unique non-consommable)

- **Statut** : Acceptée (G3.6).
- **Contexte** : FR-019 : achat unique $4.99 à vie, zéro abonnement ; FR-022 : restauration
  sans compte ; zéro backend maison (FR-029).
- **Décision** : `react-native-purchases` (RevenueCat) derrière `PaywallService`
  (`src/lib/services/purchase.ts`) : produit non-consommable `premium_499`, entitlement
  `premium`, clés publiques via `EXPO_PUBLIC_*` (clés publiques pk_ — non secrètes, pattern
  standard). `expo-iap` en plan B derrière la même interface.
- **Conséquences** : restauration native conforme stores, dashboard RevenueCat pour suivre la
  conversion (SC-002) ; nécessite une config produit sandbox testée dès les premiers dev
  builds (risque R4).

## ADR-75C-006 — Architecture : par couches (pas de src/features en v1)

- **Statut** : Acceptée (G3.6).
- **Contexte** : le skill architecture-expo impose feature-based ; l'AGENTS.md app (constitution
  locale) définit une structure par couches (app/components/constants/hooks/lib/store/types/utils).
  L'app est **mono-domaine** (le challenge), sans backend ni feature autonome réutilisable.
- **Décision** : suivre l'AGENTS.md app : par couches, avec **sous-domaines** dans
  `components/` (onboarding/, setup/, dashboard/, progress/, paywall/, settings/) et
  `lib/challenge/` (moteur isolé). Pas de `src/features/` en v1.
- **Conséquences** : moins de cérémonie pour cette taille ; extraction vers `src/features/` en
  v2 si une feature devient autonome (ex. import/export, social) — règle documentée.

## ADR-75C-007 — Widget : exigence conditionnelle, report v1.1 par défaut

- **Statut** : Acceptée (G3.6).
- **Contexte** : FR-027/SC-010 : le widget n'est livré en v1 QUE si sa fiabilité est démontrée
  (synchro < 1 min, zéro reset de jour) ; le widget bugué est le bug n°1 du segment (avis 1★).
  `expo-widgets` est expérimental sur SDK 57.
- **Décision** : **pas de tâche bloquante v1 pour le widget** ; un spike de faisabilité (2 j
  max) tranche go/no-go avant la fin du dev ; en no-go → communication honnête « v1.1 ».
- **Conséquences** : le planning v1 ne dépend jamais du widget ; le spike est une tâche
  optionnelle de fin de cycle.

## ADR-75C-008 — Pas de TanStack Query, pas de PostHog/analytics tiers en v1

- **Statut** : Acceptée (G3.6).
- **Contexte** : zéro appel réseau en v1 (FR-029) ; le contexte utilisateur impose « pas de
  backend, pas de compte, pas de clé API. Tout local. » ; la spec mesure les SC via consoles
  stores + analytics locaux anonymisés.
- **Décision** : `@tanstack/react-query` retiré (inutilisé sans réseau) ; aucun PostHog/Sentry
  en v1. Les SC sont mesurés via consoles des stores et le dashboard RevenueCat (non nominatif).
- **Conséquences** : bundle allégé ; PostHog candidat v1.1 **avec validation utilisateur
  explicite** (contredit le « tout local » sinon).

## ADR-75C-009 — Notifications : expo-notifications, planification locale

- **Statut** : Acceptée (G3.6).
- **Contexte** : FR-028 : gratuit = 1 rappel quotidien global ; Premium = par tâche, multiples,
  ton adapté au quiz ; permission demandée au réglage du 1er rappel (FR-002), jamais au boot.
- **Décision** : `expo-notifications` avec `scheduleNotificationAsync` (trigger daily), 100 %
  local ; `useReminders` wrapper ; pas de push server.
- **Conséquences** : hors-ligne, zéro backend ; demande de permission différée conforme FR-002.