# Journal des décisions (format ADR)

## ADR-000 — Exemple
- Date :
- Contexte :
- Décision :
- Alternatives écartées :
- Conséquences :

## ADR-001 — Règle de délégation et reprise
- Date : 2026-08-21
- Contexte : besoins de coûts maîtrisés et de compétences spécialisées selon les phases.
- Décision : l'orchestrateur effectue l'intégralité des tâches courantes et le scraping
  avec le modèle par défaut économique. Planification lourde → déléguer à `kimi-k3`.
  Programmation technique → solliciter `qwen-coder`.
- Alternatives écartées : tout faire en local ; déléguer massivement par défaut.
- Conséquences : les coûts sont contenus (tâches courantes sur le modèle économique),
  la lourdeur de planification et le code technique reposent sur les modèles spécialisés.
