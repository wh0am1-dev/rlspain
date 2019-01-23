/* eslint-env serviceworker */

var VERSION = require('./package.json').version

var URLS = process.env.STYLE_LIST
URLS.push(...process.env.SCRIPT_LIST)
URLS.push(...process.env.MANIFEST_LIST)
URLS.push('index.html', './404/index.html')
URLS.push('./assets/img/rlscrapper.png', './assets/img/rlscrapper.svg')

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  e.respondWith(self.caches.match(e.request).then(function (request) {
    if (request) return request
    else return self.fetch(e.request)
  }))
})

// Register worker
self.addEventListener('install', function (e) {
  e.waitUntil(self.caches.open(VERSION).then(function (cache) {
    return cache.addAll(URLS)
  }))
})

// Remove outdated resources
self.addEventListener('activate', function (e) {
  e.waitUntil(self.caches.keys().then(function (keyList) {
    return Promise.all(keyList.map(function (key, i) {
      if (keyList[i] !== VERSION) return self.caches.delete(keyList[i])
    }))
  }))
})
