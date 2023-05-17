const pkg = require('../package.json')

module.exports = (state, emitter) => {
  // events
  state.events.APP_NOT_FOUND = 'app:404'

  // state
  state.faq = pkg.faq
  state.maintenance = pkg.maintenance
  state.routes = {
    HOME: '/',
    RANK: 'rank/:category',
    PLAYER: 'player/:id',
    FAQ: 'faq',
    NOT_FOUND: '404',
    ANY: '*'
  }

  // listeners
  emitter.on(state.events.APP_NOT_FOUND, () => {
    emitter.emit(state.events.REPLACESTATE, '/rlspain#404')
  })

  emitter.on(state.events.DOMCONTENTLOADED, () => {
    if (state.maintenance) {
      emitter.emit(state.events.REPLACESTATE, '/rlspain')
    }
  })

  emitter.on(state.events.NAVIGATE, () => {
    if (state.maintenance) {
      emitter.emit(state.events.REPLACESTATE, '/rlspain')
    }
  })
}
