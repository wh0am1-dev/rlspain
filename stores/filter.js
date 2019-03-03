// filter store

module.exports = (state, emitter) => {
  let timeout = null

  state.filter = ''

  emitter.on('filter:update', query => {
    state.filter = query
    clearTimeout(timeout)
    timeout = setTimeout(() => emitter.emit('render'), 250);
  })
}
