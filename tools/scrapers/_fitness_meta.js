const fs = require('fs');
const store = require('app-store-scraper');
(async () => {
  const targets = { 'hevy': 1458862350, 'strong': 464254577 };
  for (const [name, id] of Object.entries(targets)) {
    try { const r = await store.app({ id, country: 'us' }); fs.writeFileSync(process.argv[2] + '\\' + name + '.metadata-ios.json', JSON.stringify(r, null, 2), 'utf8'); console.log('OK', name); } catch(e){ console.error('ERR', name, e.message); }
    await new Promise(r => setTimeout(r, 400));
  }
})();
