// Recherche d'apps App Store iOS (decouverte concurrents / mots cles)
// Usage : node ios-search.js "<terme>" [nombre=30] [pays=us] [langue=en]
const store = require('app-store-scraper');
const [,, term, num = '30', country = 'us', lang = 'en'] = process.argv;
if (!term) { console.error('Usage: node ios-search.js "<term>" [num] [country] [lang]'); process.exit(1); }
store.search({ term, num: Number(num), country, lang })
  .then(r => console.log(JSON.stringify(r.map(a => ({
    appId: a.id, title: a.title, developer: a.developer, developerId: a.developerId,
    score: a.score, price: a.price, currency: a.currency, free: a.free, inAppPurchases: a.inAppPurchases
  })), null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });
