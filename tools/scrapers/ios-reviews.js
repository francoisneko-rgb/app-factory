// Avis d'une app App Store iOS (tri helpful puis recent)
// Usage : node ios-reviews.js <appIdNumerique> <nombre> [pays=us] [langue=en]
const store = require('app-store-scraper');
const [,, id, num = '100', country = 'us', lang = 'en'] = process.argv;
if (!id) { console.error('Usage: node ios-reviews.js <appId> <num> [country] [lang]'); process.exit(1); }
store.reviews({ id: Number(id), country, lang, sort: store.sort.HELPFUL, num: Number(num) })
  .then(r => console.log(JSON.stringify(r.map(x => ({ id: x.id, rating: x.score, title: x.title, review: x.text, updated: x.updated, version: x.version, developerResponse: x.reply })), null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });
