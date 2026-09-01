---
name: reverse-engineering-concurrent
description: Décortique une app concurrente de ses captures vers sa structure — écrans, flux, features, promesses.
---
# Reverse-engineering d'une app concurrente

## Objectif
À partir des assets scrapés (screenshots, icône, description, avis) et d'une exploration
Playwright de sa fiche, produire une CARTE complète de l'app ：sans elle, on copie à
l'aveugle. Avec elle, on reproduit ce qui marche et on corrige ce qui manque.



## Méthode (dans l'ordre)
1. Lis brain/apps/<app>/concurrence/<concurrent>/ (assets + metadata + avis).
2. CARTE DES ÉCRANS ：classe chaque screenshot par position dans le parcours
   (onboarding / home / action cœur / paywall / réglages / social). Nomme chaque écran,
   liste ses éléments (titre, CTA, preuve sociale, prix affichés).
3. FLUX UTILISATEUR ：déduis le chemin le plus probable(qu'est-ce qui est montré en 1er ?
   où arrive le paywall ? quel est le "moment aha" mis en avant ?). Schéma en texte.
4. INVENTAIRE DES FEATURES ：pour chaque feature visible ou mentionnée dans les avis :
   [feature] — visible où — les avis l'adorent / s'en plaignent / la réclament。
5. PROMESSE ET POSITIONNEMENT ：quelle transformation vendent-ils ? Quel vocabulaire
   exact utilisent-ils (le leur ET celui des avis) ?
6. ANGLES MORTS ：les 3 choses que cette app fait mal ou ne fait pas (croisé avec
   l'analyse d'avis 2-3★)。

## Livrable
`brain/apps/<app>/concurrence/<concurrent>/CARTE.md` — cette carte alimente ensuite le
PRD (G3) puis la spec (G3.5) ：on ne spécifie jamais "à l'aveugle"。