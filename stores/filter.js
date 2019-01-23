// filter store

module.exports = (state, emitter) => {
  let timeout = null

  state.filter = {
    query: ''
  }

  emitter.on('filter:update', query => {
    state.filter.query = query
    clearTimeout(timeout)
    timeout = setTimeout(() => emitter.emit('render'), 250);
  })
}
