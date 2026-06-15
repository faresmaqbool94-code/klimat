const CACHE = 'rakah-v1';
const ASSETS = [
  '/klimat/',
  '/klimat/index.html',
  '/klimat/manifest.json',
  '/klimat/logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
