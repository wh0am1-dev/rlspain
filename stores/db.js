// db store

module.exports = (state, emitter) => {
  // events
  state.events.DB_FETCH = 'db:fetch'
  state.events.DB_SORT = 'db:sort'
  state.events.DB_FILTER = 'db:filter'

  // state
  state.db = {
    data: [],
    filter: '',
    filteredData: [],
    cutoffs: {
      v1: 600,
      v2: 1000,
      v3: 1000
    }
  }

  // listeners
  let timeout = null

  emitter.on(state.events.DB_FETCH, () => {
    window
      .fetch('/rlspain/assets/data/db.json')
      .then(res => res.json())
      .then(data => {
        state.db.filter = ''
        state.db.data = data

        if (
          state.route === state.routes.RANK &&
          ['1v1', '2v2', '3v3'].indexOf(state.params.category) > -1
        ) {
          let category = state.params.category.slice(1)
          state.db.data.sort((a, b) => {
            return Math.sign(a[category].pos - b[category].pos)
          })
        }

        emitter.emit(state.events.DB_FILTER, state.db.filter)
      })
      .catch(err => emitter.emit(state.events.DEBUG_LOG, err))
  })

  emitter.on(state.events.DB_FILTER, query => {
    state.db.filter = query
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      if (state.components.list) state.components.list.page = 0

      state.db.filteredData = state.db.data.filter(player => {
        if (state.params.category === '1v1' && player.v1.mmr < state.db.cutoffs.v1) return false
        if (state.params.category === '2v2' && player.v2.mmr < state.db.cutoffs.v2) return false
        if (state.params.category === '3v3' && player.v3.mmr < state.db.cutoffs.v3) return false

        let ans = false

        state.db.filter
          .trim()
          .toLowerCase()
          .split(/(?:,| )+/)
          .forEach(keyword => {
            ans = ans || player.nick.toLowerCase().indexOf(keyword) > -1
          })

        return ans
      })

      emitter.emit(state.events.RENDER)
    }, 250)
  })

  emitter.on(state.events.NAVIGATE, () => {
    if (state.route === state.routes.RANK) {
      if (state.components.list) state.components.list.page = 0
      state.db.filter = ''

      if (['1v1', '2v2', '3v3'].indexOf(state.params.category) > -1) {
        let category = state.params.category.slice(1)

        state.db.data.sort((a, b) => {
          return Math.sign(a[category].pos - b[category].pos)
        })

        state.db.filteredData = state.db.data.filter(
          p => p[category].mmr >= state.db.cutoffs[category]
        )
      } else {
        return
      }

      emitter.emit(state.events.RENDER)
    }
  })

  emitter.on(state.events.DOMCONTENTLOADED, () => {
    emitter.emit(state.events.DB_FETCH)
  })
}
