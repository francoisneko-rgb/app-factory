async(page)=>{
  const kws=["fire starting","cockatiel","wildlife rescue","hermit crab","chinchilla","isopod","silkworm","wardrobe capsule","catheter","watch faces","aed","claude artifacts","character card","liturgy hours","one handed mode","tm timer","stain remover","lupus","legal timer","tremor","ebay selling","ev charging","mall map","time in","meeting notes","greeks","baby proofing","eczema baby","rosary","epi pen","statute","kidney stones","chronic fatigue","medication reminder","body neutral","nsr","cancer journal","body scan","reflux baby","asthma kids","rheumatoid","indoor maps","epipen","dance score","big launcher","retainer","ride split","eating disorder","stutter kids","organ donor","chatgpt wrapper","launcher","ocd","lab results","lost found","epilepsy","quit gambling"];
  const P='__SK_';
  // charge l'existant (legacy + par-clé)
  let map=new Map();
  try{const leg=JSON.parse(await page.evaluate(k=>localStorage.getItem(k)||'[]','__SCORE__'));for(const x of leg){if(x&&x.keyword)map.set(x.keyword,x);}}catch(e){}
  try{const vals=await page.evaluate(p=>{const out=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.indexOf(p)===0)out.push(localStorage.getItem(k));}return out;},P);for(const s of vals){try{const x=JSON.parse(s);if(x&&x.keyword)map.set(x.keyword,x);}catch(e){}}}catch(e){}
  // on ne retraite que les mots encore NA
  const todo=kws.filter(kw=>{const x=map.get(kw);return !x||x.popularity==='NA'||x.competitiveness==='NA';});
  let fixed=0, stillNA=0;
  for(const kw of todo){
    const r={keyword:kw,popularity:'NA',competitiveness:'NA',related:[],rankings:[]};
    try{
      await page.waitForTimeout(400);
      const url='https://appfigures.com/reports/keyword-inspector?keyword='+encodeURIComponent(kw)+'&country=US&store=apple%3Aios&device_type=handheld';
      const ex=async()=>{
        const leaf=[...document.querySelectorAll('body *')].find(e=>e.children.length===0&&e.textContent.trim()==='Insights');
        let txt='';
        if(leaf&&leaf.parentElement){let p=leaf.parentElement;for(let i=0;i<4&&p;i++){const t=p.textContent.replace(/\s+/g,' ');if(t.includes('Popularity')&&t.includes('Competitiveness')){txt=t;break;}p=p.parentElement;}}
        const pm=txt.match(/Popularity\s*(\d+|—|\-)/);
        const cm=txt.match(/Competitiveness\s*(\d+|—|\-)/);
        const clean=m=>m?(m[1]==='—'||m[1]==='-'?'NA':m[1]):'NA';
        return {popularity:clean(pm),competitiveness:clean(cm)};
      };
      let ins={popularity:'NA',competitiveness:'NA'};
      for(let attempt=0;attempt<3;attempt++){
        await page.goto(url+'&view=related-keywords',{waitUntil:'domcontentloaded',timeout:60000});
        await page.waitForFunction(()=>/Popularity\s*(\d|—)/.test(document.body.innerText)&&/Competitiveness\s*(\d|—)/.test(document.body.innerText),{timeout:15000}).catch(()=>{});
        await page.waitForTimeout(2500);
        ins=await page.evaluate(ex);
        if(ins.popularity!=='NA'&&ins.competitiveness!=='NA')break;
        await page.waitForTimeout(1500);
      }
      r.popularity=ins.popularity;r.competitiveness=ins.competitiveness;
      if(r.popularity!=='NA'&&r.competitiveness!=='NA')fixed++;else stillNA++;
    }catch(e){r.error=e.message.slice(0,50);}
    await page.waitForTimeout(600);
    try{await page.evaluate(o=>localStorage.setItem(o.k,o.v),{k:P+kw,v:JSON.stringify(r)});}catch(e){}
  }
  return {todo:todo.length, fixed, stillNA};
}