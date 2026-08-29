// Mesure de concurrence en lot : node batch-competition.js <kws.txt> <sortie.csv> [startLine=0]
// Pour chaque KV : top 10 Google Play, compte occurrences exactes du KV dans le titre, note moyenne, fraicheur
const gplay = require('google-play-scraper').default;
const fs = require('fs');
const [,, inFile, outFile, startLine='0'] = process.argv;
if(!inFile||!outFile){console.error('Usage: node batch-competition.js kws.txt out.csv [startLine]');process.exit(1);}
const kws = fs.readFileSync(inFile,'utf8').split('\n').map(s=>s.trim()).filter(Boolean);
const isNew=!fs.existsSync(outFile);
const ws=fs.createWriteStream(outFile,{flags:'a'});
if(isNew)ws.write('keyword,ranked,exact_title,avg_score,min_score,fresh_updated,top_titles\n');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  let done=0;
  for(let i=Number(startLine);i<kws.length;i++){
    const kw=kws[i];
    let row=[kw,0,0,'','','',''];
    try{
      const r=await gplay.search({term:kw,num:10,country:'us',lang:'en'});
      const exact=r.filter(a=>(a.title||'').toLowerCase().includes(kw.toLowerCase())).length;
      const scores=r.filter(a=>typeof a.score==='number').map(a=>a.score);
      const avg=scores.length? (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(2):'';
      const min=scores.length?Math.min(...scores).toFixed(2):'';
      const fresh=r.filter(a=>a.updated).length;
      const titles=r.map(a=>a.title.replace(/"/g,"'")).join(' | ');
      row=[kw,r.length,exact,avg,min,fresh,titles];
    }catch(e){row=[kw,'ERR:'+e.message,0,'','','',''];}
    ws.write(row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')+'\n');
    done++; if(i%25===0)console.log('['+(i+1)+'/'+kws.length+'] '+kw);
    await sleep(900+Math.random()*700);
  }
  ws.end();
  console.log('DONE '+done+' -> '+outFile);
})();
