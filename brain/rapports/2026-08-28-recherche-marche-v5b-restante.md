# RAPPORT — Scoring salve v5b restante (90 mots-clés)

Date : 2026-08-28 · Source : Appfigures Keyword Inspector (Popularité/Compétitivité iOS US)
Méthode : linéaire, un mot-clé après l'autre, sauvegarde immédiate. Zéro boucle de réessai.
Fichier de données : `brain/marche/scoring/appfigures-insights.csv` (302 → 392 lignes).

---

## 1. COMBien scorés

**90 / 90 mots-clés traités** (aucun bloqué). Répartition par domaine :
- AUTO (7) : car maintenance tracker 5/59, fuel tracker 6/59, obd2 scanner NA, ev charging map NA,
  **dashcam 42/66 ✅**, parking finder 5/74, vin decoder NA.
- TRANSIT (4) : bus tracker 53/91, subway map NA, offline maps NA, transit app NA.
- BEAUTÉ (8) : makeup try on 5/77, nail art NA, ingredient scanner NA, perfume finder NA,
  color season 5/38, kibbe NA, wardrobe planner NA, outfit planner NA.
- FINANCE (11) : split bill 9/85, vat 11/55, mileage tracker 54/90, subscription tracker 5/93,
  net worth 5/88, debt snowball 5/74, dividend NA, forex 52/93, crypto tax 5/59, 1099 5/92, per diem 5/56.
- CRÉATION IA (12) : ai tutor, homework helper, stable diffusion, comfyui, ollama, prompt library,
  mcp server, whisper, business card scanner, scan cad, photomath → **TOUS NA** (sauf handwriting ocr 5/44).
- JEUX (10) : mahjong 72/93, solitaire 70/98, **rummy 52/77 ✅**, wordle NA, connections NA,
  **escape room 46/60 ✅**, geoguessr 42/80, anime 63/96, manga 58/87, webtoon 69/—.
- MÉDICAL CHRONIQUE (12) : blood pressure, thyroid, hashimoto, ibs, fodmap, fibromyalgia, long covid,
  asthma tracker, sleep apnea, cpap, pill identifier → **TOUS NA** ; drug interaction NA/60.
- IDENTIFIANTS (5) : rock identifier 56/82, mineral NA, fossil NA, insect 6/74, wildflower NA.
- SONS/FOCUS (8) : digital wellbeing NA, doomscrolling NA/73, brown noise 5/77, focus music NA,
  lofi NA, asmr NA, binaural NA, white noise NA.
- PHOTO/VIDÉO (5) : subtitle NA, screen recorder NA, gif maker 53/89, slow motion NA, time lapse NA.
- RÉFÉRENCE/CALC (8) : dictionary, thesaurus, wikipedia, periodic table, nursing calculator,
  medical calculator, electrician, hvac → **TOUS NA**.

---

## 2. Pépites strictes (Pop > 30 & Comp < 80) — 3 trouvées

| # | Mot-clé | Pop | Comp | Cluster | Capacité à surpasser |
|---|---|---|---|---|---|
| 1 | **dashcam** | 42 | 66 | auto (renforce cluster 53) | L'app iPhone comme dashcam : leader Dazz Cam 1.8K* / DashCam Recorder 9* (2.71★) → marché fragmenté, faible volume leader. |
| 2 | **rummy** | 52 | 77 | jeux-cartes (renforce cluster 52) | Leader Rummy 2.5K, pas de monopole. Comp 77 modérée. |
| 3 | **escape room** | 46 | 60 | escape-room (renforce cluster 51) | Leader Room Escape 357*, reste 4.6★. Comp 60 modérée. |

Ces 3 pépites **renforcent des clusters déjà existants** (53 auto, 52 jeux-cartes, 51 escape-room).
Elles ne créent AUCUNE nouvelle niche majeure et n'ont pas le ratio demande/compétition du top actuel.

---

## 3. Fichiers générés
- `appfigures-insights.csv` : 302 → **392 lignes** (+90).
- `appfigures_raw/related_dashcam.csv` (25 related).
- `appfigures_raw/rankings_dashcam.csv`, `rankings_rummy.csv`, `rankings_escape_room.csv`.
- `appfigures_raw/kw_scrape.js` (script réutilisable anti-blocage).
- `consolidation_mots_cles.csv` : 645 → **735 lignes** (+90).
- `MEILLEURES_NICHES.md` : **cluster 56** ajouté + tableau récap + conclusion à jour.
- `brain/logs/2026-08-28-session-recherche-jour2.md` : section salve v5b restante.

---

## 4. Clusters ajoutés à MEILLEURES_NICHES.md
- **Cluster 56 — Salve v5b restante (90 mots-clés)** : documente les 3 pépites strictes
  (dashcam, rummy, escape room) et écarte les domaines NA/compétitifs (médical chronique,
  beauté, finance, création IA, sons, vidéo, référence, identifiants, transit).
- Aucun nouveau cluster majeur : les pépites renforcent les clusters existants 51/52/53.

---

## 5. Les 3 meilleures nouvelles niches vs top actuel

**Top actuel (inchangé) — recommandation n°1 :**
1. **Pickleball scheduler** (comp 28, leader = 12 notes, marché vierge) — PÉPITE #1.
2. **Timers sport (interval/tabata/boxing)** (40-60/42-61, stack ultra-simple).
3. **Islam / athkar-azkar-qibla** (demande réelle sur 8+ mots-clés, sous-niches petites).

**3 meilleures "nouvelles" pépites de cette salve v5b (en renfort des clusters existants) :**
1. **dashcam 42/66** — app iPhone dashcam, leader faible (9*) et mal noté (2.71★).
2. **rummy 52/77** — jeu de cartes, pas de monopole.
3. **escape room 46/60** — puzzle, comp modérée.

**RECOMMANDATION N°1 :** rester sur **pickleball scheduler** (ou timers sport / islam selon la
validation utilisateur). La salve v5b restante n'apporte aucune niche capable de détrôner ce top.
Les 3 pépites v5b (dashcam, rummy, escape room) sont des options de diversification jeux/auto,
PAS des priorités pour une première app simple.

---

## 6. À ne PAS poursuivre (pop NA / compétitif)
Médical chronique, beauté, finance, création IA, sons/focus, vidéo, référence/calc, identifiants
(hors rock), transit — tous ressortis NA ou compétitifs (comp > 80) au Appfigures US.
