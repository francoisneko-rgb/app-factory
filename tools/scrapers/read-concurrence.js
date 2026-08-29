// Synthese concurrentielle par niche : metadata + buckets d'avis.
// Usage : node synth-concurrence.js <appsDir> <outMd>
const fs = require('fs');
const path = require('path');
const [, , appsDir, outMd] = process.argv;

function bucket(b) {
  return b.body && /(wish|would pay|hope|please add|need|feature|add |would love|could we|suggestion|please)/i.test(b.body) ? 'DEMANDE'
    : b.score <= 2 ? 'PLAINTE'
    : b.score >= 5 ? 'DESIR' : 'MOYEN';
}
function topFreq(reviews, scores, minLen = 25) {
  const words = {};
  reviews.filter(r => (scores || []).includes(r.score) || (scores === null))
    .map(r => (r.body || '').toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(w => w.length > 3 && !STOP.has(w)))
    .flat().forEach(w => words[w] = (words[w] || 0) + 1);
  return Object.entries(words).sort((a, b) => b[1] - a[1]).slice(0, 20).filter(([w, n]) => n >= 2);
}

const niches = fs.readdirSync(appsDir).filter(d => !d.startsWith('.'));
let md = '# Synthese concurrentielle — 2026-08-24\n\n';
for (const niche of niches) {
  const concurDir = path.join(appsDir, niche, 'concurrence');
  const comps = fs.readdirSync(concurDir).filter(d => !d.startsWith('.'));
  md += `\n## ${niche}\n`;
  let all = [];
  for (const c of comps) {
    const dir = path.join(concurDir, c);
    let meta = {}, avis = { reviews: [] };
    try { meta = JSON.parse(fs.readFileSync(path.join(dir, 'metadata.json'), 'utf8')); } catch {}
    try { av = JSON.parse(fs.readFileSync(path.join(dir, 'avis.json'), 'utf8')); } catch {}
    const reviews = av.reviews || [];
    reviews.forEach(r => { r._comp = c; r._bucket = bucket(r); });
    rows = rows.concat(reviews);
    const score = meta.score != null ? meta.score.toFixed(2) : '?';
    md += `- **${meta.title || c}** (${c}) — note ${score}, installs ${meta.installs ?? '?'}, genre ${(meta.genres||[]).join('/') || '?'}\n`;
  }
  const N = rows.length;
  const nP = rows.filter(r => r._bucket === 'PLAINTE').length;
  const nD = rows.filter(r => r._bucket === 'DEMANDE').length;
  const nDes = rows.filter(r => r._bucket === 'DESIR').length;
  md += `- Avis analysés: ${N} (plaintes ${nP}, demandes ${nD}, désirs ${nDes})\n`;
  md += `- **Top plaintes (1-2★)**: ${rows.filter(r=>r._bucket==='PLAINTE').slice(0,5).map(r=>'"'+(r.body||r.title||'').slice(0,90)+'"').join(' | ')}\n`;
  md += `- **Top désirs (5★)**: ${rows.filter(r=>r._bucket==='DESIR').slice(0,3).map(r=>'"'+(r.body||'').slice(0,80)+'"').join(' | ')}\n`;
}
fs.writeFileSync(outMd, md);
console.log(md);
const STOP = new Set(['app','apps','this','that','with','have','from','your','the','and','for','you','not','are','was','but','out','its','them','they','just','get','will']);