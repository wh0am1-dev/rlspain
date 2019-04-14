// app store

const pkg = require('../package.json')

module.exports = (state, emitter) => {
  // events
  state.events.APP_NOT_FOUND = 'app:404'

  // state
  state.faq = pkg.faq
  state.maintenance = pkg.maintenance

  // listeners
  emitter.on(state.events.APP_NOT_FOUND, () => {
    emitter.emit(state.events.REPLACESTATE, '/404')
  })

  emitter.on(state.events.DOMCONTENTLOADED, () => {
    if (state.maintenance)
      emitter.emit(state.events.REPLACESTATE, '/')
  })

  emitter.on(state.events.NAVIGATE, () => {
    if (state.maintenance)
      emitter.emit(state.events.REPLACESTATE, '/')
  })
}
