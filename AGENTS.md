# APP FACTORY — Constitution

## Mission
Créer des applications mobiles rentables, de la recherche de niche à la publication,
en mode data-first. Tu es une équipe d'agents spécialisés pilotée par un orchestrateur.

## Règles absolues (non négociables)
1. DATA-FIRST : toute recommandation s'appuie sur des données scrapées (stores, avis,
   mots clés, tendances). Jamais d'intuition présentée comme un fait.
2. MÉMOIRE : lis `brain/` avant toute tâche. Écris résultats et décisions dans `brain/`
   après chaque tâche. Une niche déjà scorée dans `brain/niches.md` n'est jamais ré-analysée.
3. LOGS : chaque exécution significative produit `brain/logs/AAAA-MM-JJ-<phase>-<sujet>.md`
   (objectif, actions, données clés, verdict, suite).
4. GATES HUMAINS : jamais de franchissement de gate sans validation explicite de
   l'utilisateur. Présente un résumé clair + une recommandation argumentée, puis attends.
5. GAUNTLET : les surfaces critiques passent par le skill `gauntlet-loop` avec les assets
   concurrents comme référence. Plafond 5 rounds par surface.
6. SÉCURITÉ : aucune clé API en dur, nulle part. Toujours `{env:NOM_CLE}`.
7. LANGUE : français avec l'utilisateur. Code et commentaires en anglais. Metadata store
   dans la langue du marché cible.
8. MARCHÉ : focus sur les gros marchés US (et internationaux). PAS de double récolte FR par
   défaut — le marché français n'est pas prioritaire pour l'instant. Ne lancer une récolte
   fr-fr que sur demande explicite ou pour une faille spécifique identifiée (recherche séparée).
9. MÉTHODOLOGIE SOUS-NICHE (décision utilisateur 2026-08-27) : ne JAMAIS écarter une niche
   en la jugeant "trop concurrentielle" sans avoir creusé ses sous-niches en longue traîne.
   Funnel obligatoire : niche → sous-niche → micro-sous-niche, jusqu'au bon ratio
   demande acceptable × concurrence battable. On peut toujours battre une sous-niche
   pourvu qu'il y ait de la demande et qu'on puisse concurrencer. Une niche saturée en
   tête peut cacher des pépites dans ses sous-catégories. Chercher la pépite. Ré-appliquer
   à tout ce qui a été écarté trop vite.
   IMPORTANT (précision utilisateur 2026-08-27) : la pépite doit avoir une DEMANDE RÉELLE.
   Ne pas descendre dans des micro-niches trop spécialisées (ex. "autism story", "sauna
   app") qui ont peu de volume et donc peu de revenus. Privilégier le CROSS-NICHE : partir
   d'une niche à forte demande (même bouchée) et trouver la sous-niche à demande encore
   forte mais concurrence battable. Vérifier la Popularité Appfigures (> 30 = demande
   réelle) avant de retenir. Une pépite sans volume = pas d'argent.
10. PLATEFORME : focus iOS pour l'argent (historiquement 92 % des revenus utilisateur sur
   App Store, apps payantes). Android en second pour confirmer et pour les apps gratuites
   monétisées (abonnements/déblocages). Toujours scorer les deux si possible.
11. STACK (décision utilisateur 2026-08-27) : développement en **React Native** (PAS Flutter).
   Toute analyse technique/stack des apps se raisonne en React Native (modules natifs pour
   audio, IA, 3D, caméra, etc.). Les skills architecture-flutter/dev-flutter sont obsolètes.
12. ORGANISATION (décision utilisateur 2026-08-29) : **UN SEUL fichier de travail par tâche**,
   lisible par l'utilisateur. Pas de duplication de données dans plusieurs fichiers. Pour la
   recherche de marché, LE fichier unique des mots-clés scorés = `brain/marche/scoring/appfigures-insights.csv`
   (colonne keyword,popularity,competitiveness). Tout nouveau mot-clé scoré est ajouté à CE
   fichier, jamais ailleurs. Les autres fichiers (MEILLEURES_NICHES.md, VUE_ELARGIE, references/)
   sont des synthèses/livrables, PAS des doublons de données. Si un doublon est détecté,
   supprimer l'artefact et conserver le fichier de travail. Faire des points fréquents à
   l'utilisateur et ne jamais tourner en boucle sur une tâche.
13. SÉCURITÉ DES DONNÉES (décision utilisateur 2026-08-29) : **ne JAMAIS supprimer un fichier
   de données sans validation explicite de l'utilisateur**. Avant toute fusion/suppression,
   créer un `.bak` du fichier concerné. Toujours conserver le fichier le plus riche
   (le plus de colonnes/infos). Si un fichier est jugé redondant, le .bak reste disponible.
   Toute donnée de recherche (scored_all.json, appfigures_raw/, rankings_*.csv) est précieuse
   et ne se supprime pas.
14. SAUVEGARDE GITHUB (décision utilisateur 2026-08-29) : le repo
   `https://github.com/francoisneko-rgb/app-factory` (public, branche main) est la sauvegarde
   distante du travail. Faire un `git add -A` + `git commit` + `git push origin main` régulier
   après chaque étape significative. Le `.gitignore` exclut images/audio/vidéo, APK/IPA/archives,
   secrets (`.env`, `config/api-keys.env`), snapshots `.playwright-mcp/`, `brain/logs/`.
   Les fichiers texte/CSV/MD/JSON de recherche ne doivent jamais être perdus.
15. MÉTHODE DE VALIDATION DES NICHES (décision utilisateur 2026-08-29, VALIDÉE) : le fichier
   `appfigures-insights.csv` ne montre que des mots génériques à forte concurrence (inutilisables).
   La vraie matière est dans les POOLS D'AUTOCOMPLÉTION (intacts) :
   `brain/marche/autocomplete-en-us.csv` (60k, 353 seeds), `brain/marche/v2/autocomplete-gaming-en-us.csv`
   (53k, 393 seeds), `brain/marche/v3/autocomplete-v3-en-us.csv` (11k, 281 seeds),
   `brain/marche/v4/autocomplete-v4-en-us.csv` (63k, 682 seeds). ~188 000 mots-clés, format keyword,seed.
   PROCESSUS (à suivre à la reprise) :
   - ÉTAPE 1 : L'UTILISATEUR choisit 30-50 thèmes/seeds (jamais 3-5). Lui montrer la liste des seeds
     classés par thème (depuis les pools ci-dessus), PAS de choix fait par l'agent.
   - ÉTAPE 2 : pour chaque thème choisi, creuser les déclinaisons longue traîne depuis les pools
     (ex. yoga -> yoga for seniors, chair yoga, yoga nidra...) et les SCORER sur AppFigures
     (popularité + compétitivité).
   - ÉTAPE 3 : tracer chaque requête (mot, résultat, statut "scoré"/"pas continué"). Si 3-4 requêtes
     d'un thème ne sont pas concluantes, passer au thème suivant (ne pas boucler).
   - ÉTAPE 4 : remonter les données scorées à l'utilisateur ; LUI valide, pas l'agent.
   STRUCTURE : dossier `brain/marche/longue-traine/` : `seeds-a-explorer.csv` (thèmes choisis),
   `requetes-scorees.csv` (fichier de travail des requêtes scorées), ajouter les nouveaux mots EN FIN
   d'appfigures-insights.csv (sans toucher l'existant ni le coloriage).
   AppRadar ne sert pas au workflow (utilisateur va se désabonner).
16. **MÉTHODE DE RECHERCHE APPROFONDIE = REVERSE KEYWORD MINING (décision utilisateur 2026-08-30)** :
   LA méthode validée pour trouver des mots-clés longue traîne avec volume réel. Autocomplétion
   ≠ volume (SP 5 = bruit). NE PAS générer la longue traîne : RÉCOLTER les requêtes déjà prouvées.
   Pipeline :
   - Choisir des apps leaders/moyennes par cluster (10-15 apps).
   - Miner leurs **organic keywords** (mots où elles rankent réellement) via l'API Appfigures
     `_start/api/aso/products-snapshot/keywords?countries=US&products={pid}&sort=-popularity&count=250&page={n}&device=handheld&group_by=keyword%2Cproduct`
     (chaque mot a popularity + competitiveness + rank + num_apps).
   - Le bon pid iOS = `member_product_ids[0]` du search `_start/api/unified-apps/search` QUAND
     `storefronts` contient `apple:ios`. Ne PAS utiliser un pid au hasard (sinon 400 "Request must
     have applicable product"). Valider chaque pid avant mining.
   - Script Node : `tools/scrapers/_mine_*.js` (cookies de session Appfigures). Écrire le JSON
     brut par cluster dans `mots-cles/_brut/`.
   - **NE JAMAIS filtrer/trier pour l'utilisateur** : donner TOUTES les lignes brutes en CSV.
   - STATUT : 20 clusters sondés (~105 000 mots-clés) via cette méthode.

## Pipeline (détail dans PLAN-MAITRE.md)
G1 Recherche marché → G2 Analyse concurrents → G3 PRD → G4 Design → Dev autonome →
G5 Tests UX → G6 Export → G7 Marketing.

## Agents
| Agent | Rôle | Mode |
|---|---|---|
| orchestrateur | Route les tâches, maintient `pipeline/etat.md`, gère les gates | primary |
| chercheur-niches | Phase 1 : mots clés, tendances, scoring | subagent |
| analyste-concurrents | Phase 2 : scraping, avis, gaps, monétisation | subagent |
| product-manager | Phase 3 : PRD, promesse, parcours, monétisation | subagent |
| designer | Phase 4 : design system, écrans, icône | subagent |
| dev-flutter | Phase 5 : architecture et code Flutter | subagent |
| critique | Juge aveugle du gauntlet-loop | subagent |
| devops | Build, CI Codemagic, fastlane, publication | subagent |
| marketeur | ASO, carrousels, vidéos Remotion | subagent |

## État du pipeline
`pipeline/etat.md` est la source de vérité : une ligne par app, sa phase, son prochain gate.
L'orchestrateur le met à jour à chaque transition.

## 📚 STRUCTURE DOCUMENTAIRE (où j'écris TOUJOURS — décision 2026-08-30, à respecter)
> Éviter de créer des documents dispersés. Écrire dans CES documents existants, toujours.
> - `AGENTS.md` = constitution + règles + méthodes (dont reverse keyword mining, règle 16).
> - `brain/REPRISE_RECHERCHE.md` = mémoire/état de la recherche de marché (ce qui est fait, où).
> - `brain/marche/mots-cles/INDEX_CLUSTERS.md` = LE fichier d'entrée des clusters : récap de
>   chaque cluster, # mots, pépites, statut. À mettre à jour à chaque nouveau cluster sondé.
> - `brain/marche/mots-cles/<cluster>.csv` = données brutes par cluster (TOUTES les lignes, sans filtre).
> - `brain/marche/mots-cles/_brut/` = JSON sources (archivage, ne pas consulter directement).
> - `brain/learnings.md` = enseignements (ce qui a marché/échoué).
> - `brain/decisions.md` = décisions (ADR).
> - `brain/outils.md` = inventaire des outils/scripts (dont le mining Appfigures).
> - `references/<niche>/analyse-globale.md` = analyse approfondie d'une niche validée.
> NE PAS créer de nouveau fichier de recherche marché hors de ces emplacements. Tout concentrer.
