# Analyse globale — Pickleball Scheduler (Niche 1)

Date : 2026-08-28 · Panorama + gaps + angle gagnant RN.

---

## 1. Tableau comparatif des leaders

| App | Dev | Note | Ratings | Angle | Monétisation |
|---|---|---|---|---|---|
| Pickleheads | Dink Tech | 4.87 | 10 490 | Directory courts + games + groupes + round robin | Free + abo organisateurs |
| PlayTime Scheduler | PlayTime LLC | 4.53 | 237 | Scheduler club + games + sign-up | Free + upgrade payant |
| Pickleball Time | Relax Software | 3.53 | 15 | Schedule + play + communauté | Free (cassé) |

## 2. Ce qui marche (likes)
- **Remplace les SMS/chaînes de texte** pour organiser (appelé "life-changing", "indispensable", "just what we needed").
- **Directory de courts** (Pickleheads, 16K) = data moat, très apprécié.
- **Round robins + récurrence + sign-up** par skill/niveau + parité de participants.
- **Organisateurs de clubs** (présidents, coordinators) trouvent une vraie valeur → prêts à payer.
- Notifs quand elles marchent, communautés locales (3500 joueurs sur PlayTime).

## 3. Plaintes récurrentes
- **Abo organisateurs** (Pickleheads) : annoncer/organiser coûte.
- **Bugs répétitions** (game qui disparaît la semaine suivante).
- **DUPR lent** (24h), pas de détails des games.
- **UI confuse** (PlayTime Android), notifs mal routées.
- **Produits cassés** (Pickleball Time crash à chaque map/search) = place laissée libre.

## 4. GAPS exploitables
- **Scheduler GRATUIT** (les organisateurs de clubs paieraient, mais le joueur de base veut du gratuit).
- **Round robin anti-répétition** + détails + leaderboard + export.
- **Notifs fiables** routées vers le bon game + RSVP.
- **Édition 1 tap** des sessions, récurrence qui ne disparaît pas.
- Intégration skill level (DUPR-like) en temps réel.

## 5. ANGLE GAGNANT pour notre app React Native

**"Le scheduler pickleball simple, gratuit et fiable pour organiser des games avec ton groupe."**

Positionnement : combiner le meilleur de PlayTime (liste une page simple) + Pickleheads (récurrence,
round robin) SANS le moat data des courts (on ne bat pas 16K courts frontalement). On cible l'organisation
de groupes locaux : scheduler gratuit, round robin, sign-up, notifs fiables, export.

Stack RN : calendrier + round robin + groupes + notifications + stockage local + sync cloud. **Complexité
faible.** Local-first OK (pas besoin de backend lourd au départ).

**Verdict : PÉPITE #1.** Compétitivité 28 (la plus basse), demande réelle 34, sport en tendance,
concurrence quasi nulle, stack simple. Monétisation : pro pour organisateurs (clubs), round-robin avancé,
stats, export — les clubs paient déjà pour ce genre d'outil.
