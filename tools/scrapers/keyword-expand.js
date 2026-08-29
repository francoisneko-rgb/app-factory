// Expansion longue traine d'une racine via Google Suggest (autocomplete).
// Equivalent gratuit de la recherche de mots-cles Appfigures (Public Data non actif).
// Usage : node keyword-expand.js "<racine>" [exhaustif=0]
//   - mode simple   : 1 requete Suggest par racine (~10 suggestions)
//   - mode exhaustif: 26 requetes (a..z) + racine -> jusqu'a ~270 suggestions
const BASE = 'https://suggestqueries.google.com/complete/search';

async function suggest(q) {
  const url = `${BASE}?client=firefox&hl=en&gl=us&q=${encodeURIComponent(q)}`;
  const r = await fetch(url);
  const txt = await r.text();
  try { const j = JSON.parse(txt); return Array.isArray(j[1]) ? j[1] : []; }
  catch { return []; }
}

async function run(root, exhaustive) {
  const seen = new Set([root.toLowerCase()]);
  const out = [];
  if (exhaustive) {
    for (let c = 97; c <= 122; c++) {
      const prefix = root + ' ' + String.fromCharCode(c);
      const s = await suggest(prefix);
      for (const x of s) {
        const k = x.toLowerCase();
        if (!seen.has(k)) { seen.add(k); out.push(x); }
      }
      await new Promise(r => setTimeout(r, 150));
    }
  }
  const s0 = await suggest(root);
  for (const x of s0) {
    const k = x.toLowerCase();
    if (!seen.has(k)) { seen.add(k); out.push(x); }
  }
  return out;
}

const [,, root, exhaustive = '1'] = process.argv;
if (!root) { console.error('Usage: node keyword-expand.js "<root>" [exhaustive=1]'); process.exit(1); }
run(root, exhaustive === '1')
  .then(list => console.log(JSON.stringify({ root, count: list.length, suggestions: list }, null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });