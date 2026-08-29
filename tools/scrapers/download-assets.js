// Telecharge icone + screenshots d'une app Google Play (references gauntlet-loop)
// Usage : node download-assets.js <packageName> <dossierSortie> [pays=us]
const gplay = require('google-play-scraper').default;
const fs = require('fs');
const path = require('path');
const https = require('https');
const [,, appId, outDir, country = 'us'] = process.argv;
if (!appId || !outDir) { console.error('Usage: node download-assets.js <packageName> <outDir> [country]'); process.exit(1); }
function dl(url, dest) {
  return new Promise((res, rej) => {
    const f = fs.createWriteStream(dest);
    https.get(url, r => { r.pipe(f); f.on('finish', () => f.close(res)); }).on('error', rej);
  });
}
gplay.app({ appId, country }).then(async r => {
  fs.mkdirSync(outDir, { recursive: true });
  await dl(r.icon, path.join(outDir, 'icon.png'));
  let i = 1;
  for (const s of r.screenshots) {
    await dl(s, path.join(outDir, 'screenshot-' + String(i).padStart(2, '0') + '.png'));
    i++;
  }
  console.log('OK: icon + ' + (i - 1) + ' screenshots -> ' + outDir);
}).catch(e => { console.error('Erreur:', e.message); process.exit(1); });
