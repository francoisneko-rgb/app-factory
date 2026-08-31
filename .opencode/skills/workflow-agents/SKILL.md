---
name: workflow-agents
description: Discipline de travail avec les agents — prompts en 4 parties, sessions, AGENTS.md par app.
---
# Workflow agents (méthode "practical vibe coding")

## AGENTS.md par app
Chaque app dans apps/<app>/ a SON propre AGENTS.md à sa racine, généré à la création
depuis le PRD + design system + learnings de la factory. Structure : rôle ("expert
React Native + Expo, code clair, simplicité d'abord") → résumé de l'app (quoi, pour qui)
→ stack (une ligne par librairie) → structure des dossiers → règles de styling (exceptions
connues : className NativeWind ne fonctionne PAS sur SafeAreaView → constants/theme.ts)
→ patterns. Règle d'enrichissement : "solve it once, document it once" — tout problème
qui revient 2 fois est ajouté à l'AGENTS.md de l'app et à brain/learnings.md.

## Structure de prompt en 4 parties (pour TOUT brief d'agent, orchestrateur inclus)
1. RÉFÉRENCE : "Lis AGENTS.md d'abord et suis-le strictement" (les agents ne se
   souviennent pas d'une session à l'autre).
2. UNE SEULE TÂCHE : une feature, un écran, une intégration. Jamais 3 tâches fusionnées —
   si ça casse, impossible de savoir laquelle a causé quoi.
3. CONTRAINTES DE PROTECTION : ce qui existe et ne doit PAS changer ("préserve l'UI
   exacte", "ne touche pas au flux X", "n'expose aucun secret dans l'app", "si ambigu,
   demande avant d'implémenter"). Penser COMPORTEMENT, pas code.
4. RÉFÉRENCE VISUELLE : pour tout élément visuel, joindre l'image/mockup. Une image
   vaut 3 prompts de description.

## Prompts de réparation
Un problème, une correction, une vérification. "Le modal X passe derrière le clavier iOS,
il doit rester au-dessus. Ne change rien d'autre." Ne jamais re-expliquer la feature.

## Hygiène de session
- Nouvelle session par feature. Le contexte périmé d'une session précédente pollue et
  coûte des tokens. Rester dans la même session UNIQUEMENT si directement lié.
- Après chaque feature : vérifier sur device, PUIS commiter (branche dev → PR → review
  CodeRabbit → merge). Jamais 3 features non vérifiées d'affilée.

## Docs à jour et skills de services
- Si le doute existe sur la version d'une librairie : coller la doc actuelle (bouton
  "Copy as Markdown" des docs modernes) APRÈS les instructions, séparée par un diviseur.
- Installer les skills officielles des services utilisés, une fois, au scope projet :
  npx skills add clerk/skills (core + expo patterns + webhooks) quand Clerk est utilisé,
  npx skills add GetStream/agent-skills pour voix/vidéo temps réel. Context7 en fallback.
- RÈGLE LIBRAIRIES : l'agent propose toute nouvelle librairie avec justification et
  attend validation avant d'installer. Aucune installation non sollicitée.