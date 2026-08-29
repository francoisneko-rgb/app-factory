// Analyse du dataset keywords : popularite, concurrence, opportunite par racine et par terme.
// Usage : node analyze-keywords.js <inJson> <outSummaryJson>
const fs = require('fs');
const [, , inFile, outFile] = process.argv;
const data = JSON.parse(fs.readFileSync(inFile, 'utf8'));

function combined(terms) {
  // Moyenne du signal store (googlePlay + ios) pour une racine
  let pop = 0, comp = 0, n = 0, topScoreMin = null, topScoreAvg = 0, topScoreN = 0;
  for (const t of terms) {
    for (const s of [t.googlePlay, t.ios]) {
      pop += s.popular; comp += s.competition; n++;
      if (s.topScore != null) { topScoreAvg += s.topScore; topScoreN++; if (topScoreMin == null || s.topScore < topScoreMin) topScoreMin = s.topScore; }
    }
  }
  if (!n) return null;
  return {
    popularity: Math.round(pop / n),
    competition: Math.round(comp / n),
    topScoreAvg: topScoreN ? +(topScoreAvg / topScoreN).toFixed(2) : null,
    topScoreMin: topScoreMin != null ? +topScoreMin.toFixed(2) : null,
    terms: terms.length
  };
}

const rows = data.map(r => ({ root: r.root, ...combined(r.data) }));
// Opportunite = demande forte + concurrence faible
rows.forEach(r => {
  if (r) r.opportunity = r.popularity - r.competition;
  if (r && r.topScoreMin != null && r.topScoreMin < 4.0) r.weakLeader = true;
});
rows.sort((a, b) => (b.opportunity || -999) - (a.opportunity || -999));

// Top termes par racine (les plus opportunistes)
const topTerms = data.map(d => {
  const scored = d.data.map(t => {
    const gp = t.googlePlay, io = t.ios;
    const p = Math.round((gp.popular + io.popular) / 2);
    const c = Math.round((gp.competition + io.competition) / 2);
    return { term: t.term, p, c, opp: p - c,
      gpLeader: gp.apps[0] ? { title: gp.apps[0].title, score: gp.apps[0].score } : null,
      iosLeader: io.apps[0] ? { title: io.apps[0].title, score: io.apps[0].score } : null };
  }).filter(x => x.opp > 0 || x.p >= 60).sort((a, b) => b.opp - a.opp);
  return { root: d.root, terms: scored.slice(0, 5) };
});

fs.writeFileSync(outFile, JSON.stringify({ summary: rows, topTerms }, null, 2));
console.log(JSON.stringify(rows, null, 2));