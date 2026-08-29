// Top charts Google Play (detection de tendances)
// Usage : node top-charts.js [categorie] [collection=TOP_FREE] [nombre=100]
// Collections : TOP_FREE, TOP_PAID, GROSSING, NEW_FREE, NEW_PAID
const gplay = require('google-play-scraper').default;
const [,, category, collection = 'TOP_FREE', num = '100'] = process.argv;
const opts = { collection: gplay.collection[collection], num: Number(num), country: 'us', lang: 'en' };
if (category) opts.category = gplay.category[category];
gplay.list(opts)
  .then(r => console.log(JSON.stringify(r.map(a => ({
    appId: a.appId, title: a.title, developer: a.developer,
    score: a.score, installs: a.installs, released: a.released, updated: a.updated
  })), null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });
