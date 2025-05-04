// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('game-launcher-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon.png', // Make sure to include any assets (like icons, etc.)
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
