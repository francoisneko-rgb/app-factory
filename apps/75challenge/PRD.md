# 75 Challenge — Cahier des charges produit (PRD)

| | |
|---|---|
| **Gate** | G3 — validation du cahier des charges |
| **Date** | 2026-09-29 |
| **Statut** | En attente de validation utilisateur |
| **App** | 75 Challenge (iOS + Android, React Native + Expo) |
| **Sources** | `references/challenges-75-jours/` (analyse-globale, donnees-marche, STRUCTURE-COMMUNE, MAJ-STRUCTURE-COMMUNE, 5 cartes visuelles, 4 fiches concurrents) + `BRAINSTORM.md` (décisions validées) + `design/DESIGN.md` (thème validé) |

> Ce document remplace l'ancien PRD (réécriture complète). Il respecte les 10
> décisions fermes du brainstorming du 2026-09-29. Toute modification de ces
> décisions passe par une re-validation explicite de l'utilisateur.

---

## 1. Résumé exécutif

**Promesse : « Ton défi de 75 jours, à toi de le finir. »**
75 Challenge est un tracker de challenges de 75 jours (Soft / Medium / Hard +
personnalisé), qui fonctionne **100 % sur l'appareil, sans compte**, avec un
**prix unique et transparent de $4.99 à vie**, et le rituel d'engagement le
plus fort du segment : un **contrat signé au doigt**.

**Les 4 arguments différenciants (tous issus des données) :**

1. **La place est libre.** Le leader officiel (75 Hard, 44SEVEN) est faible :
   sentiment 0-22 %, $15K/mois, note Appfigures 2.50, plaintes massives
   (abonnement imposé, pas de widget, pas de suivi d'eau, données perdues).
   Pendant ce temps, les challengers prouvent le marché : BeHard $65K/mois,
   Her75 $110K/mois, Habit Tracker (achat unique) $120K/mois.
   *(Source : analyse-globale §1, §5bis.)*
2. **La plainte n°1 du segment = les prix piégés.** Abonnements abusifs
   (BeHard : « charging me four times a month »), croix de fermeture quasi
   invisible, abonnement imposé à d'anciens acheteurs. Notre réponse frontale :
   **un seul paiement de $4.99, affiché clairement, croix toujours visible,
   jamais d'abonnement.** Le modèle « achat unique » est celui qui convertit
   le mieux du segment ($120K/mois pour Habit Tracker).
   *(Source : analyse-globale §3 plainte 1, §5bis.)*
3. **La demande est réelle et battable.** 4 mots-clés « 75 » à popularité
   34-55 et compétitivité 52-62 (faible à modérée). Le phénomène culturel est
   massif (#75HARD ≈ 1,7 M posts Instagram). Pic de demande en **janvier**
   (résolutions) → objectif de lancement : **avant janvier 2027**.
   *(Source : donnees-marche §1, analyse-globale §8.)*
4. **Personne ne combine les 3 forces éprouvées du segment.** Nous fusionnons :
   le moteur 25/50/75 jours à doses dynamiques (Challenge Habits), le funnel de
   confiance « privacy-first, zéro compte » (75 Days Challenge « Abeni »,
   7,5/10), et le rituel du contrat signé au doigt (BeHard, $65K/mois) — le
   tout dans un design éditorial pastel **unisexe** que personne n'occupe
   (les apps sombres/néon codées « gym masculine » d'un côté, Her75 « that
   girl » féminin de l'autre).
   *(Source : MAJ-STRUCTURE-COMMUNE §2-3, cartes visuelles.)*

---

## 2. Positionnement

### Ce qu'on est

- Un **rituel d'engagement fort** : contrat signé au doigt, avec prénom,
  engagements et dates de fin auto-calculées.
- Un **moteur de challenges personnalisable** : 3 intensités (Soft / Medium /
  Hard) qui déterminent la durée (25/50/75 jours) et les doses des habitudes
  (eau, exercice, lecture…), + un mode 100 % personnalisé.
- Un **parcours de confiance** : 100 % local, zéro compte, prix clair, paywall
  en couches jamais bloquant.
- Un **objet calme et beau** : thème éditorial pastel (blanc, texte noir, 4
  pastels mats), unisexe, lisible.

### Ce qu'on n'est pas

- Pas une app de gym masculine sombre/néon (anti-BeHard, anti-officielle).
- Pas une app sociale en v1 (anti-Her75 : pas d'amis, pas de feed, pas de
  matching — seulement un export image de sa progression).
- Pas un mur payant agressif : jamais de paywall bloquant avant d'avoir montré
  le produit, jamais de croix camouflée, jamais de « choisis ton prix » alors
  que les prix sont fixes.
- Pas un produit à compte forcé, ni à abonnement caché (ou affiché du tout en
  v1 : il n'y a **aucun abonnement**).
- Pas un assistant IA (anti-BeHard : « AI generated plan that was BS »).

### Tableau « on reprend / on améliore » (vis-à-vis des 5 concurrents)

| Concurrent (perf.) | On reprend (prouvé par les données) | On améliore |
|---|---|---|
| **BeHard** — $65K/mois | Le contrat signé au doigt : rituel d'engagement au pic émotionnel (signature + prénom + rassurance « on ne stocke pas votre signature ») | Paywall **tardif et honnête** : chez BeHard il arrive avant toute vue du produit avec un framing « Set your price » trompeur ; chez nous il arrive après le contrat, skippable, prix unique affiché |
| **75 Days Challenge (Abeni)** — 7,5/10 | Le funnel de confiance (éducation → quiz → privacy 100 % local → avis 5★), le paywall en 3 couches (modal skippable + rail permanent + badges couronne), la boucle quotidienne complète (Time Left, jauges, éditeur photo, tentatives archivées) | Un prix **vraiment transparent** : chez eux le prix n'apparaît même pas clairement ; chez nous $4.99 à vie, en clair, une seule fois. Et un thème clair unisexe là où leur noir/menthe est codé masculin |
| **Challenge Habits** | Le moteur **25/50/75 jours** par intensité, les **doses dynamiques** (eau 2/2,5/3 L, exercice 20/45/90 min), le « At least X/day », les dates de fin affichées avant démarrage | **Éditer un défi pré-fait** au lieu de tout recréer de zéro (leur message « You can't edit default challenge habits » est le demi-gap du segment) + un onboarding avec de l'émotion (le leur est vide : 0 promesse, 0 engagement) |
| **Her75** — $110K/mois | Le look éditorial clair pastel, la preuve sociale chiffrée dans l'onboarding, les questions par images | Sans le social (hors v1), sans l'abonnement $49.99/an, sans le paywall brutal après un long onboarding (« no choice but to pay » = leur plainte n°1) |
| **75 Hard officiel** — 0-22 % sentiment | La checklist simple (1 tâche = 1 ligne), le « Add Reminder » par tâche, le « J'ai déjà commencé » (reprendre à son jour sans tout recommencer), la date de départ modifiable | **Tout le reste** : pas de compte forcé à l'écran 2, pas de boutique de merch dans le funnel, une vraie jauge d'eau (pas une case binaire), un widget, l'archivage des tentatives (photos/notes conservées), pas de framing punitif « raté = retour jour 1 », pas de vidéo bloquante |

---

## 3. Persona & cas d'usage

### Persona principal

**Adulte 20-45 ans, homme ou femme, US/global, démarche « self-improvement ».**
Il/elle a entendu parler du 75 Hard (TikTok, Instagram, un ami, un podcast) et
veut se prouver qu'il/elle peut tenir un engagement long. Le quiz du concurrent
Abeni confirme les motivations dominantes : « devenir plus discipliné »,
« prouver que je peux finir », « améliorer mon lifestyle », « devenir une
meilleure version de moi-même » — le mindset prime sur la performance sportive
pure. *(Source : CARTE-VISUELLE-75-GRATUITE §2.)*

Trois sous-profils couverts par le moteur 25/50/75 :

- **Le/la débutant·e intimidé·e** : le 75 Hard officiel (2 séances/jour, 1
  gallon d'eau) est trop dur → il/elle démarre en **Soft (25 jours)**.
- **Le/la repreneur·se** : a déjà abandonné (souvent avant le jour 10 —
  « Most people quit by day 10 ») → veut reprendre **sans perdre ses photos
  et notes**, sans message de honte.
- **Le/la puriste** : veut le programme officiel dosé exactement → **Hard
  (75 jours)**, avec les vraies règles et les vraies doses.

### Cas d'usage (moments de vie)

1. **Démarrage de janvier (le pic).** « Cette année, je tiens. » L'utilisateur
   cherche « 75 hard » / « 75 day challenge » début janvier, télécharge,
   choisit Soft ou Medium, signe son contrat, partage son jour 1 en image.
   → Toute la machine (ASO, lancement) vise ce moment.
2. **La reprise.** L'utilisateur a lâché au jour 10 sur une autre app (ou sur
   celle-ci). Il rouvre, retrouve sa tentative archivée intacte (photos, notes,
   calendrier), et relance une nouvelle tentative en un geste — l'app lui dit
   « tu reprends là où tu en étais », pas « tu as échoué ».
3. **L'ajustement sans honte (abandon doux).** La vie arrive (voyage, maladie,
   boulot). L'utilisateur peut marquer un jour incomplet sans que l'app le
   pune : le jour est marqué, la tentative continue (mode souple) — ou il
   choisit le mode strict (règle officielle) en connaissance de cause. La
   personnalisation des doses lui permet aussi d'adapter le défi à sa vie
   réelle au lieu d'abandonner.

---

## 4. Parcours utilisateur détaillé (le funnel)

> Fusion du squelette commun v2 (MAJ-STRUCTURE-COMMUNE §2) avec les décisions
> du brainstorm. Principe directeur : **engagement avant prix, produit avant
> tout blocage, confiance à chaque étape.**

### Étape 1 — Accroche (promesse)
- 3 à 4 écrans statiques, **une idée par écran**, illustrations éditoriales
  pastel (jamais de vidéo bloquante — anti-pattern de l'officielle).
- Preuve sociale dès le 1er écran (ex. compteur de challenges démarrés).
- Promesse identitaire (« 75 jours pour te prouver que tu peux »), pas une
  liste de fonctionnalités.
- Bouton « Passer » disponible à tout moment.

### Étape 2 — Éducation (1 règle = 1 écran)
- Chaque pilier du challenge expliqué simplement, avec les chiffres réels
  (ex. « Boire — ton corps te dira merci : jusqu'à 3,8 L d'eau par jour en
  mode Hard »), skippable.
- Rôle : vendre la **compréhension** du programme avant de demander quoi que
  ce soit (meilleur funnel observé du segment, Abeni).

### Étape 3 — Personnalisation
- **Quiz court** (3-5 questions max, réponses par images quand possible) :
  « Pourquoi tu démarres ? » (motivation) et « Qu'est-ce qui t'inquiète le
  plus ? » (peur n°1) + interlude anti-abandon (« La plupart des gens lâchent
  avant le jour 10. Toi, tu es déjà en avance. »). Les réponses alimentent les
  rappels personnalisés (premium) et le ton de l'app.
- **Choix du challenge** : cartes visuelles **Soft / Medium / Hard /
  Personnalisé**, chacune avec sa durée, ses règles et sa dose résumée.
- **L'intensité détermine tout** : durée 25/50/75 jours + doses des habitudes
  (eau 2 / 2,5 / 3,8 L, exercice 20 / 45 / 2×45 min, lecture 5 / 10 / 10
  pages, etc.) + **dates de fin auto-calculées et affichées AVANT de démarrer**
  (ex. « 5 janv. → 29 janv. »).
- Question « Tu commences aujourd'hui ou tu as déjà commencé ? » (reprendre à
  son jour actuel — pattern de l'officielle, absent chez BeHard/Her75).

### Étape 4 — Confiance
- Écran « Ta vie privée reste chez toi » : **tout est stocké sur ton
  téléphone, rien ne part sur nos serveurs, aucun compte à créer.**
- Carousel d'avis 5★ intégré au parcours (preuve sociale avant le prix).
- C'est une différenciation quasi gratuite face à Her75 (compte Google
  obligatoire) et à l'officielle (compte à l'écran 2).

### Étape 5 — Engagement (le contrat signé au doigt)
- Carte-contrat personnalisée : « *[Prénom]*, voici ton engagement » +
  liste des règles du challenge choisi + dates de début/fin auto.
- **Zone de signature au doigt** (geste physique d'engagement) + mention
  rassurante exactement au bon endroit : « Ta signature n'est pas enregistrée
  — elle reste sur cet écran. »
- Le bouton « Je m'engage » ne s'active qu'une fois signé (micro-récompense).

### Étape 6 — Confirmation
- Écran court « Tu es prêt·e » + carte récap « jour 1 » (dates, règles) remise
  en main. Respiration avant la monétisation.

### Étape 7 — Paywall en couches (jamais bloquant)
- **Couche 1 — modal skippable** : présente Premium ($4.99, un seul paiement,
  à vie), avec **croix toujours visible**, aucun compte à rebours fake, aucune
  présélection trompeuse.
- **Couche 2 — rail permanent** « Premium » en tête du tableau de bord :
  l'offre reste à 1 tap, sans jamais interrompre l'usage.
- **Couche 3 — badges couronne** sur les actions payantes (ex. « Ajouter une
  tâche perso », régler les doses) : l'utilisateur découvre Premium au moment
  où il en ressent le besoin.
- Le **cœur du produit reste utilisable gratuitement** (voir §6).

### Étape 8 — Tableau de bord jour 1
- Une seule page, tout y est : « day one » (typo script Caveat), dates,
  progression, checklist du jour. Le streak (« Jour 1 sur 25 ») et le
  compte à rebours du jour sont **dans le viewport, sans navigation**
  (anti-pattern de l'officielle : progression reléguée à un autre écran).

### Étape 9 — Boucle quotidienne
- **Statut du jour** : « Jour X sur 75 » + badge d'état (À faire / ★ Fait) +
  **compte à rebours « Temps restant »** jusqu'à minuit (pression douce, non
  punitive).
- **Checklist dosée** : chaque habitude affiche sa dose (« Au moins 2 L /jour »)
  avec coche simple ou saisie d'unités (+240 ml, +10 pages, +20 min) ;
  jauge d'eau qui se remplit (jamais une case binaire — plainte n°1 contre
  l'officielle).
- **Photo quotidienne** avec éditeur intégré (cadrage, rotation) + badge
  ★ Fait.
- **Tâches personnalisées** (premium) : case à cocher ou compteur, avec option
  « obligatoire pour valider le jour ».
- **Options** : poids du jour, journal du jour.
- Fin de journée : résumé positif. Jour incomplet : message non punitif
  (« Pas grave. Tu reprends demain — ou tu recommences, c'est toi qui
  choisis »).

### Étape 10 — Suivi
- **Calendrier des X jours** (grille 1→25/50/75, chaque jour colorié selon son
  état), **% global de progression**, et **tentatives archivées** (« 1re
  tentative », « 2e tentative »…) : photos, notes et calendrier des tentatives
  passées conservés et consultables (plainte majeure de l'officielle :
  « notes just get deleted »).

### Étape 11 — Partage (sans réseau social)
- Bouton « Partager ma progression » : génère une **image** (jour actuel,
  règles cochées, dates) à partager où l'on veut (Instagram, Messages…).
- Aucun feed, aucun ami, aucune communauté dans l'app en v1.

---

## 5. Fonctionnalités v1 détaillées

> Chaque feature : objectif, justification data, critères d'acceptation
> fonctionnels (ce que l'utilisateur doit pouvoir faire — testables).

### F1 — Onboarding (accroche + éducation + quiz + confiance)
- **Objectif** : amener l'utilisateur au contrat en moins de 3 minutes, en
  ayant compris le programme et fait confiance à l'app.
- **Justification** : le funnel « éducation → introspection → privacy → avis »
  est le meilleur observé du segment (Abeni 7,5/10) ; l'onboarding sans
  émotion de Challenge Habits et le compte forcé de l'officielle sont des
  anti-patterns documentés.
- **Critères d'acceptation** :
  - L'utilisateur peut tout passer (« Passer » visible sur chaque écran).
  - L'utilisateur répond au quiz en ≤ 5 questions, majoritairement par images.
  - L'utilisateur voit explicitement : 100 % local, zéro compte, rien n'est
    envoyé sur des serveurs.
  - Aucun compte, aucun email, aucune autorisation n'est demandé avant le
    tableau de bord (les notifications sont demandées au moment pertinent :
    réglage du premier rappel).

### F2 — Moteur de challenges (3 intensités + presets + personnalisé)
- **Objectif** : un seul moteur sert les 3 niveaux ET le sur-mesure ; la durée
  et les doses découlent de l'intensité choisie.
- **Justification** : le moteur 25/50/75 + doses dynamiques est la valeur
  technique prouvée de Challenge Habits ; la personnalisation est le désir n°1
  des avis de tout le segment (« customize your tasks » chez BeHard, Her75,
  officielle).
- **Presets (doses indicatives, ajustables en Premium)** :

  | Règle | Soft — 25 j | Medium — 50 j | Hard — 75 j |
  |---|---|---|---|
  | Eau | 2 L/j | 2,5 L/j | 3,8 L/j (≈ 1 gallon) |
  | Exercice | 20 min/j | 45 min/j | 2 × 45 min/j dont 1 en extérieur |
  | Lecture | 5 pages/j | 10 pages/j | 10 pages/j (non-fiction) |
  | Alimentation | choisie, souple | choisie, stricte | stricte, zéro alcool/cheat meal |
  | Photo de progression | 1/sem | 1/j | 1/j |

- **Critères d'acceptation** :
  - L'utilisateur choisit Soft / Medium / Hard / Personnalisé ; la durée
    (25/50/75 j) et les dates de fin exactes s'affichent **avant** démarrage.
  - Changer d'intensité met à jour instantanément durée, doses et date de fin.
  - En mode Personnalisé : durée libre (1 à 365 jours, 75 par défaut) et
    composition libre des règles.
  - L'utilisateur peut **éditer un preset** (doses, ajouter/retirer une règle)
    sans tout recréer de zéro (Premium — le gap laissé par Challenge Habits).
  - Choix du mode de jour raté : **strict** (règle officielle : retour jour 1,
    défaut en Hard) ou **souple** (jour marqué, on continue, défaut en Soft).

### F3 — Contrat signé au doigt
- **Objectif** : transformer le démarrage en rituel d'engagement psychologique.
- **Justification** : mécanique signature de BeHard ($65K/mois) — le geste
  physique rend l'abandon coûteux ; la micro-rassurance « on ne stocke pas
  votre signature » est placée là où l'utilisateur hésite.
- **Critères d'acceptation** :
  - Le contrat affiche : prénom (saisi dans le quiz), liste des engagements
    du challenge choisi, dates de début et de fin.
  - L'utilisateur signe du doigt dans une zone dédiée ; il peut effacer et
    recommencer.
  - La mention « Ta signature n'est pas enregistrée » est visible à côté de la
    zone ; conformément à cette promesse, l'image de signature n'est **pas**
    persistée (seul le fait d'avoir signé est mémorisé).
  - Le bouton « Je m'engage » reste inactif tant que rien n'est signé.

### F4 — Paywall en couches (skippable, transparent)
- **Objectif** : monétiser sans jamais piéger ; convertir par la valeur
  ressentie, pas par la pression.
- **Justification** : plaintes n°1 du segment = paywalls confus et charges
  cachées (BeHard, Her75) ; le pattern en 3 couches d'Abeni est le plus honnête
  observé ; l'achat unique est le modèle le mieux reçu (Habit Tracker $120K/mois,
  « NOT a monthly subscription »).
- **Critères d'acceptation** :
  - Le prix **$4.99, paiement unique, à vie** est affiché en clair, en
    caractères lisibles, dès la carte du paywall.
  - La **croix de fermeture est toujours visible et contrastée** ; fermer le
    paywall ne bloque ni ne dégrade le cœur du produit.
  - Aucune mention d'abonnement, aucun essai qui se transforme en
    renouvellement, aucun compte à rebours artificiel.
  - Un bouton « Restaurer mon achat » est accessible (paywall + réglages) —
    indispensable puisqu'il n'y a pas de compte.
  - Le rail « Premium » et les badges couronne ouvrent le même paywall, à tout
    moment.

### F5 — Tableau de bord quotidien
- **Objectif** : une seule page pour vivre sa journée ; tout y est visible
  sans navigation.
- **Justification** : l'officielle cache la progression dans un autre écran
  (anti-pattern) ; le bloc « Time Left » + badge d'état d'Abeni cadence le jour
  sans punir ; la densité « 1 tâche = 1 ligne » de l'officielle reste le bon
  standard de lisibilité.
- **Critères d'acceptation** :
  - En un coup d'œil : « day N » (typo script), « Jour N sur X », dates de
    début/fin, % du jour complété, compte à rebours jusqu'à minuit.
  - La checklist du jour est complète sur la page (doses, états, coches).
  - Le jour se valide automatiquement quand toutes les règles obligatoires
    sont faites → badge ★ Fait + micro-célébration discrète.
  - Minuit passé avec des règles non faites : jour marqué incomplet, message
    non punitif, choix proposé selon le mode (strict/souple).

### F6 — Suivi des habitudes dosées
- **Objectif** : chaque habitude est quantifiée (« Au moins X /jour ») et se
  saisit en un geste.
- **Justification** : « At least X/day » généralisé (Challenge Habits) ; la
  jauge d'eau est LE gap le plus cité contre l'officielle (« no water tracker
  which everyone needs »).
- **Critères d'acceptation** :
  - Eau : jauge visuelle + boutons ± (ex. +240 ml), reste affiché en unités
    familières (ml/L et verres).
  - Exercice : saisie en minutes (et distinction intérieur/extérieur en Hard).
  - Lecture : saisie en pages (±1, ±5).
  - Alimentation : confirmation Oui/Non du jour.
  - Chaque habitude peut être cochée directement (geste rapide) ou saisie en
    détail (unités) ; la coche se déclenche automatiquement quand la dose est
    atteinte.
  - Les unités (métrique/impérial) suivent le réglage de l'appareil, modifiable
    dans les réglages.

### F7 — Photo de progression
- **Objectif** : la photo quotidienne, preuve visuelle de la transformation.
- **Justification** : règle officielle du programme ; l'upload médiocre de
  l'officielle est moqué dans les avis (« a joke ») ; l'éditeur intégré
  (cadrage, rotation) d'Abeni est le standard à égaler.
- **Critères d'acceptation** :
  - Prendre une photo ou la choisir dans la galerie, la recadrer/pivoter dans
    l'app, badge ★ Fait une fois validée.
  - Les photos restent sur l'appareil ; galerie consultable jour par jour, par
    tentative.
  - Évolution prévue (v1.1, hors v1) : time-lapse de fin de challenge.

### F8 — Tâches personnalisées (Premium)
- **Objectif** : la personnalisation entre **dans la règle de réussite** du
  jour, pas seulement dans une liste à part.
- **Justification** : le « Custom Task + Required for day completion » d'Abeni
  est la meilleure réponse observée au désir n°1 du segment (personnalisation) ;
  la vendre en Premium est légitimé par le marché (Abeni la verrouille aussi).
- **Critères d'acceptation** :
  - Créer une tâche : titre, icône, type (case à cocher ou compteur avec
    objectif chiffré), description optionnelle.
  - Option « Obligatoire pour valider le jour » : si active, le jour ne peut
    pas être ★ Fait sans elle.
  - Modifier/supprimer une tâche perso à tout moment ; la règle s'applique
    dès le lendemain (pas de réécriture de l'historique).
  - En gratuit : badge couronne visible sur cette action → ouvre le paywall.

### F9 — Calendrier & progression
- **Objectif** : voir les X jours d'un coup d'œil et mesurer sa progression.
- **Justification** : calendrier 75 jours = standard du segment (officielle) ;
  ring de % global (Challenge Habits, Abeni) ; le streak visible en permanence
  corrige l'anti-pattern de l'officielle.
- **Critères d'acceptation** :
  - Grille 1→25/50/75 : chaque jour colorié (fait / partiel / raté / futur /
    aujourd'hui mis en avant).
  - % global de complétion du challenge et % de jours parfaits.
  - Tap sur un jour passé → détail du jour (règles, photo, journal).

### F10 — Tentatives archivées
- **Objectif** : recommencer sans perdre son histoire.
- **Justification** : plainte directe de l'officielle (« notes/photos deleted »
  au restart) ; « 1st Attempt » + écran Attempts d'Abeni prouve le pattern.
- **Critères d'acceptation** :
  - Recommencer crée une nouvelle tentative ; la précédente est **archivée
    intacte** (calendrier, photos, notes, dates).
  - Le badge « tentative N » est visible sur le tableau de bord.
  - L'utilisateur consulte ses anciennes tentatives en lecture seule.

### F11 — Widget écran d'accueil (RECOMMANDÉ, conditionnel)
- **Objectif** : la progression « front and center », sans ouvrir l'app.
- **Justification** : le widget est un désir majeur (« the widget is a huge
  win » — BeHard) MAIS c'est aussi le bug n°1 du segment (synchro widget↔app
  cassée chez BeHard, absent chez l'officielle). **Un widget bugué produirait
  exactement les avis 1★ que notre positionnement promet d'éviter.**
- **Décision PRD** : développé en v1 **uniquement si sa fiabilité est
  démontrée en tests** (rafraîchissement correct après chaque action, zéro
  décalage de jour) ; sinon reporté en v1.1 et communiqué comme tel.
- **Critères d'acceptation (si livré)** : jour N/X + état des règles du jour
  visibles ; synchro < 1 min après une action dans l'app ; zéro reset de jour
  intempestif ; Premium (verrouillé par badge couronne en gratuit).

### F12 — Notifications & rappels
- **Objectif** : la rétention par des rappels utiles, jamais harcelants.
- **Justification** : « Add Reminder » par tâche est le meilleur pattern de
  l'officielle ; les « smart reminders » sont un Premium légitimé par Abeni ;
  le prompt de notation dès le jour 1 (Abeni) est un anti-pattern à éviter.
- **Critères d'acceptation** :
  - Gratuit : 1 rappel quotidien global (heure au choix).
  - Premium : rappels par tâche, multiples, horaires au choix, ton adapté aux
    réponses du quiz (motivation/craintes).
  - La permission de notifications est demandée au moment du réglage du premier
    rappel, jamais au premier lancement.
  - La demande d'avis (note store) n'apparaît qu'après un moment de valeur
    (ex. 3e jour validé), jamais au jour 1.

### F13 — Partage (export image)
- **Objectif** : transformer la progression en contenu partageable — la
  distribution gratuite, sans construire de réseau social.
- **Justification** : le « sticker story » de Her75 est l'arme virale de la
  catégorie ; le partage Instagram est aussi promu par l'officielle. Le social
  interne est hors v1 (décision ferme).
- **Critères d'acceptation** :
  - Un bouton « Partager ma progression » génère une image propre (jour N/X,
    règles cochées, dates, nom du challenge, au thème éditorial pastel).
  - Formats : story verticale (9:16) et carré (1:1).
  - Partage via la feuille native du téléphone ; aucune donnée ne transite par
    un serveur.

---

## 6. Monétisation

### Modèle
**Achat unique $4.99 (prix d'appel de lancement), un seul paiement, valable à
vie. Aucun abonnement en v1. Aucune publicité dans aucune version** (les pubs
casseraient la promesse « honnête et calme » — c'est aussi le Premium « ad-free »
d'Abeni rendu inutile par construction).

### Répartition gratuit / payant

| Gratuit (le cœur, complet et honnête) | Premium $4.99 (la personnalisation) |
|---|---|
| Onboarding complet + contrat signé | **Éditer les presets** : ajuster doses (eau, exercice, lecture) et durée |
| Les 3 presets Soft / Medium / Hard | **Tâches personnalisées illimitées**, dont « obligatoire pour valider le jour » |
| Boucle quotidienne complète : checklist dosée, jauge d'eau, photo + éditeur, poids, journal | **Challenge 100 % personnalisé** (durée libre 1-365 j, règles libres) |
| Calendrier, % global, tentatives archivées | **Smart reminders** : rappels par tâche, multiples, ton personnalisé |
| 1 rappel quotidien global | **Challenges simultanés** (gratuit : 1 seul challenge actif) |
| Partage export image | **Widget** (si livré en v1 — voir F11) |
| Restauration d'achat | |

**Pourquoi cette répartition :**
- Le cœur gratuit complet est la promesse de confiance : l'utilisateur peut
  faire TOUT son challenge sans payer — c'est le contraire du « mur » BeHard
  et du piège Her75, et c'est ce qui génère les avis 5★ (« budget friendly »).
- On verrouille **la personnalisation, pas le contenu** : c'est exactement le
  Premium légitimé par Abeni (customize targets, custom tasks, smart
  reminders) et c'est le désir n°1 des avis du segment — donc la feature pour
  laquelle on paie sans se sentir volé.
- Le prix d'appel $4.99 est volontairement sous le marché (lifetime à $8.99
  chez Habit Tracker) pour maximiser la conversion impulsive sur une app de
  test ; il sera réévalué après le pic de janvier (décision utilisateur déjà
  actée : prix remontable si l'app confirme son potentiel).

---

## 7. Hors périmètre v1 (explicite)

| Exclu | Pourquoi |
|---|---|
| **Fonctions sociales** (amis, feed, matching, codes d'invitation) | Décision ferme ; c'est le territoire coûteux de Her75 — on observe, on reviendra en v2 si le marché le demande |
| **Comptes / authentification / cloud** | Décision ferme : 100 % local, zéro backend |
| **Abonnement** | Décision ferme : achat unique uniquement en v1 |
| **AI coach** | Plainte documentée chez BeHard (« plan that was BS ») — coûteux et contre-productif |
| **Mode sombre** | Le thème validé respire sur fond blanc (DESIGN.md) ; anti-pattern assumé du segment (2/2 apps récentes en sombre — on se différencie) |
| **Multi-langues** | Marché cible US/global anglophone en v1 (metadata store en anglais) ; localisation post-v1 si signal |
| **Apple Health / santé connectée** | Gap réel du segment mais complexité native non négligeable ; repoussé en v1.1 pour tenir la date de janvier |
| **Time-lapse photo** | Évolution naturelle de F7, v1.1 |
| **Cross-promo d'apps sœurs** | Une seule app (décision ferme multi-listing) — pas d'app sœur à promouvoir |
| **Prompt de notation au jour 1** | Anti-pattern identifié (Abeni) — notation demandée après moment de valeur uniquement |

---

## 8. Critères de succès mesurables

### Calendrier (contrainte dure : le pic de demande est en janvier)

| Jal | Cible |
|---|---|
| G3 — validation de ce PRD | 2026-09-29 → 30 |
| G3.5-G3.7 — spécification, plan technique, liste des tâches | semaines 1-2 d'octobre |
| G4 — design des écrans (en parallèle) | octobre |
| Développement | mi-octobre → fin novembre |
| G5 — tests sur appareils réels | début décembre |
| G6 — soumission aux 2 stores | **avant le 15 décembre 2026** (les validations ralentissent fin décembre) |
| App en ligne | **avant le 1er janvier 2027** |

### Métriques produit (app de test — objectifs réalistes, à mesurer sans backend : analytics locaux anonymisés ou console stores uniquement)

| Métrique | Cible | Lecture |
|---|---|---|
| Téléchargements | 1 000 en décembre (rodage) · 5 000-10 000 en janvier (pic) | Valide l'ASO « 75 » |
| **Conversion paywall** | **≥ 8 %** des nouveaux utilisateurs (prix d'appel + paywall honnête ; le standard freemium est 2-5 %) | Valide le modèle économique |
| Complétion | jour 1 ≥ 60 % des challenges démarrés · jour 7 ≥ 30 % · fin d'un Soft (j25) ≥ 10 % | Valide la boucle quotidienne et le rituel |
| Rétention J30 | ≥ 15 % | Valide l'utilité réelle |
| Avis | note ≥ 4,5★ · **0 avis mentionnant arnaque / prix caché / abonnement** · ≥ 2 % des actifs laissent un avis | Valide la promesse « honnête » |
| Revenu | ≥ $500 en janvier (~100 ventes) | Signal « go » pour investir en v2 |
| Qualité | ≥ 99,5 % de sessions sans crash · **0 perte de données** rapportée | Valide l'exécution technique |

**Règle de décision post-janvier** : si conversion ≥ 8 % et note ≥ 4,5★ → on
investit (v2 : social, widget avancé, prix remonté). Sinon on analyse les avis
et on itère sur le maillon faible avant toute dépense marketing.

---

## 9. Risques & mitigations

| Risque | Probabilité / impact | Mitigation |
|---|---|---|
| **Plagiat low-effort** : le segment est plein de clones 5,00★ à 3-7 avis ; être perçu comme « un clone de plus » | Élevé / élevé | Différenciation exécutive : design éditorial distinctif (personne n'occupe le clair/pastel unisexe), funnel de confiance explicite, prix affiché, avis réels sollicités après moment de valeur, zéro dark pattern. Notre position « honnête » est un positionnement, pas seulement une éthique |
| **Saisonnalité** : rater janvier = demande divisée jusqu'à l'année suivante | Moyen / très élevé | Date dure : soumission stores avant le 15/12. Périmètre v1 volontairement resserré (§7) pour tenir cette date. Si glissement : on coupe F11 (widget) puis F8, jamais le cœur |
| **Prix $4.99 perçu « trop bas pour être bien »** | Moyen / moyen | Copy assumé : « prix de lancement — un seul paiement, à vie ». La preuve de valeur passe par le produit gratuit complet (l'utilisateur a déjà tout utilisé avant de payer). Réévaluation du prix après janvier (décision déjà actée) |
| **Widget = le bug récurrent du segment** (synchro cassée chez BeHard, absent chez l'officielle) | Élevé / élevé (avis 1★ garantis si bugué) | F11 conditionnel : livré **uniquement si fiabilité démontrée en tests** (synchro < 1 min, zéro reset de jour) ; sinon reporté v1.1 et annoncé franchement. Mieux vaut pas de widget qu'un widget qui ment |
| **Perte de données perçue** (100 % local : changement/casse de téléphone = tout perdu) | Moyen / moyen | Communication claire dès l'onboarding (« tout reste sur ton téléphone »). Candidat v1.1 : export/import manuel de sauvegarde (fichier local), toujours sans compte |
| **Marque « 75 HARD™ » déposée** (Andy Frisella / 44Seven Media) | Faible / élevé | Notre nom « 75 Challenge » n'utilise pas « 75 Hard ». En metadata store : mots-clés descriptifs uniquement (« 75 day challenge tracker »), jamais de présentation comme app officielle, aucun logo/asset reprenant la marque |
| **Conversion insuffisante au prix d'appel** (le gratuit est « trop » complet) | Moyen / moyen | Les leviers Premium sont les désirs n°1 mesurés du segment (personnalisation). Si conversion < 5 % en janvier : rééquilibrer la frontière gratuit/payant (ex. limiter le nombre de règles éditables) plutôt que toucher au prix |
| **Revue des stores** (IAP sans compte, restauration) | Faible / moyen | Achat non-consommable standard + « Restaurer mon achat » visible (paywall + réglages), conforme aux règles Apple/Google |

---

## 10. Contraintes design & techniques (rappel pour le plan technique)

- **Design** : thème « éditorial pastel » validé (`design/DESIGN.md`) — blanc +
  texte noir + 4 pastels mats (ambre → sauge → pêche → citron) en badges ;
  script Caveat réservé au « jour N » ; **CTA = rectangle plein noir, jamais en
  pilule ni en pastel** ; fonds clairs uniquement ; unisexe. Anti-patterns
  interdits : fonds sombres/dégradés/néon, listes surchargées.
- **Données** : 100 % locales (MMKV / Drizzle), aucune auth, aucun backend,
  aucune clé API.
- **Photo & signature** : tout reste sur l'appareil ; la signature n'est pas
  persistée (promesse produit).
- **Stack** : React Native + Expo, en partant du template golden de la factory.
- **Une seule app** (les 3 intensités + personnalisation dedans), iOS + Android,
  metadata store en anglais (marché US/global).

---

*Fin du PRD. Prochaine étape après validation : G3.5 — rédaction de la
spécification détaillée à partir de ce document.*
