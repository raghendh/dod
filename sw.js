// Minimal service worker — required by Android Chrome to complete PWA installation.
// This does NOT cache anything or change app behavior; it just satisfies the
// installability requirement (a registered, active SW with a fetch handler).

const CACHE_NAME = 'dod-shell-v1';

self.addEventListener('install', (event) => {
  // Activate immediately, don't wait for old SW to be released
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through network fetch — no caching behavior.
  // Having a fetch handler at all is part of what Android checks for.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
