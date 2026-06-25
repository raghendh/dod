// Minimal service worker — required by Android Chrome to complete PWA installation.
// Also forces every fetch for this app's own files to bypass the browser's HTTP cache,
// so updates pushed to GitHub are always picked up instead of silently reusing old
// cached copies of index.html / script.js / style.css.

const CACHE_NAME = 'dod-shell-v2';

self.addEventListener('install', (event) => {
  // Activate immediately, don't wait for old SW to be released
  self.skipWaiting();
});

self.addEventListener('message', (event) => {
  // Lets the page force a waiting worker to activate immediately, instead of
  // waiting for zero clients — which may never happen if the app is only ever
  // backgrounded (common on Android) rather than fully closed.
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  let url = new URL(event.request.url);
  let isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin && event.request.method === 'GET') {
    // Always go to the network for our own files, ignoring any HTTP cache,
    // so a fresh GitHub push is reflected the next time the app is opened.
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Cross-origin requests (fonts, icons, etc.) — pass through normally.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
