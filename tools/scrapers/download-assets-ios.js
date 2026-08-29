// Download iOS icon + screenshots from a metadata JSON file
// Usage: node download-assets-ios.js <metadataJsonPath> <outputDir>
const fs = require('fs');
const path = require('path');
const https = require('https');

const [,, metaPath, outDir] = process.argv;
if (!metaPath || !outDir) { console.error('Usage: node download-assets-ios.js <metadata.json> <outDir>'); process.exit(1); }

const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8').replace(/^\uFEFF/, ''));
fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return resolve(false); }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
      file.on('error', () => resolve(false));
    }).on('error', () => resolve(false));
  });
}

function cleanUrl(u) {
  // keep original mzstatic URLs; strip size query to get full quality
  return u;
}

(async () => {
  let ok = 0;
  if (meta.icon) {
    const dest = path.join(outDir, 'icon.png');
    if (await download(cleanUrl(meta.icon), dest)) ok++;
  }
  const shots = meta.screenshots || [];
  for (let i = 0; i < shots.length; i++) {
    const dest = path.join(outDir, `ios-${String(i + 1).padStart(2, '0')}.png`);
    if (await download(cleanUrl(shots[i]), dest)) ok++;
  }
  console.log(`Downloaded ${ok}/${(meta.screenshots?.length || 0) + 1} files to ${outDir}`);
})().catch(e => { console.error(e.message); process.exit(1); });