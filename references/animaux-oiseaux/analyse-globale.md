# ANALYSE — ANIMAUX / IDENTIFICATION (2026-08-30)

## 1. Ce que c'est
Apps d'identification et outils animaux : identifier oiseaux (photo/son), insectes, sifflet chien,
suivi animal.

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| Merlin Bird ID | 890K | **gratuit** (Cornell Lab) | — | — |
| Bird ID | 10K | $30K | — | — |
| Picture Insect | 110K | $590K | Subs | — |

## 3. Description des leaders
- **Merlin Bird ID** : identification d'oiseaux par photo/son, GRATUITE (Cornell Lab, non-profit).
- **Picture Insect** : identification d'insectes par photo (abonnement).

## 4. Pépites battables (extraits CSV)
- `bug identifier (51/48)`, `dog whistle (49/47)`, `free bird song identifier (32/54)`,
  `merlin bird id free (65/54)`
- Sous-niches : identification insectes/araignées, sifflet chien, suivi de chien/chat.

## 5. Monétisation
- **Subs** (Picture Insect $590K).
- Merlin gratuit = barre difficile à battre sur les oiseaux.

## 6. Verdict
- **Note : 6/10** : demande réelle (bug identifier 51/48), monétisation prouvée (Picture Insect
  $590K), mais IA d'identification = backend/API coûteux + Merlin gratuit domine les oiseaux.
- **Pépite** : `bug identifier (51/48)` — identification insectes, sous-niche non couverte par Merlin.

---

## 9. ANALYSE APPROFONDIE (2026-08-30) — Picture Insect & Merlin Bird ID

### Données récupérées (dossier `references/animaux-oiseaux/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| Picture Insect: Bug Identifier (id 1461694973, Next Vision) | ✅ | 7 (6 + icône) | 10 (web) | **$590K/mois**, 110K dl — Subs |
| Merlin Bird ID by Cornell Lab (id 773457673, Cornell) | ✅ | 9 (8 + icône) | 10 (web) | **gratuit**, 890K dl — 0 $ |

### Picture Insect — ce qu'il fait exactement
- **IA photo → identification d'insectes** : 4 000+ espèces, résultats en 1 seconde. Lancé 2019,
  note 4.65 (44K avis), 13 langues, 165 Mo (backend IA lourd).
- **3 millions d'utilisateurs revendiqués**. Fonctions : encyclopédie insectes, **référence des
  morsures** (toxicité), **détection de nuisibles** + conseils de traitement, collection perso.
- **Monétisation** : "Premium Yearly" — **1 an à $20 avec 7 jours d'essai** (vu dans les avis).
- **Promesses ASO** : "AI technology", "tell you all about it in a second", "join a community of
  over 3 million insect enthusiasts", "keep your family safe" (morsures).

### Merlin Bird ID — ce qu'il fait exactement
- **4 modes d'identification** : questions pas-à-pas, **photo ID**, **Sound ID** (enregistrement →
  identification des chants), Explore régional. Propulsé par **eBird** (plus grande base ornitho).
- **100% gratuit** (Cornell Lab, non-profit, soutenu par des dons). Note 4.86 (111K avis),
  31 langues, 326 Mo (packs son/photos). Mis à jour 2026-08-24 (très actif).
- "World's leading app for birds" — le machine learning est entraîné sur des millions de photos/
  sons annotés par des ornithologues bénévoles (moat communautaire énorme).

### Voix des utilisateurs — Picture Insect (plaintes = opportunités)
1. **Popups / pression d'abonnement** : "very great app even without subscription… you get many
   popups", "ease press continue with limited version" — mais des utilisateurs disent être
   **"tricked 2 times into purchasing a year"** (confirmation d'achat piégeuse, senior à faible
   revenu) — pratique prédatrice → à NE PAS copier, et à exploiter comme différentiation éthique.
2. **Précision variable** : "hit or miss", "it will always attempt a species ID anyway" même quand
   la photo ne permet pas → **overconfidence de l'IA**. Un entomologiste salue "surprisingly
   accurate & reliable" mais dénonce la **désinformation** (fausses infos de dangerosité).
3. **Pas assez d'infos** : "could use more info" — l'encyclopédie est superficielle sur certaines
   espèces.
4. **Ce qui fait rêver** : précision étonnante sur photos floues ("99% guaranteed genus"),
   identification en temps réel en balade avec un enfant, **"saved my house from carpet beetles"**
   → le bénéfice émotionnel = **la maison sûre / la curiosité satisfaite**.

### Voix des utilisateurs — Merlin (ce qui fait rêver)
1. **"Changed my life. Seriously."** — découverte du monde sonore, "identify at least 20 birds by
   their songs" — bénéfice transformationnel, pas utilitaire.
2. **Sound ID pour oreilles âgées** : "Merlin audio is a God-send for my aging ears" (72 ans) →
   population senior active.
3. **Gratuité** : "best of all it's free" répété. La gratuité totale est un choix stratégique
   (Cornell est financé par subventions/dons) — difficile à battre sur le prix.
4. **Plaintes mineures** : Sound ID parfois faux ("rare bird may be listed… probably an error"),
   refonte UI critiquée, couleurs limitées à 3 dans le formulaire.

### Synthèse monétisation
- **Picture Insect** : freemium + abo annuel $20. **$590K/mois pour 110K dl = $5.4/download !**
  (mieux que Driving Theory). Le modèle "ID gratuit limité + premium (infos + sans pubs)" convertit.
- **Merlin** : 0 $. Le non-profit écrase le marché de l'ID oiseaux par la gratuité — **ne PAS
  attaquer les oiseaux en frontal**.
- **Gap exploitable** : l'**identification de nuisibles/morsures** (insect bites, "is this bed bug?",
  "what bit me?") — urgence émotionnelle + peur → conversion élevée. Picture Insect l'a en
  secondaire, pas en positionnement principal.

### Stack RN + difficulté
- **Picture Insect-like** : RN + **module natif caméra** (VisionKit) + **modèle d'identification IA**
  (soit API tierce type PlantNet/Google Lens, soit fine-tune). Complexité **3/5**. Le mur =
  **précision + coût API par scan** (165 Mo embarqué = modèles on-device, coûteux à maintenir).
- **Merlin-like** : RN + **audio ML on-device** (sound ID) + base eBird. Complexité **4/5** + moat
  de données. Non recommandé.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **"What bit me / bug bite identifier"** : identifier morsures/piqures + dangerosité + premier
   secours. Urgence = conversion. Détection de **punaises de lit (bed bugs)** = peur massive.
   Positionnement : "pest ID + bite safety" plutôt que "bug identifier générique".
2. **Gratuité généreuse sur l'ID de base + premium sur la sécurité** (comme Picture Insect) mais
   avec **confirmation d'achat claire** (anti-arnaque = confiance = note 4.9 potentielle).
3. **Ne PAS aller sur les oiseaux** (Merlin gratuit + moat eBird). Éviter aussi d'entrer en
   frontal sur "plant identifier" (PictureThis, cluster plantes-jardin).

### Verdict
- **Picture Insect : 7/10 comme modèle à imiter** — $5.4/dl prouvé, demande `bug identifier (51/48)`,
  stack faisable en RN. Mais il faut une précision minimale (exigence #1 des utilisateurs).
- **Merlin : référence à NE PAS attaquer** mais à étudier pour l'UX d'identification multi-mode
  (photo/son/formulaire) et la "gamification" de la découverte.
- **Angle gagnant** : identifier les **nuisibles et morsures** (santé/sécurité domestique) —
  douleur émotionnelle forte, monétisation prouvée par Picture Insect, pas de géant gratuit.