// app store

const pkg = require('../package.json')

module.exports = (state, emitter) => {
  // events
  state.events.APP_NOT_FOUND = 'app:404'

  // state
  state.faq = pkg.faq
  state.maintenance = pkg.maintenance
  state.routes = {
    HOME: 'rlspain',
    RANK: 'rlspain/rank/:category',
    PLAYER: 'rlspain/player/:id',
    FAQ: 'rlspain/faq',
    NOT_FOUND: 'rlspain/404',
    ANY: 'rlspain/*'
  }

  // listeners
  emitter.on(state.events.APP_NOT_FOUND, () => {
    emitter.emit(state.events.REPLACESTATE, '/rlspain/#404')
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
