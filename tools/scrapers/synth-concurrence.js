// Synthese concurrentielle par niche : metadata + buckets d'avis.
// Usage : node synth-concurrence.js <appsDir> <outMd>
const fs = require('fs');
const path = require('path');
const [, , appsDir, outMd] = process.argv;

const STOP = new Set('app apps this that with have from your the and for you not are was but out its them they just get will more some can there it on my me of in to'.split(' '));

function bucket(b) {
  return /(wish|would pay|hope|please add|need|feature|add |would love|could we|suggestion|request|please)/i.test(b) ? 'DEMANDE'
    : b.score <= 2 ? 'PLAINTE'
    : b.score >= 5 ? 'DESIR' : 'MOYEN';
}
function topWords(reviews, pred) {
  const w = {};
  reviews.filter(r => pred(r)).forEach(r => (r.body || '')
    .toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/)
    .filter(x => x.length > 3 && !STOP.has(x))
    .forEach(x => w[x] = (w[x] || 0) + 1));
  return Object.entries(w).sort((a, b) => b[1] - a[1]).slice(0, 14).map(([k, n]) => `${k}(${n})`).join(' ');
}
function quotes(reviews, pred, n) {
  return reviews.filter(r => pred(r)).slice(0, n).map(r => `"${(r.body || r.title || '').slice(0, 110).trim()}"`).join(' | ');
}

const niches = fs.readdirSync(appsDir).filter(d => !d.startsWith('.'));
let md = '# Synthese concurrentielle — 2026-08-24\n\n';
for (const niche of niches) {
  const dir = path.join(appsDir, niche, 'concurrence');
  const comps = fs.readdirSync(dir).filter(d => !d.startsWith('.'));
  md += `\n## ${niche}\n`;
  let all = [];
  for (const c of comps) {
    let meta = {}, avis = { reviews: [] };
    try { meta = JSON.parse(fs.readFileSync(path.join(dir, c, 'metadata.json'), 'utf8')); } catch {}
    try { avis = JSON.parse(fs.readFileSync(path.join(dir, c, 'avis.json'), 'utf8')); } catch {}
    const reviews = (avis.reviews || []).map(r => ({ ...r, _comp: c, _bucket: bucket(r) }));
    all = all.concat(reviews);
    const score = meta.score != null ? Number(meta.score).toFixed(2) : '?';
    md += `- **${meta.title || c}** — note ${score} · installs ${meta.installs ?? '?'} · genre ${(meta.genres || []).join('/') || '?'} · ${reviews.length} avis\n`;
  }
  const P = all.filter(r => r._bucket === 'PLAINTE');
  const D = all.filter(r => r._bucket === 'DEMANDE');
  const De = all.filter(r => r._bucket === 'DESIR');
  md += `- Avis: ${all.length} (plaintes ${P.length}, demandes ${D.length}, désirs ${De.length})\n`;
  md += `- **Mots plaintes**: ${topWords(all, r => r._bucket === 'PLAINTE')}\n`;
  md += `- **Top plaintes**: ${quotes(all, r => r._bucket === 'PLAINTE', 6)}\n`;
  md += `- **Mots demandes**: ${topWords(all, r => r._bucket === 'DEMANDE')}\n`;
  md += `- **Top demandes**: ${quotes(D, () => true, 5)}\n`;
  md += `- **Top désirs (5★)**: ${quotes(De, () => true, 4)}\n`;
}
fs.writeFileSync(outMd, md);
console.log(md);