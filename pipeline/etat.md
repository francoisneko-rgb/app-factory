# État du pipeline — source de vérité

## Setup factory
Statut : ✅ PRÊT COMPLET — 2026-08-31 (fondation Expo + template golden)
- Framework : React Native + Expo SDK 57 (ADR-003) — skills `architecture-expo` + `performance-expo`.
- Template golden `template-app/` validé (ADR-005) : toute app = clone de template-app (jamais de zéro).
- 26 skills Expo officiels + MCP Expo (https://mcp.expo.dev/mcp) dans opencode.json.
- Stack app : NativeWind, Zustand+MMKV, TanStack Query, RHF+zod, FlashList, Reanimated, Drizzle (opt.), Jest+Maestro, eas.json 3 profils.
- Workflow agents (ADR-006) : skill `workflow-agents` (prompts 4 parties) + `revue-code` (CodeRabbit avant merge) — règle 18 AGENTS.md.
- Blocages manuels : `EXPO_TOKEN` à remplir (expo.dev → Access Tokens) · clés génération/back à récupérer (voir brain/outils.md) · CodeRabbit à activer sur GitHub.

| App | Niche | Phase | Prochain gate | Dernière MAJ |
|---|---|---|---|---|
| _(app #1 non nommée)_ | Daily affirmations (proposée) | 1/7 | G1 (validation niche) | 2026-08-21 |
| _(candidat)_ | Body/full-body tracking games | 2/7 → G3 | G3 (validation PRD) | 2026-08-24 |
| _(candidat)_ | Active games kids (outdoors/camp) | 2/7 | backup | 2026-08-24 |
| _(candidat)_ | Fitness programme personnalisé | 2/7 | rejetée G2 | 2026-08-24 |

## File d'attente de niches à explorer (validée par utilisateur au G1)
1. Daily affirmations — Score 7.20/10 — RECOMMANDÉE #1
2. Mood tracker — Score 7.00/10 — backup
3. Gratitude journal — Score 6.55/10 — backup

## Angle(s) validés au balayage 2026-08-24 (G2 terminé)
- **Body/full-body tracking games** → RECOMMANDÉE, en attente gate G3 (PRD) — leaders 1.2-2.8, plaintes fiabilité massives
- Active games kids outdoors/camp → backup (leaders 3.3-4.1, friction headset)
- Fitness programme personnalisé → rejetée G2 (BodBot 4.56 saturé, Well onTarget très mal reçu)

Concurrents phase 2 déjà identifiés (niche #1) :
- com.hrd.iam (leader, 10M+)
- com.daily.affirmations.motivation.positive.quotes.free (entrant déc-2023, 4.88★)
- com.think.up (lifetime $24.99)
- i.am.com.affirmation
- dev.armandojimenez.believe
