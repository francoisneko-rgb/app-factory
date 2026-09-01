---
name: landing-page
description: Landing pages marketing générées via OpenDesign depuis le DESIGN.md de l'app— cohérence app/site garantie, zéro re-spec.
---
# Landing page（génération OpenDesign）

La landing est générée via **OpenDesign** en lisant le **DESIGN.md de l'app**
（`brain/apps/<app>/design/DESIGN.md`）—cohérence app/site garantie, **zéro re-spec**：
on ne redécrit jamais la marque, le contrat visuel versionné est lu directement.

## Méthode
1. Vérifier que le DESIGN.md de l'app existe（`brain/apps/<app>/design/DESIGN.md`；
   sinon, le produire via le skill `pipeline-design`（étape 3）.
2. Charger le skill/system OpenDesign correspondant（OpenDesign lit le DESIGN.md et
   produit du code propre à tokens—landing, decks, prototypes）.
3. Générer la landing：brief de la page（promesse, sections, CTA, preuve sociale）,
   DESIGN.md comme contrat, artefact web HTML/CSS.
4. Traduire/valider：la landing partage les tokens（couleurs, type, espacements,
   rayons）de l'app—jamais une identité parallèle。
5. Gauntlet-loop contre les références de la niche（crédibilité pro en  ẟ3 s, hiérarchie,
   désirabilité, cohérence de niche）si la landing est une surface critique。



## Règles
- Zéro re-spec：si un élément visuel n'est pas dans le DESIGN.md, on l'ajoute AU
  DESIGN.md（jamais en dur dans la landing）puis on le traduit dans les deux surfaces。
- Les variantes（prix, fonctionnalités, CTA）vivent dans le brief de la landing, pas dans
  le contrat（le DESIGN.md reste la marque, pas le contenu）。