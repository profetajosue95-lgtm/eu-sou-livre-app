
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('eu-sou-livre-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/assets/logo.png',
        '/assets/lider.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
