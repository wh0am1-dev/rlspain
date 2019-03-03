// db store

module.exports = (state, emitter) => {
  state.db = []
  state.details = null

  emitter.on('DOMContentLoaded', () => {
    window.fetch('/assets/data/db.json')
      .then(res => res.json())
      .then(data => {
        state.db = data
        if (state.route === 'player/:id') getDetails()
        emitter.emit('render')
      })
      .catch(err => emitter.emit('debug:log', err))
  })

  emitter.on('navigate', () => {
    if (state.route !== 'player/:id')
      state.details = null
  })

  emitter.on('db:setDetails', idx => {
    state.details = idx
  })

  function getDetails () {
    for (var i = 0; i < state.db.length; i++) {
      if (state.db[i].id === state.params.id) {
        let _title = `rlspain.cf · ${state.db[i].nickname}`
        if (state.title !== _title) emitter.emit('DOMTitleChange', _title)
        state.details = i
      }
    }
  }
}
