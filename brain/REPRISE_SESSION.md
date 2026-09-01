# REPRISE SESSION — à lire à CHAQUE début de session

> Mémoire de travail de la factory. Dernière MAJ : 2026-08-31 (fondation Expo terminée).

## État global
- Framework : **React Native + Expo SDK 57** (ADR-003). Flutter ABANDONNÉ (ne jamais proposer).
- **Template golden `template-app/`** validé (ADR-005) : toute nouvelle app = `cp -r template-app apps/<nom>`,
  puis renommer (package.json name, app.json name/slug/scheme), `npm install`, `npx expo start`.
- Stack : NativeWind, Zustand+MMKV, TanStack Query, RHF+zod, FlashList, Reanimated, Drizzle (opt.), Jest+Maestro.
- Skills clés factory : `architecture-expo`, `performance-expo`, `workflow-agents`, `revue-code`,
  `gauntlet-loop`, `deploiement-stores`, `paywall-monetisation`, `icones-app`, `animations-lottie`.
- 26 skills Expo officiels installés (dans `.opencode/skills/`) + MCP Expo `https://mcp.expo.dev/mcp`.
- Workflow (règle 18 AGENTS.md) : briefs en 4 parties (workflow-agents) + revue CodeRabbit avant merge (revue-code).

## Règles d'or
- DATA-FIRST : toute reco s'appuie sur les données scrapées (pas d'intuition).
- Lire `brain/` avant toute tâche ; écrire résultats dans `brain/` après.
- Jamais de gate franchi sans validation explicite de l'utilisateur.
- Jamais de suppression de fichier de données sans validation + .bak.
- Pas de clé API en dur : toujours `{env:NOM_CLE}`.
- Langue : français avec l'utilisateur ; code en anglais.
- Prochaine étape produit : choisir 1-2 sous-niches (gaps documentés règle 17 AGENTS.md) → PRD (G3).

## Où écrire (STRUCTURE DOCUMENTAIRE)
- AGENTS.md = constitution + règles. brain/decisions.md = ADR. brain/learnings.md = enseignements.
- brain/outils.md = outils/scripts. brain/marche/mots-cles/INDEX_CLUSTERS.md = clusters.
- Logs : `brain/logs/AAAA-MM-JJ-<phase>-<sujet>.md`. pipeline/etat.md = état du pipeline.
- Fichier unique mots-clés scorés : `brain/marche/scoring/appfigures-insights.csv`.

## Setup terminé (2026-09-01)
- Compte Expo : francoiscoiscois (francoisneko@gmail.com) — 2e compte "francoiscoiscoiss-team" présent mais non utilisé.
- MCP Expo connecté (opencode mcp list → expo connected).
- EXPO_TOKEN créé + écrit config/api-keys.env + activé via install-api-keys.ps1 (validé eas whoami).
- ⚠️ Toujours fermer/rouvrir le terminal après modif de config/api-keys.env.

## Prochaines actions manuelles utilisateur (avant/après redémarrage)
1. ~~Redémarrer opencode (charger skills Expo + MCP Expo).~~ ✅
2. ~~Login OAuth Expo au premier usage du MCP.~~ ✅
3. ~~Remplir EXPO_TOKEN dans config/api-keys.env.~~ ✅
4. CodeRabbit : **REPORTÉ** (essai gratuit 14 j puis payant) — pas urgent, à activer le moment venu si besoin.
5. (Plus tard) Clés services quand une app en a besoin : SENTRY_*, CLERK_*, REVENUECAT_*, POSTHOG, STREAM_*.

## Prochains commits attendus
- Commit "enrichissement workflow agents" (skills workflow-agents/revue-code + ADR-006 + règle 18) — prêt à pousser.