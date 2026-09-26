# MAJ STRUCTURE COMMUNE — apports des 2 nouvelles apps (2026-09-26)

> Mise à jour de la trame commune établie par les 3 cartes précédentes (Officielle, BeHard,
> Her75) : **promesse → personnalisation → engagement → paywall → boucle quotidienne**.
> Sources : CARTE-VISUELLE-CHALLENGE-HABITS.md + CARTE-VISUELLE-75-GRATUITE.md (59 captures
> réelles, même session Android du 2026-09-26).

---

## 1. Ce que les 2 apps changent dans le squelette commun

### 1a. Challenge Habits élargit la trame par la GAUCHE (moteur avant promesse)
Le squelette commun supposait : promesse unique (le 75) → personnalisation → engagement →
paywall. Challenge Habits montre un modèle **à moteur de catalogue** : pas de promesse vendue,
un moteur générique (9 challenges × 3 intensités × doses) où le "75" n'est qu'une durée.
Apports structurels :

- **Moteur 25/50/75 par intensité** : la durée n'est pas un choix de produit séparé
  (Soft/Medium/Hard apps distinctes) mais un paramètre du défi. Les dates de fin sont
  auto-calculées et AFFICHÉES AVANT démarrage (bloc olive, 23-11-55).
- **Doses dynamiques** : l'intensité modifie la charge réelle des habitudes (meditation 30 min
  en Easy vs 1 h en 50 j, eau 2→2,5→3 L, exercice 20→45→90 min). La difficulté devient
  mécanique, pas cosmétique.
- **Habitudes dosées en unités** : "At Least 00:30:00 /Day", "At Least 2 Liter/Day" — le
  standard "At least X /day" hérité de 75 Hard, généralisé à toutes les habitudes.
- **Boucle à 3 interactions** : swipe ✓/✗ (binaire), ⏱ timer, saisie manuelle (modal Progress
  éditable). L'utilisateur choisit son niveau d'effort de log.
- **Timer + sons d'ambiance** (Cafe/Rain/Forest) : le tracker devient un outil de focus.

### 1b. 75 Gratuite élargit la trame par la DROITE (confiance + monétisation douce)
- **Nouvelles étapes pré-paywall** insérées entre personnalisation et engagement :
  1. **Éducation** (1 règle officielle = 1 écran, chiffres précis : 2×45 min, 3,78 L, 10 pages) ;
  2. **Introspection psychologique** (why + worries, avec interlude "Most people quit by day 10") ;
  3. **Confiance** (privacy-first : no account, 100 % local, "not sent to us") ;
  4. **Preuve sociale** (carousel d'avis 5★ dans l'onboarding lui-même).
- **Paywall en 3 couches** (le pattern le plus intéressant de la session) :
  modal unique skippable après l'éducation + **rail permanent** "Unlock More Features — PREMIUM"
  en tête de home + **badges couronne** placés exactement sur les actions premium ("Add Custom
  Task", "Add Task"). Monétisation toujours à 1 tap, jamais bloquante — l'inverse de BeHard.
- **Premium = personnalisation**, pas contenu : customize targets, custom tasks, smart
  reminders, ad-free. Le core (5 règles) est gratuit et complet. **[hypothèse prix non capturé]**
- **Nouveaux modules de la boucle quotidienne** : countdown "Time Left" (pression douce),
  Diet Yes/No binaire, Photo avec éditeur (crop/scale) et badge ★ Done, Weight optionnel,
  Journal, **"1st Attempt" + Attempts** (archivage des tentatives).
- **Custom Task qui entre dans la règle de réussite** : type Checkbox/Numeric + toggle
  "Required for day completion" — la personnalisation modifie la condition de victoire du jour.

### 1c. Les 2 apps confirment des constantes transverses
- **Dark mode = standard du segment côté dev** (2/2 apps sombres, vs Her75 light/claire côté
  lifestyle féminin). Le dark + accent pastel unique (mint/violet) est la langue par défaut.
- **Illustrations flat maison** plutôt que photos (hors catalogue Challenge Habits en stock).
- **IA minimale** : 1 page-journée (75 Gratuite) ou 4 tabs (Challenge Habits) — personne ne
  reproduit la complexité 75 Hard officiel.
- **Zéro social** chez ces 2-là : le social reste le territoire différenciant de Her75.
- **Pas de lifetime visible** dans ces 2 apps : le prix transparent (ifetime) reste un gap libre.

---

## 2. Squelette commun v2 (fusion, à utiliser pour le brainstorm/PRD)

```
1. PROMESSE          welcome ciblé (le 75 Hard, "75 days, make them count")          [75 Gratuite]
2. ÉDUCATION         1 règle = 1 écran, chiffres officiels, Skip dispo               [75 Gratuite]
3. PERSONNALISATION  quiz why/worries + choix du challenge                           [75 Gratuite]
                     + intensité Easy/Medium/Hard → 25/50/75 j, dates auto           [Challenge Habits]
4. CONFIANCE         privacy-first local/no-account + avis 5★                        [75 Gratuite]
5. ENGAGEMENT        (BeHard : contrat signé au doigt — reste le meilleur rituel)
6. PAYWALL           modal skippable + rail permanent + badges couronne ciblés       [75 Gratuite]
7. BOUCLE QUOTIDIENNE
   • statut du jour : Day X of 75, pill état, countdown Time Left    [75 Gratuite]
   • checklist des habitudes dosées (At least X/day), swipe ✓/✗      [les 2]
   • saisie : ± unités (pages, ml, min), timer+sons, saisie manuelle [les 2]
   • photo quotidienne avec éditeur + badge Done                     [75 Gratuite]
   • custom tasks premium avec "required for completion"             [75 Gratuite]
   • optional : poids, journal                                       [75 Gratuite]
8. SUIVI             ring % global, progress screen, Attempts/1st Attempt            [les 2]
9. ÉCOSYSTÈME        cross-promo app sœur (Hard ↔ Medium), prompt rating précoce     [75 Gratuite]
```

Positionnement des 4 apps connues sur la trame : BeHard = engagement fort + paywall précoce ;
Her75 = social + light lifestyle ; 75 Gratuite = confiance + freemium honnête + personnalisation
payante ; Challenge Habits = moteur générique 25/50/75 sans monétisation visible.

---

## 3. Implications directes pour NOTRE app (input brainstorm G2bis)

1. **Adopter le moteur 25/50/75 + doses dynamiques** (Challenge Habits) MAIS avec la promesse
   et le funnel de confiance (75 Gratuite) et le rituel d'engagement (BeHard).
2. **La personnalisation payante est légitimée** : 75 Gratuite la vend comme premium principal
   et BeHard en fait un plainte — notre version doit la rendre ENCORE mieux (éditer un défi
   pré-fait, pas seulement en créer un de zéro — le Warning 23-12-20 de Challenge Habits montre
   le demi-gap).
3. **Le paywall en couches** (modal + rail + badges) est le pattern à copier ; la couche "essai
   gratuit premium" reste ABSENTE des 4 apps visuelles → opportunité trial.
4. **Le countdown "Time Left" + pill d'état** : cadence quotidienne non punitive, à intégrer
   dès la v1 (coût faible, effet fort).
5. **Privacy/no-account** comme argument : cohérent avec notre stack local-first (MMKV/Drizzle)
   — différenciation quasi gratuite face à Her75 (compte requis).
6. **Lifetime toujours libre** : aucune des 2 apps ne propose de lifetime visible → l'angle
   "prix honnête" de l'analyse-globale reste ouvert et confirmé par le terrain visuel.
7. **Le prompt de rating dès le jour 1 (75 Gratuite) est un anti-pattern à éviter** : la porte
   👍/👎 de Her75 plus tard dans le parcours est mieux pensée.
