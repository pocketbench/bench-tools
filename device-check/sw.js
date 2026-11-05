const CACHE = 'device-check-v1.4.1';
const FILE = ['./', './index.html', './manifest.webmanifest', './icons/icon.svg'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILE))));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((chiavi) =>
  Promise.all(chiavi.filter((k) => k.startsWith('device-check-') && k !== CACHE).map((k) => caches.delete(k))))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))));
