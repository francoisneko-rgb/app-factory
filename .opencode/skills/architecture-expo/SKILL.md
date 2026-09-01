---
name: architecture-expo
description: Stack et standards 2026 — structure projet, données, état, packages, services.
---
# Architecture Expo — Stack 2026 de la factory

## Création de projet
- TOUJOURS partir de `template-app/` (clone préconfiguré), jamais de zéro.

- AUCUN code avant que spec/plan/tasks soient validés (gates G3.5-G3.7, Spec Kit,
   règle 19 AGENTS.md).
- Dernier SDK Expo (55+. Arborescence FEATURE-BASED obligatoire :
   src/app/ (routes Expo Router : composition + navigation UNIQUEMENT, pas de logique),
   src/features/<domaine>/{screens,components,hooks,api,store,types,index.ts},
   src/components/ui/ (UI générique uniquement), src/services/ (API, analytics, storage),
   src/constants/ (tokens thème), src/utils/ (fonctions pures).
   Règles : une feature n'importe jamais les internes d'une autre (surface publique
   index.ts) ; shared UI reste étroit ; fichiers petits, une responsabilité.

- Installer un package : TOUJOURS `npx expo install <pkg>` (version compatible SDK
   garantie) — jamais npm install direct pour des packages natifs.

## Stack imposée
| Besoin | Outil | Note |
|---|---|---|
| Langage | TypeScript strict | — |
| Navigation | Expo Router (file-based, groupes (tabs), _layout) | — |
| Styling | NativeWind (Tailwind via className) + tokens centralisés | Alternative acceptée : Uniwind (plus rapide, plus récent) |
| État local simple | Context API | Suffit pour thème, préférences |
| État app | Zustand + persistance MMKV | — |
| État serveur | TanStack Query (QueryClientProvider, queryKey/queryFn) | Dès le 1er appel HTTP |
| Données structurées | expo-sqlite + Drizzle ORM (schéma TS, drizzle-kit) | Drizzle Studio pour déboguer |
| Clé-valeur simple | react-native-mmkv | 30x plus rapide qu'AsyncStorage ; exige un dev build (pas Expo Go) |
| Formulaires | react-hook-form + zod | Validation typée |
| Listes | FlashList | — |
| Animations/gestes | Reanimated + Gesture Handler | Thread UI, voir performance-expo |
| Auth (si besoin) | Clerk | Composants RN natifs excellents |
| Monétisation | RevenueCat derrière PaywallService | Skill paywall-monetisation |
| Analytics | PostHog (events nommés dès le MVP) | — |
| Crashs/monitoring | Sentry (plugin Expo) | Dès le départ |
| Review de code IA | CodeRabbit sur les PR GitHub | Qualité en solo |
| Backend | Aucun par défaut → Expo API Routes (secrets côté serveur, EAS Hosting) → Supabase (Postgres) → InstantDB (temps réel) | Dans cet ordre de complexité |

## Hygiène de code (obligatoire)
- Un seul endroit pour les couleurs/tokens (constants/theme.ts) — zéro valeur en dur.
- Handlers de stockage dans lib/ (fonctions getX/addX), pas d'appels storage dans l'UI.
- Recharger les données au focus d'un écran : useFocusEffect (expo-router), pas useEffect seul.
- Nommer les écrans XxxScreen, composants PascalCase.tsx, utilitaires camelCase.ts.
- Skill performance-expo appliqué systématiquement.
- expo-haptics sur les actions de succès (micro-polish pro).
- eas.json avec 3 profils : development (dev client), preview (APK interne pour tests),
  production (autoIncrement). CI : EAS Workflows (push git → build/submit).
- Limites Expo Go connues : notifications push (SDK 53+), MMKV → créer un development
  build (eas build --profile development) dès qu'un module natif custom est requis.

## Design system（contrat visuel versionné）
- **Composants UI ：`react-native-reusables` comme base（copy-paste, on possède la
  source—le standard de l'ère agentique, compatible NativeWind）. HeroUI RN acceptable
  si composant spécifique manquant（skill `pipeline-design`）。
- Le **DESIGN.md de l'app**（`brain/apps/<app>/design/DESIGN.md`）est la **source de vérité
  visuelle**—`constants/theme.ts` en est la traduction code（tokens identiques, jamais
  de divergence entre le contrat et le code）. Toute nouvelle feature lit le DESIGN.md avant
  de styler。
- Icône, splash, écrans critiques passent par le gauntlet-loop（skill `icones-app` +
  `pipeline-design`）。
## Pièges connus NativeWind v5 (documentés, ne pas réapprendre)
- Override lightningcss obligatoire dans package.json (version pinée) ; après tout
  override : supprimer node_modules + package-lock.json et réinstaller, sinon sans effet.
- react-native-css est un peer dependency requis pour les builds natifs (erreur Metro sinon).
- className ne fonctionne PAS sur SafeAreaView et quelques composants natifs → utiliser
  les tokens de constants/theme.ts en style classique pour ces composants uniquement.
- Importer global.css dans le root layout.

## Patterns FlatList éprouvés
- Écran qui doit scroller d'un bloc : tout le contenu au-dessus de la liste va dans
  ListHeaderComponent (jamais de ScrollView parent de même direction — conflit + warning).
- Imbriquer un FlatList horizontal dans un FlatList vertical est OK (directions différentes).
- contentContainerClassName / padding bottom pour ne pas passer sous la tab bar.
- ListEmptyComponent obligatoire (état vide soigné).
- Pour les très longues listes : FlashList (déjà dans la stack).

## Pattern chargement au focus
- Données d'un écran rechargées au retour sur l'écran : useFocusEffect + useCallback,
  pas un useEffect au montage seul.

## Provider et splash
- SplashScreen.preventAutoHideAsync() au chargement du module, jusqu'aux fonts chargées.
- Providers critiques (Clerk, PostHog) placés pour charger EN PARALLÈLE des fonts
  (ne pas les enfermer derrière un font-gate : le temps de démarrage compte).

## PostHog par app (setup automatique)
- npx -y @posthog/wizard@latest : wizard IA qui scanne le codebase, propose un plan
  d'événements, installe et configure tout. Le lancer APRÈS les premières features.
- Accepter l'installation du serveur MCP PostHog proposée à la fin : les agents pourront
  interroger les analytics en langage naturel ("quel écran a le plus de drop-off ?") et
  proposer des correctifs — boucle d'amélioration post-lancement.
- Identifier l'utilisateur (posthog.identify) après chaque sign-in ; posthog.reset()
  APRÈS signOut (jamais avant — désynchronisation).
- Événements MVP obligatoires : app opened, onboarding complété, action cœur de l'app,
  paywall vu, paywall converti. Dashboards créables en langage naturel via PostHog AI.
## Internationalisation (i18n)
- i18n dès le premier écran ( expo-localization + i18n-js, fichiers de traduction par locale。
- Zéro texte en dur dans les composants—la factory vise plusieurs marchés。
- Metadata store dans la langue du marché cible(règle 5 AGENTS.md)。
