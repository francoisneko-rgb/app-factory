const fs = require('fs');
const path = require('path');
const brutDir='C:/MY_WORK/___Nouveau_BUSINESSES___/OpenCode/app-factory/brain/marche/mots-cles/_brut';
const outDir='C:/MY_WORK/___Nouveau_BUSINESSES___/OpenCode/app-factory/brain/marche/mots-cles';
fs.mkdirSync(outDir,{recursive:true});

const appCluster = {
  '75Hard':'challenges-75j','75Soft':'challenges-75j','75DayProgram':'challenges-75j',
  'MuslimPro':'islam','Athan':'islam','Quran':'islam','QiblaFinder':'islam','Athkar':'islam','Azkar':'islam',
  'SplashLearn':'education-kids','KhanAcademyKids':'education-kids','IXL':'education-kids','ProdigyMath':'education-kids','ABCmouse':'education-kids','KhanAcademy':'education-kids',
  'Hevy':'fitness-workout','Strong':'fitness-workout','Caliber':'fitness-workout','Boostcamp':'fitness-workout','JEFIT':'fitness-workout','ProgressiveOverload':'fitness-workout','Fitbod':'fitness-workout','Freeletics':'fitness-workout','MuscleBooster':'fitness-workout','HomeWorkout':'fitness-workout',
  'IntervalTimer':'fitness-timers','TabataTimer':'fitness-timers','SecondsPro':'fitness-timers','BoxingTimer':'fitness-timers','CrossfitTimer':'fitness-timers',
  'SwingVision':'sports-boxing','Playtomic':'sports-boxing','DartsScorer':'sports-boxing','CrossFitGames':'sports-boxing','ShadowBoxing':'sports-boxing','FightCamp':'sports-boxing','BoxingTraining':'sports-boxing',
  // autres clusters
  'Hallow':'christianisme','Bible':'christianisme',
  'Calm':'bien-etre-mental','Headspace':'bien-etre-mental','InsightTimer':'bien-etre-mental','IAm':'bien-etre-mental','GratitudePlus':'bien-etre-mental','Stoic':'bien-etre-mental','Balance':'bien-etre-mental','Reflectly':'bien-etre-mental',
  'WhiteNoise':'sommeil-sons','BetterSleep':'sommeil-sons','SnoreLab':'sommeil-sons','Decibel':'sommeil-sons',
  'MigraineBuddy':'sante-suivi','Medisafe':'sante-suivi','SmokeFree':'sante-suivi','mySugr':'sante-suivi','HeatIndex':'sante-suivi',
  'Astrotalk':'astrologie','CoStar':'astrologie','DailyHoroscope':'astrologie','Nebula':'astrologie',
  'Daylio':'journaling-prod','XMind':'journaling-prod','Clockify':'journaling-prod','Chores':'journaling-prod','Loot':'journaling-prod','HealthyRoster':'journaling-prod',
  'iTrainer':'animaux-oiseaux','Merlin':'animaux-oiseaux','PictureInsect':'animaux-oiseaux',
  'PictureThis':'plantes-jardin','Planta':'plantes-jardin','VeggieGarden':'plantes-jardin',
  'VoiceChangerPlus':'photo-voix-ia','RoomPlannerAI':'photo-voix-ia','Photoleap':'photo-voix-ia',
  'Compass':'utilitaires','Documents':'utilitaires','Moovit':'utilitaires',
  'Bookmory':'media-lecture','Duolingo':'media-lecture',
  'Fishbrain':'peche-pleinair',
  'Facer':'watch-faces','Clockology':'watch-faces','WatchMaker':'watch-faces',
  'MealPrepPro':'repas-nutrition','Mealime':'repas-nutrition','eMeals':'repas-nutrition','MyFitnessPal':'repas-nutrition','EatThisMuch':'repas-nutrition','Cronometer':'repas-nutrition','LoseIt':'repas-nutrition'
};

const allApps={};
for(const f of fs.readdirSync(brutDir)){
  if(!f.endsWith('.json')) continue;
  let d; try{d=JSON.parse(fs.readFileSync(path.join(brutDir,f),'utf8')); if(typeof d==='string') d=JSON.parse(d);}catch(e){continue;}
  for(const [app,rows] of Object.entries(d)){ if(Array.isArray(rows)&&rows.length>0) allApps[app]=rows; }
}
const clusters={};
for(const [app,rows] of Object.entries(allApps)){
  const c=appCluster[app]; if(!c) continue;
  if(!clusters[c]) clusters[c]={};
  clusters[c][app]=rows;
}
for(const [cluster, apps] of Object.entries(clusters)){
  const lines=['cluster,app,keyword,popularity,competitiveness,num_apps,rank,importance'];
  for(const [app,rows] of Object.entries(apps)) for(const r of rows){
    if(r.error) continue;
    const kw=String(r.kw||'').replace(/,/g,' ').trim(); if(!kw) continue;
    lines.push([cluster,app,kw,r.pop??'',r.comp??'',r.apps??'',r.rank??'',r.imp??''].join(','));
  }
  fs.writeFileSync(path.join(outDir,cluster+'.csv'), lines.join('\n'), 'utf8');
  console.log(cluster, '->', lines.length-1, 'lignes');
}
console.log('DONE');
