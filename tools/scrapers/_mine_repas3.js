const fs = require('fs');
const https = require('https');
const COOKIES = ['_af_session=o0ggc5yugjdaqgmb5jixesyu','_af_user_token=0008096aa32307f1c64649d0a0d5f533cbdc0e92','_af_session_verifier=c0ffc665-1f2c-4e81-9dcd-1924d73c7f30','KSERVERID=1788066179.145.31.840863|69c6428cdf95fffd388eca01de8b64ef'].join('; ');
function fetchJson(url){return new Promise((resolve,reject)=>{const req=https.get(url,{headers:{'Cookie':COOKIES,'User-Agent':'Mozilla/5.0','Accept':'application/json'}},(res)=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>{try{resolve(JSON.parse(d))}catch(e){reject(new Error('JSON'))}})});req.on('error',reject);req.setTimeout(20000,()=>{req.destroy();reject(new Error('timeout'))})})}
async function mineApp(name,pid){const results=[];let pageNum=1;const count=250;for(;;){const url='https://appfigures.com/_start/api/aso/products-snapshot/keywords?countries=US&products='+pid+'&sort=-popularity&count='+count+'&page='+pageNum+'&device=handheld&group_by=keyword%2Cproduct';const r=await fetchJson(url).catch(()=>null);if(!r||!r.metadata)break;const rs=r.metadata?.resultset||{};for(const row of (r.results||[])){const p=Object.values(row.products||{})[0]||{};results.push({kw:row.keyword_term,pop:row.popularity,comp:row.competitiveness,apps:row.num_apps_in_keyword,rank:p.position,imp:p.importance})}if(pageNum>=rs.total_pages)break;pageNum++;await new Promise(r=>setTimeout(r,40))}return results}
const brutDir='C:/MY_WORK/___Nouveau_BUSINESSES___/OpenCode/app-factory/brain/marche/mots-cles/_brut';
const file=brutDir+'/repas-nutrition.json';
let perApp=JSON.parse(fs.readFileSync(file,'utf8'));
const todo=[['MealPrepPro',280347196252],['Mealime',42141783485],['eMeals',7854340133],['EatThisMuch',41352905878]];
(async()=>{
  for(const [name,pid] of todo){
    if(perApp[name] && Array.isArray(perApp[name]) && perApp[name].length>0){console.log('skip',name);continue;}
    try{perApp[name]=await mineApp(name,pid);console.log(name,perApp[name].length);}catch(e){perApp[name]={error:e.message};}
    fs.writeFileSync(file,JSON.stringify(perApp,null,2),'utf8');
  }
  console.log('DONE',Object.keys(perApp).join(','));
})();
