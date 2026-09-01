# REPRISE SESSION — à lire à CHAQUE début de session

> Mémoire de travail de la factory. Dernière MAJ : 2026-09-01 (pipeline v2 — ADR-009.
> Bootstrap OBLIGATOIRE ：① AGENTS.md ② SOMMAIRE.md ③ pipeline/etat.md — puis skill+fichiers de l'étape concernée.



## État global
- Framework ：**React Native + Expo SDK 57**（ADR-003）. Flutter ABANDONNÉ（ne jamais proposer。
- **Template golden `template-app/`** validé（ADR-005）：toute nouvelle app = `cp -r template-app apps/<nom>`,
  puis renommer（package.json name, app.json name/slug/scheme）, `npm install`, `npx expo start`.
- Stack ：NativeWind, Zustand+MMKV, TanStack Query, RHF+zod, FlashList, Reanimated, Drizzle（opt.）, Jest+Maestro。

- **SPEC-DRIVEN（ADR-008, règle 19）** ：GitHub Spec Kit installé（intégration opencode, `.specify/` + 10 commandes `/speckkit.*`）。Aucun code sans spec/plan/tasks validés aux gates G3.5-G3.7。
- **Structure 2 étages（ADR-010）** ：USINE（racine）＝ partagé；APP（apps/<app>/）＝ spécifique；pont＝ `brain/apps/<app>/`。Index léger SOMMAIRE.md + vocabulaire COMMANDES.md + bootstrap 3 fichiers。
- **Pipeline v2（ADR-009）** ：analyste-visuel（screenshots → wireflow/IA）＋ testeur-qa（Maestro, critères, preuves par capture）；3 couches de revue distinctes（CodeRabbit=code, testeur-qa=comportement, critique=UX/stratégie＋ avocat du diable pré-code）；vérification étagée（unitaire→PR→5-8 flux Maestro→gauntlet）；parallélisme encadré（worktrees, fichier unique, merge séquentiel）；boucle QA plafonnée à 3 rounds； retour utilisateur prioritaire via `template-app/docs/RETOUR-UTILISATEUR.md`。
- **Capacité jeux mobiles（ADR-007）** ：skill `jeux-mobiles`（2D Skia/Matter + 3D filament。
- Skills clés factory ：`architecture-expo`, `performance-expo`, `workflow-agents`, `revue-code`,
  `gauntlet-loop`, `deploiement-stores`, `paywall-monetisation`, `icones-app`, `animations-lottie`,
  `reverse-engineering-concurrent`, `post-lancement`。＋26 skills Expo officiels + MCP Expo。
- Workflow（règle 18）：briefs en 4 parties（workflow-agents, anti-context-rot）+ revue CodeRabbit avant merge（revue-code。



## Règles d'or
- DATA-FIRST ：toute reco s'appuie sur des données scrapées（pas d'intuition）。
- Lire `brain/`（ciblé）avant toute tâche ；écrire résultats dans `brain/` après。
- Jamais de gate franchi sans validation explicite de l'utilisateur。

- Jamais de suppression de fichier de données sans validation + .bak。
- Pas de clé API en dur ：toujours `{env:NOM_CLE}`。Langue ：français avec l'utilisateur ；code en anglais。


- **Prochaine étape produit** ：choisir 1-2 sous-niches（gaps documentés）→ PRD（G3）。Voir `brain/REPRISE_RECHERCHE.md` pour l'état exact de la recherche。



## Commandes utilisateur（détail COMMANDES.md, exemples GUIDES-UTILISATEUR.md）
`RADAR` · `SCAN <marché>` · `DÉCORTIQUE <app concurrente>` · `FORGE <nom-app>` ·
`STYLE <nom-app>` · `BÂTIT <nom-app>` · `GAUNTLET <surface>` · `EMBALLAGE <nom-app>` ·
`LANCE <nom-app>` · `PROMOUVOIS <nom-app>` · `PILOTE <nom-app>`


## Setup terminé（2026-09-01）
- Compte Expo ：francoiscoiscois（francoisneko@gmail.com）— 2e compte"francoiscoiscoiss-team" présent mais non utilisé。
- MCP Expo connecté（opencode mcp list → expo connected）。EXPO_TOKEN actif（eas whoami OK。
- ⚠️ Toujours fermer/rouvrir le terminal après modif de config/api-keys.env。

- `uv` + `specify` installés（binaires dans `~\.local\bin\`）pour Spec Kit；`opencode mcp auth expo` déjà fait。



## Prochaines actions manuelles utilisateur（quand besoin）
1. CodeRabbit ：**REPORTÉ**（essai gratuit 14 j puis payant）— pas urgent, à activer le moment venu si besoin。
2.（Plus tard） Clés services quand une app en a besoin ：SENTRY_*, CLERK_*, REVENUECAT_*, POSTHOG, STREAM_*。