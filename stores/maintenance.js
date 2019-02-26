// maintenance store

module.exports = (state, emitter) => {
  // === MAINTENANCE MODE ===
  state.maintenance = true
  // ========================

  emitter.on('maintenance:on', () => {
    state.maintenance = true
  })

  emitter.on('maintenance:off', () => {
    state.maintenance = false
  })

  emitter.on('maintenance:toggle', () => {
    state.maintenance = state.maintenance
  })
}
