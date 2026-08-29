# RAPPORT CONCURRENTIEL — TOP 3 NICHES (Phase 2, espionnage)

Date : 2026-08-28 · Méthode : scraping metadata iOS/Play + avis (2-3★ prioritaire) + screenshots + IAP.
Fichiers bruts : `brain/marche/concurrents/<niche>/<app>/` (metadata-ios.json, avis-ios.json, avis-play.json, assets/).

> ⚠️ **CORRECTION MAJEURE des données Appfigures** : les ratings CSV sous-estiment massivement la
> réalité. Pickleheads = **10 490 reviews iOS** (CSV disait 284), Athkar = **121 190** (CSV : 471),
> Azkar = **45 982** (CSV : 538), Athan = **49 422** (CSV : 516). Le scoring Appfigures compte les
> ratings US récents (échantillon), pas l'historique total. À intégrer dans toute décision.

---

## 1. PICKLEBALL SCHEDULER (pépite #1 — comp 28)

### Tableau comparatif des leaders
| App | Plateforme | Reviews réels | Note | Modèle | Angle | Ancienneté |
|---|---|---|---|---|---|---|
| **Pickleheads** | iOS+Android | 10 490 iOS | 4.87 | Freemium (Plus/Pro/Ultra) | Tout-en-un : courts, groupes, RR, tournois | 3 ans |
| **PlayTime Scheduler** | iOS+Android | 237 iOS | 4.53 | Free + Premium + Power User | Scheduler communautaire (sessions locales) | 2 ans (web 6+ ans) |
| **Pickleball Time: Sched&Play** | iOS | 15 | 3.53 ⚠️ | Gratuit | Scheduler simple | 3 ans |
| **Pickleball Scheduler** (Tradein IT) | Android | ~1 000 installs | — | IAP $2.99-$39.99 | Générateur round-robin + brackets | 4 mois |
| **PickleMatch Scheduler** | iOS | 0 | — | — | Scheduler | 3 mois |

### Top plaintes récurrentes (PlayTime Scheduler — leader du mot-clé)
1. **Paywall sur la "liste" (list view)** — la vue liste du calendrier est passée en payant : 5 avis
   1-2★ explicites ("Changed list view to paid tier, total BS", "you hid list view behind a paywall?",
   "Taking the list view away and pay walling it is a lame way to sell subscriptions").
2. **UX confuse / illisible** — "jumbled mess", "hard to use", "can't find out how to switch locations",
   vue "color bubbles" sans texte (5 schedules même couleur).
3. **Paiement/abo défaillant** — "Paid twice doesn't work", prix doublé après réinstall, "No way to
   manage subscriptions on app".
4. **Stabilité** — crashes, "app has a bug", lenteur, sessions qui disparaissent.
5. **Filtres manquants** — "no ability to set a radius", "cannot pick your own custom set of courts",
   "doesn't have the filters I need".
6. **Messagerie limitée** — difficile de contacter quelqu'un pas encore inscrit à une session.
7. Pas de dark mode, font trop grande, support faible pour les membres gratuits.

### Plaintes Pickleheads (le 2e, gros volume)
1. **DUPR lent (24 h) + bug d'affichage** (rating de départ vs final) — comparé à Swish (temps réel).
2. **Round robin peu détaillé** — pas d'accès aux détails des games, pas de leaderboard points totaux.
3. **Édition des noms impossible** — ni corriger, ni retirer un inscrit.
4. **Paywall croissant** — features passent derrière abo ($17/an CDN pour rejoindre des RR),
   "money grab", gros saut de prix Plus→Pro.
5. **Notifications non fiables** — "hit and miss", sessions récurrentes jamais notifiées.
6. **Crashes Android** (v2.2.4 freeze), permissions excessives (contacts/background).
7. **Pairing de partenaires RR faible** — mêmes 2 partenaires 3 fois sur 8 rounds (12 joueurs).

### Désirs non servis (exprimés dans les avis)
- Recherche par **rayon + courts favoris** (2 filtres plébiscités).
- **Export Excel** des données round robin (club organisateurs).
- **Invitation par genre** sans créer de groupes séparés.
- **Venmo/Zelle** comme paiement intégré.
- **Tournois/ladder** dans PlayTime ("future version might have round robin or ladder league").
- Direct messaging + recherche de joueurs.
- Notification quand un joueur rejoint ta session.

### Ce qui fait rêver (5★)
- Trouver un jeu près de chez soi / en voyage en 10 secondes.
- Voir qui joue, à quel niveau, à quelle heure "at one glance".
- Fini les chaînes de textos/emails : tout dans l'app.
- Round robin automatique ("life-changing", "popcorn" = planning des matchs à l'avance).
- Invite-only sessions par niveau de skill.
- Check-in + leaderboards de courts.

### Monétisation des leaders
- **PlayTime** : gratuit + Premium (no ads, calendrier custom) + Power User (scheduling avancé). Freemium classique.
- **Pickleheads** : freemium 3-4 tiers (Plus/Pro/Ultra), organisateurs Pro/Ultra payent pour
  check-in, hidden sessions, leaderboards. Abo annuel (~$17-40/an).
- **Tradein Scheduler** : IAP ponctuels $2.99-$39.99 (achat unique, brackets/standings).

### Gaps exploitables pour NOTRE app
1. **List view gratuite** (tuer le paywall PlayTime) + **filtres rayon/courts favoris** — douloureux chez tous.
2. **Round robin supérieur** : pairing anti-répétition, détails par game, leaderboard points,
   export Excel/PDF, check-in — le pain quotidien des organisateurs.
3. **Notifications fiables** : notif quand un joueur rejoint, quand session récurrente est postée.
4. **Édition totale** : ajouter/retirer/corriger joueurs en 1 tap.
5. **Local-first sans compte obligatoire** pour consultation (faible friction d'adoption).

---

## 2. TIMERS SPORT (interval/tabata/boxing — comp 42-61)

### Tableau comparatif des leaders
| App | Plateforme | Reviews réels | Note | Modèle | Angle | Ancienneté |
|---|---|---|---|---|---|---|
| **Interval Timer HIIT** (Float Tech) | iOS | **86 170** | 4.84 | Gratuit + abo $1.99/mois ou $19.99 ltv | Timer simple, drag pour intervalles | 10 ans |
| **Seconds Interval Timer** (Runloop) | iOS | 23 565 | 4.69 | Gratuit + Pro $4.99 | Templates HIIT/Tabata/Circuit, Watch | 15 ans |
| **Interval Timer - Tabata** (NEO PIXEL) | iOS | 19 066 | 4.49 | Gratuit + ads + abo Premium | Timer workout polyvalent | 16 ans |
| **Boxing Timer Pro** (SIMPLETOUCH) | iOS | 6 739 | 4.85 | **Abo forcé $9.99/an** ⚠️ | Round timer pro, Workout DJ | 15 ans |
| **Interval Timer** (dreamspark) | Android | — (4.94) | 4.94 | Gratuit | Timer simple | — |
| **Tabata Timer** (Eugene Sharafan) | Android | — (4.90) | 4.90 | Gratuit | Tabata | — |

### Top plaintes récurrentes (TOUTES apps — thème dominant : le PAYWALL)
1. **Paywall agressif après 2-3 usages** (Float Tech) : "workout limit reached, pay $1.99/month",
   "locks every down after about three tries", "Misleading free app".
2. **"Payer pour un TIMER, c'est du foutage de gueule"** : "What's with having to pay for a TIMER?",
   "subscriptions should be reserved for products with real complexity", "$2/month on a simple product".
3. **Abo forcé pour ceux qui ont déjà payé** (Boxing Pro + Seconds) : "bait and switch", "Paid a one
   time fee, now forced yearly subscription", "didn't grandfather in their legacy users".
4. **Pubs invasives** (NEO PIXEL) : "popup ads between every timer", "freezes due to ads", "too many ads".
5. **Problèmes musique/volume** : "music is turned down", "Music Turns Off", volume qui ne remonte pas.
6. **Pas d'annonce de fin de workout** : il faut regarder l'écran pour savoir que c'est fini.
7. **Apple Watch buggé / non supporté** : complication absente, crash iOS 26, lock sur watch.
8. **Pas de sauvegarde/nommage des timers** (Float Tech) ; **pas de décimale** (2,5 s) ; **pas de
   duplication de segment** (NEO PIXEL) ; **n'annonce pas l'exercice en cours**.

### Désirs non servis
- **Sauvegarder + nommer des timers personnalisés** (création à l'avance, plusieurs circuits).
- **Annonce vocale de fin + nom de l'exercice** (accessibilité, aveugles).
- **Watch complication fiable + contrôle watch**.
- **Décimale de seconde** (2,5 s — tir sportif, drills).
- **Son distinct de fin** (différent des changements d'intervalle).
- Mode "ne pas couper ma musique" natif.

### Ce qui fait rêver (5★)
- Drag-to-set ultra simple (Float Tech), templates tout faits (Seconds), annonces vocales claires,
  affichage plein écran lisible à distance, Workout DJ (musique auto), ne gêne pas la musique.

### Monétisation des leaders
- Float Tech : gratuit trompeur → abo $1.99/mois ou $19.99 à vie après verrouillage.
- Seconds : freemium, Pro $4.99 (utilisations illimitées).
- NEO PIXEL : gratuit + ads (KYRON/vidéo) + abo premium (watch).
- Boxing Pro : ancien payant → **abo forcé $9.99/an** (scandale, avis 1★ en masse).

### Gaps exploitables pour NOTRE app
1. **"Timer honnête"** : gratuit généreux (pas de verrouillage après 3 usages), pro = custom
   avancé. Antithèse totale des leaders → message ASO "no subscription for a timer".
2. **Richesse du mode pro inclus** : nommage/sauvegarde timers, décimale, duplication, annonce
   vocale de fin + exercice, son de fin distinct. Tout ce que les leaders verrouillent/buguent.
3. **Écosystème sport ciblé** : presets par sport (boxing rounds 3min/1min rest, tabata 20/10,
   HIIT, EMOM, AMRAP) + **Watch app fiable** (complication).
4. **Audio propre** : ne jamais baisser la musique utilisateur, mixage voice-over correct.
5. Interface moderne (les leaders sont vieux : 10-16 ans, UI datée).

---

## 3. ISLAM / ATHKAR-AZKAR (cluster 13 — pop 40-60)

### Tableau comparatif des leaders
| App | Plateforme | Reviews réels | Note | Modèle | Angle | Ancienneté |
|---|---|---|---|---|---|---|
| **Athkar** (fares.net) | iOS (leader athkar) | **121 190** | 4.53 | Gratuit + abo "exclusive" | Athkar + Quran + prayer times + adhan | 16 ans |
| **Athan** (Islamic Finder) | iOS | 49 422 | 4.80 | Gratuit + ads + abo | Prayer times + azkar + Quran | 14 ans |
| **Azkar: Athan & Prayer** (Hamza Oqbah) | iOS+Android | 45 982 iOS | 4.68 | Gratuit + ads | Azkar + duas + prayer + widgets | 7 ans |
| **Muslim Pro** | iOS | (CSV 1.6K, réel >100K) | 4.66 | Freemium | All-in-one Islam | 16 ans |
| **Athkar Pro / AthkarApp** | iOS | 8 | 4.33-4.80 | — | Micro | — |

### Top plaintes récurrentes
1. **Pubs dans une app religieuse = scandale** : "Having this many ads should be haram", "ads
   obstruct the flow of prayer", "inappropriate ad imbedded on the main page", "loud commercial
   during prayer times", 3 ads pendant la récitation du Quran.
2. **Widgets/notifications bugués** : widget home qui disparaît, timings jamais mis à jour,
   notifications pour des événements à 1000 km, notifs qui s'arrêtent sans raison.
3. **Abo/paiements abusifs répétés** : "How many times I have to pay to update for ad free?",
   "asking to make more payment" après achat.
4. **Régression après updates** : Athkar ne s'ouvre plus (splash bloqué), lag 2 mois, vieux
   iPhone (5s/6) cassés, passage en subscription.
5. **Qibla imprécise** : "gives me a different angle sometimes, it's wrong".
6. **Anglais/traductions incomplets** : "The English settings does not work", refus de changer
   de langue.
7. **Ne mémorise pas la position** dans les athkar (reprend au début), battery drain (20 % en 5 min).
8. **Contenu controversé** : "Disparages Entire Historical Sects of Islam" (Athan) — piège à éviter.

### Désirs non servis
- **Tap sur un mot → traduction/transliteration + sens** (Azkar Play : "if we tap at the word we
  get to know the meaning").
- **Mémorisation de la position de lecture** (athkar, reprendre où on en est).
- **Widgets fiables** (prayer times à jour, sans bug).
- **Full athan qui marche** (lecture complète depuis notification).
- **Notifications localisées** (uniquement sa ville), pas de notifs de contenu à l'autre bout du pays.
- Choisir les athkar "salli ala Muhammad" (notifications personnalisables).

### Ce qui fait rêver (5★)
- Athkar complets + authentiques (source Quran/Sunnah), prayer times précis, widgets élégants,
  adhan de belle qualité (choix de voix), "changed my life", "best app for Muslims worldwide".
- One-stop-shop : azkar + duas + quran + prayer times + qibla.

### Monétisation des leaders
- Athkar : gratuit + abo "exclusive version" (extra features).
- Athan : gratuit + ads lourdes + abo récurrent ad-free (payé plusieurs fois selon les avis).
- Azkar : gratuit + ads + IAP.
- Muslim Pro : freemium (le plus gros, all-in-one).

### Gaps exploitables pour NOTRE app
1. **"L'app islam SANS PUBS"** : promesse forte (aucune pub, en particulier pendant la prière/le
   Quran) — différenciateur n°1, les 3 leaders sont haïs pour ça.
2. **Widgets & notifications fiables** : prayer times mis à jour automatiquement, athkar du matin/
   soir notifiés à l'heure, position de lecture mémorisée.
3. **Accessibilité du contenu** : tap-to-translate + transliteration + sens en anglais (gros gap,
   demandé explicitement), mode nuit.
4. **Qibla précise** + mode avion/offline (pas de batterie drain).
5. **Design moderne** (les leaders ont 7-16 ans, UI datée). Monétisation : abo propre et
   transparent (pas d'achats pièges), tarif unique.

---

## Synthèse croisée — ce que les leaders ont en commun (à exploiter)

| Levier | Pickleball | Timers | Islam |
|---|---|---|---|
| Paywall/abo haï | List view payante | Verrouillage après 3 usages | Abo ad-free à répéter |
| Pubs invasives | modérées | NEO PIXEL lourdes | **Scandale n°1** |
| Bugs notifs/widgets | notifs non fiables | Watch buggée | Widgets qui disparaissent |
| UI vieille | "90s geocities" | 10-16 ans | 7-16 ans |
| Support faible | free users ignorés | — | emails sans réponse |

**Insight produit transversal** : dans les 3 niches, les utilisateurs sont prêts à payer (ils
paient déjà) mais **détestent le paywall agressif et les pubs**. Une app "gratuite généreuse +
pro honnête + zéro pub intrusive" est une position différenciante crédible partout.

---

## Recommandation de produit (features killers)

### Si PICKLEBALL (reco #1 — marché le plus vide, 237 reviews leader)
1. **Scheduler gratuit avec vue liste + filtres rayon/courts favoris** (PlayTime paywall = mort).
2. **Round robin anti-répétition + détails par game + leaderboard + export PDF/Excel** (tuer
   Pickleheads sur le terrain des organisateurs).
3. **Notifs fiables** : "un joueur a rejoint ta session", "session récurrente postée", RSVP en 1 tap.
4. Monétisation : pro organisateurs (round robin avancé, stats, multi-courts) — les clubs paient déjà.

### Si TIMERS (stack le plus simple)
1. **Zéro verrouillage gratuit** : usage illimité du timer de base, "no subscription for a timer".
2. **Presets sport + annonce vocale de fin + noms d'exercices + Watch fiable** (ce que les leaders
   ne font pas).
3. **Ne touche jamais à ta musique** + décimale + sauvegarde/nommage des routines.
4. Monétisation : pro une fois ($4.99-9.99) — pas d'abo mensuel pour un minuteur.

### Si ISLAM (la plus grosse demande mais concurrence réelle plus forte que prévu)
1. **Zéro pub, jamais** (pendant prière, Quran, athkar) — promesse marketing #1.
2. **Tap-to-translate + transliteration + widgets fiables + position mémorisée**.
3. **Abo unique transparent** (~$19.99/an, pas d'achats répétés) + mode offline sans drain.
4. ⚠️ Prudence : marché plus établi que le CSV ne le montrait (Athkar 121K) → sous-niche
   athkar/azkar ciblée avec design moderne, PAS frontal vs Muslim Pro.

---

## Fichiers de référence (assets gauntlet-loop)
- `brain/marche/concurrents/pickleball/{playtime-scheduler,pickleheads,pickleball-time,pickleball-scheduler-tradein}/` — metadata + avis iOS/Play + assets (icons, screenshots Play + iOS HD).
- `brain/marche/concurrents/timers/{interval-timer-floattech,seconds-interval,interval-timer-neopixel,boxing-timer-pro,interval-timer-dreamspark}/` — idem.
- `brain/marche/concurrents/islam/{athkar,azkar,athan}/` — idem.