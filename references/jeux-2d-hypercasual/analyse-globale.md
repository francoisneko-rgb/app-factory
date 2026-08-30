# ANALYSE — JEUX 2D HYPERCASUAL (2026-08-30)

## 1. Ce que c'est
Jeux hyper-casual = jeux 2D très simples, une mécanique unique, jouables en 30 secondes :
color sort, water sort, merge, idle, flappy, stack, pull the pin, brain out, fill.

## 2. Pourquoi c'est adapté à React Native (PAS Unity)
- Ce sont des jeux **2D purs** : pas besoin de moteur 3D. RN + Reanimated/Skia suffit.
- Une mécanique unique = code simple (logique + gestes + niveaux).
- Dev rapide : un jeu color sort/water sort = **2-4 semaines** de dev pour un dev.
- **Monétisation** : pub interstitielle/récompensée + IAP (supprimer pub, niveaux bonus).

## 3. Pépites trouvées (pop≥30, comp<75, extraits des CSV)
- `idle games (61/69)` — jeux idle (clicker/incremental) très demandés
- `outline (50/37)` ⭐ — comp très basse
- `water (53/68)`, `water sort` — le genre water sort
- `merge` — jeux de fusion
- `color sort`, `pull the pin`, `brain out` (2040 mots bruts !), `flappy`
- `find it out (43/59)`, `dune (49/59)`

## 4. Meilleures apps de référence (Appfigures + iTunes)
- **Water Sort Puzzle** : 4.71★, 324K ratings, genre Games. Tri de couleurs dans des verres.
- **Brain Out** : 4.59★, 247K ratings. Puzzles/énigmes trompe-l'œil, 2040 mots bruts.
- **Merge Numbers** : fusion de chiffres, simple.
- **Color Sort** : tri de couleurs, bulles.

## 5. Monétisation (confirmée par la logique de marché + données)
- **Pub** (interstitielle/récompensée) = principal pour hypercasual gratuit.
- **IAP** : supprimer pub, thèmes, indices.
- Attention : ARPU faible → il faut du VOLUME (des millions de téléchargements) pour rentabiliser.
  C'est un modèle "gagner avec l'échelle", pas avec un prix élevé.

## 6. Avantages
- Fait pour RN, dev rapide, pas de géant insurmontable sur les mécaniques pures (Water Sort est
  une mécanique, pas un écosystème).
- Les hits hypercasual reviennent régulièrement (Water Sort a explosé récemment).

## 7. Inconvénients / risques
- **Marché ultra saturé** : des milliers de clones sur chaque mécanique.
- **UA coûteuse** : pour monétiser par la pub, il faut acheter du trafic (Apple Search Ads / TikTok).
- **Durée de vie courte** : les hits meurent en quelques mois.
- **Faible rétention** : un jeu simple se termine vite.
- **App Store Review** : les clones flagrants sont rejetés.

## 8. Ce qu'il faudrait faire (si on choisit ce cluster)
1. Choisir UNE mécanique avec un **twist** (ex. water sort + thème, color sort + niveaux créatifs).
2. Faire un jeu **polishé** (juice, sons, animations) — c'est ce qui différencie un hit d'un clone.
3. **ASO agressif** sur les mots de la mécanique.
4. Monétiser pub + IAP.
5. Être prêt à itérer (sortir plusieurs jeux, garder celui qui marche).

## 9. Verdict
- **Note : 7.5/10** pour un indie RN : le seul type de "jeu" réellement faisable en RN.
- Idéal pour un **premier produit / portfolio** ou pour générer du revenu passif pub.
- Pas idéal si on veut un revenu stable : c'est volatile et dépendant de l'UA.

> Prochaine étape si validé : choisir LA mécanique (water sort / color sort / idle), miner les
> leaders précis, récupérer leurs revenus Appfigures + avis.

---

## 10. ANALYSE APPROFONDIE (2026-08-30) — Water Sort Puzzle & Brain Out

### Données récupérées (dossier `references/jeux-2d-hypercasual/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| Water Sort Puzzle (id 1514542157, IEC Global) | ✅ | 11 (10 + icône) | 10 | **$5K/mois**, 40K dl — **IAPs, Ads** |
| Brain Out (id 1477841973, EYEWIND) | ✅ | 8 (7 + icône) | 10 | **$5K/mois**, **790K dl** — **IAPs, Ads** |

> ⚠️ L'ID fourni 1113582479 n'existe pas (404). Brain Out = **1477841973** (EYEWIND LIMITED).

**Lecture cruciale** : Brain Out = 790K downloads/mois mais seulement $5K de revenus store.
**La monétisation hypercasual est À 95% DANS LA PUB (ads), pas dans le store.** Appfigures ne
capte que les IAP ($2.99 ad-free, packs). Le vrai revenu pub (AdMob/AppLovin) est invisible ici.

### Water Sort Puzzle — ce qu'il fait exactement
- Mécanique : trier des couleurs d'eau entre verres (tap-to-pour), une règle, 1000+ niveaux.
- Sorti 2020, mis à jour 2026-07 (encore actif). Note 4.71. 6 langues. 10 screenshots.
- Freemium : **ads interstitielles fréquentes + ad récompensée** (extra tube), IAP $2.99 ad-free,
  coins par ads pour backgrounds, 5 undo gratuits puis ad.

### Brain Out — ce qu'il fait exactement
- Énigmes "trompe-l'œil" (tricky riddles) : la réponse subvertit la logique normale. 100+ niveaux.
- Hints = ampoules (light bulbs) gagnées ou via **vidéo récompensée** (souvent "video unavailable").
- Sorti 2019, mis à jour 2026-08. Note 4.59. 1 langue (EN). 2040 mots-clés organiques bruts.
- Même modèle : ads + IAP ad-free.

### Voix des utilisateurs — Water Sort (ce qui fait rêver)
1. **"Silent meditation"** — l'app est utilisée comme anti-anxiété, apaisante ("calms me down").
2. **Simplicité radicale** : "no daily login, no other game modes, just the puzzle".
3. Challenge progressif sans répétition (niveau 900+ toujours frais).
4. "I paid to remove the ads" → l'IAP ad-free convertit réellement.
5. Ad récompensée = volontairement choisie ("I choose to watch an ad to get an extra vial").

### Voix des utilisateurs — Water Sort (plaintes = opportunités)
1. **ADS trop nombreuses et trop longues** (45-60s) — plainte #1 écrasante.
2. **Batterie/overheating** : "burns your phone", "drains battery quickly" (même à 2D simple) → un
   rendu performant (Skia) est un différenciateur.
3. **Lags/freeze à partir du niveau 29-32** (bugs de logique).
4. **Vitesse de versement trop lente** (pas de setting de vitesse).
5. Coins uniquement via ads (quand l'ad ne charge pas, plus de coins → backgrounds bloqués).

### Voix des utilisateurs — Brain Out (plaintes = opportunités)
1. **"Video unavailable"** sur les hints récompensés → frustration directe.
2. **Niveaux impossibles sans hint** (design parfois injuste) + hints trop vagues.
3. **Manque de contenu** : "finished all levels, replay is boring, release new levels weekly".
4. **Grammaire/qualité médiocre** : "game thrown together in a week", "grammar is a minefield" —
   la qualité éditoriale des énigmes est le vrai gap.
5. Ads "not appropriate" pour les enfants (le jeu attire un public jeune).

### Synthèse monétisation hypercasual
- Modèle : **pub interstitielle + récompensée + IAP ad-free ($2.99) + coins cosmétiques**.
- **ARPU store très faible** ($5K/mois même à 790K dl) → le modèle dépend ENTIÈREMENT de l'UA
  (achat de trafic) et du eCPM pub. Rentable seulement à grande échelle ou avec un angle
  "ad-free premium" qui monétise mieux par utilisateur.
- Alternative indie : **jeu payant $1.99-2.99 sans pub** (Apple Arcade-like) — pas d'UA massive
  nécessaire, mais volume faible.

### Stack RN + difficulté
- **Water Sort** : RN + Skia/Reanimated (animations fluides de liquide) + générateur de niveaux.
  Complexité **2/5**. Dev 2-4 semaines.
- **Brain Out-like** : RN pur + logique de puzzles + assets 2D. Complexité **2/5**. Le coût est
  dans l'ÉCRITURE des énigmes (contenu), pas le code.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **Water sort + thème différenciant** : la mécanique est prouvée et aimée. Ajouter un
   **twist copié des plaintes** : zéro lag, vitesse adjustable, anti-batterie, et une **police
   d'ads respectueuse** (max 1 interstitielle / N niveaux) pour capter les utilisateurs excédés.
2. **Genre "relaxing puzzle"** : positionner comme "anti-anxiety / silent meditation game"
   (vocabulaire réel des avis 5★) — angle émotionnel sous-exploité.
3. **Tricky riddles avec qualité éditoriale** : un Brain Out-like avec énigmes bien écrites,
   hints qui marchent, nouveaux niveaux hebdo (abonnement contenu), et filtre "family friendly".
4. **Monétisation hybride** : ad-free IAP $2.99 + abo contenu $2.99/mois (niveaux hebdo) —
   améliore l'ARPU vs le modèle pub pur.

### Verdict
- **Note : 6.5/10**. La mécanique est simple et faisable en RN, MAIS les revenus store sont
  dérisoires ($5K à 790K dl) : tout se joue sur le volume UA + les pubs.
- Pour un indie SANS budget UA : privilégier un **angle premium/niche** (relaxing, ad-free,
  thème unique) plutôt que l'hypercasual pub à l'échelle.
- Le gap exploitable le plus net : **la qualité** (lag, ads, grammaire) — les leaders actuels
  sont techniquement faibles, un produit RN polishé peut les dépasser sur la rétention.