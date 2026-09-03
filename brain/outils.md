# OUTILS — Mémoire de la factory

> Relire AVANT chaque tâche pour savoir ce dont on dispose.
> Légende statut : ✅ prêt · 🔑 clé manquante · ⚠️ action manuelle / à installer.
> MAJ : 2026-09-01 (pipeline v2 — ADR-009 ：agents vision/QA, Maestro, worktree)



## Navigation（bootstrap et index, ADR-010）
- `SOMMAIRE.md`（racine）= carte complète du projet（arborescence, où vit quoi, commandes,
  état pointeur）。À lire en 2e（après AGENTS.md）, jamais plus。
- `COMMANDES.md`（racine）= vocabulaire canonique（RADAR, SCAN, DÉCORTIQUE, FORGE, STYLE,
  BÂTIT, TESTE, GAUNTLET, EMBALLAGE, LANCE, PROMOUVOIS, PILOTE）。Détail des skills pointés।
- Règle bootstrap：au démarrage de session, lire UNIQUEMENT AGENTS.md + SOMMAIRE.md
  + pipeline/etat.md；puis le skill et les fichiers de l'étape concernée；interdiction de lire
  brain/ en entier；logs datés jamais re-lus en entier（consulter le plus récent）。

## Scrapers stores (Google Play + App Store) — `tools/scrapers/`
Statut : ✅ prêt (npm install fait, tous validés sur apps réelles).
Dépendances : node + `npm install` (déjà fait). Librairies : `google-play-scraper` v10 (ESM → `.default`), `app-store-scraper`.
Coût : 0 € (gratuit, open source).
Skills : `recherche-marche`, `scraping-concurrents`, `analyse-avis`, `radar-tendances`.

| Commande | Rôle |
|---|---|
| `node scrape-app.js <package> [pays] [lang]` | Metadata complète d'une app Google Play (volumes installs, prix). |
| `node scrape-reviews.js <package> <nb> [pays] [lang]` | Avis GP (helpful + newest, dédupliqués). |
| `node scrape-search.js "<terme>" [nb] [pays] [lang]` | Recherche/concurrence GP (pas de volume installs ici → compléter par scrape-app). |
| `node top-charts.js [categorie] [collection] [nb]` | Top charts GP. Collections v10 : TOP_FREE, TOP_PAID, GROSSING (pas NEW_*). |
| `node download-assets.js <package> <dossierSortie> [pays]` | Icône + screenshots (références gauntlet). |
| `node scrape-app-ios.js <idNumerique> [pays]` | Metadata App Store (volume notes = `reviews`). |
| `node ios-reviews.js <idNumerique> <nb> [pays] [lang]` | Avis App Store. |
| `node ios-search.js "<terme>" [nb] [pays] [lang]` | Recherche App Store. |

## Playwright (MCP + navigateur)
Statut : ✅ prêt (chromium installé `chromium-1234`).
MCP `playwright` dans opencode.json, outils `playwright_browser_*`. Navigateur téléchargé dans `%LOCALAPPDATA%\ms-playwright`.
Coût : 0 €.
Skills : `recherche-marche`, `scraping-concurrents`, `analyse-avis`.

## Context7 (MCP)
Statut : ✅ prêt (répond, `list_mcp_resources` OK).
Endpoint : `https://mcp.context7.com/mcp`, outils `context7_*` (resolve-library-id, query-docs).
Coût : gratuit.
Usage : doc officielle des librairies/frameworks (Expo, React Native, packages…). Skill : `architecture-expo`.

## Expo SDK / React Native (framework — ADR-003)
Statut : ✅ prêt (Node v24 + npm présents ; `eas-cli` installé globalement).
Stack : React Native + Expo SDK 57 (TypeScript, Expo Router, NativeWind, Zustand).
Coût : gratuit (SDK open source). Skills : `architecture-expo`, `gauntlet-loop`, `deploiement-stores`.

## Template golden — `template-app/` (ADR-005)
Statut : ✅ créé + validé 2026-08-31 (typecheck, tests 3/3, expo export, expo start).
Point de départ OBLIGATOIRE de toute app : cloner `template-app/` → `apps/<nom>` (jamais de zéro).
Stack préconfigurée : Expo Router, NativeWind, Zustand+MMKV, TanStack Query, RHF+zod, FlashList,
Reanimated+Gesture Handler, Drizzle (optionnel), Jest+Maestro, eas.json 3 profils, services derrière
flags .env. Procédure : README.md du template. Skills : `architecture-expo`, `performance-expo`.

## Expo Skills officielles (agents IA)
Statut : ✅ installés 2026-08-31 (26 skills) dans `.opencode/skills/` via `npx skills add expo/skills`.
Portée : 6 skills EAS (`eas-app-stores`, `eas-hosting`, `eas-observe`, `eas-simulator`,
`eas-update-insights`, `eas-workflows`) + 20 skills Expo SDK (`expo-overview` = point d'entrée,
`expo-router`, `expo-native-ui`, `expo-design-system`, `expo-animation`, `expo-tailwind-setup`,
`expo-ui`, `expo-data-fetching`, `expo-examples`, `expo-upgrade`, `expo-project-structure`,
`expo-dev-client`, `expo-dom`, `expo-web-to-native`, `expo-module`, `expo-brownfield`,
`expo-app-clip`, `expo-skill-feedback`, `expo-skill-eval`, `expo-migrate-module`).
Règle : charger `expo-overview` en PREMIER pour toute tâche Expo/EAS (il route vers le bon skill).
Source : https://docs.expo.dev/skills/

## Serveur MCP Expo
Statut : ✅ configuré dans opencode.json (`https://mcp.expo.dev/mcp`, type remote, auth OAuth).
Rôle : docs Expo live, versions SDK, builds EAS, workflows, TestFlight. Redémarrer opencode pour l'activer.

## Librairies stack 2026 (ADR-004) — dans template-app/
- **Zustand + MMKV** : état app + persistance clé-valeur (react-native-mmkv, 30x + rapide qu'AsyncStorage).
- **TanStack Query** : état serveur (premier appel HTTP).
- **react-hook-form + zod** : formulaires validés typés.
- **FlashList** (@shopify/flash-list) : listes longues/dynamiques (jamais FlatList).
- **Reanimated + Gesture Handler + worklets** : animations thread UI + calculs lourds déportés.
- **Drizzle ORM + expo-sqlite** (optionnel) : données structurées, drizzle-kit (generate/studio/migrate).
- **Clerk** : auth si besoin (clés CLERK_*).
- **CodeRabbit** : review de code IA sur les PR GitHub (qualité en solo).
Coût : tout gratuit/open source (Clerk/PostHog/Sentry/RevenueCat gratuits sous seuils).

## Librairies jeux mobiles (ADR-007, skill `jeux-mobiles`)
Statut : ✅ prêt (npm) — installables via `npx expo install`, jamais dans le template de base.
- **@shopify/react-native-skia** : rendu GPU 2D (Metal/Vulkan via JSI) — canvas, sprites, effets. Niveau 2.
- **matter-js** : moteur physique 2D (gravité, collisions) — Matter simule, Skia rend, Reanimated orchestre. Niveau 3.
- **react-native-filament** : rendu 3D PBR natif (C++) — modèles .glb, physique Bullet incluse. Dépend : react-native-worklets-core.
- **expo-audio** : sons/musique (feedback + ambiance de jeu).
- **react-native-svg** : rendu SVG vectoriel (Recraft → UI) ; alternative légère à Skia.
Interdit : react-native-game-engine (dormant), Phaser WebView, Unity (hors factory).
Équipement d'une app-jeu : voir `t`template-app/docs/GAME-ADDONS.md`.

## Spec Kit — Spec-Driven Development (ADR-008)
Statut : ✅ installé 2026-09-01 (CLI via uv tool install, intégration opencode.
Rôle : aucun code de feature sans spec → plan → tasks validés (gates G3.5-G3.7, règle 10 AGENTS.md).
CLI : `specify` (dans `~\.local\bin\specify.exe` — uv installé via winget astral-sh.uv.
Commandes `/speckit.*` (dans `.opencode/commands/`) : constitution (une fois par projet, depuis AGENTS.md), specify (spec depuis PRD + rapport concurrentiel,, clarify (questions de désambiguïsation,, plan (architecture technique par l'agent architecte,, tasks (découpe des tâches,, analyze (cohérence spec/plan/tasks,, implement (une tâche par session,, converge (état du codebase → tasks restantes,, checklist, taskstoissues..
Structure : `.specify/` (config + templates + scripts ps + workflow) ; specs dans `specs/` à la racine.

## OpenSpec（complément de Spec Kit — ADR-013）
Statut ：✅ installé 2026-09-03（CLI global `openspec` v1.12.0, via `npm install -g @fission-ai/openspec`；support natif OpenCode）。Node ≥  ẟ20.19.0 requis（présent： v24.19.0）。
Rôle ：deltas post-v1 — toute évolution d'une app déjà publiée（feature, fix majeur）passe par son cycle`/opsx: explore → propose → apply → verify → archive`. Les specs deviennent vivantes（`openspec/specs/` mis à jour + `openspec/changes/` archivés）au lieu de s'empiler。
Commandes utiles ：`openspec --version`（PATH）, `openspec init`（dans une app）, `openspec update`（MAJ CLI + skills projet）。
Règle ：Spec Kit = CRÉATION（greenfield, gates G3.5-G3.7 inchangés）；OpenSpec = ÉVOLUTION post-publication。À la création d'une app（cycle FORGE）：après le clone du template, `openspec init` DANS `apps/<app>/`（sélectionner OpenCode, supporté nativement）→ l'app a donc `.specify/`（création）ET `openspec/`（évolutions。
Référence ：https://openspec.dev
Commandes utiles : `specify check` (outils), `specify integration list` (intégrations), `specify workflow` (workflows).
Référence : https://github.com/github/spec-kit

## Maestro （E2E）
Statut ：présent dans template-app/（stack 2026 ：Jest+Maestro；`e2e/smoke.yml`）。CLI ：`maestro`（local, iOS/Android）。Cloud ：Maestro Cloud via EAS Workflows（E2E en CI）。Coût ：gratuit（usage limité）。Rôle ：exécuter les 5-8 flux critiques par app（onboarding, action cœur, paywall, navigation）— jamais plus（coût de maintenance）。Agent ：	`testeur-qa`。



## git worktree（parallélisme de code）
Statut ：✅ natif git。Rôle ：parallélisme encadré——chaque agent travaille dans `git worktree add ../<app>-<feature>`（base = snapshot figé de main）, merge SÉQUENTIEL（un PR à la fois, vérification après chaque merge）。Fichiers chauds（router, app.json/app.config, theme, package.json, stores partagés）jamais partagés entre agents（règle du fichier unique, skill `workflow-agents`）。



## Agents revue — QA et vision（ADR-009）
- **analyste-visuel**（Phase 2b）：screenshots concurrents → inventaire UI, wireflow, architecture de l'information（`CARTE-VISUELLE.md`）, au service de DÉCORTIQUE。

- **testeur-qa**（Phase 5bis）：exécute les flux Maestro, vérifie les critères d'acceptation de  `tasks.md`, chasse les bugs avec preuves（captures）→ `brain/apps/<app>/tests/AAAA-MM-JJ-qa.md` + `PLAN-CORRECTIFS.md`。Couche "comportement"（CodeRabbit=code, critique=UX/stratégie）。Boucle QA plafonnée à 3 rounds（règle 11 AGENTS.md）；retour utilisateur prioritaire（ `template-app/docs/RETOUR-UTILISATEUR.md`）。


## OpenDesign（MCP/skill design — ADR-011）
Statut ：✅ installé 2026-09-01（desktop app v0.21.1, Windows x64, open source Apache-2.0）。BYOK：utilise nos modèles, aucune clé supplémentaire。Rôle ：moteur de design par agents——140+ design systems de référence（Apple, Linear, brutalist, editorial...）, skills composables, et DESIGN.md（contrat de marque versionné）; génère les artefacts web（landing, decks, prototypes）。Intégration OpenCode ：MCP configuré dans `~/.config/opencode/opencode.jsonc`（serveur `open-design`, 22 outils, daemon local sur port dynamique + pipe sidecar stable）。CLI ：`od`（wrapper dans `%LOCALAPPDATA%\Programs\Open Design\bin\od.cmd`）。Vérifié 2026-09-01 ：daemon répond（liste des design systems OK）, handshake MCP OK。Skill ：`pipeline-design`。

## Refero Styles（références de design）
Statut ：⚠️ service web（styles.refero.design）— à explorer via Playwright（étape 2 du skill pipeline-design）。Chaque référence fournit couleurs, type, spacing, composants ET un DESIGN.md prêt pour agents。Rôle ：élargir les références au-delà des concurrents de la niche（mood, couleur, typo）＋ flows complets de vrais produits。Skill ：`pipeline-design`。

## react-native-reusables（base composants — ADR-011）
Statut ：✅ dans la stack（copy-paste, source possédée, compatible NativeWind）。Rôle ：base composants UI des apps（composants par copie, on possède la source——standard de l'ère agentique）。HeroUI RN acceptable si composant spécifique manquant。Skills ：`architecture-expo`, `pipeline-design`。

## Modèles design——GLM-5.3-Flash et HY4-preview（voir config/modeles.md）
Statut ：✅ référencés dans `config/modeles.md`（registre des modèles, ADR-011）。GLM-5.3-Flash（""Ox Alpha""）= défaut BULK + éco VISION；HY4-preview = candidat CERVEAU à tester。


## Conversion store（A/B natif + benchmarks — ADR-012）
- **Product Page Optimization**（iOS natif）：A/B sur icône/screenshots/preview via App
  Store Connect, jusqu'à 3 traitements, trafic réel, 1 variable à la fois, min 7 jours。
- **Store Listing Experiments**（Play natif）：même discipline sur Google Play。
- **Benchmarks conversion 2026**（skill store-conversion）：CVR médian indie iOS 31,2 %,
  top quartile 42,8 %（notre barre）; 60-70 % des décisions d'install se jouent sur les
  screenshots（3 premiers frames =  ẟ80-90 % de l'impact）；headline optimal 3-7 mots
  （chaque 5 mots en plus = -12 % conversion）；captions +23 %；localisation +30-40 %；
  screenshots pro vs brut +76 %（+91 % avec IA）。
## EAS (build/CI/CD)
Statut : ✅ `eas-cli` installé globalement (eas --version OK). Clé `EXPO_TOKEN` remplie + activée (2026-09-01, eas whoami OK).
Rôle : builds cloud iOS/Android, certificats Apple + keystores gérés automatiquement, soumission
stores (`eas submit`), mises à jour OTA (`eas update`), CI via EAS Workflows (.eas/workflows/).
Coût : 15 builds iOS + 15 Android/mois gratuits, puis ~2-4 $/build iOS à l'usage.
Skills : `deploiement-stores`.

## Flutter SDK (abandonné)
Statut : ❌ plus nécessaire — abandonné au profit de React Native + Expo (ADR-003, migration 2026-08-31).
Rien n'était installé ; ne PAS réinstaller. Skills associés supprimés/renommés (`architecture-expo`, `dev-expo`).

## Fastlane (metadata en appoint)
Statut : ⚠️ optionnel — autorisé en appoint pour l'upload de metadata/screenshots stores
(deliver/supply), sous réserve d'avoir Ruby. Les builds passent par EAS (pas fastlane).
Coût : gratuit (open source). Skills : `deploiement-stores`.

## fal.ai (agrégateur images — Recraft, Ideogram, Nano Banana…)
Statut : 🔑 clé manquante (`FAL_KEY`). UNE clé = plusieurs modèles, facturation à l'image. Obtenir : https://fal.ai.
Skills : `visuels-marketing`, `designer`.

## kie.ai (agrégateur alternatif, optionnel)
Statut : 🔑 clé manquante (`KIE_API_KEY`, optionnel). Obtenir : https://kie.ai.
Skills : `visuels-marketing`.

## Google Images
Statut : ✅ via GOOGLE_API_KEY présente (User). Utiliser l'API Custom Search JSON (bien qu coût : quota 100 j/r gratuits puis facturation). À confirmer avant usage.
Skills : `scraping-concurrents`, `recherche-marche`.

## ElevenLabs (voix off IA)
Statut : 🔑 clé manquante (`ELEVENLABS_API_KEY`, optionnel). Obtenir : https://elevenlabs.io.
Skills : `video-remotion`.

## Remotion (vidéos marketing)
Statut : ⚠️ pas encore installé. Node requis (présent). `npm install remotion` à la phase marketing.
Coût : gratuit (open source) ; rendu sur votre machine. Skills : `video-remotion`.

## Supabase (backend)
Statut : 🔑 clé manquante (`SUPABASE_URL`, `SUPABASE_ANON_KEY`). Par app, phase backend. Obtenir : https://supabase.com.
Coût : gratuit sous quotas. Skills : `dev-expo`.

## RevenueCat (monétisation abonnement)
Statut : 🔑 clé manquante (`REVENUECAT_API_KEY`). Gratuit sous seuil de revenus. Skills : `deploiement-stores`, `product-manager`.

## PostHog (analytics produit)
Statut : ⚠️ non configuré (pas de clé dans api-keys.env). À ajouter si besoin analytics.
Coût : gratuit sous seuil. Skills : `architecture-expo`.
Setup par app (automatique) :
- `npx -y @posthog/wizard@latest` : wizard IA qui scanne le codebase, propose un plan
  d'événements, installe et configure tout. À lancer APRÈS les premières features.
- Accepter le serveur MCP PostHog proposé en fin de wizard : les agents interrogent les
  analytics en langage naturel ("quel écran a le plus de drop-off ?") et proposent des
  correctifs — boucle post-lancement.
- posthog.identify après chaque sign-in ; posthog.reset() APRÈS signOut (jamais avant).
- Événements MVP obligatoires : app opened, onboarding complété, action cœur, paywall vu,
  paywall converti. Dashboards via PostHog AI.

## Astro / Cloudflare (page store / landing)
Statut : ⚠️ non configuré. Astro (gratuit) + Cloudflare Pages (gratuit). Pour les landing pages marketing. Skills : `visuels-marketing`, `marketeur`.

## Appfigures
Statut : 🔑 clé présente (User : APPFIGURES_* présents) MAIS le plan Free ne donne accès qu'à `/` (403/404 sur apps non possédées sans add-on Public Data). → Utiliser les scrapers gratuits à la place. Réévaluer si add-on activé.
Coût : plan gratuit + add-on payant.
Skills : `recherche-marche`, `analyste-concurrents`.

### ⚡ REVERSE KEYWORD MINING Appfigures (méthode validée 2026-08-30)
> Exploite l'API interne du site Appfigures (session navigateur) pour extraire les organic
> keywords de n'importe quelle app, avec volume + concurrence. Méthode complète : règle 16 AGENTS.md.
- API : `https://appfigures.com/_start/api/aso/products-snapshot/keywords?countries=US&products={pid}&sort=-popularity&count=250&page={n}&device=handheld&group_by=keyword%2Cproduct`
  → retourne par mot : `keyword_term, popularity, competitiveness, num_apps_in_keyword, position, importance`.
- Trouver le pid iOS : `https://appfigures.com/_start/api/unified-apps/search?q={app}&count=5`
  → le bon pid = `unified_app_intelligence_metadata_minimal.member_product_ids[0]` QUAND
  `storefronts` contient `apple:ios`. Un mauvais pid → 400.
- Scripts Node (session via cookies Appfigures) : `tools/scrapers/_mine_*.js`.
  Exemple : `_mine_confirmed.js`, `_mine_rest.js`. Sortie JSON par cluster dans `mots-cles/_brut/`.
- Cookies de session (à rafraîchir si expiration) : `_af_session`, `_af_user_token`,
  `_af_session_verifier`, `KSERVERID` (extraits du navigateur connecté).
- ⚠️ Ne pas écraser : chaque script vérifie si le JSON cible existe avant de miner (reprise).

## Clés LLM (génération)
- GOOGLE_API_KEY : ✅ présente (User)
- OPENROUTER_API_KEY : ✅ présente (User)
- ANTHROPIC_API_KEY : 🔑 absente
Skills : selon agent.

## Récapitulatif des clés manquantes à obtenir
EXPO_TOKEN (expo.dev — Access Tokens) · GOOGLE_PLAY_SERVICE_ACCOUNT_JSON · APP_STORE_CONNECT_* ·
REVENUECAT_API_KEY · SUPABASE_URL/ANON · FAL_KEY (fal.ai) · KIE_API_KEY (optionnel) ·
ELEVENLABS_API_KEY (optionnel) · ANTHROPIC_API_KEY.

## Manuels à faire
- Remplir `EXPO_TOKEN` dans `config/api-keys.env` (https://expo.dev → Settings → Access Tokens).
- Installer Remotion en phase marketing.