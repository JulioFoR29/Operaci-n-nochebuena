// Service worker: guarda el juego y Three.js en caché para jugar sin conexión
const CACHE = 'nochebuena-entrega2-v5';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('nochebuena-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isPage = req.mode === 'navigate';
  const isCdn = /(^|\.)(esm\.sh|unpkg\.com|cdn\.jsdelivr\.net)$/.test(url.hostname);
  if (!isPage && !isCdn && url.origin !== location.origin) return;

  if (isPage) {
    // Páginas: primero red (para recibir actualizaciones), si falla usa la caché
    e.respondWith(
      fetch(req).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return res; })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }
  // Recursos y Three.js (CDN): primero caché, si no existe lo descarga y lo guarda
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
      return res;
    }))
  );
});
