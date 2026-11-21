// kill-switch (2026-11-21): this site only redirects to https://gimhae-app.lotterental-gimhae.workers.dev/
// Removes any old cached app shell from the GitHub Pages app and unregisters itself.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll({type:'window'})).then(cs=>cs.forEach(c=>c.navigate(c.url))));});
