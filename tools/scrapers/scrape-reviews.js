// Avis d'une app Google Play (tri pertinence puis recence)
// Usage : node scrape-reviews.js <packageName> <nombre> [pays=us] [langue=en]
const gplay = require('google-play-scraper').default;
const [,, appId, num = '200', country = 'us', lang = 'en'] = process.argv;
if (!appId) { console.error('Usage: node scrape-reviews.js <packageName> <num> [country] [lang]'); process.exit(1); }
const half = Math.ceil(Number(num) / 2);
Promise.all([
  gplay.reviews({ appId, country, lang, sort: gplay.sort.HELPFUL, num: half }),
  gplay.reviews({ appId, country, lang, sort: gplay.sort.NEWEST, num: half })
]).then(([helpful, newest]) => {
  const seen = new Set();
  const all = [...helpful.data, ...newest.data].filter(r => !seen.has(r.id) && seen.add(r.id));
  console.log(JSON.stringify(all, null, 2));
}).catch(e => { console.error('Erreur:', e.message); process.exit(1); });
