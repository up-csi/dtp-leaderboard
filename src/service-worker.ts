/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, prerendered, version } from '$service-worker';
import { assert } from './lib/assert';

async function addFilesToCache() {
    const cache = await caches.open(version);
    await cache.addAll(build.concat(files).concat(prerendered));
}

async function deleteOldCache() {
    const keys = new Set(await caches.keys());
    if (keys.delete(version)) console.log(`deleting existing at ${version}`);
    const promises = Array.from(keys, k => caches.delete(k));
    const results = await Promise.all(promises);
    assert(
        results.every(x => x),
        'cannot delete all of the old caches',
    );
}

async function fetchCacheFirst(req: Request) {
    // Get from the cache first
    const cache = await caches.open(version);
    const result = await cache.match(req);
    if (typeof result !== 'undefined') return result;

    // And then store the avatars
    const response = await fetch(req);
    const { hostname } = new URL(req.url);
    if (hostname === 'avatars.githubusercontent.com') await cache.put(req, response.clone());
    return response;
}

/** @see https://kit.svelte.dev/docs/service-workers */
const sw = self as unknown as ServiceWorkerGlobalScope;
sw.addEventListener('install', evt => evt.waitUntil(addFilesToCache()));
sw.addEventListener('activate', evt => evt.waitUntil(deleteOldCache()));
sw.addEventListener('fetch', evt => evt.respondWith(fetchCacheFirst(evt.request)));
