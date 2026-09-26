# CARTE VISUELLE — Challenge Habits (app.challengehabits.mobile)

> Fiche produite par l'analyste-visuel à partir de **23 captures Android réelles** (usage réel,
> pas de screenshots marketing du store) du 2026-09-26. Chaque affirmation s'appuie sur une
> capture citée par nom de fichier (raccourci heure). Inférences marquées **[hypothèse]**.
> Installation en APK direct (packageinstaller Xiaomi 23-11-04, version non affichée).

---

## 1. Ce que les captures couvrent — et ne couvrent pas

Couverture quasi complète du PRODUIT en usage : onboarding profil → 3 tabs planner
(Home / Habits / Tasks) → catalogue Challenges → détail de challenge (3 modes) → challenge
démarré (50 jours) → boucle quotidienne (swipe-to-check, timer, saisie de progression) →
écran de détail Anti-Stress + Discipline Hard (75 j). **Aucun paywall, aucun écran d'abonnement,
aucune mention "premium" dans les 23 captures.** L'app 75 du dev Abeni (série suivante) montre
elle un paywall — ici rien. **[hypothèse : l'app est gratuite sans paywall, ou le paywall
apparaît sur une action non capturée (ex. créer un challenge custom).]**

---

## 2. Inventaire UI par écran (élément → fonction supposée)

### A. Onboarding = config profil uniquement (23-11-11)
| Élément | Fonction |
|---|---|
| "Welcome to Challenge Habits" / "To start please config your profile" | Aucune promesse vendue, zéro preuve sociale, zéro carousel |
| Avatar illustré (cercle violet) + crayon | Choix d'avatar |
| Champ "Username" (pré-rempli "fafa") | Identité locale |
| CTA pill bleu clair "Get started" | Entrée directe dans l'app |

Onboarding le plus pauvre de toutes les apps analysées : **0 émotion, 0 engagement, 0 monétisation.**

### B. IA = 4 tabs (23-11-16 → 23-11-23)
| Tab | Contenu observé |
|---|---|
| **Home** | "Today" + bande semaine navigable (Th24→Mo28, flèches), chips filtre Type/Progress/Time, état vide illustration hammock "Nothing scheduled this day", FAB "+" |
| **Habits** | Sous-tabs **ToDo / Active habits** + chips Progress/Time/Tag, vide "Just relax.. it's a day off" |
| **Tasks** | Chips Progress/Priority/Tag, "No tasks scheduled this day" |
| **Challenges** | Catalogue (voir C) |

C'est un **planner/productivité généraliste** (habitudes + tâches + challenges), pas une app
"75 jours". Habits et Tasks sont quasi redondants (mêmes chips, mêmes vides) **[hypothèse :
Habits = récurrent, Tasks = one-shot, distinction invisible pour un nouvel utilisateur]**.

### C. Catalogue Challenges (23-11-26 → 23-12-11)
| Élément | Fonction |
|---|---|
| Bannière violette "Timer — It's time to focus on your priorities, start your activity and keep track of your time" | Vente du module timer intégré |
| Cartes challenges pleine largeur avec **photos stock** | Esthétique "blog", pas premium |
| Chaque carte : titre + "N Required habits" + pitch + pill olive à 3 étoiles vides | Difficulté (décochée sur la carte, remplie en détail) |
| CTA flottant "+ New challenge" | Création custom (toujours visible, chevauche les cartes) |

**Types de challenges visibles (INVENTAIRE COMPLET, Q2)** : Discipline (6 hab) · Healthy life (7) ·
Fasting (4) · Social life (3) · Anti-Stress (6) · Studying (4) · Reading (2) · Working (3) ·
Detox (5) + "New challenge" custom.
→ **CATALOGUE GÉNÉRIQUE multi-catégories** : sport (Discipline), alimentation (Healthy life,
Fasting, Detox), mental/stress (Anti-Stress), social (Social life), études/lecture (Studying,
Reading), travail/productivité (Working). Copywriting type "Do you want to...? This challenge is
designed to help you practice a list of habits that can..." sur chaque carte.

### D. Détail de challenge — le moteur 25/50/75 (23-11-55 Anti-Stress, 23-13-32 Discipline)
| Élément | Fonction |
|---|---|
| Sélecteur segmenté **Easy ✓ / Medium / Hard** (violet sur le mode actif) | 3 intensités du MÊME challenge |
| Bloc olive : étoiles + "25 Days | 26/09/2026 - 20/10/2026" | **Durée + dates auto-calculées** — Anti-Stress Easy = 25 j |
| Bloc description violet + "more" | Pitch dépliable |
| Bouton PLAY bleu pill | Démarrer le challenge |
| Liste Habits : icône + libellé + dose "At Least 00:30:00 /Day", "At Least 2 Liter/Day" | Doses quantifiées en temps/volume |

**Hypothèse confirmée par 3 captures** : Easy = **25 j**, Medium = **50 j**
("1st - 50 Days | Sep 26, 2026" une fois démarré, 23-12-36), Hard = **75 j**
("75 Days | 26/09/2026 - 09/12/2026" sur Discipline Hard, 23-13-32).
→ **Le "75" n'est pas une marque ici : c'est la durée du mode Hard d'un moteur générique 25/50/75.**

**Doses qui scalent avec l'intensité** (Anti-Stress) : Meditation 30 min/j en Easy → **1 h/j en
50 j** (23-13-03) ; Exercise 20 min → 45 min ; Drink Water 2 L → 2,5 L (23-13-19).
Discipline Hard : Exercise **1 h 30**/j, Water **3 L**/j (23-13-35).

### E. Habitudes observées dans les challenges (liste complète)
Connect with nature · Meditation · Sleep Early · Exercise · Healthy Diet · Drink Water ·
No Alcohol · Take Progress Photo (23-13-35) · Read self-development book (1 h/j, 23-13-40).
→ la palette couvre sport, alimentation, alcool, sommeil, mental, nature, photo, lecture.

### F. Challenge démarré — boucle quotidienne (23-12-11 → 23-13-19)
| Élément | Fonction |
|---|---|
| Badge pill vert "Active" sur la carte du catalogue | Statut du challenge |
| Bouton devient **STOP rouge** | Arrêter le challenge en cours |
| "1st - 50 Days | Sep 26, 2026" + **ring 0%** | Progression globale du challenge |
| Bandeau violet "Swipe habit card left to update your daily progress." | Micro-tuto du geste clé |
| **Swipe gauche → ✓ vert / ✗ rouge** (23-12-48, 23-13-03) | Validation binaire du jour, geste satisfaisant |
| Habitudes chronométrées : swipe → **⏱ timer + 📖 clavier** (Exercise, 23-13-19) | Saisie temps manuel ou chrono |
| Modal "Progress 00:00:00 / 01:00:00" + crayon, Cancel/Save (23-13-09) | Édition manuelle de la dose du jour |
| **Timer plein écran** + ring + "Start" + bottom sheet "Ambient sound" : Cafe / Rain / Forest (23-12-56) | Chronomètre avec sons d'ambiance |
| Bandeau violet "Track challenge progress >" | Écran de suivi dédié |

### G. Modal de personnalisation — le demi-gap (23-12-20)
> **"Warning — You can't edit default challenge habits. To have personalized habits, create your
> own challenge and adapt it to your goals." [Got it]**

Les challenges pré-faits ne sont PAS modifiables ; la personnalisation = recréer un challenge
custom de zéro. C'est la réponse minimale au besoin #1 de la catégorie (personnalisation).

---

## 3. Wireflow déduit — texte

```
Onboarding : profil (avatar + username) → "Get started"          (23-11-11)
   ↓
APP PRINCIPALE — 4 tabs : Home | Habits | Tasks | Challenges     (23-11-16→23)
   ↓ (tab Challenges)
Catalogue : bannière Timer + 9 challenges photo + "+ New challenge" (23-11-26→47)
   ↓ (tap carte)
Détail : Easy/Medium/Hard → durée 25/50/75 j + dates auto + habitudes dosées
   ↓ (PLAY)
Challenge ACTIF : badge Active, STOP, ring %, habitudes swipe ✓/✗ ou ⏱ (23-12-11→19)
   ↓ (tap habit)
Détail habit : Timer plein écran + sons d'ambiance / modal Progress éditable (23-12-56→13-09)
   ↓ (tap ⋮ habitude par défaut)
Warning : "You can't edit default challenge habits" → renvoi vers custom (23-12-20)
```

Pas de paywall capturé. Pas de compte (profil local). Pas de dimension sociale.

---

## 4. Architecture de l'information

- **4 tabs** (Home / Habits / Tasks / Challenges) — la plus lourde IA des apps 75 analysées.
- Home/Habits/Tasks = 3 vues du même planner, redondance perceptible.
- Challenges = moteur à 2 niveaux (mode 25/50/75 × habitudes dosées).
- Le "75 jours" n'est qu'une durée par défaut du Hard : **aucun branding 75**.

---

## 5. Choix UX notables

1. **Moteur 25/50/75 par intensité** : un seul catalogue sert 3 durées — malin pour toucher
   "75 Soft/ Medium/Hard" sans créer 3 apps.
2. **Doses qui scalent avec le mode** (30 min→1 h meditation ; 2 L→3 L eau) : la difficulté
   n'est pas un label, elle modifie la charge réelle.
3. **Swipe-to-check bicolore** (✓ vert / ✗ rouge) : le geste signature de la boucle quotidienne.
4. **Timer + sons d'ambiance** (Cafe/Rain/Forest) : valeur "focus" inattendue dans un tracker.
5. **Dates auto-calculées affichées avant démarrage** (framed "26/09/2026 - 20/10/2026").
6. **Warning honnête** au lieu d'un paywall : le blocage de modification est expliqué, pas
   monétisé (dans ces captures).
7. Faiblesses : onboarding vide, 3 tabs redondantes, photos stock génériques, étoiles vides
   sur cartes (signal de difficulté raté), "+ New challenge" flottant qui cache le contenu.

---

## 6. Qualité perçue : **5/10**

- **+** : moteur 25/50/75 intelligent, doses dynamiques, swipe-to-check propre, timer avec
  sons, aucune monétisation agressive visible, fonctionne sans compte.
- **−** : zéro émotion dans l'onboarding, design générique Material sombre sans identité,
  accents incohérents (violet/bleu/olive), photos stock, IA redondante, aucune preuve sociale,
  aucun "75" vendu comme concept, personnalisation limitée à "refais tout de zéro".
- Produit d'artisan dev : **fonctionnel mais interchangeable**. Sa valeur = son moteur
  25/50/75, que notre app peut absorber en mieux.

---

## 7. Design language

| Trait | Obs. (captures) |
|---|---|
| Fond | Noir/gris anthracite (dark complet) |
| Accents | Violet bannières + bleu pastel boutons/icônes + olive étoiles (3 langues de couleur) |
| Typo | Roboto défaut, hiérarchie faible |
| Visuels | Illustrations flat generic (hammock) + photos stock Unsplash |
| Composants | Cartes arrondies standard, chips filtres, FAB |

---

## 8. À voler (STEAL LIST)

1. **Le sélecteur Easy/Medium/Hard → 25/50/75 jours avec dates auto** — présenté comme choix
   d'intensité, la durée en découle (même écran, 1 tap).
2. **Les doses qui scalent avec l'intensité** (eau 2/2,5/3 L, exercice 20/45/90 min) — rend le
   Hard crédible et le Soft accessible.
3. **Le swipe-to-check ✓/✗** avec retour visuel vert/rouge sur les cartes d'habitudes.
4. **Le timer par habitude avec sons d'ambiance** — feature différenciante peu coûteuse.
5. **"N Required habits" affiché sur chaque carte** du catalogue (promesse concrète).
6. Le pattern **"dates de fin auto"** affiché dans le bloc olive avant de démarrer.

## 9. À ne PAS copier

- L'onboarding profil-à-plat (aucune promesse, aucun engagement).
- La triple vue Home/Habits/Tasks (redondance).
- Les photos stock en pleine largeur (effet "blog 2015").
- Le warning "you can't edit" sans alternative douce (offre plutôt la duplication éditable).
