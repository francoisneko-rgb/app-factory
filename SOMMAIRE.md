# SOMMAIRE — Carte du projet App Factory

> L'index léger de toute la factory. Pour toute étape, consulte SOMMAIRE.md puis le fichier de l'étape — jamais tout le projet. (ADR-010)

## Arborescence — les 2 étages

| Étage | Contenu | Où |
|---|---|---|
| **USINE** (racine, partagé, change rarement) | Agents, skills, tools/, brain/ (marché, tendances, décisions, learnings, outils), pipeline/, template-app/, constitution | Racine |
| **APP** (apps/<app>/) | AGENTS.md, spec/plan/tasks (Spec Kit local), docs/decisions.md, design/, code/, store assets/ | apps/<app>/ |
| **Pont** | Recherche + concurrence + marketing de l'app | brain/apps/<app>/ |

Règles de circulation : les learnings remontent de l'app → brain/learnings.md. La factory n'écrit PAS dans l'app (sauf via agents). Zéro contenu app-specific à la racine.

## Étage usine — où vit quoi

| Sujet | Fichier |
|---|---|
| Règles absolues + agents + bootstrap | AGENTS.md |
| Vocabulaire canonique (commandes utilisateur) | COMMANDES.md |
| Comment me demander les choses (mode d'emploi des échanges) | GUIDES-UTILISATEUR.md |
| Pipeline détaillé (gates, multi-apps) | PLAN-MAITRE.md |
| État des apps (source de vérité, 1 ligne/app) | pipeline/etat.md |
| Décisions (ADR-001→010) | brain/decisions.md |
| Outils/scripts + clés + statuts | brain/outils.md |
| Enseignements (ce qui a marché/échoué) | brain/learnings.md |
| Marché : niches scorées, tendances | brain/niches.md, brain/tendances.md |
| Recherche marché approfondie (mémoire/état) | brain/REPRISE_RECHERCHE.md |
| Clusters sondés (~340k mots-clés, CSV bruts) | brain/marche/mots-cles/ (INDEX_CLUSTERS.md) |
| Analyses de niches approfondies | references/<niche>/analyse-globale.md |
| Logs datés (jamais re-lus en entier) | brain/logs/AAAA-MM-JJ-*.md |

## Étage app — cycle de vie (FORGE)

| Création | Commande |
|---|---|
| Niche validée G2 → `FORGE <nom-app>` | `cp -r template-app apps/<nom-app>` + `specify init` DANS l'app (Spec Kit local) + AGENTS.md + brain/apps/<nom-app>/{concurrence,design,store,marketing}/ + ligne dans etat.md + entrée SOMMAIRE |
| Spec → plan → tasks | G3.5 `/speckit.specify/clarify` → G3.6 `/speckit.plan` → G3.7 `/speckit.tasks` |
| Code | `/speckit.implement` (1 tâche =1 session =1 PR revue CodeRabbit) |
| Design (parallèle G3.6) | G4, skill designer + gauntlet |
| Test → Export → Marketing | G5 build device → G6 stores → G7 assets |

## Règles — carte (les 10 synthétiques sont dans AGENTS.md)

| Ancienne règle | Vit désormais dans |
|---|---|
| 1-14 (fondations) | AGENTS.md (10 règles condensées) |
|  ẟ15-16 (autocomplétion, reverse keyword mining) | brain/REPRISE_RECHERCHE.md + brain/outils.md |
|  ẟ17 (état recherche marché) | brain/REPRISE_RECHERCHE.md |
|  ẟ18 (workflow agents) | skill workflow-agents |
|  ẟ19 (Spec-Driven) | AGENTS.md + .specify/ + gates G3.5-3.7 |

## Bootstrap (démarrage de session — OBLIGATOIRE)
1. `AGENTS.md` — règles + agents.
2. `SOMMAIRE.md` — où vit quoi. Ce fichier.
3. `pipeline/etat.md` — où on en est.
Puis, selon la tâche : le skill et les fichiers de l'étape concernée UNIQUEMENT. Interdiction de lire `brain/` en entier. Les specs d'une app ne se lisent que sur CETTE app.



## Glossaire des commandes
`RADAR` · `SCAN` · `DÉCORTIQUE` · `FORGE` · `STYLE` · `BÂTIT` · `TESTE` · `GAUNTLET` ·
`EMBALLAGE` · `LANCE` · `PROMOUVOIS` · `PILOTE` → détail dans COMMANDES.md + exemples dans GUIDES-UTILISATEUR.md.