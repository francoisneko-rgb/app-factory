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

## ADR-002 — Méthode de recherche marché finale (2026-08-30)
- Date : 2026-08-30
- Contexte : recherche de marché complète nécessaire avant de choisir une première app.
- Décision : Reverse Keyword Mining (règle 16) pour récolter les mots-clés à volume depuis les
  organic keywords des apps leaders. 60 clusters sondés (~340k mots-clés), ~30 approfondis avec
  revenus/avis/screenshots. Ne JAMAIS filtrer les données pour l'utilisateur (tout en CSV brut).
- Alternatives écartées : autocomplétion seule (= bruit), génération de longue traîne (inexistante
  à volume sur iOS), outils payants (AppTweak/Sensor Tower = inutiles, Appfigures suffit).
- Conséquences : base de données marché complète pour choisir une app ; prochaine étape = choix
  d'1-2 sous-niches par l'utilisateur puis PRD (G3).
