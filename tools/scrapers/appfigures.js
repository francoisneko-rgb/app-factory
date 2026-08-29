// Client Appfigures v2 (thin) pour la recherche de marche.
//
// IMPORTANT (constat 2026-08-21) :
//   Le plan "Free Forever" n'inclut PAS l'add-on "Public Data API" (payant, en credits).
//   Sans cet add-on, les endpoints concurrents (products/search, products/{store}/{id},
//   ranks, reviews, reports/ratings) renvoient 403 "Partner API Access required"
//   pour toute app non possedee par le compte. Seul / (root) repond.
//   => Pour la recherche concurrentielle, preferer les scrapers gratuits Google Play
//      (scrape-search.js / scrape-app.js / scrape-reviews.js / top-charts.js) et
//      App Store (scrape-app-ios.js). Appfigures n'est utile que pour les apps du
//      compte, ou apres activation de l'add-on Public Data.
//
// Usage :
//   node appfigures.js probe                     -> verifie l'acces et liste les features
//   node appfigures.js product <store>/<id>      -> metadata produit (app possedee / add-on)
//   node appfigures.js ratings <productId> <from> <to> <countries>
//   node appfigures.js ranks <productId> <from> <to> <countries>
//   node appfigures.js reviews <productId> <count>
//
// Authentification : Bearer <APPFIGURES_API_KEY> (PAT). Aucune cle en dur.
const BASE = 'https://api.appfigures.com/v2';

function key() {
  return process.env.APPFIGURES_API_KEY || process.env.APPFIGURES_ACCESS_TOKEN || '';
}

async function get(path) {
  const r = await fetch(BASE + path, {
    headers: { 'Authorization': 'Bearer ' + key(), 'User-Agent': 'app-factory/1.0' },
  });
  const txt = await r.text();
  let json; try { json = JSON.parse(txt); } catch { json = txt; }
  return { status: r.status, json };
}

async function probe() {
  const { status, json } = await get('/');
  console.log('status =', status);
  console.log('user   =', json.user && (json.user.name + ' <' + json.user.email + '>'));
  console.log('usage  =', JSON.stringify(json.usage));
  console.log('accessible_features =', JSON.stringify(json.accessible_features));
  const p = await get('/products/search/daily+affirmations');
  console.log('test products/search -> status', p.status, '| Public Data API:', p.status === 200 ? 'ACTIF' : 'NON ACTIF (add-on payant requis)');
  return { root: status, publicData: p.status === 200 };
}

async function product(id) {
  const { status, json } = await get('/products/' + id);
  console.log('status =', status);
  console.log(JSON.stringify(json, null, 2));
}

async function ratings(productId, from, to, countries) {
  const { status, json } = await get(`/reports/ratings/${productId}/daily/${from}/${to}?countries=${countries || 'us'}`);
  console.log('status =', status);
  console.log(JSON.stringify(json, null, 2));
}

async function ranks(productId, from, to, countries) {
  const { status, json } = await get(`/ranks/${productId}/daily/${from}/${to}?countries=${countries || 'us'}`);
  console.log('status =', status);
  console.log(JSON.stringify(json, null, 2));
}

async function reviews(productId, count) {
  const { status, json } = await get(`/reviews/${productId}?count=${count || 20}&lang=en`);
  console.log('status =', status);
  console.log(JSON.stringify(json, null, 2));
}

const [,, cmd, ...rest] = process.argv;
if (!cmd || !key()) { console.error('Usage: node appfigures.js probe|product|ratings|ranks|reviews  (APPFIGURES_API_KEY requis dans l env)'); process.exit(1); }

(async () => {
  switch (cmd) {
    case 'probe': await probe(); break;
    case 'product': await product(rest[0]); break;
    case 'ratings': await ratings(rest[0], rest[1], rest[2], rest[3]); break;
    case 'ranks': await ranks(rest[0], rest[1], rest[2], rest[3]); break;
    case 'reviews': await reviews(rest[0], rest[1]); break;
    default: console.error('Commande inconnue:', cmd);
  }
})();
