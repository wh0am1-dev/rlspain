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
app.use(require('./stores/filter'))

// ==== routes ====
app.route('/', require('./views/home'))
app.route('/404', require('./views/404'))
app.route('/*', require('./views/404'))

// ==== app ====
module.exports = app.mount('body')
