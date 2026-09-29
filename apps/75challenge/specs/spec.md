# Spécification fonctionnelle : 75 Challenge — v1 (MVP)

**Branche de feature** : `001-v1-mvp`

**Créée le** : 2026-09-29

**Statut** : Brouillon (gate G3.5 — en attente de validation utilisateur)

**Entrée** : PRD validé `apps/75challenge/PRD.md` (gate G3) + décisions fermes `apps/75challenge/BRAINSTORM.md` + thème validé `apps/75challenge/design/DESIGN.md`. Toute divergence avec le PRD doit être tranchée explicitement — la spec ne contredit jamais le PRD en silence.

> Promesse produit : **« Ton défi de 75 jours, à toi de le finir. »**
> Tracker de challenges 75 jours (Soft / Medium / Hard + personnalisé), 100 % local,
> zéro compte, achat unique $4.99 à vie, contrat signé au doigt, design pastel éditorial.

---

## User Scenarios & Testing *(obligatoire)*

### User Story 1 — De l'ouverture de l'app au contrat signé (Priorité : P1)

Un nouvel utilisateur découvre l'app, comprend le programme en quelques écrans,
répond à un quiz court, prend confiance (100 % local, zéro compte), puis scelle
son engagement en signant son contrat du doigt — prénom, règles et dates inclus.
Il arrive sur un écran de confirmation « Tu es prêt·e » avec sa carte jour 1.

**Pourquoi cette priorité** : c'est le haut du funnel — si l'onboarding casse,
aucun utilisateur ne démarre jamais de challenge et l'app est morte, quelle que
soit la qualité du reste. C'est aussi là que se jouent nos deux différenciations
les plus fortes : le rituel du contrat signé (mécanique prouvée à $65K/mois chez
BeHard) et le parcours de confiance (meilleur funnel observé du segment, Abeni 7,5/10).

**Test indépendant** : un testeur qui n'a jamais vu l'app doit pouvoir la parcourir
de l'ouverture au contrat signé en moins de 3 minutes, sans compte ni email, et
recevoir sa carte récap « jour 1 ». Livre à elle seule la valeur : « j'ai compris
le programme, je me suis engagé, je sais ce que je fais demain. »

**Scénarios d'acceptation** :

1. **Étant donné** un nouvel utilisateur qui ouvre l'app, **quand** il parcourt
   l'accroche, **alors** il voit 3-4 écrans (une idée par écran : promesse
   identitaire + preuve sociale), aucune vidéo bloquante, et un bouton « Passer »
   disponible à tout moment.
2. **Étant donné** l'écran d'éducation, **quand** l'utilisateur avance, **alors**
   chaque pilier du programme est expliqué sur un écran dédié avec les chiffres
   réels (ex. « jusqu'à 3,8 L d'eau/jour en mode Hard »), et l'étape est skippable.
3. **Étant donné** le quiz de personnalisation, **quand** l'utilisateur répond,
   **alors** il répond à 5 questions maximum (motivation, crainte n°1),
   majoritairement par images, et voit l'interlude anti-abandon (« La plupart des
   gens lâchent avant le jour 10. Toi, tu es déjà en avance. »).
4. **Étant donné** l'écran de confiance, **quand** l'utilisateur y arrive,
   **alors** il lit explicitement que tout est stocké sur son téléphone, que rien
   ne part sur des serveurs, et qu'aucun compte n'est à créer — avec un carousel
   d'avis 5★ intégré au parcours.
5. **Étant donné** un challenge choisi, **quand** l'écran contrat s'affiche,
   **alors** il présente le prénom saisi, la liste des règles du challenge, et
   les dates de début et de fin auto-calculées.
6. **Étant donné** la zone de signature, **quand** l'utilisateur signe du doigt,
   **alors** le bouton « Je m'engage » s'active ; **quand** rien n'est signé (ou
   tout est effacé), **alors** le bouton reste inactif.
7. **Étant donné** la zone de signature, **quand** elle est affichée, **alors** la
   mention « Ta signature n'est pas enregistrée — elle reste sur cet écran » est
   visible à côté, et conformément à cette promesse l'image de signature n'est
   pas persistée (seul le fait d'avoir signé est mémorisé).
8. **Étant donné** tout le parcours d'onboarding, **quand** l'utilisateur arrive
   au tableau de bord, **alors** aucun compte, aucun email et aucune autorisation
   système n'ont été demandés (la permission de notifications n'est demandée qu'au
   réglage du premier rappel).
9. **Étant donné** le contrat signé, **quand** l'utilisateur valide, **alors** il
   voit l'écran de confirmation « Tu es prêt·e » avec sa carte récap jour 1
   (dates, règles) avant toute sollicitation de paiement.

---

### User Story 2 — Choisir et calibrer son challenge (Priorité : P1)

L'utilisateur choisit son intensité (Soft / Medium / Hard) ou le mode
Personnalisé, et l'app en déduit automatiquement la durée (25/50/75 jours), les
doses de chaque habitude (eau, exercice, lecture…), la date de fin exacte —
affichée **avant** de démarrer. Il peut éditer un preset sans tout recréer,
choisir son mode de jour raté (strict ou souple), et reprendre un challenge déjà
commencé à son jour actuel.

**Pourquoi cette priorité** : le moteur 25/50/75 + doses dynamiques **est** le
produit — la valeur technique prouvée du segment (Challenge Habits) et la
réponse au désir n°1 des avis (personnalisation). Un moteur faux (mauvaise
durée, mauvaise date de fin, doses incohérentes) détruit la promesse immédiatement.

**Test indépendant** : sélectionner chacune des 3 intensités et vérifier que
durée, doses et dates de fin s'affichent correctement et se recalculent
instantanément ; créer un challenge personnalisé ; éditer un preset. Livre à
elle seule la valeur : « j'ai un plan précis, daté, adapté à mon niveau. »

**Scénarios d'acceptation** :

1. **Étant donné** l'écran de choix du challenge, **quand** l'utilisateur
   sélectionne Soft, Medium ou Hard, **alors** la durée (25 / 50 / 75 jours) et
   les doses du preset s'affichent : eau 2 / 2,5 / 3,8 L·j ; exercice 20 / 45 /
   2×45 min·j (dont 1 séance en extérieur en Hard) ; lecture 5 / 10 / 10 pages·j
   (non-fiction en Hard) ; alimentation souple / stricte / stricte sans alcool ni
   cheat meal ; photo 1×/sem / 1×/j / 1×/j.
2. **Étant donné** une intensité sélectionnée, **quand** l'utilisateur change
   d'intensité, **alors** la durée, les doses et la date de fin se mettent à jour
   instantanément, avant tout démarrage.
3. **Étant donné** une date de début, **quand** l'écran de confirmation du choix
   s'affiche, **alors** la date de fin exacte est calculée et visible (ex. début
   le 5 janv. → fin le 29 janv. pour 25 jours).
4. **Étant donné** la carte « Personnalisé », **quand** un utilisateur Premium la
   configure, **alors** il choisit une durée libre (1 à 365 jours, 75 par défaut)
   et compose librement ses règles ; **quand** un utilisateur gratuit la touche,
   **alors** un badge couronne signale le caractère Premium et ouvre le paywall.
5. **Étant donné** un preset existant, **quand** un utilisateur Premium l'édite,
   **alors** il ajuste les doses et ajoute/retire des règles **sans tout recréer
   de zéro** ; les modifications s'appliquent dès le lendemain sans réécrire les
   jours passés.
6. **Étant donné** la configuration du challenge, **quand** l'utilisateur choisit
   son mode de jour raté, **alors** il opte pour « strict » (règle officielle :
   retour au jour 1 — défaut en Hard) ou « souple » (jour marqué incomplet, la
   tentative continue — défaut en Soft), avec une explication claire des deux.
7. **Étant donné** la question « Tu commences aujourd'hui ou tu as déjà
   commencé ? », **quand** l'utilisateur indique avoir déjà commencé, **alors**
   il saisit son jour actuel (ou une date de début passée) et reprend son
   challenge à ce jour, sans tout recommencer.

---

### User Story 3 — Vivre sa journée de challenge (Priorité : P2)

Chaque jour, l'utilisateur ouvre une seule page : « day N » en typographie
script, « Jour N sur X », dates, compte à rebours jusqu'à minuit, et la
checklist dosée de ses habitudes. Il coche ou saisit ses unités (eau, minutes,
pages), prend sa photo quotidienne avec l'éditeur intégré, renseigne
optionnellement poids et journal. Quand toutes les règles obligatoires sont
faites, le jour se valide automatiquement. Un jour manqué est traité sans honte.

**Pourquoi cette priorité** : c'est la boucle de rétention — l'endroit où
l'utilisateur vit 25 à 75 jours. Si elle casse (jour non validé à tort, dose
perdue, compte à rebours faux), la confiance s'effondre et les avis 1★ arrivent.
P2 seulement parce que US1/US2 conditionnent l'entrée dans cette boucle.

**Test indépendant** : sur un challenge démarré, simuler une journée complète —
cocher les habitudes, remplir la jauge d'eau, prendre une photo, valider le jour —
puis vérifier le basculement au jour suivant. Livre à elle seule la valeur :
« je vis mon défi au quotidien, sans friction ni culpabilité. »

**Scénarios d'acceptation** :

1. **Étant donné** le tableau de bord, **quand** l'utilisateur l'ouvre, **alors**
   il voit en un coup d'œil, sans navigation : « day N » (typo script Caveat),
   « Jour N sur X », dates de début/fin, % du jour complété, et le compte à
   rebours « Temps restant » jusqu'à minuit.
2. **Étant donné** la checklist du jour, **quand** l'utilisateur la consulte,
   **alors** chaque habitude affiche sa dose (« Au moins X / jour »), son état,
   et se coche d'un geste OU se saisit en unités détaillées.
3. **Étant donné** la règle d'eau, **quand** l'utilisateur ajoute une quantité
   (ex. +240 ml), **alors** la jauge visuelle se remplit et le reste s'affiche en
   unités familières (ml/L et verres) ; **quand** la dose du jour est atteinte,
   **alors** la règle se coche automatiquement. Jamais de case binaire sans jauge.
4. **Étant donné** la règle d'exercice, **quand** l'utilisateur saisit des
   minutes, **alors** elles s'additionnent vers la dose ; en mode Hard, la
   distinction intérieur/extérieur est proposée.
5. **Étant donné** la règle de lecture, **quand** l'utilisateur saisit des pages
   (±1, ±5), **alors** le compteur avance vers la dose ; l'alimentation se
   confirme par Oui/Non.
6. **Étant donné** la photo quotidienne, **quand** l'utilisateur prend une photo
   ou la choisit dans la galerie, **alors** l'éditeur intégré permet cadrage et
   rotation, et le badge ★ Fait s'applique après validation ; les photos restent
   sur l'appareil, consultables jour par jour.
7. **Étant donné** une tâche personnalisée marquée « obligatoire pour valider le
   jour », **quand** toutes les autres règles sont faites sauf elle, **alors** le
   jour ne peut pas être validé ★ Fait.
8. **Étant donné** toutes les règles obligatoires accomplies, **quand** la
   dernière est cochée, **alors** le jour se valide automatiquement avec le badge
   ★ Fait et une micro-célébration discrète.
9. **Étant donné** minuit passé avec des règles non faites, **quand** le jour
   bascule, **alors** le jour est marqué incomplet avec un message non punitif
   (« Pas grave. Tu reprends demain — ou tu recommences, c'est toi qui
   choisis »), et le mode strict/souple s'applique.
10. **Étant donné** les options du jour, **quand** l'utilisateur saisit son poids
    ou écrit son journal, **alors** les données sont enregistrées localement et
    rattachées à ce jour.

---

### User Story 4 — Débloquer Premium en confiance (Priorité : P2)

L'utilisateur rencontre l'offre Premium en trois couches jamais bloquantes : une
modal skippable après la confirmation (prix unique $4.99 affiché en clair, croix
toujours visible), un rail « Premium » permanent en tête du tableau de bord, et
des badges couronne sur les actions payantes. Il achète d'un seul paiement, à
vie, sans compte — et peut restaurer son achat à tout moment.

**Pourquoi cette priorité** : c'est le revenu — mais notre différenciation n°1
est précisément de monétiser **sans piéger** (la plainte n°1 du segment). La
promesse « le cœur reste utilisable gratuitement » fait partie du produit ;
un paywall bloquant violerait le positionnement et générerait exactement les avis
qu'on promet d'éviter. P2 car l'app fonctionne et retient sans achat.

**Test indépendant** : ouvrir le paywall depuis les 3 points d'entrée, vérifier
prix/croix/mentions, fermer sans blocage, simuler un achat puis une restauration.
Livre à elle seule la valeur : « je paie une fois, en confiance, pour la
personnalisation. »

**Scénarios d'acceptation** :

1. **Étant donné** l'écran de confirmation de l'onboarding, **quand** la modal
   paywall s'affiche, **alors** le prix « $4.99 — un seul paiement, à vie » est
   lisible en caractères clairs dès la carte, avec la croix de fermeture toujours
   visible et contrastée.
2. **Étant donné** la modal paywall, **quand** l'utilisateur la ferme par la
   croix, **alors** il accède au cœur du produit sans blocage ni dégradation
   (onboarding, 3 presets, boucle quotidienne, calendrier, archivage, partage,
   1 rappel quotidien restent gratuits et complets).
3. **Étant donné** le tableau de bord, **quand** l'utilisateur le consulte,
   **alors** le rail permanent « Premium » est visible en tête de page, et les
   actions payantes portent un badge couronne ; rail et badges ouvrent le même
   paywall, à tout moment.
4. **Étant donné** le paywall ouvert, **quand** l'utilisateur lit l'offre,
   **alors** il ne voit aucune mention d'abonnement, aucun essai qui se
   transforme en renouvellement, aucun compte à rebours artificiel, aucune
   présélection trompeuse.
5. **Étant donné** un achat effectué, **quand** l'utilisateur réinstalle l'app ou
   change d'appareil (même store), **alors** « Restaurer mon achat » — accessible
   depuis le paywall ET les réglages — réactive Premium sans compte.
6. **Étant donné** un utilisateur gratuit, **quand** il touche une action Premium
   (éditer les doses, ajouter une tâche personnalisée, challenge personnalisé,
   smart reminders, challenge simultané), **alors** le badge couronne ouvre le
   paywall — jamais d'interruption brutale en plein geste.

---

### User Story 5 — Mesurer sa progression, recommencer, partager (Priorité : P3)

L'utilisateur visualise son challenge entier : calendrier des X jours colorié
selon l'état de chaque jour, % global de complétion, % de jours parfaits, détail
de chaque jour passé. S'il recommence, sa tentative précédente est archivée
intacte (photos, notes, calendrier) et consultable en lecture seule — badge
« tentative N » au tableau de bord. Il partage sa progression en image (9:16 et
1:1) via la feuille native, sans aucun réseau social intégré.

**Pourquoi cette priorité** : c'est la couche de motivation long terme et la
distribution virale gratuite — mais l'app reste utilisable et monétisable sans
elle au jour 1. L'archivage des tentatives répare la plainte majeure du segment
(officielle : « notes just get deleted ») et sert le cas d'usage « reprise ».

**Test indépendant** : sur un challenge avec plusieurs jours renseignés, ouvrir
le calendrier, taper un jour passé, recommencer une tentative (vérifier
l'intégrité de l'archive), générer et partager l'image de progression. Livre à
elle seule la valeur : « je vois mon chemin, mon histoire est conservée, je peux
le montrer. »

**Scénarios d'acceptation** :

1. **Étant donné** le calendrier, **quand** l'utilisateur l'ouvre, **alors** la
   grille 1→X (25/50/75 ou durée personnalisée) colore chaque jour selon son
   état (fait / partiel / raté / futur / aujourd'hui mis en avant), avec le %
   global de complétion et le % de jours parfaits.
2. **Étant donné** un jour passé, **quand** l'utilisateur le touche, **alors** le
   détail du jour s'affiche (règles et valeurs saisies, photo, journal).
3. **Étant donné** un challenge en cours, **quand** l'utilisateur recommence,
   **alors** une nouvelle tentative est créée et la précédente est **archivée
   intacte** (calendrier, photos, notes, dates) ; le badge « tentative N » est
   visible sur le tableau de bord ; les anciennes tentatives sont consultables en
   lecture seule.
4. **Étant donné** le bouton « Partager ma progression », **quand** l'utilisateur
   l'active, **alors** une image propre au thème éditorial pastel est générée
   (jour N/X, règles cochées, dates, nom du challenge) aux formats story 9:16 et
   carré 1:1, partagée via la feuille native du téléphone — aucune donnée ne
   transite par un serveur, et l'app ne contient aucun feed, ami ni communauté.
5. **Conditionnel (widget)** : **étant donné** que le widget d'écran d'accueil est
   livré en v1 (uniquement si sa fiabilité est démontrée en tests), **quand**
   l'utilisateur effectue une action dans l'app, **alors** le widget affiche jour
   N/X et l'état des règles du jour, synchronisé en moins d'1 minute, sans
   aucun reset de jour intempestif ; il est réservé Premium. Si la fiabilité
   n'est pas démontrée, le widget est reporté en v1.1 et communiqué comme tel
   (voir FR-027).

---

### Edge Cases

- **« J'ai déjà commencé » au jour N** : la date de fin est recalculée depuis la
  vraie date de début ; les jours passés sont pré-marqués sans saisie détaillée
  (ils ne peuvent pas être « parfaits » rétroactivement).
- **Changement de fuseau horaire ou minuit pendant une session active** : la
  bascule du jour se fait au minuit local de l'appareil ; une saisie en cours
  n'est jamais perdue silencieusement.
- **Mode strict, jour raté** : la tentative se termine → archivage automatique
  intégral, puis nouvelle tentative au jour 1. **Mode souple** : le jour est
  marqué incomplet et la tentative continue. Le message reste non punitif dans
  les deux cas.
- **Modification d'une règle ou tâche en cours de challenge** : s'applique dès le
  lendemain, sans réécriture des jours passés (jamais de réécriture d'historique).
- **Permission caméra refusée** : la photo peut être choisie depuis la galerie.
  **Permission notifications refusée** : les rappels sont simplement désactivés,
  sans blocage ni re-demande agressive.
- **Signature vide ou entièrement effacée** : « Je m'engage » reste inactif.
- **Plus de 4 règles actives** : la séquence des 4 pastels de badges boucle
  (règle 5 = ambre, 6 = sauge…) — décision de thème DESIGN.md §9.
- **Durée personnalisée aux bornes (1 jour / 365 jours)** : acceptées ; dates de
  fin recalculées ; rien ne casse la grille calendrier.
- **Réinstallation ou nouvel appareil** : les données locales sont perdues (100 %
  local, assumé et communiqué dès l'onboarding) ; « Restaurer mon achat »
  réactive Premium sans compte.
- **Fermeture de l'app pendant le paywall** : au retour, aucun état bloquant ;
  le rail Premium reste l'accès permanent.

## Requirements *(obligatoire)*

### Functional Requirements

**Onboarding & contrat**

- **FR-001** : Le système DOIT proposer un funnel d'onboarding séquencé : accroche
  (3-4 écrans, une idée par écran, preuve sociale dès le premier écran, bouton
  « Passer » permanent) → éducation (1 règle = 1 écran, chiffres réels,
  skippable) → quiz (≤ 5 questions, majoritairement par images, interlude
  anti-abandon) → confiance (100 % local / zéro compte explicite + avis 5★) →
  contrat → confirmation « Tu es prêt·e » (carte récap jour 1).
- **FR-002** : Le système NE DOIT demander AUCUN compte, email ni autorisation
  système avant le tableau de bord ; la permission de notifications n'est
  demandée qu'au réglage du premier rappel.
- **FR-003** : Le contrat DOIT afficher le prénom saisi, les règles du challenge
  choisi et les dates de début/fin auto-calculées ; la signature se fait au doigt
  dans une zone dédiée (effaçable) ; le bouton « Je m'engage » DOIT rester
  inactif tant que rien n'est signé.
- **FR-004** : L'image de signature NE DOIT PAS être persistée ; seul le fait
  d'avoir signé est mémorisé ; la mention « Ta signature n'est pas enregistrée »
  DOIT être visible à côté de la zone de signature.

**Moteur de challenges**

- **FR-005** : Le système DOIT fournir 3 presets : Soft (25 jours), Medium
  (50 jours), Hard (75 jours), chacun avec ses doses dynamiques — eau
  2 / 2,5 / 3,8 L·j ; exercice 20 / 45 / 2×45 min·j (dont 1 séance en extérieur
  en Hard) ; lecture 5 / 10 / 10 pages·j (non-fiction en Hard) ; alimentation
  souple / stricte / stricte sans alcool ni cheat meal ; photo 1×/sem / 1×/j / 1×/j.
- **FR-006** : Les dates de début et de fin exactes DOIVENT être calculées et
  affichées AVANT le démarrage ; tout changement d'intensité met à jour
  instantanément durée, doses et date de fin.
- **FR-007** : Le mode Personnalisé (Premium) DOIT permettre une durée libre de
  1 à 365 jours (75 par défaut) et une composition libre des règles.
- **FR-008** : L'utilisateur Premium DOIT pouvoir éditer un preset (ajuster les
  doses, ajouter/retirer une règle) sans tout recréer ; les modifications
  s'appliquent dès le lendemain, sans réécriture de l'historique.
- **FR-009** : Le mode de jour raté DOIT être configurable : « strict » (retour
  au jour 1 ; défaut en Hard) ou « souple » (jour marqué incomplet, la tentative
  continue ; défaut en Soft).
- **FR-010** : Le système DOIT proposer « j'ai déjà commencé » : reprise au jour
  actuel saisi (ou date de début passée modifiable), avec recalcul de la date de
  fin.

**Boucle quotidienne**

- **FR-011** : Le tableau de bord DOIT tout afficher en une page sans navigation :
  « day N » (typo script), « Jour N sur X », dates, % du jour complété, compte à
  rebours « Temps restant » jusqu'à minuit, checklist complète du jour.
- **FR-012** : Chaque habitude DOIT afficher sa dose (« Au moins X / jour ») et
  accepter deux gestes : coche directe OU saisie d'unités (eau en ml avec
  boutons ± ; exercice en minutes avec distinction intérieur/extérieur en Hard ;
  lecture en pages ±1/±5 ; alimentation en Oui/Non) ; la coche se déclenche
  automatiquement quand la dose est atteinte.
- **FR-013** : L'eau DOIT avoir une jauge visuelle (jamais une case binaire) avec
  reste affiché en unités familières (ml/L et verres) ; les unités
  (métrique/impérial) suivent le réglage de l'appareil et sont modifiables dans
  les réglages.
- **FR-014** : La photo quotidienne DOIT permettre prise de vue ou choix galerie,
  recadrage et rotation dans un éditeur intégré, badge ★ Fait après validation ;
  les photos restent sur l'appareil et sont consultables par jour et par
  tentative.
- **FR-015** : Les tâches personnalisées (Premium) DOIVENT avoir titre, icône,
  type (case à cocher ou compteur avec objectif chiffré), description
  optionnelle, et l'option « obligatoire pour valider le jour » qui bloque le
  ★ Fait ; modification/suppression à tout moment, applicable dès le lendemain.
- **FR-016** : Le jour DOIT se valider automatiquement quand toutes les règles
  obligatoires sont faites → badge ★ Fait + micro-célébration discrète.
- **FR-017** : À minuit avec des règles non faites, le jour DOIT être marqué
  incomplet, avec message non punitif, puis application du mode strict (tentative
  archivée, reprise jour 1) ou souple (la tentative continue).
- **FR-018** : Le poids du jour et le journal du jour DOIVENT être saisissables
  en option, stockés localement et rattachés au jour.

**Monétisation**

- **FR-019** : L'offre DOIT être un achat unique non-consommable de **$4.99,
  valable à vie**, prix affiché en clair dès la carte ; AUCUN abonnement, AUCUNE
  publicité, aucun compte à rebours artificiel, aucune présélection trompeuse.
- **FR-020** : Le paywall DOIT exister en 3 couches : modal skippable (croix
  toujours visible et contrastée), rail permanent « Premium » en tête du tableau
  de bord, badges couronne sur les actions payantes — tous ouvrant le même
  paywall.
- **FR-021** : Fermer le paywall NE DOIT bloquer ni dégrader AUCUNE fonction du
  cœur gratuit (onboarding complet + contrat, 3 presets, boucle quotidienne
  complète, calendrier, tentatives archivées, partage image, 1 rappel quotidien).
- **FR-022** : « Restaurer mon achat » DOIT être accessible depuis le paywall ET
  les réglages (indispensable en l'absence de compte).
- **FR-023** : La frontière gratuit/Premium DOIT être : gratuit = cœur complet ;
  Premium = édition des presets (doses et durée), tâches personnalisées
  illimitées (dont « obligatoire »), challenge 100 % personnalisé, smart
  reminders (rappels par tâche, multiples, ton adapté au quiz), challenges
  simultanés (gratuit : 1 seul actif), widget (si livré).

**Suivi, archivage, partage**

- **FR-024** : Le calendrier DOIT afficher la grille 1→X avec états coloriés
  (fait / partiel / raté / futur / aujourd'hui mis en avant), le % global de
  complétion et le % de jours parfaits ; un tap sur un jour passé ouvre son
  détail (règles, photo, journal).
- **FR-025** : Recommencer DOIT archiver la tentative précédente intacte
  (calendrier, photos, notes, dates), afficher le badge « tentative N » sur le
  tableau de bord, et rendre les anciennes tentatives consultables en lecture
  seule.
- **FR-026** : Le partage DOIT générer une image au thème éditorial pastel (jour
  N/X, règles cochées, dates, nom du challenge) en formats 9:16 et 1:1, via la
  feuille native ; aucune donnée ne transite par un serveur ; aucune fonction
  sociale interne (feed, amis, communauté) en v1.
- **FR-027 (CONDITIONNEL)** : Le widget d'écran d'accueil NE DOIT être livré en
  v1 QUE si sa fiabilité est démontrée en tests : synchronisation < 1 minute
  après chaque action dans l'app, zéro décalage ou reset de jour intempestif.
  Sinon il est reporté en v1.1 et communiqué honnêtement. Si livré : affichage
  jour N/X + état des règles du jour, réservé Premium (badge couronne en gratuit).
- **FR-028** : Les notifications DOIVENT être : gratuit = 1 rappel quotidien
  global (heure au choix) ; Premium = rappels par tâche, multiples, horaires au
  choix, ton adapté aux réponses du quiz. La demande d'avis store NE DOIT
  apparaître qu'après un moment de valeur (ex. 3e jour validé), jamais au jour 1.

**Données, confidentialité, design**

- **FR-029** : TOUTE donnée (profil, quiz, challenges, jours, photos, poids,
  journal, statut Premium) DOIT persister exclusivement sur l'appareil ; aucun
  backend, aucune authentification, aucune clé API, aucune donnée nominative
  transmise.
- **FR-030** : L'interface DOIT appliquer le thème « éditorial pastel » : fond
  blanc, texte noir, les 4 pastels mats (ambre → sauge → pêche → citron)
  réservés aux badges (séquence bouclée au-delà de 4 règles), CTA principal =
  rectangle plein noir, typo Caveat uniquement pour « jour N », Playfair Display
  jamais dans l'app (store/marketing uniquement).
- **FR-031** : Anti-patterns INTERDITS : fonds sombres, dégradés ou néon ; CTA en
  pilule ou en pastel ; texte de liste centré ; paywall bloquant ou à croix
  camouflée ; compte forcé ; abonnement ; vidéo d'onboarding bloquante ; framing
  punitif (« raté = honte ») ; prompt de notation au jour 1.

### Key Entities *(données — sans implémentation)*

- **Challenge** : un défi configuré — intensité/preset (Soft, Medium, Hard,
  Personnalisé), durée en jours, date de début, date de fin calculée, mode de
  jour raté (strict/souple), ensemble de règles ordonnées.
- **Règle (Rule)** : une habitude du challenge — type (eau, exercice, lecture,
  alimentation, photo, personnalisée), dose cible et unité, fréquence
  (quotidienne/hebdomadaire), caractère obligatoire pour la validation du jour.
- **Tentative (Attempt)** : une exécution du challenge — numéro, dates réelles de
  début/fin, statut (en cours, terminée, abandonnée), archive complète
  (calendrier, photos, notes) consultable en lecture seule.
- **Jour (DayEntry)** : un jour d'une tentative — date, indice N, état (fait /
  partiel / raté / futur), valeurs saisies par règle (quantités), photo du jour,
  poids, journal, validation ★.
- **Tâche personnalisée (CustomTask)** : une règle créée par l'utilisateur —
  titre, icône, type (case à cocher / compteur avec objectif), option
  « obligatoire pour valider le jour », date d'effet (lendemain).
- **Profil local (UserProfile)** : prénom, réponses du quiz (motivation, crainte
  n°1), préférences d'unités, réglages de rappels, statut Premium.
- **Achat (Purchase)** : le produit non-consommable unique — statut d'achat,
  possibilité de restauration via le store (sans compte maison).
- **Photo de progression** : un fichier local — jour et tentative associés,
  cadrage/rotation appliqués.

## Success Criteria *(obligatoire)*

### Measurable Outcomes

- **SC-001** : Un nouvel utilisateur complète l'onboarding jusqu'au contrat signé
  en **moins de 3 minutes** (mesuré en test usager).
- **SC-002** : **Conversion paywall ≥ 8 %** des nouveaux utilisateurs (prix
  d'appel + paywall honnête ; standard freemium 2-5 %).
- **SC-003** : Complétion : **jour 1 ≥ 60 %** des challenges démarrés ;
  **jour 7 ≥ 30 %** ; **fin d'un Soft (J25) ≥ 10 %**.
- **SC-004** : Rétention **J30 ≥ 15 %**.
- **SC-005** : Note store **≥ 4,5★** ; **0 avis** mentionnant arnaque, prix caché
  ou abonnement ; **≥ 2 %** des actifs laissent un avis.
- **SC-006** : **≥ 99,5 %** de sessions sans crash ; **0 perte de données**
  rapportée.
- **SC-007** : Revenu **≥ $500 en janvier** (~100 ventes) — signal « go » pour v2.
- **SC-008** : Téléchargements : **1 000 en décembre** (rodage) ;
  **5 000-10 000 en janvier** (pic).
- **SC-009** : Soumission aux 2 stores **avant le 15 décembre 2026** ; app en
  ligne **avant le 1er janvier 2027**.
- **SC-010 (conditionnel widget)** : si le widget est livré (FR-027),
  synchronisation < 1 minute mesurée après action et **0 signalement** de reset
  de jour ; en cas de non-livraison, le report v1.1 est annoncé explicitement.

## Assumptions

- **Marché et langue** : cible US/global anglophone ; UI et metadata store en
  anglais en v1 ; localisation repoussée post-v1 si signal.
- **Achat** : IAP non-consommable standard App Store / Google Play ; la
  restauration est gérée par le store — aucun compte maison n'existera en v1.
- **Connectivité** : internet requis uniquement pour l'achat/la restauration ;
  tout le reste de l'app fonctionne hors-ligne.
- **Perte de données au changement d'appareil** : assumée en v1 (100 % local) et
  communiquée explicitement dans l'onboarding ; un export/import manuel de
  sauvegarde (fichier local, toujours sans compte) est candidat v1.1.
- **Mesure sans backend** : les SC sont mesurés via les consoles des stores et
  des analytics locaux anonymisés — aucune donnée nominative collectée.
- **Widget** : le go/no-go v1 est tranché par les tests de fiabilité (FR-027) ;
  en cas de no-go, la communication est honnête (« prévu en v1.1 ») plutôt qu'un
  widget qui ment.
- **Stockage technique** : choix d'implémentation (MMKV/Drizzle selon la stack
  validée de l'app) traité au plan technique (G3.6) — la spec n'impose que la
  contrainte « 100 % sur l'appareil ».
- **Constitution Spec Kit** : la constitution du template racine
  (`.specify/memory/constitution.md`) n'est pas encore remplie ; en attendant,
  les règles de la constitution usine (`AGENTS.md` racine) font foi pour cette
  spec ; la constitution locale de l'app sera rédigée en G3.6/G3.7.
- **Hors périmètre v1 (rappel, non négociable)** : fonctions sociales (amis,
  feed, matching), comptes/cloud, abonnement, coach IA, mode sombre,
  multi-langues, Apple Health/santé connectée, time-lapse photo (v1.1),
  cross-promo d'apps sœurs, prompt de notation au jour 1.
