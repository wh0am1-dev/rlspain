// 🚂🚋🚋 choo 🚋🚋🚋
const choo = require('choo')
const app = choo()

// ==== styles ====
const css = require('sheetify')
css('tachyons')

// ==== development stuff ====
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-service-worker/clear')())
  app.use(require('choo-devtools')())
  app.use(require('./plugins/debug'))
}

// ==== service worker ====
app.use(require('choo-service-worker')())

// ==== disable auto scroll ====
if (typeof window !== 'undefined' && window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual'
}

// ==== stores ====
app.use(require('./stores/db'))
app.use(require('./stores/app'))
app.use(require('./stores/scroll'))

// ==== views ====
const home = require('./views/home')
const player = require('./views/player')
const faq = require('./views/faq')
const notFound = require('./views/404')

// ==== routes ====
app.route('/', home)
app.route('/player/:id', player)
app.route('/faq', faq)
app.route('/404', notFound)
app.route('/*', notFound)

// ==== app ====
module.exports = app.mount('body')
