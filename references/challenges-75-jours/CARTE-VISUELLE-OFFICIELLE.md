# CARTE VISUELLE — 75 Hard officiel (com.media44seven.seventyfivehard)

> Fiche produite par l'analyste-visuel à partir de **22 captures Android réelles** du
> 2026-09-26 (usage réel, 21:21 → 21:24) + 1 capture de l'écran natif Google (com.google.android.gms).
> Chaque affirmation s'appuie sur une capture citée par nom de fichier (raccourci jour+heure).
> Inférences marquées **[hypothèse]**.

---

## 1. Ce que les captures couvrent — et ne couvrent pas

Couverture **quasi complète du funnel jusqu'au fonctionnement quotidien** : welcome →
création de compte → carrousel vidéo/promesses → page d'accueil interne (« mini-site ») →
**dashboard Day 1** → réglages de rappels → écran historique/calendrier 75 jours.

**Point négatif structurant : AUCUN PAYWALL n'apparaît dans les 22 captures.**
Deux explications possibles : (a) le compte de test n'a jamais rencontré la porte de
monétisation dans ce parcours court [hypothèse], ou (b) le profil utilisé était déjà
sous abonnement — l'historique complet du calendrier à 21:24:20 suggère un profil
fonctionnel [hypothèse]. Ce qui est certain : la monétisation n'est PAS mise en avant
dans le premier parcours Android capturé — à l'opposé du récit de l'analyse textuelle
(« abo requis, impopulaire »). Les plaintes de l'analyse (abo imposé) concernent
probablement un moment non capturé ici.

---

## 2. Inventaire UI par écran (élément → fonction supposée)

### A. Welcome « WELCOME TO 75 HARD » — 21-21-11
| Élément | Fonction supposée |
|---|---|
| Logo bêche (♠) avec « 75 » intégré, blanc sur noir | Icône de marque unique — le programme EST le logo |
| « Over the next 75 days, you will develop the grit... » | Promesse tonalité militaire, pas de features |
| CTA blanc pleine largeur « Create a New Profile » | Entrée unique |
| Lien sobre « Login to Existing Profile » | Path retour utilisateur |

### B. Création de profil — 21-21-14 + 21-21-31 (com.google.android.gms)
| Élément | Fonction |
|---|---|
| bouton blanc « Sign in with Google » + lien « Create with email instead » | Compte demandé dès l'ÉCRAN 2, avant toute valeur |
| Sélecteur natif de comptes Google (capture gms) | Auth native OS — zéro friction technique mais engagement-instantané |

### C. Modal « Allow Notifications » — 21-21-40
Allow (pleine largeur) / Maybe Later (contour) / X en haut. Illustration téléphone + croix rouge.
Rappel demandé tôt ; sortie possible.

### D. Chargements — 21-21-44 « Initializing 75 Hard » + 21-21-46 « Loading user data »
Deux écrans de chargement successifs à identité rouge — latence réseau visible juste après
l'authentification [hypothèse : sync cloud obligatoire au signup].

### E. Carrousel vidéo/promesse — 21-22-48 → 21-23-40 (6 diapos)
1. **21-22-48** — Photo Andy Frisella (chapeau brosses) + bouton play rouge + « ARE YOU READY? » /
   « Start becoming who you were meant to be » + 6 dots + « Skip Video ». Lapparateur de marque personnel en avant (visage, pas produit).
2. **21-22-56 / 21-23-01** — Vidéo 53 s en ligne (contrôles natifs, t-shirt « REAL AF ») : le carrousel de promesse est remplacé par une vidéo de« parlé » [hypothèse : 6 vidéos du même type, une par diapo].
3. **21-23-14** — « DAILY REMINDERS » — « Stay on track with custom daily reminders » + état
   « Notifications Enabled! » (bouton affiché grisé, validation visuelle de l'autorisation donnée plus tôt).
4. **21-23-21** — « TRACK PROGRESS » + gros cercle rouge check. Texte brutal :
   *« Fail any of them and start over at Day 1 »* — le quotidien est là VENDU COMME CONTRAINTE et annoncé AVANT la première utilisation.
5. **21-23-24 (dupliqué 21-23-30)** — « DAILY RULES — Zero Compromises, Zero Substitutions » :
   les 7 règles fixes listées gris sur noir (2×45 min workouts 3h apart / 1 outdoor / follow a diet /
   no alcohol or cheat meals / drink 1 gallon of water / read 10 pages nonfiction + « Audiobooks do not count » /
   progress pic). Contenu identique au dashboard à venir.
6. **21-23-36** — « EASY SHARING » : logos Instagram / flèche / logo 75 — la promesse social =
   « partage ton jour sur Instagram depuis l'app » (partage éditorial : même design graphique que la distribution de Her 75, mais ici un LOGO pas un sticker prétendu).
7. **21-23-40** — « PROGRESS CHECK — Have you already started 75 hard? » + « I'm Starting Fresh » /
   « I Already Started ». Précieux pattern : récupération des utilisateurs au milieu de route (   le jour actuel est reporté — écran de suivi calendrier [hypothèse]).

### F. Page d'accueil interne (mini-site) — 21-23-44 + 21-23-47
| Élément | Fonction |
|---|---|
| Photo hero Frisella + « WELCOME TO 75 HARD » + Settings engrenage haut-droite | L'app s'affiche comme un SITE DE MARQUE, pas comme un outil |
| Bloc vidéo « All About 75 HARD » (podcast, play) | Contenu éditorial en page d'entrée — éducatif mais temps long |
| **« THE BOOK ON MENTAL TOUGHNESS — GET IT NOW »** | **Cross-sell du livre imprimé de Frisella DANS l'app** |
| **« GET 75 HARD GEAR — Shirts · Patches · Pins · Challenge Coins — SHOP NOW »** | **Boutique de merch intégrée au funnel d'entrée** |
| CTA rouge « Start Day 1 Now » + lien « I've already started » | L'action produit vient EN DERNIER de la page (après le spiral de vente) |
| Modal « READY TO START DAY 1? » : « **If you continue, day 1 will begin now.** » + « Not Ready Yet » / « Start Now » (21-23-51) | Confirmation d'irréversibilité [hypothèse : réversible via l'icône crayon sur la carte d'historique] |

### G. Dashboard « DAY 1 » — 21-23-56
| Élément | Fonction |
|---|---|
| Logo spade + titre géant « DAY 1 » + date | Identité de jour, typographie produit « poster » |
| 7 items ronds à cocher EXACTEMENT les règles du carrousel : 45 Minute Workout / 45 Minute Outdoor Workout / Take Progress Picture (icône caméra actionnable) / 10 Pages of Reading / Drink 1 Gallon of Water / Follow a Diet / No Cheat Meals or Alcohol | Checklist binaire, une seule ligne par item, AUCUN tracker granulaire (l'eau est UNE coche, pas une jauge), AUCUN éditeur visible (pas d'ajout/retrait/suppression) [hypothèse : personnalisation ailleurs/absente] |
| Sous chaque item : « ⊕ Add Reminder » | Reminder par tâche, principal outil de rétention |
| Zone « NOTES: » en bas + texte d'exemple | Journal qualitatif du jour |

### H. Bottom-sheet « Reminder: X » — 21-24-02 / 21-24-05 / 21-24-12
Sheet sombre : toggle « Every Day » + 7 tuiles jours S M T W T F S + « Time — 9:23 pm » + Save.
UX pragmatique, composants natifs, esthétique pas travaillée au-delà du noir.

### I. Historique / profil — 21-24-20
| Élément | Fonction |
|---|---|
| Avatar + « mooble Gum » + « Day Ends: 11:59 pm » | Le jour 75 HARD se termine à minuit — deadline quotidienne affichée (pression positive si bienvenue/malvenue selon le jour) |
| Carte « 75 HARD — DAY 1 : Sep 26, 2026 » + icône crayon | La date de départ est ÉDITABLE (remédie partiellement à l'« irréversibilité » du modal G) |
| Grille de numéros 1…63+ visibles, BB textes majuscules | Calendrier 75 jours ✓ jour à jour, uni-dimensionnel, pas de stats |

---

## 3. Wireflow déduit — texte

```
Welcome (21-21-11)
   ↓ (Create a New Profile)
CREATE YOUR PROFILE — Google sign-in (21-21-14) →Accounts natif (21-21-31 gms)
   ↓
Loading ×2 (21-21-44, 21-21-46)
   ↓
Modal Allow Notifications (21-21-40)
   ↓
Carrousel vidéo/promesse 6 diapos (21-22-48 → 21-23-40)
   — diapo 2 : Daily Reminders (état « Notifications Enabled! », 21-23-14)
   — diapo 3 : Track Progress + « fail → restart » (21-23-21)
   — diapo 4 : Daily Rules, 7 règles fixes (21-23-24/30)
   — diapo 5 : Easy Sharing → Instagram (21-23-36)
   — diapo 6 : Progress Check (Fresh / Already started, 21-23-40)
   ↓
Page d'accueil interne « mini-site » : hero video + podcast + LIVRE + GEAR
   + « Start Day 1 Now » (21-23-44 → 21-23-47)
   ↓ (Start Day 1 Now)
Modal « day 1 begins now » (21-23-51) — Start Now
   ↓
DASHBOARD DAY 1 — checklist 7 items + add reminder + notes (21-23-56)
   ↓ (Add Reminder)
Bottom-sheet réglage rappel ×3 (21-24-02 → 21-24-12)
   ↓
Historique/calendrier 75 jours éditable (21-24-20)
```

Temps d'entrée réel (captures) : **~3 minutes** de 21:21 à 21:24 — le produit (checklist) est
atteint PLUS VITE que chez Her 75 (funnel long) mais APRÈS une auth + un mini-site marchand.
Le paywall n'est nulle part dans ce trajet **[hypothèse]**.

---

## 4. Architecture de l'information

- Funnel d'entrée linéaire, puis app à **navigation minimale** : les captures montrent un
  écran-principal (dashboard) + un écran d'historique + Settings ; le mode de passage entre
  eux (pieu / bouton) n'est pas visible — pas de tab bar [habituelle mais non démontrée, hypothèse].
- IA apparente : 1 écran-jour + 1 écran-calendrier + 1 Settings. **Pas d'onglet social,
  pas d'onglet stats, pas d'onglet boutique ségréé** (la boutique vit sur la page d'accueil).
- Rappel : 7 tâches fixes = IA résolument **prescriptive** (le programme EST la liste),
  opposé à Her 75 (custom) et BeHard (challenges multiples).

---

## 5. Choix UX notables + CATALOGUE DES ANTI-PATTERNS (ce qu'on NE fera PAS)

Chaque item est justifié par une capture nommée.

1. **AU-ANTIPATTERN — Compte obligatoire à l'écran 2.**
   `21-21-14` : Google sign-in avant que l'utilisateur ait vu quoi que ce soit du produit
   (le produit est à ~12 écrans). À l'opposé d'Her 75 (compte APRES la création du défi).
   → Pour nous : valeur avant compte, toujours.

2. **ANTIPATTERN — Cross-sell marchand au milieu du funnel d'entrée.**
   `21-23-47` : le livre imprimé (« THE BOOK ON MENTAL TOUGHNESS ») et le merch (shirts,
   patches, pins, coins) sont positionnés AVANT le CTA du challenge. L'utilisateur veut un
   tracker ; il traverse une vitrine. → Brouille la valeur produit ; on ne vend rien dans
   les   écrans d'entrée.

3. **ANTIPATTERN — Aucune preuve sociale.**
   Sur 22 captures, zéro compteur « joined », zéro avis, zéro visage d'utilisateur (mis à
   part Frisella lui-même, `21-22-48`). Her 75 montre compteurs et communauté à chaque
   écran. → Chez nous : preuve sociale dès la 1ʳᵉ diapo.

4. **ANTIPATTERN — Eau = coche binaire.**
   `21-23-56` : « Drink 1 Gallon of Water » est une case du dashboard, pas une jauge de
   progression journalière. Confirmé par les plaintes (analyse-globale : « pas de water
   tracker, le plus cité »). → Notre app : jauge de verres + unités.

5. **ANTIPATTERN — Règles fixes non personnalisables dans l'UI du dashboard.**
   `21-23-56` : 7 items imposés, aucun bouton éditer/ajouter/retirer visible ; les règles
   affichées au carrousel (`21-23-24`) sont identiques, « Zero Compromises » assumé en
   argument de marque. Puissant pour la marque, piège pour l'utilisateur réel (plaintes
   « personnalisation » citées par les concurrents qui cartonnent). → Notre app :
   éditeur de challenge (ajout/retrait/Pauses).

6. **ANTIPATTERN — Framing punitif numérique dès l'onboarding.**
   `21-23-21` : « Fail any of them and start over at Day 1 » en méga-texte du carrousel.
   C'est fidèle au programme, mais l'app l'affiche comme la SEULE mécanique de suivi.
   Pas de « restart doux », pas de reprise sans pénalité. → Notre app : check-in doux,
   messagerie d'échec non punitive (reprise / archivage de la tentative).

7. **ANTIPATTERN — Mode d'irréversibilité faux.**
   `21-23-51` : « If you continue, day 1 will begin NOW » — alarme d'irréversibilité, alors
   que l'historique permet d'éditer la date de départ plus tard (`21-24-20`, icône crayon).
   Avertissement sans fond = peur inutile à première impression. → Notre app : pas de
   dialog d'alarme sur ce qui est réversible.

8. **ANTIPATTERN — Onboarding video-heavy, sans skip clair par diapo.**
   `21-22-48` → `21-23-01` : une vidéo de 53 s remplace une diapo de carrousel, avec
   contrôles natifs en overlay. Un utilisateur pressé cherche « Skip », mais ne peut pas
   survoler diapo par diapo (navigation à points). → Notre app : illustrations statiques,
   skippable partout.

9. **ANTIPATTERN — Dashboard sans vision de progression dans la même page.**
   `21-23-56` : le dashboard ne montre NI le streak ni le jour X/75 « carte de calendrier »
   (l'historique est un écran séparé `21-24-20`). En usage quotidien, le retour visuel de
   « où j'en suis dans les 75 » demande une navigation. → Notre app : streak + ring de
   progression TOUJOURS dans le viewport du dashboard.

10. **DESIGN DÉMODÉ** : terminologie plate (boutons rectangulaires gris), rendu d'ingénierie
    plutôt que design (`21-23-56`).
    → Ne pas reproduire le rendu visuel, uniquement la **densité minimale** et les
    « Add Reminder » inline.

Points positifs à RETENIR (pas des antipatterns) :
- « Add Reminder » par tâche, accessible immédiatement (`21-23-56`, `21-24-02`) — le
  rappel personnalisé, intégré à la tâche depuis le dashboard : FRIMEUX, à copier.
- « Progress Check — I'm Starting Fresh / I Already Started » (`21-23-40`) : onboarding qui
  accueille les débutants ET les re-entrants — pattern absolu du segment (rayons redondant
  BeHard/Her 75 n'ont PAS ce mécanisme), à absorber.
- « Day Ends: 11:59 pm » affiché au profil (`21-24-20`) : transparence de la règle du
  minuit — ambiance contractuelle assumée, crédibilise la marque.
- Densité minimale dashboards : 1 tâche = 1 ligne (lisibilité maximale) — à garder (façonné
  à notre design system).

---

## 6. Qualité perçue : **4/10**

- **+** : funnel court et honnête (le paywall pressenti n'apparaît pas au début) ; logo fort
  (le spade 75) ; dashboard clair et prévisible ; « Add Reminder » natif par tâche ;
  réutilisation d'un calendrier 75 jours éditable.
- **−** : pas de preuve sociale, rendu design daté (gris plats, visibles `21-23-56`), cross-sell
  marchand en entrée, vidéo longue au milieu du carrousel, jauge d'eau absente (coche
  binaire), aucune personnalisation visible.
- Note conditionnée aux 22 écrans visibles (pas de paywall observé, usage réel possible).
  [+ réévaluable si le paywall était atteint en usage réel]
- Rapport au mérite d'affaires : note rapproche l'app du verdict « grande MARQUE, faible
  PRODUIT » (analyse-globale : sentiment 0-22 %, $15k/mois quand BeHard fait $65k).

---

## 7. Design language

| Trait | Obs. (captures) |
|---|---|
| Fond | Noir absolu, à peine une coupure blanc au welcome CTA |
| Typo | Titres capitals grasse en « sténopé » (poster), corps gris clair standard |
| Accent | Rouge vif (logo, play, CTA « Start Day 1 Now », cercle-check) |
| Couleurs secondaires | Gris (checkbox, bottom sheets) — bicolore de fait |
| Illustrations | Photos de Frisella + icônes iOS-style plats |
| Composants | Boutons rectangulaires pleins blanc/gris — PAS de pills, PAS d'arrondis marqués |
| Ambiance | Militaire / discipline : noir, rouge, majuscules, « Zero Compromises » |
| Relation à la marque | L'app est l'ALERTE de la marque personnelle (podcast, livre, gear) — le produit est secondaire |

---

## 8. À retenir pour la suite du travail

- Trois patterns à **copier** : l'« Add Reminder » par tâche, la question « Starting Fresh /
  Already Started », la date de départ éditable (garder l'esprit, supprimer le dialog d'alarme).
- Tout le reste du flux est un catalogue de convenances à abandonner — la **hauteur
  technoligique et émotionnelle** de notre offre sera la différence face à cette référence.
