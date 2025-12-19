const CACHE_NAME = 'trinex-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'login.html',
  'profile.html',
  'favicon.png',
  'hode1.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      return response || fetch(event.request);
    })
  );
});