// Batch intelligence mots-clés : expansion racine + signal-store (popularite/concurrence).
// Usage : node batch-intel.js <rootsFile> <outJson> [maxSug=8] [throttleMs=400]
const gplay = require('google-play-scraper').default;
const store = require('app-store-scraper');
const fs = require('fs');

const [, , rootsFile, outFile, maxSugStr = '8', throttleStr = '400'] = process.argv;
const roots = fs.readFileSync(rootsFile, 'utf8').split(/\r?\n/).map(s => s.trim()).filter(Boolean);
const MAX_SUG = parseInt(maxSugStr, 10);
const THROTTLE = parseInt(throttleStr, 10);
const sleep = ms => new Promise(r => setTimeout(r, ms));

const SUGGEST_BASE = 'https://suggestqueries.google.com/complete/search';
async function suggest(q) {
  const url = `${SUGGEST_BASE}?client=firefox&hl=en&gl=us&q=${encodeURIComponent(q)}`;
  try { const j = JSON.parse(await (await fetch(url)).text()); return Array.isArray(j[1]) ? j[1] : []; }
  catch { return []; }
}
async function gpSearch(term, n = 6) {
  try { const r = await gplay.search({ term, num: n, country: 'us', lang: 'en' });
    return r.map(a => ({ appId: a.appId, title: a.title, dev: a.developer,
      score: a.score ? +a.score.toFixed(2) : null, free: a.free })); }
  catch { return []; }
}
async function iosSearch(term, n = 6) {
  try { const r = await store.search({ term, num: n, country: 'us', lang: 'en' });
    return r.map(a => ({ appId: a.id, title: a.title, dev: a.developer,
      score: a.score ? +a.score.toFixed(2) : null, free: a.free })); }
  catch { return []; }
}
function signal(apps) {
  const scored = apps.filter(a => a.score != null && a.score > 0);
  if (!scored.length) return { popular: 0, competition: 0, topScore: null, nApps: 0 };
  const top = Math.max(...scored.map(a => a.score));
  const avg = scored.reduce((s, a) => s + a.score, 0) / scored.length;
  const popular = Math.min(100, Math.round(apps.length * 16) + (avg >= 4.0 ? 10 : 0));
  const topStr = top >= 4.5 ? 100 : top >= 4.0 ? 72 : top >= 3.5 ? 45 : 22;
  const density = Math.min(100, apps.length * 14);
  const competition = Math.min(100, Math.round(topStr * 0.7 + density * 0.3 + (avg >= 4.3 ? 14 : 0)));
  return { popular, competition, topScore: +top.toFixed(2), nApps: apps.length, avgScore: +avg.toFixed(2) };
}

async function main() {
  let results = [];
  const done = new Set();
  if (fs.existsSync(outFile)) {
    try { results = JSON.parse(fs.readFileSync(outFile, 'utf8')); results.forEach(r => done.add(r.root)); }
    catch { results = []; }
  }
  for (const root of roots) {
    if (done.has(root)) { console.log(`[skip] ${root}`); continue; }
    const sug = await suggest(root);
    const seen = new Set();
    const terms = [root, ...sug.slice(0, MAX_SUG)].filter(t => {
      const k = t.trim().toLowerCase();
      if (!k || seen.has(k)) return false;
      seen.add(k); return true;
    });
    const data = [];
    for (const t of terms) {
      const gp = await gpSearch(t); await sleep(THROTTLE);
      const io = await iosSearch(t); await sleep(THROTTLE);
      data.push({ term: t, googlePlay: { ...signal(gp), apps: gp }, ios: { ...signal(io), apps: io } });
    }
    results.push({ root, nSuggestions: sug.length, data });
    done.add(root);
    fs.writeFileSync(outFile, JSON.stringify(results, null, 2));
    console.log(`[${done.size}/${roots.length}] ${root}: ${sug.length} sugg`);
  }
  console.log('Done ->', outFile);
}
main();