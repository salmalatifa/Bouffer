import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption;

// Caching App Shell Resource
self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
});

// Delete old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
});

// Add or get fetch request to / from caches
self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request))
});