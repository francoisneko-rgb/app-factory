# Implementation Plan: 75 Challenge — v1 (MVP)

**Branch**: `001-v1-mvp` | **Date**: 2026-09-29 | **Spec**: `specs/spec.md` (validée G3.5)

**Input**: Feature specification from `/specs/spec.md` + PRD validé + DESIGN.md validé + AGENTS.md app.

---

## Summary

**75 Challenge** est un tracker de challenges 75 jours (Soft 25 j / Medium 50 j / Hard 75 j /
Personnalisé), **100 % local, zéro compte, zéro backend**. Un moteur pur TypeScript dérive
durée + doses des habitudes + dates de fin de l'intensité choisie. L'engagement est scellé par
un **contrat signé au doigt** (signature jamais persistée). Monétisation : **achat unique
$4.99 à vie** (RevenueCat, produit non-consommable), paywall en 3 couches jamais bloquant.
Boucle quotidienne : checklist dosée (eau/jauge, exercice, lecture, alimentation, photo avec
éditeur), validation automatique du jour, mode strict/souple, notifications locales.
Suivi : calendrier 1→X, % global, tentatives archivées en lecture seule, partage en image
(9:16 et 1:1) via feuille native.

Approche technique : **une seule source de vérité (MMKV + Zustand persist), moteur métier
pur TS testable (Jest), aucune donnée hors appareil.** Le code démo du template
(`src/app/form.tsx`, `usePosts`, `api.ts`, `db/`, `useAppStore`) est remplacé.

---

## Technical Context

**Language/Version**: TypeScript strict (`tsc --noEmit`), React Native 0.86.3, Expo SDK 57,
React 19.2.3, React Compiler activé (`app.json experiments.reactCompiler: true`).

**Primary Dependencies** (déjà installées — golden template) :
`expo-router` (file-based, `src/app/`), `nativewind` v4 + `tailwindcss` + `clsx` + `tailwind-merge`,
`zustand` + `react-native-mmkv`, `react-hook-form` + `zod`, `@shopify/flash-list`,
`react-native-reanimated` 4.5 + `react-native-worklets` + `react-native-gesture-handler`,
`expo-haptics`, `expo-image`, `expo-font`, `expo-dev-client` (dev builds requis pour MMKV),
`jest-expo` + `@testing-library/react-native`, `expo-router/entry`.

**Dépendances À AJOUTER** (toutes via `npx expo install` — versions SDK 57) :

| Package | Usage | Justification |
|---|---|---|
| `react-native-svg` | Signature pad + jauges eau animées | Dessin du trait au doigt, natif, léger ; pas de WebView |
| `react-native-view-shot` | Capture de la carte de progression en PNG | Standard de capture de vue → export image partage |
| `expo-sharing` | Feuille native de partage (9:16, 1:1) | FR-026 : partage sans serveur ni réseau social |
| `expo-image-picker` | Prise de photo / choix galerie | FR-014 photo quotidienne |
| `expo-image-manipulator` | Éditeur intégré : recadrage, rotation | FR-014 éditeur intégré |
| `expo-notifications` | Rappels quotidiens locaux | FR-028 : gratuit 1 rappel / premium smart reminders |
| `expo-file-system` | Stockage des photos en fichiers, image partage temporaire | Photos jamais dans MMKV (volume) |
| `expo-localization` | Détection unités métrique/impérial (FR-013) | Réglage appareil suivi, modifiable en réglages |
| `expo-store-review` | Demande d'avis après moment de valeur (FR-028) | 3e jour validé, jamais au jour 1 |
| `react-native-purchases` (RevenueCat) | Achat unique $4.99 + restauration (FR-019/022) | Standard factory, restauration sans compte, conformité stores |
| `@expo-google-fonts/inter` | Typo Inter (fonctionnelle) | DESIGN.md typo |
| Font asset locale `Caveat` (`assets/fonts/Caveat-*.ttf`) | Typo script « day N » uniquement | DESIGN.md typo — jamais Playfair dans l'app |

**À RETIRER** (démo/inutiles en v1) : `expo-sqlite`, `drizzle-orm`, `drizzle-kit`,
`@tanstack/react-query` (aucune donnée réseau en v1 → inutilisé), `src/db/`, `drizzle.config.ts`.
> Décision : PAS de Drizzle/SQLite en v1 (voir ADR-75C-001). TanStack Query inutile sans backend.

**Storage**: `react-native-mmkv` — UNIQUE source de vérité persistée (clés `profile`, `challenge`).
Photos = fichiers dans `expo-file-system` documentDirectory (URI référencées dans l'état).
Aucune autre persistance. Pas de réseau, pas de cloud, pas d'AsyncStorage.

**Testing**: `jest-expo` (unitaires : moteur, dates, presets, unités, validation, store reducers) +
`Maestro` (e2e : onboarding→contrat, boucle quotidienne, paywall, partage, restart/archive).
Critères d'acceptation testables par tâche (G3.7).

**Target Platform**: iOS (focus revenus) + Android, SDK 57 ; iOS 15+, Android 8+ ; anglais (UI +
metadata), marché US/global ; offline total.

**Project Type**: mobile-app Expo Router (monorepo app unique — pas de backend, pas d'API).

**Performance Goals**: cold start < 2 s sur device milieu de gamme ; scroll calendrier 60 fps
(FlashList) ; jauge d'eau + micro-célébration sur thread UI (Reanimated) ; countdown minuit sans
re-render global ; React Compiler actif ; zéro jank dans la boucle quotidienne.

**Constraints**:
- 100 % local : aucune donnée transmise (FR-029), zéro backend, zéro compte, zéro clé API secrète.
  Clés RevenueCat = clés **publiques** (pk_...) via `EXPO_PUBLIC_*` (pattern standard, non secrètes).
- MMKV exige un **dev build** (pas Expo Go) → eas.json profils development/preview/production.
- La **signature n'est jamais persistée** (FR-004) : seul un booléen `signed` est mémorisé.
- Paywall jamais bloquant : croix toujours visible, cœur gratuit complet (FR-020/021).
- Aucune permission demandée avant le tableau de bord (FR-002) ; notifications au réglage du 1er rappel.
- Photos hors MMKV (volume) ; URIs dans l'état, fichiers dans documentDirectory.
- Design : tokens DESIGN.md dans `src/constants/theme.ts` — zéro valeur en dur (FR-030), anti-patterns interdits (FR-031).

**Scale/Scope**: ~16 écrans, ~35 composants, 1 locale (EN), 2 plateformes. Données : jusqu'à
~10 règles/jour × 75 jours (365 en custom), plusieurs tentatives archivées, 1 photo/jour max.
Widget = **exigence conditionnelle** (FR-027) : reporté v1.1 par défaut, go v1 seulement si
fiabilité démontrée par spike (voir Risques R1).

---

## Constitution Check

> La constitution locale de l'app est ratifiée ici (G3.6, attendu par la spec §Assumptions).
> Elle sera matérialisée dans `apps/75challenge/docs/decisions.md` + reflétée dans `AGENTS.md` app.

**Principes ratifiés :**

1. **I. Local-first strict** — toute donnée persiste sur l'appareil (MMKV + fichiers) ; aucune
   donnée ne quitte le téléphone ; zéro backend, zéro compte, zéro clé secrète embarquée.
2. **II. Moteur pur testable** — toute la logique métier (doses, dates, complétion, strict/souple)
   vit dans `src/lib/challenge/` en TypeScript pur **sans dépendance React Native** → testable Jest
   sans émulateur. Jamais de logique métier dans les écrans.
3. **III. Spec-driven strict** — aucun code sans spec ; divergence code/spec → corriger le code OU
   la spec explicitement, jamais de divergence silencieuse.
4. **IV. Design tokens uniques** — DESIGN.md = source visuelle ; `constants/theme.ts` = traduction
   code ; zéro couleur/rayon/typo en dur dans les composants.
5. **V. Zéro dark pattern technique** — paywall jamais bloquant (croix visible), signature jamais
   persistée, permission notifications au moment pertinent, message de jour raté non punitif.
6. **VI. Simplicité** — pas d'abstraction spéculative ; la complexité se justifie par la spec, point.

**Gates Constitution :** G-a pas de backend/données hors appareil · G-b tests Jest du moteur
obligatoires avant tout écran · G-c ESLint + typecheck + React Compiler avant build ·
G-d revue de code (revue-code) avant merge · G-e critère d'acceptation testable par tâche.

---

## Key Architecture Decisions (ADR-75C)

| # | Décision | Choix | Raison | Alternative rejetée |
|---|---|---|---|---|
| ADR-75C-001 | Stockage | **MMKV seul (Zustand persist), PAS de Drizzle/SQLite** | Données = graphe d'objets liés (attempt→days→rules), volume faible (~75×10 valeurs), zéro requête complexe, une seule source de vérité, pas de migrations | SQLite/Drizzle : complexité + schéma + migrations pour zéro bénéfice à cette échelle |
| ADR-75C-002 | Signature au doigt | **Implémentation maison `SignaturePad` (react-native-svg + Gesture Handler)** | Gesture Handler déjà en stack ; trait natif, style conforme DESIGN.md §7.7 ; la signature n'est JAMAIS persistée → pas besoin d'export d'image ; effaçable ; expose un booléen `signed` + points en mémoire | `react-native-signature-canvas` : WebView lourde, UI web incontrôlable, bugs Android connus, sur-dimensionné |
| ADR-75C-003 | Export image partage | **react-native-view-shot + expo-sharing + expo-file-system** | Capture d'une vraie vue RN (carte pastel) rendue hors-écran ; écriture PNG temporaire ; feuille native ; formats 9:16 et 1:1 via deux rendus | Génération canvas manuelle : réimplémente le design system, fragile |
| ADR-75C-004 | Moteur 25/50/75 | **`src/lib/challenge/` TS pur testable (engine + presets + dates)** | La spec FR-005/006/009/010 est du calcul pur : table de doses, dates, complétion, strict/souple → tests Jest exhaustifs, zéro dépendance RN | Moteur dans les écrans : intestable, bugs de dates = avis 1★ (US2 critique) |
| ADR-75C-005 | Paywall | **RevenueCat (react-native-purchases) derrière `PaywallService`** | Produit non-consommable unique + restauration sans compte (FR-022) gérée nativement par les stores ; entitlements ; conformité App Store/Play ; pattern factory documenté | `expo-iap` : gestion manuelle des transactions/restauration, moins fiable pour la conformité ; backends maison interdits |
| ADR-75C-006 | Architecture | **Par couches alignée AGENTS.md app** (app/components/constants/hooks/lib/store/types/utils) avec sous-domaines dans `components/` et `lib/` | App mono-domaine (le challenge), zéro feature autonome réutilisable ailleurs, 0 backend → feature-based pur ajouterait 6 surfaces publiques pour rien ; extraction future possible en v2 (social, export) | `src/features/<domaine>/` pur : cérémonie sans gain à cette taille ; l'AGENTS.md app (constitution locale) prime sur la règle générique |
| ADR-75C-007 | Widget | **EXIGENCE CONDITIONNELLE — report v1.1 par défaut** | FR-027/SC-010 : un widget bugué = avis 1★ garantis (bug n°1 du segment) ; `expo-widgets` expérimental SDK 57 → spike de faisabilité en fin de v1, décision go/no-go, jamais bloquant | L'implémenter en v1 par défaut : risque élevé, contraire au positionnement honnête |
| ADR-75C-008 | Données async / analytics | **Aucun TanStack Query, aucun PostHog en v1** | Zéro appel réseau (FR-029) → TanStack inutile ; « tout local, zéro backend, zéro clé API » (contexte utilisateur) → pas d'analytics tiers ; SC mesurés via consoles stores | PostHog/Sentry : envoyent des données hors appareil, contredisent le positionnement privacy v1 ; candidats v1.1 avec validation utilisateur |
| ADR-75C-009 | Notifications | **expo-notifications, planification locale (trigger daily)** | Local-first, hors-ligne ; gratuit = 1 rappel global, premium = par tâche/multiples (FR-028) ; permission au réglage du 1er rappel (FR-002) | Push server : backend interdit |

---

## Data Model (types TypeScript — pas de schéma SQL, persistés JSON dans MMKV)

> Types partagés dans `src/types/index.ts`. Stockage des dates : `YYYY-MM-DD` (locale) pour les
> jours, ISO pour les timestamps. L'état est TOUJOURS en métrique (L, min, pages) ; conversion
> impérial à l'affichage seulement (ADR : unités FR-013).

```ts
type RuleType = 'water' | 'exercise' | 'reading' | 'diet' | 'photo' | 'custom';
type RuleUnit = 'L' | 'min' | 'pages' | 'boolean' | 'photo' | 'custom';
type Intensity = 'soft' | 'medium' | 'hard' | 'custom';
type MissedDayMode = 'strict' | 'flexible';
type DayStatus = 'done' | 'partial' | 'missed' | 'future';
type AttemptStatus = 'active' | 'completed' | 'abandoned';
type UnitSystem = 'metric' | 'imperial';

interface Rule {
  id: string;                 // stable (ex. 'water', 'exercise', 'custom-<uuid>')
  type: RuleType;
  title: string;              // EN v1 (ex. "Water")
  dose: number;               // cible journalière (L, min, pages, 1, booléen)
  unit: RuleUnit;
  required: boolean;          // obligatoire pour valider le jour (FR-016)
  outdoor?: boolean;          // exercice Hard : 1 séance extérieur (FR-005)
  frequency: 'daily' | 'weekly'; // photo Soft = 1×/semaine
  customTask?: {              // FR-015 (Premium)
    icon: string;
    description?: string;
    isCounter: boolean;       // checkbox vs compteur avec objectif
    requiredForDay: boolean;
  };
  effectiveFrom?: string;     // YYYY-MM-DD : règles modifiées = effet lendemain (FR-008/015)
}

interface ChallengeConfig {   // configuration d'une tentative
  intensity: Intensity;
  durationDays: number;       // 25/50/75 ou libre 1-365 (FR-007)
  startDate: string;          // YYYY-MM-DD (locale)
  endDate: string;            // calculée : startDate + durationDays - 1 (FR-006)
  missedDayMode: MissedDayMode; // défaut : flexible en Soft, strict en Hard (FR-009)
  rules: Rule[];              // ordonnées (badges 1→4 puis boucle pastels)
  isCustom: boolean;          // challenge 100 % personnalisé (Premium)
}

interface Attempt {
  id: string;
  number: number;             // « tentative N » (FR-025)
  config: ChallengeConfig;
  status: AttemptStatus;
  archivedAt?: string;        // ISO
}

interface RuleProgress {
  value: number;              // cumul saisi (0 si non commencé)
  completed: boolean;
  outdoorDone?: boolean;      // exercice Hard
}

interface DayEntry {
  attemptId: string;
  index: number;              // 1-based : jour N
  date: string;               // YYYY-MM-DD
  status: DayStatus;
  rules: Record<string, RuleProgress>;
  photoUri?: string;          // fichier local (jamais dans MMKV)
  weightKg?: number;          // option (FR-018)
  journal?: string;           // option (FR-018)
  validatedAt?: string;       // ISO — ★ Fait (FR-016)
  preMarked?: boolean;        // « j'ai déjà commencé » : jours passés pré-marqués (US1-Edge)
}

interface UserProfile {
  firstName: string;
  quizAnswers: { motivation?: string; fear?: string }; // ton smart reminders (FR-028)
  unitSystem: UnitSystem;      // détecté via expo-localization, modifiable (FR-013)
  onboardingDone: boolean;
  dailyReminder: { enabled: boolean; hour: number; minute: number } | null;
  smartReminders: SmartReminder[]; // Premium (FR-028)
  ratedAt?: string;            // dernière demande d'avis (FR-028)
  paywallSeenAt?: string;      // modal post-ready affichée 1×
}

interface SmartReminder { id: string; ruleId?: string; hour: number; minute: number; tone: string; }
```

**Persistance MMKV** : clé `profile` = `UserProfile` + `premium` (booléen + produit, restauré via
RevenueCat) ; clé `challenge` = `{ attempts: Attempt[]; activeAttemptId: string | null;
daysByAttempt: Record<string, DayEntry[]> }`. Réécriture atomique par action store (Zustand
persist middleware → `createJSONStorage(() => mmkv)`).

**Photos** : `documentDirectory/photos/<attemptId>/day-<N>.jpg` (expo-file-system) ; le URI est
stocké dans `DayEntry.photoUri`. Jamais de base64 dans MMKV.

---

## État applicatif (Zustand vs TanStack vs MMKV)

| Donnée | Où | Pourquoi |
|---|---|---|
| Profil, quiz, unités, rappels, premium | `useProfileStore` (Zustand + persist MMKV) | État local persistant, partagé partout |
| Tentatives, jours, coches, règles | `useChallengeStore` (Zustand + persist MMKV) | Cœur de l'app, une seule source de vérité ; reducers purs testables |
| Signature en cours | State local du `SignaturePad` (jamais persisté) | FR-004 : seul `signed: boolean` transite vers l'écran contrat |
| Quiz / prénom en cours | State local + RHF+zod (écrans) | Soumis au profil une fois terminé |
| Formulaire tâche personnalisée | RHF + zod (`src/lib/validation.ts`) | FR-015 |
| Countdown minuit | Hook `useCountdown` (interval 1 s, formaté) | Éphémère, recalculé au montage |
| Données réseau | **AUCUNE** (TanStack Query retiré) | Zéro backend en v1 (FR-029) |
| Jauges / animations | Reanimated (thread UI) | Performance : jamais de re-render JS pendant le remplissage |

Règles : les écrans ne manipulent jamais MMKV directement → ils appellent les actions des stores
(`src/store/`) ou les services (`src/lib/services/`). Handlers de stockage dans
`src/lib/services/storage.ts`.

---

## Flux utilisateur (écran par écran)

### US1 — Onboarding → contrat signé (P1)
1. `/` (index) : redirect — `profile.onboardingDone` ? `/dashboard` : `/onboarding`.
2. `/onboarding` : **accroche** — pager 3-4 slides (une idée/écran, preuve sociale au slide 1),
   bouton « Skip » permanent (FR-001). → `/onboarding/education` ou `/onboarding/quiz`.
3. `/onboarding/education` : 1 règle = 1 écran (pager), chiffres réels par intensité (ex. 3,8 L
   en Hard), skippable (FR-001). → `/onboarding/quiz`.
4. `/onboarding/quiz` : ≤ 5 questions par images (motivation, crainte n°1) + interlude
   anti-abandon + saisie prénom (FR-001, FR-003). → `/setup/choose`.
5. `/onboarding/privacy` : **confiance** — « 100 % local, zéro compte, rien ne part » + carousel
   avis 5★ (FR-001). → `/onboarding/contract`.
6. `/onboarding/contract` : **contrat** — prénom, règles du challenge, dates début/fin auto,
   `SignaturePad` (SVG + Gesture, effaçable), mention « Ta signature n'est pas enregistrée »
   toujours visible, bouton « Je m'engage » inactif tant que non signé (FR-003/004).
   → `/onboarding/ready`.
7. `/onboarding/ready` : « Tu es prêt·e » + carte récap jour 1 (dates, règles) → `/dashboard` +
   ouverture 1× de la modal paywall (FR-001, FR-020).
   > Critère US1 : parcours complet < 3 min sans compte ni permission (SC-001).

### US2 — Choisir/calibrer son challenge (P1)
1. `/setup/choose` : cartes **Soft (25 j) / Medium (50 j) / Hard (75 j) / Personnalisé** — durée,
   doses résumées (FR-005) et **date de fin calculée affichée avant démarrage** (FR-006) ;
   changement d'intensité = recalcul instantané ; choix du mode strict/souple avec explication
   (FR-009) ; « Tu commences aujourd'hui ou tu as déjà commencé ? » → jour actuel ou date de
   début passée, jours passés pré-marqués non-parfaits (FR-010, US1-Edge).
2. `/setup/custom` (Premium, badge couronne sinon paywall) : durée libre 1-365 (75 défaut) +
   composition libre des règles (FR-007).
3. `/setup/edit` (Premium) : éditer un preset existant (doses, ajouter/retirer règle) sans tout
   recréer ; `effectiveFrom = lendemain` — jamais de réécriture des jours passés (FR-008).
4. Validation → `/onboarding/contract` (flux US1) ou retour `/dashboard`.

### US3 — Boucle quotidienne (P2)
1. `/dashboard` : une seule page — « day N » (Caveat), « Jour N sur X », dates, % jour complété,
   **compte à rebours « Temps restant » jusqu'à minuit** (FR-011) + checklist complète.
2. **Checklist dosée** : chaque règle = badge pastel + dose « At least X/day » + saisie unités :
   eau (jauge + ±240 ml, reste en ml/L/verres — FR-013), exercice (minutes + indoor/outdoor en
   Hard — FR-005/012), lecture (±1/±5 pages), alimentation (Oui/Non), photo (bouton) — coche
   automatique quand la dose est atteinte (FR-012).
3. `/photo-editor` (modal) : prise ou galerie (expo-image-picker), recadrage + rotation
   (expo-image-manipulator), badge ★ Fait après validation (FR-014) ; caméra refusée → galerie
   (US1-Edge).
4. **Tâches personnalisées** (Premium, FR-015) : checkbox ou compteur, option « required for day
   completion » qui bloque le ★ Fait.
5. **Options** : poids + journal du jour (FR-018).
6. **Validation auto** quand toutes les règles obligatoires sont faites → ★ Fait +
   micro-célébration discrète (haptics + Reanimated) (FR-016).
7. **Minuit passé avec règles non faites** : `syncDay()` (au focus + AppState foreground) marque
   le jour incomplet avec message non punitif (FR-017) ; mode **strict** → tentative archivée +
   nouvelle au jour 1 ; mode **souple** → la tentative continue.
8. **Rappels** : heure au choix (gratuit), par tâche/multiples (Premium) — permission demandée
   ici, jamais au boot (FR-002/028).

### US4 — Paywall en couches (P2)
1. `/paywall` (modal) : accessible depuis (a) post-ready 1×, (b) rail permanent « Premium » en
   tête du dashboard, (c) badges couronne sur actions payantes — tous ouvrent le MÊME paywall
   (FR-020). Prix **$4.99 — un seul paiement, à vie** en clair, croix toujours visible et
   contrastée, aucun compte à rebours, aucune présélection trompeuse (FR-019).
2. Achat : `PaywallService.purchase()` (RevenueCat, non-consommable) → `premium = true`.
3. « Restaurer mon achat » : paywall ET réglages (FR-022).
4. Fermer : accès complet au cœur gratuit, aucune dégradation (FR-021) ; frontière
   gratuit/Premium exacte FR-023.
5. Demande d'avis store : après le **3e jour validé** (expo-store-review), jamais au jour 1
   (FR-028).

### US5 — Progression, restart, partage (P3)
1. `/progress` : grille calendrier 1→X (FlashList, états coloriés : fait/partiel/raté/futur,
   aujourd'hui mis en avant), % global + % jours parfaits (FR-024).
2. `/day-detail` : tap sur un jour passé → règles/valeurs/photo/journal (FR-024).
3. `/attempts` : tentatives archivées en lecture seule, badge « tentative N » sur le dashboard
   (FR-025) ; restart → nouvelle tentative, archive intacte.
4. `/share` (modal) : carte pastel (jour N/X, règles cochées, dates, nom) rendue hors-écran en
   9:16 et 1:1 → capture view-shot → PNG temporaire → feuille native (FR-026). Aucune donnée ne
   transite par un serveur.
5. `/settings` : unités (métrique/impérial), rappels, smart reminders (Premium), restaurer,
   recommencer/archiver, à propos (privacy reaffirmed).

---

## Project Structure

### Documentation (this feature)

```text
apps/75challenge/
├── specs/
│   ├── spec.md              # Spécification fonctionnelle (G3.5, source de vérité)
│   └── plan.md              # Ce fichier (G3.6)
├── docs/
│   └── decisions.md         # ADR-75C-001..009 (G3.6)
├── PRD.md · BRAINSTORM.md · ETAT.md · AGENTS.md
└── design/
    ├── DESIGN.md            # Thème validé (source visuelle)
    ├── MAQUETTE-V2-75challenge.html
    └── STYLE-EXPLORATION-75challenge.html
```

### Source Code (arborescence cible réelle — le code démo est remplacé)

```text
apps/75challenge/
├── app.json / eas.json / package.json / tsconfig.json / tailwind.config.js
├── babel.config.js / metro.config.js / nativewind-env.d.ts / expo-env.d.ts
├── global.css → src/global.css
├── assets/
│   └── fonts/               # Caveat-Bold.ttf, Caveat-SemiBold.ttf (+ Inter via @expo-google-fonts)
├── e2e/
│   ├── 01_onboarding_contract.yaml
│   ├── 02_daily_flow.yaml
│   ├── 03_paywall_close.yaml
│   ├── 04_share_progress.yaml
│   └── 05_restart_archive.yaml
└── src/
    ├── app/                              # ROUTES : composition + navigation UNIQUEMENT
    │   ├── _layout.tsx                   # fonts (Inter+Caveat), Providers, Stack
    │   ├── index.tsx                     # redirect onboarding/dashboard
    │   ├── (onboarding)/
    │   │   ├── _layout.tsx
    │   │   ├── index.tsx                 # accroche (pager)
    │   │   ├── education.tsx
    │   │   ├── quiz.tsx
    │   │   ├── privacy.tsx
    │   │   ├── contract.tsx
    │   │   └── ready.tsx
    │   ├── (setup)/
    │   │   ├── _layout.tsx
    │   │   ├── choose.tsx
    │   │   ├── custom.tsx
    │   │   └── edit.tsx
    │   ├── (main)/
    │   │   ├── _layout.tsx
    │   │   ├── dashboard.tsx             # boucle quotidienne
    │   │   ├── progress.tsx
    │   │   ├── day-detail.tsx
    │   │   ├── attempts.tsx
    │   │   └── settings.tsx
    │   ├── photo-editor.tsx              # modal (FR-014)
    │   ├── share.tsx                     # modal (FR-026)
    │   └── paywall.tsx                   # modal (FR-020)
    ├── components/
    │   ├── ui/                           # UI générique (design system DESIGN.md)
    │   │   ├── Button.tsx                # primary (rectangle noir plein) / secondary / ghost
    │   │   ├── Card.tsx / DayCard.tsx
    │   │   ├── TaskBadge.tsx             # 30×30, 4 pastels, boucle au-delà de 4 (DESIGN §9)
    │   │   ├── TaskRow.tsx / Checkmark.tsx
    │   │   ├── WaterGauge.tsx            # Reanimated (FR-013)
    │   │   ├── Countdown.tsx             # temps restant minuit
    │   │   ├── SignaturePad.tsx          # SVG + Gesture Handler (ADR-75C-002)
    │   │   ├── CrownBadge.tsx / PremiumRail.tsx
    │   │   └── PastelBadge.tsx
    │   ├── onboarding/  (Slide, EducationSlide, QuizQuestion, TrustCarousel, ContractCard)
    │   ├── setup/       (IntensityCard, RuleSummaryCard, CustomRuleForm)
    │   ├── dashboard/   (DayHeader, RuleChecklistItem, PhotoCard, JournalField, Celebration)
    │   ├── progress/    (CalendarGrid, DayCell, StatRing, AttemptCard, ShareCard)
    │   ├── paywall/     (PaywallCard, BenefitRow)
    │   └── settings/    (SettingRow, ReminderPicker, UnitsPicker)
    ├── constants/
    │   ├── theme.ts                      # tokens DESIGN.md (surface #FFF, on-surface #0A0A0A,
    │   │                                 # 4 pastels, radius, typo) — RÉÉCRIT
    │   ├── config.ts                     # prix $4.99, limites (1-365 j, 10 règles max), clés publiques env
    │   └── copy.ts                       # textes marketing EN (onboarding, paywall, messages non punitifs)
    ├── hooks/
    │   ├── useCountdown.ts               # minuit (FR-011)
    │   ├── useTodaySync.ts               # syncDay au focus + AppState (FR-017)
    │   ├── useChallenge.ts               # sélecteurs dérivés (jour actuel, % jour, stats)
    │   ├── usePremium.ts                 # PaywallService + store
    │   └── useReminders.ts               # expo-notifications wrapper
    ├── lib/
    │   ├── challenge/                    # MOTEUR PUR TS — testable, zéro dépendance RN
    │   │   ├── engine.ts                 # durée, endDate, jour actuel, complétion, strict/souple,
    │   │   │                             #   « déjà commencé », édition règles (effet lendemain)
    │   │   ├── presets.ts                # FR-005 : table doses Soft/Medium/Hard
    │   │   ├── dates.ts                  # addDays, diffDays, todayKey, format (locales)
    │   │   └── types.ts                  # types moteur (importés par src/types)
    │   ├── services/
    │   │   ├── storage.ts                # instance MMKV + helpers (RÉÉCRIT)
    │   │   ├── purchase.ts               # PaywallService (RevenueCat) — purchase/restore/isPremium
    │   │   ├── notifications.ts          # rappels locaux (daily trigger), permission tardive
    │   │   ├── photo.ts                  # picker + manipulator + file-system (URI, jamais MMKV)
    │   │   ├── share.ts                  # view-shot (9:16/1:1) + expo-sharing
    │   │   └── units.ts                  # conversion métrique/impérial (FR-013)
    │   └── validation.ts                 # zod : prénom, unités saisies, custom task (RÉÉCRIT)
    ├── store/
    │   ├── useProfileStore.ts            # profil + premium + rappels (persist MMKV)
    │   └── useChallengeStore.ts          # attempts/days + actions pures (persist MMKV)
    ├── types/
    │   └── index.ts                      # types partagés (data model ci-dessus)
    ├── utils/
    │   ├── cn.ts                         # (gardé)
    │   └── haptics.ts                    # expo-haptics (micro-célébrations)
    ├── __tests__/
    │   ├── engine.test.ts                # presets, endDate, complétion, strict/souple, reprise
    │   ├── dates.test.ts                 # bornes 1/365, bisextile, fin de mois
    │   ├── units.test.ts                 # L↔fl oz, verres, métrique/impérial
    │   ├── validation.test.ts            # zod (RÉÉCRIT)
    │   └── challenge-store.test.ts       # reducers : coche auto, archive, restart, edit
    └── global.css
```

**Fichiers démo à SUPPRIMER** : `src/app/form.tsx`, `src/hooks/usePosts.ts`, `src/lib/api.ts`,
`src/lib/services.ts` (remplacé par `lib/services/`), `src/db/` (entier), `src/store/useAppStore.ts`,
`src/components/themed.tsx`, `drizzle.config.ts`, `src/components/Button.tsx` (remplacé par `ui/Button`).

**Structure Decision**: par couches alignée AGENTS.md app (ADR-75C-006) — l'app est mono-domaine
(le challenge) : les routes ne font que composer, la logique vit dans `lib/challenge/` (pur),
les stores et les services ; les composants sont groupés par domaine sous `components/`. Pas de
`src/features/` en v1 (aucune feature autonome) ; extraction en v2 si une feature devient
réutilisable (ex. import/export, social).

---

## Points d'intégration

| Intégration | Package | Notes |
|---|---|---|
| **RevenueCat** | `react-native-purchases` | Clés publiques `EXPO_PUBLIC_REVENUECAT_APPLE_API_KEY` / `_GOOGLE_API_KEY` (app.json plugin + .env, jamais en dur) ; produit non-consommable `premium_499` ; entitlement `premium` ; `PaywallService` = seule couche d'accès |
| **Notifications** | `expo-notifications` | `scheduleNotificationAsync` trigger daily ; permission à la config du 1er rappel ; smart reminders Premium (ton du quiz) |
| **Photo** | `expo-image-picker` + `expo-image-manipulator` + `expo-file-system` | URI dans `DayEntry`, fichier dans documentDirectory ; caméra refusée → galerie |
| **Partage** | `react-native-view-shot` + `expo-sharing` | 2 rendus (9:16, 1:1) capturés hors-écran, PNG temporaire, feuille native |
| **Unités** | `expo-localization` | Détection initiale ; override dans settings |
| **Avis store** | `expo-store-review` | Après 3e jour validé (FR-028) |
| **Fonts** | `expo-font` | Inter (Google) + Caveat (asset local) ; SplashScreen.preventAutoHideAsync → hide après fonts |
| **Analytics/auth** | Aucun | Hors v1 (ADR-75C-008) |

---

## Testing Strategy

**Jest (unitaires — logique métier, sans émulateur)** :
- `engine.test.ts` : presets FR-005 (doses exactes par intensité) ; `endDate` (25 j : 5 janv→29
  janv ; 1 j ; 365 j ; bisextile ; fin de mois) ; `getCurrentDayIndex` ; complétion du jour
  (toutes règles, required seulement, custom required) ; strict vs flexible à minuit ; « déjà
  commencé » (reprise jour N, jours passés pré-marqués) ; édition règles (effet lendemain,
  historique intact).
- `dates.test.ts` : bornes 1/365, timezone locale, changement de fuseau.
- `units.test.ts` : conversion L↔fl oz, verres, métrique/impérial.
- `validation.test.ts` : zod (prénom 2-20, eau 0-5 L/j, pages ≥ 0, custom task).
- `challenge-store.test.ts` : reducers purs (coche auto quand dose atteinte, archive intacte au
  restart, tentative N incrémenté).

**Maestro (e2e — critères d'acceptation utilisateur)** :
- `01_onboarding_contract.yaml` : accroche → skip → quiz → choose Soft → privacy → signer →
  « Je m'engage » (inactif avant signature) → ready → dashboard. Critère : < 3 min, aucune
  permission demandée (SC-001).
- `02_daily_flow.yaml` : cocher toutes règles → ★ Fait + bascule jour suivant.
- `03_paywall_close.yaml` : rail → paywall → croix → dashboard intact, cœur gratuit complet.
- `04_share_progress.yaml` : partager → feuille native s'ouvre (9:16).
- `05_restart_archive.yaml` : recommencer → badge tentative 2, archive consultable (FR-025).

**Qualité** : `npm run typecheck` · `npm run lint` (expo lint) · `npm test` avant chaque PR ;
revue de code avant merge ; test sur device réel (perf : cold start, scroll calendrier).

---

## Risques techniques & mitigations

| # | Risque | Prob/Impact | Mitigation | Plan B |
|---|---|---|---|---|
| R1 | **Widget (FR-027)** : expo-widgets expérimental SDK 57 ; widget bugué = avis 1★ (bug n°1 du segment) | Élevé/Élevé | **Exigence conditionnelle** : spike de faisabilité tôt (2 j max), critères objectifs (synchro < 1 min, zéro reset de jour), go/no-go documenté ; jamais en tâche bloquante v1 | Report v1.1 communiqué honnêtement (« prévu en v1.1 ») — SC-010 |
| R2 | **Bascule de jour minuit/timezone** : FR-017 fragile (date fausse = avis 1★) | Moyen/Élevé | Moteur `dates.ts` pur testé (bornes, fuseaux) ; `useTodaySync` (focus + AppState) ; saisie en cours jamais perdue silencieusement | Marquage en différé au prochain focus si minuit pendant session |
| R3 | **Photos + MMKV** : volume images dans le stockage clé-valeur | Moyen/Moyen | Photos = fichiers (documentDirectory) ; MMKV ne stocke que les URIs ; purge des photos orphelines à l'archivage | Compression via manipulator (qualité 80 %) si quota dépassé |
| R4 | **RevenueCat sandbox/config stores** : produit non-consommable mal configuré | Faible/Élevé | Config produit + sandbox testés dès les premiers dev builds ; `PaywallService` isolé ; restore testé | Repli `expo-iap` derrière la même interface PaywallService |
| R5 | **Signature SVG** : trait peu fluide sur Android bas de gamme | Faible/Moyen | Gesture Handler (thread UI) + simplification des points ; zone 100 % dédiée (DESIGN §7.7) | Capture d'écran du pad si besoin d'aperçu (jamais persisté) |

---

## Complexity Tracking

> Aucune violation de constitution. Toutes les décisions ci-dessus sont justifiées par la spec
> (ADR-75C-001..009) ; aucune abstraction spéculative introduite. La seule complexité assumée
> est le **moteur pur TS testable** (nécessaire : c'est le produit, US2) et le **découpage par
> couches avec sous-domaines** (aligné AGENTS.md app, extractible en v2).