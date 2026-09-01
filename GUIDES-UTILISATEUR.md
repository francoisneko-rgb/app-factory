# GUIDES-UTILISATEUR — Comment me demander les choses

> Tu n'as rien à savoir de technique. Tu me dis QUOI faire, je m'occupe du COMMENT.
> Ce fichier = la mode d'emploi de nos échanges. Si tu as un doute, ouvre SOMMAIRE.md（la carte）ou COMMANDES.md（le vocabulaire）。



## 1. Les commandes — une seule, en majuscule, + une cible
| Tu écris | Ce que je fais |
|---|---|
| `RADAR` | Je détecte les tendances du moment et je mets à jour `brain/tendances.md` |
| `SCAN <marché ou catégorie>` (ex. `SCAN fitness`) | Je fais une étude de marché sur la cible, je score les niches dans `brain/niches.md`, je te présente les résultats et je te demande quoi garder |
| `DÉCORTIQUE <app concurrente>`(ex. `DÉCORTIQUE Planta`) | Je décortique l'app concurrente（écrans, flux, features, promesse）→ `brain/apps/<candidat>/concurrence/<concurrent>/CARTE.md` |
| `FORGE <nom-app>`(ex. `FORGE mood-tracker`) | Je crée l'app normalisée：clone template, Spec Kit local, AGENTS.md de l'app, dossiers, et je lance les gates G3→G3.7（PRD→spec→plan→tasks）, en te demandant validation à chaque gate |
| `STYLE <nom-app>` | Phase design（G4）：design system, écrans, icône — je te montre et tu valides le style |
| `BÂTIT <nom-app>` | J'implémente le code tâche par tâche（`/speckkit.implement`）, 1 tâche = 1 session；chaque fin de tâche = revue code。 |
| `GAUNTLET <surface>`(ex. `GAUNTLET icône`, `GAUNTLET paywall`) | Je compare notre rendu aux concurrents leaders, j'itère jusqu'à victoire（plafond 5 rounds）et je te dis le verdict |
| `EMBALLAGE <nom-app>` | Je prépare la sortie store（G6-G7）：ASO, screenshots, store listing, landing page——tu valides |
| `LANCE <nom-app>` | Je build via EAS et je soumets aux stores（après ta validation G6） |
| `PROMOUVOIS <nom-app>` | Je crée les assets marketing（carrousels, vidéos Remotion） |
| `PILOTE <nom-app>` | Je surveille l'app après lancement：avis, analytics PostHog, ASO, corrections hebdo |

> ⚠️ Je ne lance JAMAIS une étape sans ta validation explicite. Chaque `FORGE`, `STYLE`, `EMBALLAGE` s'arrête à chaque gate pour te demander ton avis。



## 2. Si tu ne te souviens plus d'une commande
1. Ouvre `SOMMAIRE.md` — la carte complète（où vit quoi, l'état pointer）。
2. Ouvre `COMMANDES.md` — le vocabulaire（toutes les commandes）。
3. Ou simplement écris ta demande en langage naturel（section 3）— je comprends et je fais le pont avec la bonne commande。





## 3. Le format "demande libre" — en langage naturel
Si tu ne veux pas utiliser une commande, écris simplement :**ce que tu veux** + **la cible** + **la limite**.
| Élément | Exemple |
|---|---|
| 1. Ce que tu veux | "Je veux une étude de marché sur les jeux éducatifs pour enfants" |
| 2. La cible | "…en ciblant les apps gratuites à forte demande" |
| 3. La limite | "…et je ne veux rien lancer avant que j'aie validé" |

**Exemple complet**："Je veux une étude de marché sur les jeux éducatifs enfants（SCAN jeux-educatifs-enfant）, cible iOS surtout, et je veux valider avant toute reco。"
→ Je ferai exactement ça ：étude, scoring, puis je m'arrête pour ta validation。


## 4. Ce que tu n'as PAS à faire
- **Écrire du code** —— c'est mon travail。
- **Choisir des mots clés ou des niches** —— je te propose, tu valides。（data-first：mes reco sortent des données scrapées, jamais de mon intuition。）
- **Te souvenir des détails techniques** —— tout est dans les fichiers（AGENTS.md, SOMMAIRE.md, brain/, specs/）。Toi, tu décides le QUOI；moi, je gère le COMMENT。


## 5. Au début de CHAQUE session（si tu veux qu'on reprenne）
Il suffit de dire :
- `"Reprenons"` → je lis `AGENTS.md` + `SOMMAIRE.md` + `pipeline/etat.md`（le bootstrap）et je te dis où on en est et je te propose la prochaine étape。
- ou direct une commande（`SCAN ...`, `FORGE ...`…）→ je l'exécute de bout en bout avec gates。



## 6. Où vit tout（pour ta culture）
| Ce que tu cherches | Où |
|---|---|
| Où on en est（quelle app, quelle phase） | `pipeline/etat.md` |
| La carte complète du projet | `SOMMAIRE.md` |
| Le vocabulaire des commandes | `COMMANDANDES.md` |
| Pourquoi chaque choix technique | `brain/decisions.md` |
| Les enseignements（ce qui a marché/échoué） | `brain/learnings.md` |
| L'état exact de la recherche marché | `brain/REPRISE_RECHERCHE.md` |
| Les données marché brut（mots-clés scorés, clusters） | `brain/marche/` |
| Les specs/plans/tasks d'une app | `apps/<app>/specs/`（Spec Kit local） |

> Tout est sauvegardé sur GitHub（repo `francoisneko-rgb/app-factory`）après chaque étape——même si tu redémarres ou changes de machine, rien n'est perdu。