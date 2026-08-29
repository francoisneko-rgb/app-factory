// Fix avis JSON (double-encode) — usage : node fix-avis.js <inputPath> <outputPath>
const fs = require('fs');
const [,, inPath, outPath] = process.argv;
if (!inPath || !outPath) { console.error('Usage: node fix-avis.js <in> <out>'); process.exit(1); }
let raw = fs.readFileSync(inPath, 'utf8').trim();
try { raw = JSON.parse(raw); } catch (e) { /* pas double-encodé */ }
if (typeof raw === 'string') raw = JSON.parse(raw);
if (raw && !Array.isArray(raw) && Array.isArray(raw.reviews)) raw = raw.reviews;
const arr = raw;
if (!Array.isArray(arr)) { console.error('Pas un tableau:', typeof arr); process.exit(1); }
const out = arr.map(r => ({
  id: r.id || null,
  rating: r.rating || null,
  title: r.title || null,
  review: r.body || r.review || null,
  updated: r.date || r.updated || null,
  author: r.user || r.author || null,
  version: r.version || null,
  source: 'appstore-web'
}));
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
console.log(`OK ${outPath} : ${out.length} avis`);