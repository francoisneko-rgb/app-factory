# 75 CHALLENGE — État du projet (fichier de reprise, unique)

> Dernière mise à jour : 2026-09-29. Toute reprise de session commence ici.
> ✅ Design validé (gate G4-a) + ✅ brainstorming conclu + ✅ config modèles corrigée.
> ⚠️ 2026-09-29 (fin) : config globale opencode réparée — kimi-k3 = `opencode-go/kimi-k3` (via OpenCode Go),
> sonnet-quality = `anthropic/claude-sonnet-4-6` (les anciens IDs étaient invalides et
> bloquaient le lancement du PRD). Reste à corriger au prochain démarrage : qwen-coder et
> qwen-max pointent encore vers des IDs introuvables. Ne PAS re-vérifier les modèles :
> lancer Kimi K3 directement.
> **PROCHAINE ACTION IMMÉDIATE : relancer l'analyse concurrentielle profonde + le cahier
> des charges (PRD, gate G3) avec le sous-agent Kimi K3** (le PRD rédigé au modèle éco est
> À REMPLACER — ne pas l'utiliser).
> ⚠️ Structure : le PRODUIT vit dans `apps/<app>/`（ETAT, design, PRD, spec…）；
> `brain/apps/<app>/` = recherche + marketing uniquement.

## 1. LE PROJET
- **Nom de travail : 75 Challenge** (« Nami » = faute de frappe utilisateur, jamais réutilisé).
- **Niche : tracker de challenges 75 jours** (75 Hard / Soft / Medium, personnalisable).
- Choix validé par l'utilisateur le 2026-09-26 (arbitrage complet : `brain/marche/scoring/CONSOLIDE_SHORTLIST_ARGENT.md` §A-F).
- Pourquoi : leader officiel raté (sentiment 0%), 3 concurrents prouvent $65-120K/mois, aucun géant,
  stack la plus simple (100% code, zéro vidéo, zéro API), vague de demande en JANVIER (sortir avant).
- Concurrents analysés (dossiers `references/challenges-75-jours/`) :
  - **BeHard** ($65K/m iOS, structure de référence, paywall AGRESSIF précoce — Android 1,45★)
  - **Her 75** ($110K/m, social féminin, esthétique, paywall tardif)
  - **75 Hard officielle** ($15K/m, marque ratée : compte forcé + boutique + Tracker misérable → anti-patterns)
  - **75 Days Challenge "Abeni"** (essai gratuit, 7,5/10: meilleur funnel de la niche ; paywall en 3 couches ;
    "sans compte, 100% local" ; prototype: quiz psycho + co-décision des 5 règles ; 100% masculin solitaire)
  - **Challenge Habits** (5/10: moteur générique 9×3 intensités = 25/50/75j, coquille vide → à copier pour le MOTEUR)
- Revenus (est. Appfigures juillet 2026) + détails : voir `analyse-globale.md` + `CONSOLIDE_SHORTLIST_ARGENT.md`.

## 2. DÉCISIONS UTILISATEUR (validées au brainstorm, 2026-09-26 + fin 2026-09-29)
1. **Monétisation : achat unique à PRIX D'APPEL $4.99** (app de test, décision 2026-09-29 —
   remplace le $19.99). Un seul achat à vie. Abonnement écarté en v1. Croix toujours
   visible, jamais de piège.
2. **Contrat signé au doigt** : OUI (confirmé facile techniquement — signature canvas).
3. **AUCUNE fonction sociale en v1**. Juste un bouton "partager ma progression" (export image).
4. **Nom final = « 75 Challenge »** (surfe sur le mot-clé « 75 », décision 2026-09-29).
5. **Audience : unisexe** (hommes + femmes) — thème éditorial pastel non genré.
6. **Style** : design choisi cible-75soft-her75-v2 → thème + maquette VALIDÉS (gate G4-a ✅).
7. **Références élargies acceptées** : habits génériques (lecture, diète, méditation...) = à offrir en
   presets d'ajout MANUEL (pas le produit central). Cœur = les 5 règles 75 + custom tasks.

## 3. LE FONDS VISIBLE (ce qu'on copie/améliore — synthèse des cartes visuelles)
- Squelette commun : accroche → personnalisation → choix challenge → **contrat/engagement** →
  confirmation → paywall → dashboard jour 1 → boucle quotidienne (rappel → coches → photo).
- **Armes à reprendre** : contrat signé au doigt (BeHard), preuve sociale chiffrée (Her 75 :
  "87% qui finissent avaient une partenaire" style), jauge d'eau animée + compte à rebours du jour
  (Abeni), moteur Easy/Medium/Hard→25/50/75j doses adaptées (Challenge Habits), paywall en 3 couches
  PHASES (Abeni) au lieu du mur précoce BeHard, "1ère tentative" badge + écran archivage.
- **Anti-patterns** (officielle) : compte forcé, boutique intégrée, 7 cases fixes, eau=1 case,
  pas de widget, pas de progression.
- Détails complets : `references/challenges-75-jours/CARTE-VISUELLE-*.md` (5 fichiers) + `MAJ-STRUCTURE-COMMUNE.md`.

## 4. LOGICIELS / MATERIEL / RÈGLES SESSION
- **Utilisateur = designer EXIGEANT** (grown in learnings.md 2026-09-26) : jamais de design "premier
  jet" ; collecter des vraies références pro AVANT ;ymology composition complète = échec.
- **Utilisateur n'a PAS d'iPhone** (Android). Captures via son téléphone. Tests iOS futurs = simulateur
  cloud EAS (payant) — pas besoin d'iPhone physique.
- **Navigateur intégré (Playwright) planté** depuis le crash Drive 16h22 — ne pas relancer sans
  redémarrage de session OpenCode. Contournement : l'utilisateur télécharge à la main → zip dans
  `C:\Users\ACER\Downloads\` → `Expand-Archive` local par l'agent. (note complète dans brain/outils.md)
- **Modeles** (config/modeles.md) : plan/review = Kimi K3 · code = DeepSeek V4.1 Flash · bulk = GLM
  Flash. Session par défaut déjà = deepseek-flash dans opencode.jsonc. Utilisateur soucieux du coût
  tokens : travailler léger, sous-agents dés le départ, jamais de boucles sans écrit.
- **Regs passation Drive** : dossier partagé `Opencode` (id 1yIPb_VpRnEcUq6b8SH9QYSJJMgQucAgG) :
  l'utilisateur y dépose des captures, l'agent les télécharge (zip UI OK en session valide) puis les
  vide (corbeille).

## 5. REFErences captures (tout est en local, rien à refaire)
- `references/challenges-75-jours/screenshots-utils/` : 63 captures (8 BeHard, 22 officielle, 32 Her75, 1 store)
- `references/challenges-75-jours/screenshots-utils/v2-apps-gratuites/` : 60 captures (23 Challenge Habits, 35 75-gratuite, 2 système)
- Versions réduites : `C:\Users\ACER\AppData\Local\Temp\opencode\v2-small\` (60 copies 800px, pour lectures IA)

## 6. Design refero (À relire, utilisateur est un designer) 
- **REFERO = LA source de design à charger** (dec'd 2026-09-26) : catalogue 142k écrans réels + styles
  curatés + parcours, avec métadonnées UX/UI. Site : refero.design/apps/search (iOS apps).
- **PAS d'abonnement Pro** (décision utilisateur) → pas d'accès MCP/API direct (403 testé). MCP déjà
  branché dans opencode.jsonc (remote, inerte sans sub) — reactiver plus tard si déc dechoice.
- **Voie retenue** : l'utilisateur surfe Refero dans son Chrome (gratuit en consultation) → il met de côté
  10-20 écrans qu'il aime → dépose dans le Drive → l'agent analyse (couleurs actives, typo, mise en page,
  composants) → DESIGN.md niveau "mon monstre réel" → maquette v2 → validation → PRD.
- OpenDesign local reste disponible (et le skill pipeline-design ; ADR + étapes détaillées SKILL.md).
- Mockups v1 : `apps/75challenge/design/STYLE-EXPLORATION-75challenge.html` (à garder comme
  document du processus, user a validé de "Interesting" mais pas le style).

## 7. PROCHAINES ETAPES (ordre strict)
1. [x] Design choisi + thème + maquette → `apps/75challenge/design/` (validés G4-a).
2. [x] Brainstorm conclu → `apps/75challenge/BRAINSTORM.md`.
3. [x] Config modèles corrigée : agents via OpenCode (règle 15 AGENTS.md + config/modeles.md).
4. [ ] **Relancer Kimi K3 : analyse concurrentielle profonde + PRD (G3)** → remplace PRD.md.
5. [ ] Valider PRD (G3) → spec (G3.5) → plan (G3.6) → tasks (G3.7) → code (template-app + FORGE).
6. [ ] Deadline de lancement visé : avant JANVIER (pic de demande = résolutions du nouvel an).

## 8. QUESTIONS OUVERTES (tranchées au brainstorm fin 2026-09-29)
- Prix : **$4.99 achat unique** (test). Abonnement écarté v1.
- Multi-listing : **1 app** (3 intensités + perso dedans).
- Nom : **75 Challenge**.
- Audience : unisexe.
