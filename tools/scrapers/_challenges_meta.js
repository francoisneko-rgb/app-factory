const fs = require('fs');
const store = require('app-store-scraper');
(async () => {
  const targets = { 'behard-75-days': 6450723685, 'her-75': 6746784659 };
  for (const [name, id] of Object.entries(targets)) {
    try { const r = await store.app({ id, country: 'us' }); fs.writeFileSync(process.argv[2] + '\\' + name + '.metadata-ios.json', JSON.stringify(r, null, 2), 'utf8'); console.log('OK', name); } catch(e){ console.error('ERR', name, e.message); }
    await new Promise(r => setTimeout(r, 400));
  }
})();
