self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing Service Worker...", event);
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating Service Worker...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetching something ...", event);
  event.respondWith(fetch(event.request));
  //event.request cause is a promise
});
