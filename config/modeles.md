# REGISTRE DES MODÈLES — coûts et rôles

> MAJ ：2026-09-01 （pipeline design — ADR-011 ：GLM-5.3-Flash en BULK défaut + éco VISION, HY4-preview en candidat CERVEAU）＋ préférence utilisateur：garder DeepSeek V4 Flash 0731 en défaut des tâches simples。



## RÈGLE D'OR（mesurée sur projet réel）
Le framework ne compense JAMAIS le modèle. Pendant spec, plan, tasks et implement：
toujours le meilleur modèle disponible du rôle（CERVEAU/CODE）, aucune économie.

Les modèles éco sont réservés à BULK et aux tests de nouveaux modèlesんUn bug évité à la spec coûte 100x moins cher qu'un bug corrigé en production。




## DÉFAUT TÂCHES SIMPLES（installation, gestion, actions courantes）
- **openrouter/deepseek/deepseek-v4-flash-0731**——le modèle par défaut actuel, gardé（choix utilisateur 2026-09-01）：rapide, léger, parfait pour tout ce qui ne prend pas de place et n'a pas besoin de beaucoup de réflexion。Ne pas le changer pour ces tâches。

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