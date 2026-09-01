---
name: aso-metadata
description: ASO 2026 — les deux stores ont des algorithmes DIFFÉRENTS. Métadonnées par store.

---
# ASO 2026 — Apple ≠ Google（règles distinctes, non interchangeables）

## APPLE APP STORE（modèle "champs déclarés"）
- Indexé pour la recherche ：Nom（30 car.）+ Sous-titre（30 car.）+ champ Mots-clés
  （100 car.）+ NOUVEAU 2026 ：les captions OCR des screenshots + mots clés liés aux CPP。
- NON indexé ：la description longue（zéro valeur SEO → elle sert uniquement à convaincre）。
- Règles du champ mots-clés ：mots SINGULIERS séparés par virgules SANS espaces ；
  jamais de répétition du titre/sous-titre ；pas le nom de marque ni la catégorie
  （déjà indexés）；pas de pluriel si le singulier suffit。
- Poids ：titre > sous-titre > champ mots-clés. Le mot clé n°1 va dans le titre。
- Texte promotionnel（170 car.）：modifiable sans nouvelle soumission → l'utiliser pour
  les offres/événements。



## GOOGLE PLAY（modèle "full-text", proche du SEO web）
- Indexé ：Titre（50 car.）, description courte（80 car.）, description longue（4 000 car.）。
  Pas de champ caché。
- Densité de mots clés ：2-3 % pour les primaires（4-5 répétitions NATURELLES dans la
  longue description）,1-2 % pour les secondaires. Répéter sur Play = utile ；sur
  Apple = gaspillage。
- Mot clé principal dans la première phrase de la description courte。
- Structurer la longue description en puces（lisible + extractible par l'algorithme）。
- Variantes sémantiques（"workout app" / "fitness tracker" / "exercise planner"）—
  Google comprend les clusters d'intention, les utiliser toutes。
- Google indexe aussi les AVIS ：les mots des utilisateurs rankent — encourager les
  avis contenant le vocabulaire cible（jamais acheter/fake ：risque de bannissement）。



## PROCESSUS（par app, par locale）
1. Sources ：vocabulaire des avis + titres des concurrents qui rankent + auto-complétion
   des stores（notre phase A）+ Appfigures si actif。
2. Séparer les deux fichiers ：brain/apps/<app>/store/<locale>/apple/（title.txt 30,
   subtitle.txt 30, keywords.txt 100 format virgules）et /googleplay/（title.txt 50,
   short_description.txt 80, full_description.txt 4000 avec densité contrôlée）。
3. Vérification automatique ：un script compte les caractères et la densité avant
   livraison. Jamais de dépassement。
4. Longue description Apple = copywriting pur（les 3 premières lignes sont au-dessus
   du pli）；longue description Play = SEO + copywriting。