// Scraping concurrents par niche : metadata + avis Google Play / App Store.
// Usage : node batch-concurrence.js <competitorsJson> <baseOutDir> [throttleMs=900]
const gplay = require('google-play-scraper').default;
const store = require('app-store-scraper');
const fs = require('fs');
const path = require('path');

const [, , cmpFile, baseOut, throttleStr = '900'] = process.argv;
const competitors = JSON.parse(fs.readFileSync(cmpFile, 'utf8'));
const THROTTLE = parseInt(throttleStr, 10);
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function gpMeta(id) {
  const r = await gplay.app({ appId: id, country: 'us', lang: 'en' });
  return { appId: r.appId, title: r.title, developer: r.developer, score: r.score,
    installs: r.installs, released: r.released, updated: r.updated, free: r.free,
    priceValue: r.price, genres: r.genres, ratings: r.ratings, summary: r.summary };
}
async function gpReviews(id, n = 60) {
  try { const r = await gplay.reviews({ appId: id, sort: gplay.sort.NEWEST, num: n, country: 'us', lang: 'en' });
    const arr = Array.isArray(r) ? r : (r && r.data) || [];
    return arr.map(x => ({ user: x.userName, score: x.score, title: x.title, body: x.text, date: x.date })); }
  catch { return []; }
}
async function iosMeta(id) {
  const r = await store.app({ id, country: 'us' });
  return { appId: id, title: r.title, developer: r.developer, score: r.score, price: r.price, free: r.free, url: r.url };
}
async function iosReviews(id, n = 40) {
  try { const r = await store.reviews({ id, sort: 0, country: 'us', num: n });
    return r.map(x => ({ user: x.userName, score: x.score, title: x.title, body: x.text, date: x.date })); }
  catch { return []; }
}

async function main() {
  for (const c of competitors) {
    const slug = (c.slug || String(c.id)).replace(/[^a-zA-Z0-9]/g, '-');
    const dir = path.join(baseOut, c.niche, 'concurrence', slug);
    fs.mkdirSync(dir, { recursive: true });
    let meta, reviews;
    if (c.platform === 'ios') {
      meta = await iosMeta(c.id); await sleep(THROTTLE);
      reviews = await iosReviews(c.id); await sleep(THROTTLE);
    } else {
      meta = await gpMeta(c.id); await sleep(THROTTLE);
      reviews = await gpReviews(c.id, 60); await sleep(THROTTLE);
    }
    fs.writeFileSync(path.join(dir, 'metadata.json'), JSON.stringify(meta, null, 2));
    fs.writeFileSync(path.join(dir, 'avis.json'), JSON.stringify({ total: reviews.length, reviews }, null, 2));
    console.log(`[OK] ${c.niche} / ${slug} (${meta.title || c.id}) ${c.platform} | ${reviews.length} avis`);
  }
  console.log('Done ->', baseOut);
}
main();