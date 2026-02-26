const CACHE_NAME = "studybuddy-max-omega-v1";
const urlsToCache = [
  "/StudyBuddy_AI-Ultimate_Hub/index.html",
  "/StudyBuddy_AI-Ultimate_Hub/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
