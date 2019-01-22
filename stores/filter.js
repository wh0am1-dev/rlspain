// filter store

module.exports = (state, emitter) => {
  state.filter = {
    query: ''
  }

  emitter.on('filter:update', query => {
    state.filter.query = query
    emitter.emit('render')
  })
}
