---
name: pipeline-design
description: De la niche au design parfait— extraction de style concurrent, DESIGN.md, génération, traduction React Native.
---
# Pipeline design (commande "STYLE <app>" — remplace l'ancien flux du designer)

## Principe
Le design n'est pas inventé ：il est EXTRAUT des références gagnantes de la niche,
formalisé en contrat DESIGN.md, puis généré en code. Le DESIGN.md est la source de
vérité visuelle, versionnée comme du code。



## Étape 1 — Extraction de style concurrent（analyste-visuel + designer）
Pour les 3-5 concurrents leaders（screenshots dans brain/apps/<app>/concurrence/）：
- Extraire de chaque écran ：palette（couleurs hex exactes échantillonnées）, typographie
  （famille probable, échelle, graisses）, espacements（rythme 4/8pt）, rayons, ombres,
  densité, ton visuel（ludique, clinique, premium, brutaliste...）.
 
- Livrable ：STYLE-<concurrent>.md par concurrent. Ne jamais copier à l'identique ：
  on extrait les CODES de la niche, pas l'identité d'un concurrent（légal + gauntlet）.



## Étape 2 — Références élargies（Refero Styles）
- Explorer styles.refero.design（Playwright）：recherche par mood/couleur/typographie/
  URL. Chaque référence fournit couleurs, type, spacing, composants ET un DESIGN.md
  prêt pour agents. Sélectionner 2-3 références proches du positionnement visé + des
  flows complets de vrais produits pour les parcours。





## Étape 3 — DESIGN.md de l'app（le contrat）
Le designer écrit brain/apps/<app>/design/DESIGN.md ：palette sémantique（primary,
success, warning, neutrals）, échelle typographique nommée, espacements, rayons,
composants clés（boutons, cartes, paywall, onboarding）, ton. Point de départ ：forker
la référence la plus proche（Refero/OpenDesign）, jamais la page blanche. Validation
utilisateur obligatoire（gate G4）sur 2-3 directions générées en images。





## Étape 4 — Génération
- Artefacts web（landing, decks, prototypes）：OpenDesign directement—il lit le
  DESIGN.md et produit du code propre à tokens（idéal pour le skill landing-page）.

 
- Écrans de l'app ：le designer traduit DESIGN.md → constants/theme.ts + config
  NativeWind/Uniwind de l'app（tokens identiques）, puis génère les mockups des écrans
  clés en images（API Google）pour validation.



## Étape 5 — Composants et animations
- Base composants ：react-native-reusables（copy-paste, on possède la source—
  le standard de l'ère agentique）+ NativeWind. HeroUI RN acceptable si besoin d'un
  composant spécifique。
- Animations ：Reanimated（thread UI）pour transitions et micro-interactions ；
  Lottie pour les moments clés（skill animations-lottie）. Règle ：l'animation sert la
  clarté（feedback, hiérarchie, delight aux moments aha）, jamais de surcharge。





## Étape 6 — Validation
Gauntlet-loop obligatoire ：nos écrans vs screenshots des leaders, test aveugle.
Critères ：crédibilité pro en  ẟ3 s, hiérarchie, désirabilité, cohérence de nicheよ

## Étape 7 — Le design = différenciateur n°1（avis utilisateur, 2026-09-03）
Le design peut nous démarquer MÊME à fonctions égales. Ne jamais copier ：
on analyse pour faire mieux. Sources d'analyse, combinées：
- **Couleurs, fonts, polices** des concurrents（déjà extraits étape 1）——qu'est-ce
  qui fonctionne bien / mal, et comment on fait mieux；
- **1-2 captures d'écran** analysées par IA（voir le style, l'ambiance, les choix
  typographiques d'un coup d'œil）；
- **Les avis de l'utilisateur** sur ce qu'il aime/n'aime pas（"j'aime leurs couleurs",
  "leur tutoriel est trop long"…）——chaque avis oriente le design；
- **Le style adapté à la thématique** de l'app（pas une recette universelle）:
  nature = fond blanc + verts + photos de plantes；lycéen = polices et codes
  visuels adaptés à cet âge；premium = sombre + ocre… Le design doit "parler"
  le langage visuel du public visé。
Livrable ：chaque décision de style justifiée dans DESIGN.md（"pourquoi ce choix
démarque / sert mieux le public"）——jamais un style choisi par défaut。