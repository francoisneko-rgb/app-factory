// Metadata App Store ecrite en UTF-8 directement (evite BOM/UTF-16 de PowerShell)
// Usage : node scrape-metadata-ios.js <appId> <outputPath> [country=us]
const store = require('app-store-scraper');
const fs = require('fs');
const path = require('path');
const [,, id, outPath, country = 'us'] = process.argv;
if (!id || !outPath) { console.error('Usage: node scrape-metadata-ios.js <appId> <outputPath> [country]'); process.exit(1); }
store.app({ id: Number(id), country })
  .then(r => {
    fs.writeFileSync(outPath, JSON.stringify(r, null, 2), 'utf8');
    console.log('OK', outPath, r.title, '|', r.score, '★', r.reviews, 'ratings');
  })
  .catch(e => { console.error('Erreur:', e.message); process.exit(1); });