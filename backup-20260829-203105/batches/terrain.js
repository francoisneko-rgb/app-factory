// Reusable Appfigures Keyword Inspector scraper.
// Expects a global array __KWS__ to be set before running.
// For each keyword: reads main popularity/competitiveness from Insights panel,
// captures related keywords, and rankings if (pop>=30 && comp<80).
async (page) => {
  const kws = ["timesheet","punch clock","safety inspection","osha","scaffolding","delivery proof","signature","nfc","rfid","asset tag","farm","livestock","crop"];
  const results = [];
  for (const kw of kws) {
    const r = { keyword: kw, popularity: 'NA', competitiveness: 'NA', related: [], rankings: [] };
    try {
      await page.waitForTimeout(400);
      await page.goto('https://appfigures.com/reports/keyword-inspector?keyword=' + encodeURIComponent(kw) + '&country=US&store=apple%3Aios&device_type=handheld&view=related-keywords', { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForFunction(() => /Popularity\s*\d/.test(document.body.innerText) && /Competitiveness\s*\d/.test(document.body.innerText), { timeout: 30000 }).catch(() => {});
      await page.waitForTimeout(1200);
      let ins = await page.evaluate(() => {
        const leaf = [...document.querySelectorAll('body *')].find(e => e.children.length === 0 && e.textContent.trim() === 'Insights');
        let txt = '';
        if (leaf && leaf.parentElement) {
          let p = leaf.parentElement;
          for (let i = 0; i < 4 && p; i++) {
            const t = p.textContent.replace(/\s+/g, ' ');
            if (t.includes('Popularity') && t.includes('Competitiveness')) { txt = t; break; }
            p = p.parentElement;
          }
        }
        const popMatch = txt.match(/Popularity\s*(\d+|—|\-)/);
        const compMatch = txt.match(/Competitiveness\s*(\d+|—|\-)/);
        const clean = (m) => m ? (m[1] === '—' || m[1] === '-' ? 'NA' : m[1]) : 'NA';
        const rows = [];
        const table = document.querySelector('table');
        if (table) {
          for (const tr of table.querySelectorAll('tbody tr')) {
            const cells = [...tr.querySelectorAll('td')];
            if (cells.length < 4) continue;
            const kwBtn = cells[1].querySelector('button');
            const keyword = kwBtn ? kwBtn.textContent.trim() : cells[1].textContent.trim();
            if (!keyword) continue;
            rows.push({ keyword, popularity: (cells[2].textContent.trim() === '—' ? 'NA' : cells[2].textContent.trim()), competitiveness: (cells[3].textContent.trim() === '—' ? 'NA' : cells[3].textContent.trim()) });
          }
        }
        return { popularity: clean(popMatch), competitiveness: clean(compMatch), related: rows };
      });
      r.popularity = ins.popularity;
      r.competitiveness = ins.competitiveness;
      if (ins.popularity === 'NA' || ins.competitiveness === 'NA') {
        await page.waitForTimeout(600);
        await page.goto('https://appfigures.com/reports/keyword-inspector?keyword=' + encodeURIComponent(kw) + '&country=US&store=apple%3Aios&device_type=handheld&view=related-keywords', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForFunction(() => /Popularity\s*(\d|—)/.test(document.body.innerText) && /Competitiveness\s*(\d|—)/.test(document.body.innerText), { timeout: 10000 }).catch(() => {});
        await page.waitForTimeout(1200);
        ins = await page.evaluate(() => {
          const leaf = [...document.querySelectorAll('body *')].find(e => e.children.length === 0 && e.textContent.trim() === 'Insights');
          let txt = '';
          if (leaf && leaf.parentElement) { let p = leaf.parentElement; for (let i = 0; i < 4 && p; i++) { const t = p.textContent.replace(/\s+/g, ' '); if (t.includes('Popularity') && t.includes('Competitiveness')) { txt = t; break; } p = p.parentElement; } }
          const popM = txt.match(/Popularity\s*(\d+|—|\-)/);
          const compM = txt.match(/Competitiveness\s*(\d+|—|\-)/);
          const clean = (m) => m ? (m[1] === '—' || m[1] === '-' ? 'NA' : m[1]) : 'NA';
          const rows = [];
          const table = document.querySelector('table');
          if (table) {
            for (const tr of table.querySelectorAll('tbody tr')) {
              const cells = [...tr.querySelectorAll('td')];
              if (cells.length < 4) continue;
              const kwBtn = cells[1].querySelector('button');
              const keyword = kwBtn ? kwBtn.textContent.trim() : cells[1].textContent.trim();
              if (!keyword) continue;
              rows.push({ keyword, popularity: (cells[2].textContent.trim() === '—' ? 'NA' : cells[2].textContent.trim()), competitiveness: (cells[3].textContent.trim() === '—' ? 'NA' : cells[3].textContent.trim()) });
            }
          }
          return { popularity: clean(popM), competitiveness: clean(compM), related: rows };
        });
        r.popularity = ins.popularity;
        r.competitiveness = ins.competitiveness;
        r.related = ins.related;
      }
      const pop = parseInt(r.popularity, 10);
      const comp = parseInt(r.competitiveness, 10);
      if (r.related && !(pop >= 25)) r.related = [];
      if (!isNaN(pop) && pop >= 30 && !isNaN(comp) && comp < 80) {
        await page.goto('https://appfigures.com/reports/keyword-inspector?keyword=' + encodeURIComponent(kw) + '&country=US&store=apple%3Aios&device_type=handheld', { waitUntil: 'networkidle', timeout: 60000 });
        await page.waitForTimeout(1200);
        const ranks = await page.evaluate(() => {
          const table = document.querySelector('table');
          if (!table) return [];
          return [...table.querySelectorAll('tbody tr')].slice(0, 10).map((tr, idx) => {
            const tds = [...tr.querySelectorAll('td')];
            const nameCell = tds[1] ? tds[1].textContent.replace(/\s+/g, ' ').trim() : '';
            const m = nameCell.match(/^(\d+)\.\s*(.*)$/);
            let app = m ? m[2] : nameCell;
            app = app.split('By ')[0].trim();
            const scoreCell = tds[8] ? tds[8].textContent.replace(/\s+/g, ' ').trim() : '';
            const sc = scoreCell.match(/^([\d.]+[KMB]*\*?)\s*([\d.]+)☆/);
            return { rank: m ? m[1] : (idx + 1), app, rating: sc ? sc[2] : '—', ratings_count: sc ? sc[1] : '—' };
          });
        });
        r.rankings = ranks;
      }
    } catch (e) { r.error = e.message.slice(0, 80); }
    await page.waitForTimeout(1200);
    results.push(r);
  }
  return results;
}
