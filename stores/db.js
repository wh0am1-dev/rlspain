// db store

module.exports = (state, emitter) => {
  state.db = []

  emitter.on('DOMContentLoaded', () => {
    window.fetch('/assets/data/db.json')
      .then(res => res.json())
      .then(data => {
        state.db = data
        emitter.emit('render')
      })
      .catch(err => emitter.emit('debug:log', err))
  })
}
