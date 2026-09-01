# Journal des décisions (format ADR)

## ADR-000 — Exemple
- Date :
- Contexte :
- Décision :
- Alternatives écartées :
- Conséquences :

## ADR-001 — Règle de délégation et reprise
- Date : 2026-08-21
- Contexte : besoins de coûts maîtrisés et de compétences spécialisées selon les phases.
- Décision : l'orchestrateur effectue l'intégralité des tâches courantes et le scraping
  avec le modèle par défaut économique. Planification lourde → déléguer à `kimi-k3`.
  Programmation technique → solliciter `qwen-coder`.
- Alternatives écartées : tout faire en local ; déléguer massivement par défaut.
- Conséquences : les coûts sont contenus (tâches courantes sur le modèle économique),
  la lourdeur de planification et le code technique reposent sur les modèles spécialisés.

## ADR-002 — Méthode de recherche marché finale (2026-08-30)
- Date : 2026-08-30
- Contexte : recherche de marché complète nécessaire avant de choisir une première app.
- Décision : Reverse Keyword Mining (règle 16) pour récolter les mots-clés à volume depuis les
  organic keywords des apps leaders. 60 clusters sondés (~340k mots-clés), ~30 approfondis avec
  revenus/avis/screenshots. Ne JAMAIS filtrer les données pour l'utilisateur (tout en CSV brut).
- Alternatives écartées : autocomplétion seule (= bruit), génération de longue traîne (inexistante
  à volume sur iOS), outils payants (AppTweak/Sensor Tower = inutiles, Appfigures suffit).
- Conséquences : base de données marché complète pour choisir une app ; prochaine étape = choix
  d'1-2 sous-niches par l'utilisateur puis PRD (G3).

## ADR-003 — Framework : React Native + Expo (remplace ADR-001)
- Date : 2026-08-27
- Contexte : réévaluation après recherche approfondie août 2026. ADR-001 (Flutter) est REMPLACÉ.
- Décision : React Native + Expo SDK (TypeScript) pour toutes les apps.
- Raisons :
  1. EAS Build génère et gère automatiquement certificats iOS, provisioning et keystores
     ("Let Expo handle it") — zéro configuration Apple manuelle, aucun Mac requis.
  2. EAS Submit fonctionne sous Windows ; `eas build --platform ios --auto-submit`
     envoie sur TestFlight en une commande.
  3. EAS Update : mises à jour OTA sans review store (paywall, correctifs) — Flutter
     n'a pas d'équivalent officiel.
  4. Expo fournit des Skills officielles pour agents IA + un serveur MCP Expo (docs
     live, logs de build, TestFlight) : l'écosystème le mieux instrumenté pour un
     développement 100 % par agents.
  5. Communauté JS/TS plus vaste = plus de données d'entraînement pour les agents.
  6. Synergie : Remotion (vidéos marketing) est en React — même paradigme partout.
- Compromis acceptés : rendu moins uniforme iOS/Android que Flutter (le gauntlet-loop
  juge des screenshots réels, donc compensé) ; écosystème npm plus fragmenté (limité
  en restant dans les modules Expo SDK curés autant que possible).
- Conséquences : skills réécrits (architecture-expo, deploiement-stores). Codemagic
  n'est plus utilisé.

## ADR-004 — Stack Expo 2026 détaillée (2026-08-31)
- Date : 2026-08-31
- Contexte : choix des librairies précis pour la stack 2026 après validation du framework (ADR-003).
  Références : blog officiel Expo + recommandations communautaires (Grimm/galaxies.dev).
- Décision : stack imposée détaillée dans `.opencode/skills/architecture-expo` et incarnée dans
  le golden template `template-app/` :
  - Navigation Expo Router · Styling NativeWind (alternative Uniwind) · État app Zustand + MMKV
    persist · État serveur TanStack Query · Formulaires react-hook-form + zod · Listes FlashList ·
    Animations Reanimated + Gesture Handler (thread UI) · Données expo-sqlite + Drizzle ORM
    (optionnel) · Auth Clerk · Monétisation RevenueCat · Analytics PostHog · Crashs Sentry ·
    Review de code IA CodeRabbit · Backend : aucun → Expo API Routes → Supabase → InstantDB
    (ordre de complexité).
- Alternatives écartées : Redux (Zustand plus léger), AsyncStorage (MMKV 30x plus rapide),
  FlatList (FlashList), native drivers JS (Reanimated sur thread UI).
- Conséquences : template golden `template-app/` = point de départ obligatoire de toute app
  (clone, jamais de zéro) ; skills `architecture-expo` + `performance-expo` non négociables.
  **Expo Skills officielles installées (26 skills) + serveur MCP Expo configuré.**

## ADR-005 — Template golden `template-app/` (2026-08-31)
- Date : 2026-08-31
- Contexte : rendre la stack ADR-004 reproductible sans effort par app.
- Décision : le template `template-app/` (SDK 57, Expo Router, NativeWind, Zustand+MMKV,
  TanStack Query, RHF+zod, FlashList, Reanimated, Drizzle optionnel, Jest + Maestro, eas.json
  3 profils, services derrière flags .env) est le SEUL point de départ. Créer une app =
  cloner template-app vers apps/<nom>.
- Conséquences : chaque app part de la même base validée (typecheck + tests + bundling OK),
  on ne configure plus jamais un projet de zéro.

## ADR-008 — Spec-Driven Development (Spec Kit) comme colonne vertébrale
- Date ：2026-09-01
- Contexte ：risque documenté du vibe coding non structuré(context rot, code
    inmaintenable, divergences silencieuses). L'utilisateur n'est pas programmeur ：
    l'architecture ne peut pas vivre"dans sa tête" → elle vit dans des fichiers。
- Décision ：GitHub Spec Kit installé au projet；pipeline G3.5 spec → G3.6 plan
    (agent architecte) → G3.7 tasks → implement tâche par tâche ；la spec est la source
    de vérité. Alternatives écartées ：BMAD(duplique nos agents,, Kiro(IDE séparé。
- Conséquences ：gates G3.5-G3.7 ajoutés；agent architecte créé；règles anti-context-rot
    dans workflow-agents；arborescence feature-based obligatoire。

## ADR-007 — Capacité jeux mobiles (2D + 3D simple)
- Date : 2026-09-01
- Contexte : la recherche de niches V2 a identifié des jeux (éducatifs, cartes, mots,
  2D simple) avec ratio demande/concurrence favorable.
- Décision : la factory accepte les jeux 2D et la 3D simple, SANS moteur externe.
  Composition : RN pur + Reanimated + Gesture Handler (niveau 1), + Skia (niveau 2),
  + Matter.js (physique), filament + GLB pour la 3D simple.
- Règle bloquante : catégorie Enfants = pas d'analytics/pubs tiers → modèle payant.
- Exclusions : react-native-game-engine (dormant), Phaser WebView, Unity (hors scope).
- Conséquences : skill `jeux-mobiles` créé (équipement 2 min via docs/GAME-ADDONS.md
  du template) ; les jeux restent soumis aux gates G1-G7 + gauntlet-loop standard.

## ADR-006 — Workflow de développement par agents (2026-08-31)
- Date : 2026-08-31
- Décision : AGENTS.md par app + prompts en 4 parties + revue CodeRabbit obligatoire
  par PR + skills officielles des services (Expo, Clerk, Stream) installées au scope
  projet + PostHog wizard/MCP par app.
- Source : pratiques éprouvées de cours de production 2026 (JSMastery), cohérentes avec
  notre gauntlet-loop (le critique = revue visuelle, CodeRabbit = revue code).
- Note : numéroté ADR-006 car ADR-005 est déjà pris par le template golden.

## ADR-009 — Pipeline v2：vision, QA 3 couches, parallélisme encadré
- Date ：2026-09-01
- Décision ：agents analyste-visuel（screenshots → wireflow/IA）et testeur-qa（Maestro,
  critères d'acceptation, preuves par capture）ajoutés ；3 couches de revue distinctes。
  （CodeRabbit=code, testeur-qa=comportement, critique=UX/stratégie + avocat du diable
  pré-code） ；vérification étagée（unitaire → PR → 5-8 flux Maestro → gauntlet） ；
  parallélisme de code encadré（worktrees, fichier unique, merge séquentiel） ；
  boucle QA plafonnée à 3 rounds ；retour utilisateur via modèle structuré, prioritaire。
- Source ：plan v2 proposé par l'utilisateur, consolidé par recherche des meilleures
  pratiques multi-agents et E2E 2026.

## ADR-010 — Structure multi-apps et efficacité tokens
- Date : 2026-09-01
- Décision : architecture deux étages(usine racine / apps autonomes) ; Spec Kit et
  AGENTS.md par app ; SOMMAIRE.md comme index léger ; bootstrap limité à 3 fichiers ;
  COMMANDES.md comme vocabulaire canonique ; skills reverse-engineering-concurrent et
  post-lancement ajoutés.

- Raison : 5-20 apps prévues ; sans séparation usine/app et sans index, le contexte
  explose(context rot) et les specs se mélangent.

- Conséquences : SOMMAIRE.md + COMMANDES.md créés à la racine ; AGENTS.md resserré
  (10 règles + agents + bootstrap, ≤120 lignes) ; arborescence et cycle FORGE documentés
  dans PLAN-MAITRE.md ; skills nouveaux référencés dans COMMANDES.md.
