# Analyse globale — Islam sous-angles / Hajj-Umrah (Niche A)

Date : 2026-08-28 · Sources : Appfigures (pop/comp + App Intelligence), avis iOS (8-100/app), scraping metadata. Stack cible : React Native.
> Complément du cluster islam-athkar (references/islam-athkar/). Focus Hajj/Umrah/Ramadan.

---

## 1. Fiche marché
- **Demande** : nusuk **47/59** (la seule à demande réelle), namaz times 21/54. Umrah 9, ramadan 5 = micro. Volume réel : Nusuk 18 589 ratings (459K global), The Umrah Guide 389.
- **Concurrence** : compétitivité **59** sur nusuk. **Nusuk (app d'État saoudien) domine absolument** (710K dl/mois, obligatoire pour le pèlerinage). Tous les autres guides Hajj/Umrah sont **minuscules** (<5K).
- **Tendance** : hajj/umrah = cycle annuel (pics autour du pèlerinage) ; demande mondiale musulmane stable (Pak, Indonésie, UK, US).
- **Positionnement** : sous-niche du cluster islam (athkar/prayer/qibla), cross avec religion + voyage.

## 2. Besoin & cible
- **Problème résolu** : accompagner le pèlerin (Hajj/Umrah) : savoir où aller, quoi faire, quelles duas réciter, réserver (Rawdah), prayer times, qibla.
- **Persona** : (a) **pèlerin Hajj/Umrah** (diaspora : Pak, Indonésie, UK, US musulmans) ; (b) **musulman pratiquant** cherchant un guide/duas fiable.
- **Job to be done** : "Guide-moi avec confiance dans mes rituels (Hajj/Umrah) : étapes claires, duas authentiques, horaires fiables, sans bug ni frustration, en offline."

## 3. Concurrents — panorama + monétisation

| App | Force | Faiblesse | Modèle |
|---|---|---|---|
| Nusuk (officiel, 18K) | officiel, obligatoire, tout-en-un (visa/qibla/quran/prayer), 710K dl | **update quotidienne forcée, réservation Rawdah cassée, login/support catastrophiques, features retirées, 742 MB, sentiment 17%** | Gratuit (état) |
| The Umrah Guide (389) | note 4.81, pédagogie claire, audio, sans pub | minuscule (<5K), pas de transliteration, pas monétisé | Gratuit |
| 3D Hajj Guide (83) | concept 3D pédagogique | abandonné (2016), volume nul | Gratuit |

### SYNTHÈSE MONÉTISATION (apps n°1-2 qui se vendent le mieux)
- **AUCUNE app de la niche ne monétise** (toutes gratuites, Revenue Sources None). Nusuk = service d'État gratuit (son "business" est le pèlerinage saoudien, pas l'app). The Umrah Guide et 3D Hajj = gratuits, minuscules.
- **Ce que les users en pensent** : Nusuk frustre massivement (sentiment 17% : "can't book Rawdah", "updates every day", "no support") ; The Umrah Guide adoré mais gratuit ("life saver", "without ads is sincere").
- **Leçon** : **pas de modèle de revenus existant dans les guides Hajj/Umrah**. La monétisation ne viendra QUE d'une app islam **premium plus large** (athkar + duas + prayer + qibla + guides) payante — pas d'un guide Hajj seul.

### Estimation revenus des concurrents (Appfigures App Intelligence, Jul 2026, monde)
> ⚠️ ESTIMATIONS à valeur indicative (Appfigures), pas des chiffres officiels.

| App | Est. Downloads | Est. Revenue (After Fees) | Revenue Sources | Sentiment |
|---|---|---|---|---|
| **Nusuk** | **710K** | **Not Monetized** | None | **17%** (1.4K) |
| The Umrah Guide | <5K | Not Monetized | None | 91% (57) |
| 3D Hajj Guide | <5K | Not Monetized | None | n/d |

→ **Zéro revenu store dans toute la niche.** Nusuk a un énorme volume mais gratuit. Le sentiment Nusuk récent (17%) montre une base mécontente.

## 4. Stack technique & complexité
- **React Native** : guides pas-à-pas (contenu), duas avec audio (lecture), transliteration, prayer times (calcul), qibla (compas), offline, widget. Pas de 3D lourde (optionnelle).
- **Complexité : 2/5** (facile). Contenu + audio + calculs simples. Le gros du travail est le **contenu éditorial authentique** (duas, rituels, traductions/transliteration) — pas la technique.
- **Effort** : 5-7 semaines MVP (contenu + audio + offline).

## 5. Monétisation de NOTRE app
- **Modèle conseillé** : **pas une app guide Hajj seule** (marché gratuit/vide de revenus). Intégrer dans une **app islam premium** (athkar + duas + prayer + qibla + guides Hajj/Umrah) avec **abonnement $4.99/mois ou $29.99/an** ou **one-time ~$9.99**.
- **Fourchettes** : essai 7 j → abo $29.99/an OU achat unique (le marché islam gratuit tolère mal l'abo — voir cluster athkar : abo exclusif uniquement, ZÉRO PUB).
- **Potentiel estimé** : modéré. À 5-10K dl/mois (cross cluster islam) avec ARPU $15-30/an → **$75-300K/an**. Le Hajj/Umrah est un **pic saisonnier** de conversion, le reste de l'année porté par athkar/prayer/qibla.

## 6. Gaps & opportunités
- **① Anti-Nusuk : fiabilité** (update quotidienne, login cassé, app 742 MB) → app **stable, légère, offline**, sans update forcée.
- **② Duas/athkar REMIS** (les users réclament ce que Nusuk a retiré : "bring back duas and adhkar", "bring back prayer time countdown") → **cross direct avec notre cluster athkar**.
- **③ Réservation/permis Rawdah** : "register interest + alert when slot opens" (demande explicite) — mais dépend des données officielles.
- **④ Guide pas-à-pas clair** (anti-Nusuk "no clear steps for Rawdah visit") : étapes simples, transliteration, audio lent, zoom seniors (the-umrah-guide gaps).
- **⑤ Zéro pub** (promesse religieuse, récurrente dans le cluster islam).

## 7. Verdict & décision
- **Note : 2.5/5 en standalone** ; **4/5 en complément du cluster islam**.
- **Reco : NE PAS faire un guide Hajj/Umrah standalone** (marché gratuit, dominé par l'état, zéro revenus). **INTÉGRER Hajj/Umrah + duas/athkar retirés par Nusuk dans une app islam premium complète** (cross cluster 13 athkar), avec fiabilité, offline, ZÉRO pub, abo exclusif.
- **Risques** : (a) Nusuk officiel incontournable — on ne bat pas l'état sur la réservation ; (b) contenu religieux doit être authentique (sources Quran/Sunnah) ; (c) volume saisonnier.
- **Verdict final** : la **vraie pépite est le cluster islam global (athkar)**, pas cette sous-niche seule. Nusuk valide la demande mais pas la monétisation.
