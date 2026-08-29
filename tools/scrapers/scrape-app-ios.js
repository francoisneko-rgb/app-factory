// Metadata complete d'une app App Store
// Usage : node scrape-app-ios.js <appIdNumerique> [pays=us]
const store = require('app-store-scraper');
const [,, id, country = 'us'] = process.argv;
if (!id) { console.error('Usage: node scrape-app-ios.js <appId> [country]'); process.exit(1); }
store.app({ id: Number(id), country })
  .then(r => console.log(JSON.stringify(r, null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });
