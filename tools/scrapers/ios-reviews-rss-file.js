// Avis App Store via flux RSS Apple, écriture directe UTF-8 (contournement rate-limit app-store-scraper)
// Usage : node ios-reviews-rss-file.js <appId> <outputPath> [max=120] [country=us]
const fs = require('fs');
const [,, id, outPath, maxArg = '120', country = 'us'] = process.argv;
const max = Number(maxArg);
if (!id || !outPath) { console.error('Usage: node ios-reviews-rss-file.js <appId> <outputPath> [max] [country]'); process.exit(1); }

function cleanText(s = '') {
  return s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
}

async function fetchPage(sort, page) {
  const url = `https://itunes.apple.com/${country}/rss/customerreviews/page=${page}/id=${id}/sortBy=${sort}/json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const json = await res.json();
  const raw = Array.isArray(json.feed?.entry) ? json.feed.entry : (json.feed?.entry ? [json.feed.entry] : []);
  return raw.map(e => ({
    id: e.id?.label,
    rating: Number(e['im:rating']?.label),
    title: cleanText(e.title?.label),
    review: cleanText(e.content?.label || e.summary?.label),
    updated: e.updated?.label,
    version: e['im:version']?.label,
    author: e.author?.name?.label || e.author?.label,
    helpfulVotes: Number(e['im:voteSum']?.label) || 0
  }));
}

(async () => {
  const out = [];
  const seen = new Set();
  for (const sort of ['mostHelpful', 'mostRecent']) {
    for (let page = 1; page <= 10; page++) {
      if (out.length >= max) break;
      try {
        const batch = await fetchPage(sort, page);
        if (!batch.length) break;
        for (const r of batch) {
          if (seen.has(r.id)) continue;
          seen.add(r.id);
          out.push(r);
          if (out.length >= max) break;
        }
      } catch (e) {
        console.error(`Erreur page ${page} (${sort}) : ${e.message}`);
        break;
      }
      await new Promise(r => setTimeout(r, 400));
    }
    if (out.length >= max) break;
  }
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log(`OK ${outPath} : ${out.length} avis uniques`);
})().catch(e => { console.error(e.message); process.exit(1); });