// maintenance store

module.exports = (state, emitter) => {
  // === MAINTENANCE MODE ===
  state.maintenance = false
  // ========================

  emitter.on('maintenance:on', () => {
    state.maintenance = true
    emitter.emit('render')
  })

  emitter.on('maintenance:off', () => {
    state.maintenance = false
    emitter.emit('render')
  })

  emitter.on('maintenance:toggle', () => {
    state.maintenance = !state.maintenance
    emitter.emit('render')
  })
}
