# 75 CHALLENGE — Brainstorming (G2bis, conclu 2026-09-29)

> Synthèse finale du brainstorming, validée en amont par l'utilisateur (ADR-016 : aucun
> cahier des charges avant ce document). Source des décisions : analyse des 5 concurrents
> (BeHard, Her75, 75 Hard officielle, 75 Days « Abeni », Challenge Habits) + squelette
> commun v2 (`references/challenges-75-jours/MAJ-STRUCTURE-COMMUNE.md`) + thème validé
> (`apps/75challenge/design/DESIGN.md`).

---

## 1. Positionnement (la promesse en une phrase)

> **« Ton défi de 75 jours, à toi de le finir. »**
> Un tracker de challenges 75 jours, sans compte, honnête sur le prix, où la
> personnalisation est le cœur du produit.

Ce qu'on est, et ce qu'on n'est pas :
- **On est** : un rituel d'engagement fort (contrat signé au doigt) + un moteur
  personnalisable (Hard / Soft / Medium, durées 25/50/75, doses dynamiques, tâches custom)
  + un parcours de confiance (100 % local, zéro compte, prix clair) + un look éditorial
  clair et calme (thème pastel validé).
- **On n'est pas** : une app de gym masculine sombre/néon, une app « social » (hors v1),
  un mur payant agressif, un produit à compte forcé ou à abonnement caché.

Différenciation (ce qu'on copie et ce qu'on améliore) :
| Source | On reprend | On améliore |
|---|---|---|
| BeHard | Contrat signé au doigt | Paywall tardif et honnête (pas agressif précoce) |
| 75 Gratuite « Abeni » | Funnel de confiance (no-account, avis 5★, privacy-first) + paywall en couches | Essai / prix vraiment transparent (lifetime) |
| Challenge Habits | Moteur 25/50/75 + doses dynamiques + « At least X/day » | Éditer un défi pré-fait (pas seulement en créer un) |
| Her75 | Look éditorial clair, pastels | Sans la partie « social » (hors v1) |
| 75 Hard officielle | — | Évite ses anti-patterns (compte forcé, boutique, 7 cases fixes) |

## 2. Fonctions v1 (issues du squelette commun v2)

1. **Accroche** — welcome ciblé « 75 jours » + preuve sociale (+6 256 ont commencé).
2. **Éducation** — 1 règle = 1 écran, chiffres officiels, bouton « Passer ».
3. **Personnalisation** — quiz « pourquoi / craintes » + choix du challenge
   (Hard / Soft / Medium / Personnalisé) + intensité → durée 25/50/75 + doses dynamiques
   + dates de fin auto-affichées.
4. **Confiance** — privacy-first : 100 % local, zéro compte, avis 5★.
5. **Engagement** — contrat signé au doigt (rituel).
6. **Paywall** — modal skippable + rail permanent « Premium » + badges couronne sur les
   actions payantes ; **achat unique $19.99** (mis en avant) + **abonnement $29.99/an**,
   croix toujours visible, annulation 1 tap.
7. **Boucle quotidienne** — statut « Day X of 75 » + compte à rebours « Time Left » ;
   checklist des habitudes dosées (At least X/day) avec coche ✓/✗ ; saisie d'unités
   (pages, ml, min) ; photo quotidienne avec éditeur ; tâches custom (dont
   « nécessaire pour valider le jour ») ; en option : poids, journal.
8. **Suivi** — calendrier de progression 75 jours + % global + « 1ère tentative » /
   archivage des tentatives.
9. **Partage** — bouton « partager ma progression » (export image), sans réseau social.

## 3. Nom final (doit contenir « 75 » — décision utilisateur)

**Décision : « 75 Challenge »** (2026-09-29). Le « 75 » surfe sur le mot-clé
« 75 challenge » (demande réelle identifiée en recherche). Nom simple, colle à la
catégorie, clair en ASO. On garde ce nom de travail pour la v1.

## 4. Décisions finales (2026-09-29)
- [x] **Nom** : « 75 Challenge » (surfe sur le mot-clé « 75 »).
- [x] **Positionnement + fonctions v1** validés (section 1 et 2).
- [x] **Prix** : **achat unique $4.99** (prix d'appel de lancement, app de test) —
      remplace le $19.99. Un seul achat, à vie. On retirera / montera le prix si
      l'app confirme son potentiel. [abonnement $29.99/an : écarté pour la v1 test]
- [x] **Audience** : unisexe (hommes + femmes) — thème éditorial pastel non genré.
- [x] **Multi-listing** : **1 seule app** (les 3 intensités + perso dedans).

