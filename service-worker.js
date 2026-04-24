const CACHE_NAME = 'my-trace-v2';
const ASSETS = [
  './index.html',
  './script_ok.js',
  './world-icon.png'
];

// Kurulumda dosyaları önbelleğe al
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Yeni Service Worker'ın hemen kontrolü ele almasını sağla
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// İstekleri önce önbellekten, yoksa ağdan getir
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
