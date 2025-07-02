const CACHE_NAME = "Brasileira-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Instala e armazena os arquivos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Ativa o service worker
self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

// Busca do cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
