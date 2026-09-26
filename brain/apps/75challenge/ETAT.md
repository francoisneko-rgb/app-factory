# 75 CHALLENGE — État du projet (fichier de reprise, unique)

> Dernière mise à jour : 2026-09-26 au soir. Toute reprise de session commence ici.
> Niche validée + analyse concurrentielle complète + design exploré (v1 rejetée par l'utilisateur
> designer → v2 via références réelles pending). Prochaine étape : références pro (Refero via
> l'utilisateur) → DESIGN.md pro → fin du brainstorm → PRD.

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

## 2. DÉCISIONS UTILISATEUR (validées au brainstorm, 2026-09-26)
1. **Monétisation : achat unique ~$19.99 + abonnement annuel transparent** (~$29.99/an). Croix toujours
   visible, jamais de piège, annulation 1 tap.
2. **Contrat signé au doigt** : OUI (confirmé facile techniquement — signature canvas).
3. **AUCUNE fonction sociale en v1**. Juste un bouton "partager ma progression" (export image).
4. **Le nom final DE contenir "75"** (donnée mots-clés : "30/60/90" = demande 5-10x plus faible).
5. **Style** : la piste C (crème/vert foncé/or, éditorial) — PREFERÉE à la volée ; A (orange clair)
   rejetée "cheap/IA", B (sombre) rejetée. MAIS → v1 des mockups rejetée globalement (trop génériques).
6. **Références élargies acceptées** : habits génériques (lecture, diète, méditation...) = à offrir en
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
- Mockups v1 : `brain/apps/75challenge/design/STYLE-EXPLORATION-75challenge.html` (à garder comme
  document du processus, user a validé de "Interesting" mais pas le style).

## 7. PROCHAINES ETAPES (ordre strict)
1. [ ] Utilisateur : dépose références Refero dans le Drive (10-20 écrans aimés).
2. [ ] Agent : analyse des références → `brain/apps/75challenge/design/DESIGN.md` (palette, typo,
       composants,onboarding/dashboard/paywall) — niveau designer.
3. [ ] Maquette v2 (HTML réel haute fidélité, clair+sombre) → validation utilisateur (gate G4-a).
4. [ ] Fin du brainstorm (positionnement final + features v1 + nom final avec "75" + 5 candidates de nom).
5. [ ] PRD (G3) → spec → plan → tasks → code (template-app + FORGE).
6. [ ] Deadlineون de lancement visé : avant JANVIER (pic de demande = résolutions du nouvel an).

## 8. QUESTIONS OUVERTES (à trancher al brainstorm fin)
- Prix exacts (Abeni non capturé — hypothèse $12.99/m) ; ma reco reste 19,99 unique + 29,99/an.
- Multi-listing (1 app 3 intensités — reco) vs 2 apps.
- Presets physique (2e déconvenue) : les 5 règles深入人心 d'habituels (lecture/diete/eau) sinon
  "presets d'ambiance" (meditation lecture diete) — refined at PRD.
