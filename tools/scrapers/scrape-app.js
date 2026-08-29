// Metadata complete d'une app Google Play
// Usage : node scrape-app.js <packageName> [pays=us] [langue=en]
const gplay = require('google-play-scraper').default;
const [,, appId, country = 'us', lang = 'en'] = process.argv;
if (!appId) { console.error('Usage: node scrape-app.js <packageName> [country] [lang]'); process.exit(1); }
gplay.app({ appId, country, lang })
  .then(r => console.log(JSON.stringify(r, null, 2)))
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });
