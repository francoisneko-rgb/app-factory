// Récolte massive d'auto-complétions Google Play (alphabet soup)
// NOTE 2026-08-26 : les endpoints historiques sont morts :
//   - Apple MZSearchHints (search.itunes.apple.com/.../MZSearchHints...) -> déprécié par Apple, hints toujours vides
//   - Google market.android.com/suggest/SuggRequest -> 404, retiré
// Endpoint vivant et gratuit : suggestqueries.google.com/complete/search?client=firefox&ds=play
//   (auto-complétion officielle du Play Store, verticale + terme, classée par popularité)
// Usage : node autocomplete-harvest.js <seeds.txt> <sortie.csv> [lang=en] [pays=us] [startIndex=0]
const fs = require('fs');
const https = require('https');

const [,, seedsFile, outFile, lang = 'en', country = 'us', startIdx = '0'] = process.argv;
if (!seedsFile || !outFile) { console.error('Usage: node autocomplete-harvest.js seeds.txt out.csv [lang] [country] [startIndex]'); process.exit(1); }

const GPLAY = q => 'https://suggestqueries.google.com/complete/search?client=firefox&ds=play&hl=' + lang + '&gl=' + country + '&q=' + encodeURIComponent(q);

function get(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Accept': 'application/json' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    });
    req.on('error', () => resolve(''));
    req.setTimeout(10000, () => { req.destroy(); resolve(''); });
  });
}

// Ligne Google : "play/en&query@apps|workout for women" -> terme="workout for women", vertical="apps"
function extractTerms(raw) {
  const terms = [];
  try {
    const arr = JSON.parse(raw);
    const list = arr && Array.isArray(arr[1]) ? arr[1] : [];
    for (const item of list) {
      if (typeof item !== 'string' || !item.includes('query@')) continue;
      const pipeIdx = item.lastIndexOf('|');
      if (pipeIdx < 0) continue;
      const verticalMatch = item.match(/query@([^|]+)\|/);
      const vertical = verticalMatch ? verticalMatch[1] : '';
      let s = item.slice(pipeIdx + 1).trim().toLowerCase();
      if (s.length > 2 && s.length < 60 && !s.startsWith('http') && /^[a-z0-9\u00C0-\u00FF '\-+]+$/.test(s)) terms.push({ term: s, vertical });
    }
  } catch (e) { /* réponse non-JSON : ignorer */ }
  return terms;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');

(async () => {
  const seeds = fs.readFileSync(seedsFile, 'utf8').split('\n').map(s => s.trim().toLowerCase()).filter(s => s && !s.startsWith('#'));
  const seen = new Set();
  const isNew = !fs.existsSync(outFile);
  const ws = fs.createWriteStream(outFile, { flags: 'a' });
  if (isNew) ws.write('keyword,seed,store,vertical,via,lang,country\n');
  let count = 0;
  let reqCount = 0;
  const t0 = Date.now();
  for (let i = Number(startIdx); i < seeds.length; i++) {
    const seed = seeds[i];
    const queries = [seed, ...ALPHA.map(l => seed + ' ' + l), ...ALPHA.map(l => seed + ' ' + l + ' ')];
    for (const q of queries) {
      const raw = await get(GPLAY(q));
      reqCount++;
      for (const { term, vertical } of extractTerms(raw)) {
        const key = 'gplay|' + term;
        if (!seen.has(key)) { seen.add(key); ws.write([term, seed, 'gplay', vertical, q, lang, country].map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',') + '\n'); count++; }
      }
      await sleep(120 + Math.random() * 150);
    }
    const el = ((Date.now() - t0) / 60000).toFixed(1);
    console.log('[' + (i + 1) + '/' + seeds.length + '] ' + seed + ' — uniques: ' + count + ' — req: ' + reqCount + ' — ' + el + ' min');
  }
  ws.end();
  console.log('TERMINE: ' + count + ' mots clés uniques -> ' + outFile);
})();