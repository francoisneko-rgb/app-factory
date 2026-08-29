---
name: video-remotion
description: Vidéos marketing courtes générées par code (Remotion) pour TikTok/Reels/Shorts.
---
# Vidéos marketing par code (Remotion)

## Pourquoi Remotion
Vidéo générée par du code React : versionnable, itérable par les agents, aucun montage
manuel. Parfait pour des variations A/B en masse.

## Setup (par app, dans apps/<app>/video/)
```
npm create video@latest   # choisir Remotion, template blank
```

## Recettes qui marchent (formats courts, 9:16, 15-30 s)
1. Problème → Solution : 3 s de douleur (texte), démo de l'app, CTA.
2. Démo accélérée : les 3 features clés en 5 s chacune, sous-titres dynamiques.
3. Preuve : avis 5★ animés + écran de résultat.

## Règles
- Sous-titres TOUJOURS (85 % des vues sans son).
- Hook dans la première seconde (mouvement + texte).
- Assets : vraies captures de l'app + visuels du skill visuels-marketing.
- Export : `npx remotion render` en 1080x1920.
- 3 variantes de hook par vidéo pour tester.
