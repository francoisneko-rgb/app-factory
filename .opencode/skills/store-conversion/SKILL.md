---
name: store-conversion
description: Fiches store qui convertissent — screenshots narratifs, icône, vidéo preview, descriptions par store, A/B tests. Basé sur benchmarks 2026.
---
# Conversion store (la vitrine qui vend)

## Vérités mesurées (benchmarks 2026 — nos barres de qualité)
- 60-70 % des décisions d'install se jouent sur les screenshots ; les 3 premiers frames
  portent ~80-90 % de l'impact (la plupart des utilisateurs ne scrollent jamais).
- CVR médian indie iOS ：31,2 % ；top quartile ：42,8 %. On vise le top quartile.

- Texte de headline optimal ：3-7 mots (chaque 5 mots en plus = -12 % de conversion)。
- Captions sur screenshots ：+23 % de conversion quand bien faits。
- Localisation des screenshots ：+30-40 % de conversion sur les marchés non-anglophones。
- Screenshots professionnels vs UI brut ：+76 % ；avec optimisation IA ：+91 %。





## SÉQUENCE DE SCREENSHOTS — l'arc narratif（pas une grille de features）
Framework par défaut（apps qui résolvent un problème）— variante PAS ：
Frame 1 HERO ：le bénéfice n°1 en  ẟ3-7 mots + l'écran le plus fort. Compréhensible en
  < 1 seconde, lisible en vignette 80px. C'est le frame vu dans les résultats de recherche​。
Frame 2 TENSION ：le problème que l'utilisateur vit（agitation—le gap entre où il est
  et où il veut être）。
Frame  ẟ3 RÉSOLUTION ：la feature cœur qui livre la promesse du frame 1。
Frame  ẟ4 PREUVE ：chiffres, avis 5★, awards, compteur d'utilisateurs。

Frame 5+ ：features secondaires, une idée par frame, CTA final。

Variantes par type ：
- App "problème"（utilitaire, finance, santé, productivité）：l'arc PAS ci-dessus。
- App lifestyle/aspiration ：frame 1 = le résultat rêvé（avant/après）, puis comment。

- Jeu/divertissement ：frame 1 = le fun en action（gameplay réel）, pas de texte explicatif
  long ；boucle de jeu visible dès le frame 2。


- Règles transverses ：jamais d'écran de login en frame 1 ；vraie UI dans des device
  frames à jour ；UNE idée par frame ；une palette, max  ẟ3 styles typographiques ；
  espace négatif généreux ；headline en haut ou bas sans couvrir l'UI critique ；
  remplir TOUS les slots（10 iOS, 8 Play）; jamais d'orientations mélangées。





## SPÉCS TECHNIQUES 2026
- iPhone ：1320 x 2868 px（6,9"）。iPad ：2064 x 2752 px（13"）。Android ：1080 x 1920 px。
- PNG. Texte min 40pt+（72pt+ pour les headlines）。Contraste élevé。

## ICÔNE（rappel + renfort du skill icones-app）
Levier n°1 en search. Tester en grille contre les 10 concurrents（gauntlet）。Lisible à
48px, aucun texte, se détache de la grille, mode clair ET sombre。



## VIDÉO PREVIEW（App Preview iOS / vidéo Play）
15-30 s max. Les 3 premières secondes = le hook（résultat ou action）。Vraie UI en
mouvement, pas de teaser cinématique. Regardée sans son → sous-titres intégrés。
La postérité ：1 vidéo bien faite bat 3 moyennes。



## A/B TESTING（natif, gratuit — systématique）
- iOS ：Product Page Optimization（App Store Connect）— jusqu'à 3 traitements, trafic
  réel. Tester icône / screenshots / preview. UNE variable à la fois, min 7 jours。
- Google Play ：Store Listing Experiments — même discipline。
- Méthode ：baseline 30 jours（impressions → pages vues → installs par source）→ 1
  hypothèse formulée（"le frame 1 social battra le frame 1 tracker"）→ 1 test → shipper
  le gagnant → re-baseline. Mesurer le funnel ：faiblesse search→install = frames  ẟ1-2 ；
  faiblesse page→install = reste du set。
- Rafraîchir les screenshots tous les 3-4 mois ou à chaque mise à jour majeure。





## COPYWRITING（les règles qui vendent）
- Bénéfices > features, TOUJOURS. "Perds 5 kg sans y penser" > "Tracker de calories"。
- Le vocabulaire vient des avis utilisateurs（skill analyse-avis）— parler la langue
  du client, pas la nôtre。
- Preuve sociale chiffrée dès que disponible（"12 400 utilisateurs", "4,8★ — 2 300 avis"）。
- PAS pour tout texte marketing ：Problem → Agitate → Solution。
- Chaque screenshot répond à la question silencieuse de l'utilisateur ："qu'est-ce que
  j'y gagne, moi ？"





## PRODUCTION（pipeline factory）
1. Captures réelles de l'app（simulateur/device, résolution store）— jamais de fausse UI。
2. Cadrage ：OpenDesign en lisant le DESIGN.md de l'app（cohérence totale）；texte
   lisible via Ideogram si génération d'image nécessaire。
3. Gauntlet-loop obligatoire ：notre set vs le set des 2-3 leaders（test aveugle）。
4. Localisation des frames pour chaque marché cible（headlines écrites courtes pour
   survivre à la traduction）。