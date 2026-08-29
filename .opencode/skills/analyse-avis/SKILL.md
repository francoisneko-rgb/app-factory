---
name: analyse-avis
description: Extraction de la valeur des avis utilisateurs — plaintes, désirs, gaps.
---
# Analyse des avis

## Pourquoi
Les avis sont la donnée la plus précieuse du projet : les utilisateurs y disent
exactement ce qu'ils veulent, ce qui manque, et ce qu'ils paieraient.

## Méthode
1. Charger `avis.json` de chaque concurrent (200+ avis, tri pertinence + récence).
2. Classer en 4 buckets :
   - PLAINTES récurrentes (avis 1-2★) → nos features différenciantes
   - DEMANDES de features ("I wish...", "would pay for...") → roadmap
   - DÉSIRS comblés (avis 5★ : ce qui fait rêver) → notre promesse doit les tenir
   - FRICTIONS d'usage (bugs, UX, prix perçu) → pièges à éviter
3. Compter les occurrences : une plainte citée 15 fois > une plainte citée 2 fois.
4. Extraire le VOCABULAIRE des utilisateurs : leurs mots deviennent nos mots clés ASO
   et notre copywriting.

## Livrable
Section "Voix des utilisateurs" dans le rapport concurrentiel, avec citations réelles
(traduites si besoin) et fréquences.
