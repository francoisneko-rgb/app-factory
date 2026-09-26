# CARTE VISUELLE — 75 Days Challenge "gratuite" (dev.abeni.seventy_five_days_challenge)

> Fiche produite par l'analyste-visuel à partir de **34 captures Android réelles** du 2026-09-26
> (usage réel). Chaque affirmation cite une capture (raccourci heure). Inférences marquées
> **[hypothèse]**. Installée en APK direct : "75 Days Challenge, Version 2.0.5, 56,0 Mo"
> (packageinstaller 23-11-04). Un prompt de note Google Play apparaît en overlay (23-15-32).

---

## 1. Ce que les captures couvrent — et ne couvrent pas

Couverture COMPLÈTE du funnel : welcome → carousel éducatif des 5 règles → quiz (why / heard /
worries) → interlude motivation → écran privacy → carousel d'avis → paywall modal → home jour 1 →
boucle quotidienne complète (water, exercise in/outdoor, reading, diet, photo avec éditeur,
custom task premium, weight, journal) → settings. **La page prix du paywall (plans €) n'est pas
capturée** — seul le contenu du paywall au-dessus du CTA l'est. **[hypothèse : prix sous le
CTA "Continue", non capturé.]**

---

## 2. Audience (Q1)

- Welcome : photo d'athlète homme torse nu, "WELCOME TO 75 DAYS HARD CHALLENGE" (23-13-51) →
  **codage sportif/masculin assumé**, ton militaire.
- MAIS le quiz cible la motivation générale : "Get stronger & fitter", "Build mental toughness",
  "Become more disciplined", "Improve my lifestyle", "Prove to myself I can finish",
  "Become a better version of myself" (23-13-56) → **mindset & discipline, pas seulement sportifs**.
- Les 5 règles = le 75 Hard officiel (2 workouts, gallon d'eau, 10 pages non-fiction, diet,
  photo) → le public visé est **ceux qui cherchent "75 Hard"**, avec journal + poids pour les
  aspects santé/mental.
- Verdict : **audience large "self-improvement" à dominante fitness**, tout public, sans
  dimension sociale (aucun ami, aucun feed, aucun matching dans les 34 captures).

## 3. Mécanique gratuite vs premium (Q1)

- **Aucun essai gratuit, aucun compte, 100 % local** : écran "Your privacy stays yours" —
  "Your challenge lives on your phone, not on our servers", "No account required",
  "Your progress isn't sent to us" (23-14-44).
- **Freemium + pubs** : le paywall liste "**Ad-Free Experience** — Focus on your streak without
  interruptions" (23-15-06) → la version gratuite affiche des publicités **[hypothèse : Ads via
  SDK, aucune pub visible dans les captures — peut-être réservée à certains moments]**.
- **Premium verrouille la personnalisation** (cités textuellement, 23-15-06) :
  "Customize Challenge — Adjust water, exercise, and reading targets to fit your goals" ·
  "Custom Tasks — Add your own required or optional tasks on top of the challenge" ·
  "Smart Reminders — Set and personalize notifications for every challenge task".
- Le tracker des 5 règles officielles est **totalement fonctionnel sans payer** (23-15-35→17-38).
- Les "Daily targets" et "Notifications" des settings portent une étoile orange = édition
  premium (23-15-55, 23-16-00).
- **Paywall dissmisable** (X en haut, 23-15-06) + **rail permanent** "Unlock More Features —
  PREMIUM >" en tête de home (23-15-14 et toutes les captures home) + badge couronne sur
  "Add Custom Task" et sur le CTA "Add Task" (23-16-26, 23-17-42).

---

## 4. Inventaire UI par écran (élément → fonction supposée)

### A. Welcome (23-13-51)
"WELCOME TO 75 DAYS HARD CHALLENGE" condensé blanc + "CHALLENGE" en vert menthe, photo athlète,
baseline "You've got 75 days. We'll help you make them count." + coche verte, CTA blanc
"Let's get started →". Une seule promesse : le 75 Hard, tenu de résultat.

### B. Carousel éducatif — 1 règle = 1 écran (Skip | pill dots | Next)
- "75 Days Challenge — a transformative journey designed to push you beyond your limits and
  cultivate mental toughness like never before" (23-14-50).
- "**Exercise Twice Daily** — two separate workouts each day, each lasting at least 45 minutes...
  weightlifting and cardio to yoga and outdoor activities" (23-14-54).
- "**Drink a Gallon (3.78 liters) of Water** — You're required to consume one gallon (or
  approximately 3.8 liters) of water daily" (23-14-57) → chiffres US + métriques.
- "**Read 10 Pages of Non-Fiction** — Whether it's self-help, business, or biographies..." (23-14-59).
- "**Follow a Diet** — choose a diet that aligns with your goals... counting macros, intermittent
  fasting, or a specific meal plan" (23-15-01).
Illustrations flat pastel cohérentes (personnages récurrents). Rôle : **vendre la rigueur du
programme AVANT de demander quoi que ce soit** — éducation = valeur perçue.

### C. Quiz — progress bar segmentée (6 segments)
| Écran | Contenu | Rôle |
|---|---|---|
| "Why are you starting 75 Hard?" — Select all that apply, 6 cartes 2×3 (23-13-56, état sélectionné 23-14-03) | Get stronger & fitter / Build mental toughness / Become more disciplined / Improve my lifestyle / Prove to myself I can finish / Become a better version of myself | Motivation = donnée de personnalisation psychologique |
| "Where did you hear about 75 Days Hard?" (23-14-09) | Instagram (sélectionné, coche) / TikTok / YouTube / Friend or family / Podcast / Other | Attribution marketing |
| **Interlude** "Most people quit by day 10. You're already ahead showing up and choosing your why is how finishers start." + illustration 3 personnages (23-14-14) | Coup de psychologie anti-abandon AU MILIEU du quiz | Relance émotionnelle |
| "What worries you most about sticking with it?" — "Knowing the hard part makes it easier to plan for." (23-14-44) | Finding enough time / Staying motivated (sel.) / Sticking to a diet / Two workouts a day / Missing a day & restarting / Nothing — I'm ready | Capture la PEUR #1 → amorcer l'accroche rétention |

### D. Privacy (23-14-44 bis)
Cartes : "Stored only on this device — Photos, streaks, journals, and daily tracking stay local.
Nothing is uploaded to a backend or shared with a cloud account." / "No account required — Your
journey isn't tied to a profile we can see or sell." / "Your progress isn't sent to us — What
happens on your device stays on your device." → **la confidentialité devient un argument de
vente** (différenciation vs Her75/BeHard qui demandent un compte).

### E. Avis intégrés à l'onboarding (23-14-47)
"Help us grow!" ★★★★★ + avatar "75" teal + cartes d'avis 5★ : "It really works. The goals feel
clear and manageable." (Yvonne de Roode) · "Simple, reliable, and easy to update when life gets
busy." (Alicia S) · "...is easy to use and reminders really do help." (Keith Milton) ·
"No unneces... everything... challenge." (Sonja S). CTA "See the challenge".
**[hypothèse : avis synthétiques ou importés ; les mentions "reminders" et "goals" vendent
les features.]**

### F. Paywall modal "Unlock Premium" (23-15-06)
Badge "PREMIUM" + icône couronne orange. Sous-titre "Get the tools to stay consistent and tailor
the challenge to you." 4 blocs bénéfices (Ad-Free / Customize Challenge / Custom Tasks / Smart
Reminders — textes cités en §3). Gros CTA vert "Continue". X pour fermer. Position : **après
l'éducation et les avis, AVANT la première entrée dans la home** — puis réapparaît comme rail.

### G. HOME — le core loop sur UNE page (23-15-14 → 23-17-14)
| Bloc | Détails observés |
|---|---|
| Header | "75 Days Challenge" + gear settings |
| Rail permanent | "Unlock More Features — PREMIUM >" (toutes captures) |
| Statut du jour | "Day 1 of 75" + badge "1st Attempt" + Start/End "Sep 26, 2026 → Dec 9, 2026" (dates auto) + pill rouge "Incomplete" |
| **Time Left 00:44:23 HRS/MIN/SEC** (bloc vert mint) | Compte à rebours avant minuit — pression douce quotidienne |
| 4 mini-stats | 0 ml Water / 0 Min Exercise / 0 Pages Reading / Diet Not Followed |
| **Exercise** | "+ 5 Min Indoor" / "+ 5 Min Outdoor", compteur "0 Indoor 0 Outdoor / 90 Min", barre 0 % |
| **Drinks** | "Drink 3,785 ml of water a day." ±240 ml, jauge verre qui se remplit, "3,785 ml left (~15.8 cups)" |
| **Reading** | ±1 Page / ±5 Pages, "0 /10 Pages" |
| **Diet** | "Diet goal not yet confirmed. Did you follow your planned diet today?" **Yes ✓ / No ✗** |
| **Photo** | "Track your progress visually." Set Photo → bottom sheet Camera/Gallery → **éditeur crop/scale 82 %/rotate** → badge "★ Done" |
| **Add Custom Task** (couronne premium) | Formulaire : Icon (Default checkbox/numeric) + Title 0/40 + Description 0/500 + **Type Checkbox / Numeric** + toggle "Required for day completion — Must be done to complete the day" (23-17-42) |
| **Optional** | Weight "Optional daily weight log" 0,0 kg ; Journal "Reflect on your day and grow." + "Write in Journal" |

Coach-marks au premier lancement : "Press Start Challenge when you're ready — begin from Day 1
or jump in from any day." / "Press Know more, to find out more about the challenge." (23-15-14,
23-15-19).

### H. Settings (23-15-55 → 23-16-00)
Challenge > **Attempts** / Measurements (Cup Size 240, Cup Unit Liter, Weight Unit kg) /
**Daily targets ★** (3,785 ml · 45+45 (90) min · 10 pages) / **Notifications ★** / App
(Challenge Info · **Appearance** · Restore Purchases) / Support (Rate · Share · Feedback ·
Contact · About). "1st Attempt" + écran Attempts = **gestion des tentatives/restarts** (le
plainte #4 de la catégorie).

### I. Cross-promo + rating
- Bannière "**Try 75 Days Medium** — A little easier version of 75 Days hard challenge.
  [Install >]" (23-15-46) → écosystème 2 apps du même dev.
- Prompt Google Play in-app dès le jour 1 (23-15-32).

---

## 5. Wireflow déduit — texte

```
Welcome "75 DAYS HARD CHALLENGE" (23-13-51)
   ↓ Let's get started
Intro carousel : journey → Exercise Twice Daily → Gallon → 10 Pages → Follow a Diet
   (Skip toujours dispo)                                        (23-14-50→15-01)
   ↓
Quiz segmenté : Why? → Where heard? → [interlude "quit by day 10"] → Worries?   (23-13-56→14-44)
   ↓
Privacy "Your privacy stays yours" (100 % local, no account)     (23-14-44bis)
   ↓
Reviews "Help us grow!" + CTA "See the challenge"                (23-14-47)
   ↓
PAYWALL modal "Unlock Premium" (X dismissible)                   (23-15-06)
   ↓
HOME — "Start Challenge" (Day 1 or jump in from any day) + coach-marks (23-15-14→19)
   ↓
CORE LOOP (1 page) : Time Left countdown → Exercise in/outdoor → Drinks → Reading
   → Diet Yes/No → Photo (éditeur) → Add Custom Task★ → Optional Weight/Journal (23-15-35→17-42)
   ↓ (gear)
Settings : Attempts / targets★ / notifications★ / Appearance (23-15-55)
```

**Enchaînement gagnant** : éducation → introspection (why/worries) → confiance (privacy) →
preuve (avis) → paywall → produit. Le paywall arrive APRÈS que la valeur du programme est
expliquée et la confiance établie — position la plus "honnête" observée dans la niche.

---

## 6. Architecture de l'information

- **1 seul écran principal** (la journée), settings via gear. Aucun tab bar. IA minimaliste.
- Chaque habit a sa page détail teintée (Drinks bleu azur 23-16-53, Reading bronze 23-17-05)
  avec jauges animées et grosses pastilles ±.
- "Attempts" en settings → archivage des tentatives assumé ("1st Attempt" badge sur la home).
- Pas de social, pas de feed, pas de photos des autres. Produit **solitaire mais complet**.

---

## 7. Choix UX notables

1. **Éduquer avant de vendre** : 5 écrans de règles avec les chiffres officiels — le paywall
   arrive quand le programme est compris.
2. **Quiz psychologique** (why + worries) avec interlude "Most people quit by day 10" — capture
   motivation ET peur, sans s'en servir visiblement ensuite **[hypothèse : utilisé pour les
   notifications smart premium]**.
3. **Privacy-first comme positionnement** ("no account, local, not sent") — cible la méfiance
   post-BeHard/Her75.
4. **Countdown "Time Left" quotidien** — cadence la journée sans punir (pill Incomplete rouge).
5. **Exercise Indoor/Outdoor** = fidélité au 75 Hard officiel (2 workouts distincts).
6. **Custom Task à double type (Checkbox/Numeric) + toggle "Required for day completion"** —
   le custom s'intègre à la règle de réussite du jour, pas juste une liste à part.
7. **Editor photo intégré** (crop, scale %, rotate) au lieu d'un upload brut.
8. **Cross-promo Medium** en bas de home + **prompt rating dès le jour 1** (agressif).
9. Rail premium PERMANENT en tête de home : monétisation toujours à 1 tap, jamais en modal bloquant.

---

## 8. Qualité perçue : **7,5/10**

- **+** : cohérence visuelle totale (noir + mint + pastel), illustrations maison, core loop
  exhaustif (5 règles + weight + journal), détails de finition (jauge liquide, countdown,
  éditeur photo, conversion cups, attempts), IA ultra-simple, privacy assumée, paywall skippable
  avec produit gratuit complet. Le meilleur "produit complet" de la niche après BeHard, avec un
  coût de complexité bien moindre.
- **−** : onboarding long (≈13 écrans avant la home), pas de trial premium (paiement à l'aveugle
  — prix non capturé), publicité en version gratuite (friction), aucune dimension sociale,
  journal texte nu (pas de mood/prompt), prompt de note dès le jour 1 (prématuré), persona
  100 % masculin sur le welcome alors que le 75 Soft attire beaucoup de femmes.

---

## 9. Design language

| Trait | Obs. (captures) |
|---|---|
| Fond | Noir pur |
| Accent principal | Vert menthe (sélections, CTA, badge 75) |
| Accents secondaires | Teinte par module (water azur, reading bronze), rouge pour les états négatifs (No, Incomplete) |
| Typo | Sans-serif arrondie friendly (Poppins-like), pas de condensed |
| Visuels | Illustrations flat pastel maison (personnages récurrents), photo réelle du user dans Photo |
| Composants | Cartes sombres arrondies, pastilles ± géantes, badges pill (1st Attempt, ★ Done, PREMIUM) |

---

## 10. À voler (STEAL LIST)

1. **La séquence éducation → introspection → privacy → avis → paywall** : vendre la COMPRÉHENSION
   du programme et la CONFIANCE avant le prix. Le meilleur funnel de la niche observée.
2. **Le bloc "Time Left" avec countdown** + pill d'état du jour (Incomplete/★ Done) : cadence
   quotidienne douce, aucune punition.
3. **Le Custom Task avec type Checkbox/Numeric + "Required for day completion"** : la
   personnalisation qui RENTRE dans la règle de réussite — exactement le plainte #2 de la
   catégorie, en mieux que BeHard.
4. **"1st Attempt" + écran Attempts** : archivage des tentatives (plainte #5) quasi gratuit.
5. **L'éditeur photo intégré** (crop + scale) pour la photo de progression quotidienne.
6. **Le rail premium permanent** (toujours accessible, jamais bloquant) à la place du paywall
   modal agressif unique.
7. **Le positioning privacy/no-account** en argument de vente.
8. **Cross-promo d'app sœur** (Hard ↔ Medium) en bas de home : monétiser les 2 intents sans
   compliquer une seule app **[hypothèse : 2 listings séparés pour l'ASO]**.
