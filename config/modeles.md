# REGISTRE DES MODÈLES — coûts et rôles

> ⚠️ **RÈGLE ENFORCÉE (renforcée 2026-09-29, règle 15 AGENTS.md)** :
> toute tâche de **planification / analyse / PRD / spec / plan / review** doit être
> **déléguée au modèle haut de gamme `opencode-go/kimi-k3`** (sous-agent, Kimi K3 via OpenCode Go), JAMAIS rédigée
> avec le modèle par défaut économique. Aucun gate (G3, G3.5, G3.6, G3.7) ne se fait avec
> un modèle éco. En cas de doute : demander à l'utilisateur, ne jamais décider seul.

> MAJ : 2026-09-26 (arbitrage modèles frontière, benchmarks juillet-sept. 2026)
> + ADR-011 conservé (GLM-5.3-Flash BULK + DeepSeek V4 Flash défaut simple).

> 🔧 **MODÈLES VIA OPencode Go UNIQUEMENT (décision 2026-09-29, règle 16 AGENTS.md)** :
> tout passe par l'abonnement **OpenCode Go**（préfixe `opencode-go/`）. **OpenRouter JAMAIS
> par défaut** — gardé uniquement en secours, sur demande explicite de l'utilisateur.
> ⚠️ Ne PAS utiliser `opencode/`（= Zen, paiement à l'usage sans crédit → erreur
> « Insufficient account funds »）. Quand un meilleur modèle sort, on met à jour les
> DEUX endroits suivants : ① ce fichier (mapping) ② la config globale OpenCode
> `~/.config/opencode/opencode.jsonc` (bloc `agent`) — puis redémarrage.

## MAPPING AGENTS → MODÈLES (source à jour, à maintenir ensemble)
| Agent opencode | Rôle | Modèle (via OpenCode, pas OpenRouter) |
|---|---|---|
| `kimi-k3` | Planification / analyse / PRD / spec / plan / review (CERVEAU) | `opencode-go/kimi-k3` |
| `qwen-max` | Raisonnement généraliste avancé | `qwen/qwen3-max` |
| `qwen-coder` | Code technique à bas coût | `qwen/qwen3-coder-480b-a35b-instruct` |
| `gemini-flash` | Traitement rapide de gros volumes (bulk) | `google/gemini-2.5-flash` |
| `sonnet-quality` | Revue critique / contrôle qualité final (vision) | `anthropic/claude-sonnet-4-6` |
| _(défaut/simple)_ | Tâches simples, économiques | `opencode-go/deepseek-v4-flash` |

> Maintenir ce tableau SYNCHRONISÉ avec le bloc `agent` de la config globale OpenCode.

## MAPPING OFFICIEL SEPT. 2026 — « plan with frontier, implement with flash »
| Rôle tidle | Modèle | Pourquoi (données sept. 2026) |
|---|---|---|
| **PLANNING/ANALYSE/REVIEW (CERVEAU Léger)** | **opencode-go/kimi-k3** (Kimi K3) | #4-#6 mondial (79,9/100 BenchLM) ; SWE Marathon #1 ; **Design Arena frontend #1 (1679 Elo)** = le meilleur pour générer/revoyer des UI ; 1,05M ctx ; **accepte les images** (indispensable : revoyer screenshots design/avis) ; agentic 89,5. |
| **PLANNING alternatif (si budget serré)** | **z-ai/glm-5.3** (complet, PAS la flash) | Intelligence égale à Kimi K3 (tie 60 AA ; SWE-bench 94,2% vs 93,8% ; Terminal-Bench 86,5% vs 80,9%) et 3,4x moins cher ($1,40/$4,40). **Limite : TEXTE SEUL, pas d'images** → exclus pour toute tâche qui voit des screenshots (design, gauntlet, QA). |



## RÈGLE D'OR（mesurée sur projet réel）
Le framework ne compense JAMAIS le modèle. Pendant spec, plan, tasks et implement：
toujours le meilleur modèle disponible du rôle（CERVEAU/CODE）, aucune économie.

Les modèles éco sont réservés à BULK et aux tests de nouveaux modèlesんUn bug évité à la spec coûte 100x moins cher qu'un bug corrigé en production。




## DÉFAUT TÂCHES SIMPLES（installation, gestion, actions courantes）
- **opencode-go/deepseek-v4-flash**——le modèle par défaut actuel（choix utilisateur 2026-09-01, règle 16 AGENTS.md：OpenCode Go uniquement, OpenRouter interdit sauf demande explicite）：rapide, léger, parfait pour tout ce qui ne prend pas de place et n'a pas besoin de beaucoup de réflexion。Ne pas le changer pour ces tâches。

 À relire avant chaque choix de modèle pour une tâche。



## BULK（classification avis, mots clés, résumés, logs）
- Défaut ：z-ai/glm-5.3-flash（0,075 $/0,25 $ par 1M, contexte 1M, multimodal natif
  texte+image+vidéo, conçu pour code et tâches agentiques longues— sorti 26/08/2026,
  c'était le modèle furtif "Ox Alpha"）. Attention ：routing OpenRouter par défaut =
  "Balanced" ；pour le tool-calling précis, préférer le mode Exacto。
- Éco ：z-ai/glm-4.5-air（0,13 $/0,85 $。



##VISION（analyste-visuel, critique gauntlet, testeur-qa）
- Défaut ：anthropic/claude-sonnet-4（vision native）
- Éco ：z-ai/glm-5.3-flash（multimodal natif, accepte images ET vidéos en entrée）
- Fallback ：google gemini via GOOGLE_API_KEY



##CERVEAU — ajoute en candidat à tester ：
- tencent/hy4-preview（0,83 $/2,50 $, MoE 770B/49B actifs, pensé pour agents de code,
  contexte 1M ；40 tok/s, latence 3,2 s — à tester sur  ẟ1 tâche BULK puis 3 tâches
  avant promotion, selon la règle des modèles furtifs）