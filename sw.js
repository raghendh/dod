// Minimal service worker — required by Android Chrome to complete PWA installation.
// Also forces every fetch for this app's own files to bypass the browser's HTTP cache,
// so updates pushed to GitHub are always picked up instead of silently reusing old
// cached copies of index.html / script.js / style.css.

const CACHE_NAME = 'dod-shell-v3';
const WATER_CACHE = 'dod-water-reminder-v1'; // tiny key/value store for the SW's own use (Cache API persists across SW restarts; localStorage is not available here)
const WATER_CFG_URL = 'https://dod.local/water-config'; // synthetic same-origin-style key, never actually fetched over the network

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
    return;
  }
  // The page pushes its current water-reminder settings here whenever they
  // change, so the SW has something to read from inside a periodicsync event
  // (the SW can't reach into the page's localStorage directly).
  if (event.data && event.data.type === 'WATER_CONFIG') {
    event.waitUntil(saveWaterConfig(event.data.enabled, event.data.intervalMinutes, event.data.lastFired || 0));
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

/* ── WATER REMINDER (best-effort, no backend) ──────────────────────
   Periodic Background Sync lets Chrome on Android wake this service
   worker on its own schedule even if the app/tab is fully closed —
   but only for an installed PWA, only on Chromium-based Android
   browsers, and the OS/browser ultimately decides the real interval
   (commonly clamped to a minimum of several hours regardless of what
   the page asks for). There is no equivalent on iOS Safari or desktop
   Firefox; those fall back to the page's own in-tab timer instead. */

async function saveWaterConfig(enabled, intervalMinutes, lastFired) {
  let cache = await caches.open(WATER_CACHE);
  let body = JSON.stringify({ enabled: !!enabled, intervalMinutes: intervalMinutes || 60, lastFired: lastFired || 0 });
  await cache.put(WATER_CFG_URL, new Response(body));
}

async function readWaterConfig() {
  let cache = await caches.open(WATER_CACHE);
  let res = await cache.match(WATER_CFG_URL);
  if (!res) return { enabled: false, intervalMinutes: 60, lastFired: 0 };
  try { return await res.json(); } catch (e) { return { enabled: false, intervalMinutes: 60, lastFired: 0 }; }
}

const WATER_REMINDER_MESSAGES = [
  "Time to hydrate. Grab some water.",
  "Quick water break — your body needs it.",
  "Drink up. Stay sharp, stay strong.",
  "Hydration check: top up your water.",
  "Don't skip this one — drink some water."
];

self.addEventListener('periodicsync', (event) => {
  if (event.tag !== 'water-reminder') return;
  event.waitUntil(maybeFireWaterReminder());
});

// Some Chromium builds only expose one-off Background Sync, not periodic.
// Treat a 'sync' with this tag the same way as a single fallback check.
self.addEventListener('sync', (event) => {
  if (event.tag !== 'water-reminder') return;
  event.waitUntil(maybeFireWaterReminder());
});

async function maybeFireWaterReminder() {
  let cfg = await readWaterConfig();
  if (!cfg.enabled) return;
  let intervalMs = (cfg.intervalMinutes || 60) * 60 * 1000;
  let now = Date.now();
  if (cfg.lastFired && (now - cfg.lastFired) < intervalMs) return; // not due yet
  let msg = WATER_REMINDER_MESSAGES[Math.floor(Math.random() * WATER_REMINDER_MESSAGES.length)];
  await self.registration.showNotification('DO OR DIE', {
    body: msg,
    icon: 'https://raw.githubusercontent.com/raghendh/dod/main/icon-192.png',
    badge: 'https://raw.githubusercontent.com/raghendh/dod/main/icon-192.png',
    tag: 'water-reminder',
    renotify: true
  });
  await saveWaterConfig(cfg.enabled, cfg.intervalMinutes, now);
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});
