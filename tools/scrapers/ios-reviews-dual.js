// Avis App Store iOS via app-store-scraper : tri HELPFUL puis RECENT, fusion dédupliquée.
// Écriture directe en UTF-8 (évite BOM/UTF-16 de PowerShell).
// Usage : node ios-reviews-dual.js <appId> <outputPath> [numParTri=40] [pays=us] [langue=en]
const store = require('app-store-scraper');
const fs = require('fs');
const [,, id, outPath, numArg = '40', country = 'us', lang = 'en'] = process.argv;
const num = Number(numArg);
if (!id || !outPath) { console.error('Usage: node ios-reviews-dual.js <appId> <outputPath> [numPerSort] [country] [lang]'); process.exit(1); }

function mapReview(x) {
  return {
    id: x.id,
    rating: x.score,
    title: x.title,
    review: x.text,
    updated: x.updated,
    version: x.version,
    developerResponse: x.reply
  };
}

(async () => {
  const out = [];
  const seen = new Set();
  for (const sort of [store.sort.HELPFUL, store.sort.RECENT]) {
    try {
      const r = await store.reviews({ id: Number(id), country, lang, sort, num });
      for (const x of r) {
        if (seen.has(x.id)) continue;
        seen.add(x.id);
        out.push(mapReview(x));
      }
      console.log(`Tri ${sort}: ${r.length} avis recus`);
    } catch (e) {
      console.error(`Erreur tri ${sort}: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 500));
  }
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`OK ${outPath} : ${out.length} avis uniques (helpful+recent)`);
})().catch(e => { console.error(e.message); process.exit(1); });