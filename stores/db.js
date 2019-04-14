// db store

module.exports = (state, emitter) => {
  // events
  state.events.DB_FETCH = 'db:fetch'
  state.events.DB_FILTER = 'db:filter'

  // state
  state.db = {
    data: [],
    filter: '',
    filteredData: []
  }

  // listeners
  let timeout = null

  emitter.on(state.events.DB_FETCH, () => {
    window.fetch('/assets/data/db.json')
      .then(res => res.json())
      .then(data => {
        state.db.filter = ''
        state.db.data = data
        state.db.filteredData = data.filter(p => p.vs3.mmr >= 1000)
        emitter.emit(state.events.RENDER)
      })
      .catch(err => emitter.emit(state.events.DEBUG_LOG, err))
  })

  emitter.on(state.events.DB_FILTER, query => {
    state.db.filter = query
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      state.components.list.page = 0
      state.db.filteredData = state.db.data.filter(player => {
        if (player.vs3.mmr < 1000) return false

        let ans = false

        state.db.filter.trim().toLowerCase().split(/(?:,| )+/).forEach(keyword => {
          ans = ans || player.nickname.toLowerCase().indexOf(keyword) > -1
        })

        return ans
      })

      emitter.emit(state.events.RENDER)
    }, 250)
  })

  emitter.on(state.events.NAVIGATE, () => {
    if (state.route === '/') {
      state.components.list.page = 0
    }
  })

  emitter.on(state.events.DOMCONTENTLOADED, () => {
    emitter.emit(state.events.DB_FETCH)
  })
}
