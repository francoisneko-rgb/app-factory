# ANALYSE — FINANCE ENFANT (2026-08-30)

## 1. Ce que c'est
Apps d'argent pour enfants : argent de poche, tâches rémunérées, comptes bancaires kids.

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| GoHenry | 25K | (banking, gros) | Abo | — |
| Greenlight | — | (banking, gros) | Abo | — |

## 3. Description des leaders
- **GoHenry / Greenlight** : cartes bancaires + app pour enfants/adolescents (argent de poche,
  tâches), modèle abonnement bancaire B2C.

## 4. Pépites battables (extraits CSV)
- `rooster money (46/48)`, `kiwipop (35/43)`, `allowance`, `chores allowance`
- Sous-niches : tracker d'argent de poche (sans banque), tâches rémunérées, épargne enfant.

## 5. Monétisation
- **Abo** (GoHenry/Greenlight).
- **IAP** pour les trackers simples.

## 6. Verdict
- **Note : 5/10** : les banques kids = gros marché mais nécessitent partenariat bancaire.
- **Pépite** : tracker d'argent de poche SIMPLE (sans banque) — rooster money (46/48), RN pur.

---

## 9. ANALYSE APPROFONDIE (2026-08-30) — GoHenry & Greenlight

### Données récupérées (dossier `references/finance-enfant/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| GoHenry by Acorns Kids Banking (id 683249974, gohenry Ltd) | ✅ | 10 (9 + icône) | 200 (RSS) | **25K dl, rev IAP null** (abo bancaire hors store) |
| Greenlight: For Families (id 1049340702, Greenlight) | ✅ | 8 (7 + icône) | 200 (RSS) | **90K dl, rev IAP null** (abo bancaire hors store) |

### GoHenry — ce qu'il fait exactement
- **Carte de débit prépayée + app pour kids 6-18** : allowance automatisée, **task lists
  (corvées rémunérées)**, **Money Missions** (quiz/vidéos éducatifs gamifiés), objectifs
  d'épargne, 45+ designs de carte, transactions à l'étranger sans frais, retraits ATM.
  Racheté par **Acorns** (fusion). Note **4.48** (14.6K avis) — la plus basse des deux.
- **Modèle** : abonnement famille (~$4.99-9.99/mois) facturé hors App Store.

### Greenlight — ce qu'il fait exactement
- **#1 des apps finance famille** (note 4.80, **489K avis**) : carte kids + contrôle parental,
  allowance automatique, corvées, **investissement (avec approbation parent)**, récompenses
  jusqu'à 6%, **Greenlight Level Up** (jeu de littératie financière), **sécurité famille**
  (location sharing, SOS, crash detection, driving reports), et maintenant **protection des
  seniors** (fraud/scam monitoring, jusqu'à $1M identity theft coverage). 6+ millions de
  kids & parents. Lancé 2016.
- **Modèle** : abonnement famille ($4.99-14.99/mois) hors App Store.

### Voix des utilisateurs — GoHenry (plaintes = opportunités)
1. **Bugs = perte d'argent réelle** : "Many bugs and glitches leading to loss of money",
   "works only 50% of the time", "I wake up to find fees are being taken out of my bank
   account" → **la fiabilité financière est non négociable** — c'est la plainte #1.
2. **Corvées qui paient même non faites** : "if chores don't get completed, the allowance will
   still pay out" → défaut de design du système de tâches.
3. **Support/arnaque perçue** : "Scam type business", "refer friends and family but then won't
   pay" → suspicion sur le programme de parrainage.
4. **Ce qui fait rêver** : "So cool, kid LOVES IT!", "works perfectly for me as a busy working
   mom" (automatisation), **grands-parents** ("Great for the grandkids" — charge les cartes
   pour les anniversaires), "she already set a goal" (épargne gamifiée), **"GoHenry is
   RELIABLE… Much, MUCH better than greenlight"** (la fiabilité est le critère d'arbitrage).

### Voix des utilisateurs — Greenlight (plaintes = opportunités)
1. **Customer service horrible** : "Customer Service is Horrible", "third time I have called in
   regards to a request to cancel my account" → **annulation impossible/support fantôme**.
2. **Frais mensuels ressentis comme injustifiés** : "one could quibble about the monthly fee",
   "Waste of money, waste of time" — surtout quand l'enfant grandit ("for older kids, I find
   this service frustrating").
3. **Bugs de transfert** : "the app transferred $16 into my 'parents wallet' for no reason" →
   mouvements d'argent inexpliqués.
4. **Délais carte** : "It took us 4 months to receive the actual card" — l'onboarding hardware
   casse la promesse.
5. **Ce qui fait rêver** : **les ados adorent** ("As a teenager (17yo) using this it's honestly
   amazing", "EXCITEMENT!!!"), "easiest and best kids spending app to ever exist", corvées +
   épargne + investissement intégrés, "you can make chores for your kids".

### Synthèse monétisation
- **GoHenry & Greenlight : abonnement bancaire B2C (rev IAP null)** — l'argent passe par
  partenariat bancaire (carte + comptes réels). Un indie **ne peut pas** recréer une banque :
  licence, KYC, émetteur de carte = murs énormes.
- **Gap exploitable** : les deux leaders sont **buggés et chers** ($5-15/mois pour une carte
  bancaire). Les plaintes portent sur la **fiabilité + le coût + le support**. Un tracker
  **sans banque** (argent de poche virtuel, corvées, épargne) à **$1.99/mois ou one-shot**
  répond à 90% du besoin des familles AVANT qu'elles aient besoin d'une vraie carte.
- Preuve : `rooster money (46/48)` — un tracker d'argent de poche sans banque a une demande
  réelle et une compétitivité basse.

### Stack RN + difficulté
- **GoHenry/Greenlight-like (avec carte)** : RN + **partenariat néobanque/émetteur** (BaaS type
  Stripe Issuing, Marqeta) + KYC + conformité. Complexité **5/5**. Mur : licence bancaire.
- **Tracker d'argent de poche pur** (sans carte) : RN + logique corvées/allowance/épargne +
  multi-enfants + partage famille. Complexité **2/5**. C'est LA version accessible.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **"Allowance tracker sans banque"** : corvées → allowance (validation parent), objectifs
   d'épargne (avec règle "50/30/20" pour enfants), pas de carte physique. Monétisation :
   **abo $1.99/mois ou one-shot $9.99** (vs $5-15/mois des banques). Cible : parents de 6-12 ans
   qui ne veulent pas encore de carte bancaire.
2. **Positionnement** : "teach money skills WITHOUT a bank card" + **fiabilité/transparence**
   (anti-bugs) + **annulation en 1 clic** (anti-plainte Greenlight). La douleur "mon enfant veut
   une carte à 6 ans" est réelle et le "travailler l'argent d'abord" est un argument éducatif.
3. **Niveau 2** (plus tard) : intégrer une carte via **BaaS** (Stripe Issuing/Marqeta) pour
   monétiser plus — mais PAS au lancement.

### Verdict
- **GoHenry/Greenlight : 5/10 (mur bancaire)** — à ne PAS imiter sur le modèle carte.
  Leurs avis sont une mine : **fiabilité + coût + support** = les 3 piliers de la plainte.
- **Pépite confirmée** : tracker d'argent de poche **sans banque** (demande `rooster money
  46/48`, `allowance`, `chores allowance`) — stack RN 2/5, monétisation directe, pas de mur
  réglementaire, et les leaders prouvent la demande avec $4-15/mois facturés à des millions
  de familles.