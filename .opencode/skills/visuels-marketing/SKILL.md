---
name: visuels-marketing
description: Génération des visuels — screenshots store cadrés, carrousels, publicités.
---
# Visuels marketing

## Screenshots store (le levier de conversion n°1)
1. Capturer les vrais écrans de l'app (émulateur, résolution store).
2. Cadrer avec copywriting : titre bénéfice au-dessus de l'écran, fond en dégradé
   de marque, device mockup. Les 2 premiers portent 80 % de la conversion.
3. Structure narrative : 1) promesse 2) feature clé 3) preuve/résultat 4) feature 2 5) CTA.
4. Génération d'images via l'API Google ({env:GOOGLE_API_KEY}) pour fonds et illustrations.
5. Gauntlet-loop contre les screenshots des concurrents leaders.

## Carrousels Instagram / visuels pubs
- Format 1080x1350 (4:5). Première slide = hook (question ou résultat chiffré).
- 5-7 slides max, une idée par slide, CTA final.
- Cohérence avec le design system de l'app.

## Règles
- Tout dans `brain/apps/<app>/marketing/`, nommage `<type>-<vN>.png`.
- Jamais de production en masse avant validation de la direction créative (gate G7).
