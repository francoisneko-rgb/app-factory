# ANALYSE — FINANCE PERSONNELLE (budget, dépenses, crypto) (2026-08-30)

## 1. Ce que c'est
Apps de gestion d'argent : budget, suivi dépenses, épargne, dette, crypto, investissement.

## 2. Revenus CONFIRMÉS Appfigures (juillet 2026)
| App | Downloads/mois | Revenue/mois | Sources | Note |
|---|---|---|---|---|
| YNAB | 30K | **$1M** | Subs | — |
| Wallet (BudgetBakers) | 80K | $140K | Subs | — |

## 3. Description des leaders
- **YNAB** : "You Need A Budget" — méthode d'assignation de chaque dollar, abonnement.
- **Wallet** : suivi de budget/dépenses multi-comptes.

## 4. Pépites battables (extraits CSV)
- `budget planner (51/48)`, `money tracker (45/49)`, `debt payoff`, `crypto portfolio`,
  `rooster money (46/48)` (enfants), `kiwipop (35/43)` (enfants)
- Sous-niches : budget pour enfants (allowance), dette/snowball, crypto portfolio, épargne.

## 5. Monétisation
- **Abonnement** (YNAB $1M).
- Les gens paient pour leur argent.

## 6. Stack & difficulté
- **Stack RN** : RN + (option) agrégation bancaire (Plaid/Open Banking). Complexité 2-3/5.
- Difficulté : l'agrégation bancaire = API payante + confiance ; régulation finance.

## 7. Ce qu'il faudrait faire (si on choisit)
1. Choisir UNE sous-niche SIMPLE sans agrégation bancaire : **budget envelope/cash**,
   **argent de poche enfants** (rooster money, kiwipop), **dette snowball**, **épargne**.
2. Produit simple (saisie manuelle ou enfant).
3. Monétisation abo.
4. **Éviter** l'agrégation bancaire (complexe/régulée).

## 8. Verdict
- **Note : 6.5/10** : monétisation prouvée (YNAB $1M), mais banque = complexe.
- **Pépite** : finance enfants (rooster money 46/48) — simple, sans banque, marché parent/enfant.

---

## ANALYSE APPROFONDIE (2026-08-31) — YNAB & Wallet (BudgetBakers)

### Données récupérées (dossier `references/finance-personnelle/`)
| App | Metadata | Screenshots | Avis | Revenus Appfigures (juil. 2026) |
|---|---|---|---|---|
| YNAB (id 1010865877, You Need A Budget LLC) | ✅ | 10 (9 + icône) | 10 | **$1.0M/mois**, 30K dl — Subs |
| Wallet - Daily Budget & Profit (id 1032467659, BudgetBakers) | ✅ | 11 (10 + icône) | 10 | **$140K/mois**, 80K dl — Subs/IAP |

### YNAB — ce qu'il fait exactement
- **Méthode "zero-based budgeting"** : chaque dollar reçoit un job ("Give every dollar a job"). Pas un simple tracker, un système de changement de comportement.
- **Promesses ASO** : "STOP ARGUING ABOUT MONEY", "STOP DROWNING IN DEBT", "92% of users feel less stressed", "average user saves $600 first month, $6,000 first year", "Free for 30 Days", "Cheaper than couples counseling". Copywriting émotionnel + preuve sociale par témoignages (Kyle, Kat).
- **Features** : sync multi-comptes (up to 6 people), import transactions auto, Loan Planner (dette), Siri shortcuts, net worth tracking, workshops + communauté.
- Note 4.79 (61 361 avis), sorti 2015, mis à jour 2026-08-27 (très actif). Gratuit 30 jours puis **abo ~$99/an ou $14.99/mois** (prix variable promo).
- **$1M/mois avec seulement 30K dl = $33/download !** Monétisation par utilisateur exceptionnelle — la promesse "get good at money" convertit très fort.

### Wallet (BudgetBakers) — ce qu'il fait exactement
- **Gestionnaire de finances perso complet** : sync bancaire (4 000 banques), multi-comptes illimités, reports, budget, stock tracking, dette, factures, multi-devises. 44 langues (très internationalisé).
- **Promesses ASO** : "market-leading personal finance manager", "save money, plan for the future", "see all your finances in one place", "eTrust certified".
- Note 4.56 (5 879 avis). Freemium → Premium (abo mensuel/annuel **ou lifetime**) : sync auto, comptes illimités, reports.
- Positionnement : le "Mint killer" (Mint a fermé) — les avis le confirment ("A possible replacement for Mint").

### Voix des utilisateurs — YNAB (ce qui fait rêver)
1. **"Life changing"** répété (5 avis sur 10) : la méthode change le rapport à l'argent, "no more fighting about money", couple + ADHD/dyscalculia témoignent.
2. **"Worth every penny"** : malgré le prix élevé, les utilisateurs trouvent la valeur. La promesse de transformation justifie l'abo.
3. **Objectifs/épargne par cible** : "the ability to save for different goals/targets" = feature qui manque aux autres apps.
4. **Service client "freakishly nice"** : les utilisateurs citent le support comme différenciateur.
5. **Flexibilité** : "flexible and dynamic, allows you to adjust your spending plan" vs apps "set it and forget it".

### Voix des utilisateurs — Wallet (plaintes = opportunités)
1. **SYNC BUGS (la plainte #1)** : "failed to sync data between my iOS device and the web app", "loss of access to my records". Sync bancaire peu fiable = opportunité pour une app à saisie manuelle simple.
2. **Bank connection failures** : "Keep getting 'bank connection failed error'" — l'agrégation bancaire est LE point faible (complexe, coûteux, fragile).
3. **Support non réactif** : "sent a ticket two times to their support team but no response".
4. **Free version trop limitée** : "the free version does not let you connect bank accounts which was the whole point".
5. **Demande exprimée** : un remplaçant Mint **simple** — les utilisateurs de Mint cherchent une alternative depuis sa fermeture (opportunité de migration).

### Synthèse monétisation
- **YNAB** : abo pur, $33/download, promesse transformationnelle. Le plus gros $/dl du cluster.
- **Wallet** : freemium + abo + **lifetime one-time** (les utilisateurs préfèrent le lifetime — "lifetime purchase that is 1/3 of PocketGuard").

### Stack RN + difficulté
- **YNAB-like** : RN + sync backend. Complexité 2/5 (sans agrégation bancaire) à 4/5 (avec). Le moat = la MÉTHODE + la communauté, pas la techno.
- **Wallet-like** : agrégation bancaire (Plaid/TrueLayer) = coûteux + régulé + fragile (preuve par les avis). ÉVITER.

### Ce qu'il faudrait faire (sous-niche précise recommandée)
1. **Remplaçant Mint simple SANS sync bancaire** : saisie manuelle rapide + budgets enveloppes + objectifs. Les avis Wallet montrent une vraie demande ("I'm tired of manually tracking", "going back to manual" après échec de sync). Un tracker **manuel bien fait** avec import CSV depuis Mint = angle de migration.
2. **Budget enveloppes / cash-envelope** : la promesse YNAB sans le prix YNAB ($4.99/mois vs $14.99). Demande `budget planner (51/48)`.
3. **Finance enfants** (rooster money 46/48, kiwipop 35/43) : allowance + tâches, zéro banque, parent = payeur. Déjà identifié comme pépite.
4. **Éviter absolument** l'agrégation bancaire (plaintes sync Wallet = la preuve).

### Verdict
- **YNAB : monétisation exceptionnelle ($33/dl) mais marque établie + prix élevé** — ne pas y aller frontal.
- **Wallet : sync bancaire = talon d'Achille** (plaintes récurrentes). Une app **manuelle + import + beau design** à $4.99/mois ou lifetime peut prendre les frustrés de la sync.
- **La sous-niche la plus sûre : tracker budget manuel simple à angle "Mint replacement"** — demande réelle (migration Mint), stack RN pur, monétisation abo prouvée.