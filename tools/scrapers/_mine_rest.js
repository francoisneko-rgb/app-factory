const fs = require('fs');
const https = require('https');
const COOKIES = ['_af_session=o0ggc5yugjdaqgmb5jixesyu','_af_user_token=0008096aa32307f1c64649d0a0d5f533cbdc0e92','_af_session_verifier=c0ffc665-1f2c-4e81-9dcd-1924d73c7f30','KSERVERID=1788066179.145.31.840863|69c6428cdf95fffd388eca01de8b64ef'].join('; ');
function fetchJson(url){return new Promise((resolve,reject)=>{const req=https.get(url,{headers:{'Cookie':COOKIES,'User-Agent':'Mozilla/5.0','Accept':'application/json'}},(res)=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>{try{resolve(JSON.parse(d))}catch(e){reject(new Error('JSON'))}})});req.on('error',reject);req.setTimeout(20000,()=>{req.destroy();reject(new Error('timeout'))})})}
async function mineApp(name,pid){const results=[];let pageNum=1;const count=250;for(;;){const url='https://appfigures.com/_start/api/aso/products-snapshot/keywords?countries=US&products='+pid+'&sort=-popularity&count='+count+'&page='+pageNum+'&device=handheld&group_by=keyword%2Cproduct';const r=await fetchJson(url).catch(()=>null);if(!r||!r.metadata)break;const rs=r.metadata?.resultset||{};for(const row of (r.results||[])){const p=Object.values(row.products||{})[0]||{};results.push({kw:row.keyword_term,pop:row.popularity,comp:row.competitiveness,apps:row.num_apps_in_keyword,rank:p.position,imp:p.importance})}if(pageNum>=rs.total_pages)break;pageNum++;await new Promise(r=>setTimeout(r,50))}return results}
const clusters = {
  'journaling-prod': [['Daylio',280046956981],['XMind',280541209109],['Clockify',280488283371],['Chores',281885792531],['Loot',281993810714],['HealthyRoster',41756366218]],
  'animaux-oiseaux': [['iTrainer',265036305371],['Merlin',39787809462],['PictureInsect',281379671584]],
  'plantes-jardin': [['PictureThis',280329865627],['Planta',280892053372],['VeggieGarden',280589756947]],
  'photo-voix-ia': [['VoiceChangerPlus',6005438],['RoomPlannerAI',125441761348],['Photoleap',280272560264]],
  'utilitaires': [['Compass',26581682],['Documents',6140365],['Moovit',17540666]],
  'media-lecture': [['Bookmory',297005584790],['Duolingo',214139329]],
  'peche-pleinair': [['Fishbrain',212427169]],
  'repas-nutrition': [['MealPrepPro',280347196252],['Mealime',42141783485],['eMeals',7854340133],['MyFitnessPal',5571082],['EatThisMuch',41352905878],['Cronometer',234680637185],['LoseIt',5569619]]
};
const brutDir='C:/MY_WORK/___Nouveau_BUSINESSES___/OpenCode/app-factory/brain/marche/mots-cles/_brut';
fs.mkdirSync(brutDir,{recursive:true});
(async()=>{
  for(const [cluster,apps] of Object.entries(clusters)){
    const outFile=brutDir+'/'+cluster+'.json';
    if(fs.existsSync(outFile)){console.log('SKIP',cluster);continue;}
    const perApp={};
    for(const [name,pid] of apps){try{perApp[name]=await mineApp(name,pid);console.log(cluster,name,perApp[name].length)}catch(e){perApp[name]={error:e.message}}await new Promise(r=>setTimeout(r,50))}
    fs.writeFileSync(outFile,JSON.stringify(perApp,null,2),'utf8');
    console.log('SAVED',cluster);
  }
  console.log('DONE');
})();
