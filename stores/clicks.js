// clicks store

module.exports = (state, emitter) => {
  state.clicks = 0

  emitter.on('DOMContentLoaded', () => {
    emitter.on('clicks:add', count => {
      emitter.emit('debug:ping')
      state.clicks += count
      emitter.emit('render')
    })
  })
}
