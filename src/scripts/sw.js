import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    // Caching App Shell Resource
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
});

self.addEventListener('activate', (event) => {
    // Delete old caches
    event.waitUntil(CacheHelper.deleteOldCache());
});


self.addEventListener('fetch', (event) => {
    console.log(event.request);
    // Add / get fetch request to / from caches
    event.respondWith(CacheHelper.revalidateCache(event.request))
});