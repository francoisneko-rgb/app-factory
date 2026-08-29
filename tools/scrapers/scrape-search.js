// Recherche d'apps Google Play (decouverte de concurrents et mots cles)
// Usage : node scrape-search.js "<terme>" [nombre=30] [pays=us] [langue=en]
const gplay = require('google-play-scraper').default;
const [,, term, num = '30', country = 'us', lang = 'en'] = process.argv;
if (!term) { console.error('Usage: node scrape-search.js "<term>" [num] [country] [lang]'); process.exit(1); }
gplay.search({ term, num: Number(num), country, lang })
  .then(r => console.log(JSON.stringify(r.map(a => ({
    appId: a.appId, title: a.title, developer: a.developer,
    score: a.score, installs: a.installs, free: a.free, price: a.price
  })), null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });
