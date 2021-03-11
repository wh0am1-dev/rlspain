// list component

const html = require('choo/html')

const container = require('./container')
const item = require('./item')
const button = require('../el/button')

module.exports = (state, emit) => {
  state.components.list = {
    PAGE_SIZE: 50,
    page: state.components.list ? state.components.list.page || 0 : 0
  }

  let from = state.components.list.page * state.components.list.PAGE_SIZE
  let to = from + state.components.list.PAGE_SIZE
  let page = state.db.filteredData.slice(from, to)
  let category = state.params.category.slice(1)

  return container(
    html`
      <div class="tc mh4 mh5-l">
        <input
          class="input-reset outline-0 bg-near-black near-white br-pill b--yellow pv2 ph3 mt4 w-100"
          value=${state.db.filter}
          oninput="${e => emit(state.events.DB_FILTER, e.target.value)}"
          type="text"
          name="query"
          placeholder="Buscar..."
        />
      </div>

      ${pagination()}
      <ul class="list pl0 mt4">
        ${page.map(player => item(player, category))}
      </ul>
      ${pagination()}
    `
  )

  function pagination() {
    let lastPage = Math.floor(state.db.filteredData.length / state.components.list.PAGE_SIZE)

    return html`
      <div class="center tc mt4">
        ${button('<<', () => page(0), 'mr2')}
        ${button('<', () => page(state.components.list.page - 1))}

        <span class="yellow mh2">
          ${state.components.list.page + 1}/${Math.ceil(
            state.db.filteredData.length / state.components.list.PAGE_SIZE
          )}
        </span>

        ${button('>', () => page(state.components.list.page + 1))}
        ${button('>>', () => page(lastPage), 'ml2')}
      </div>
    `

    function page(page) {
      if (page !== state.components.list.page && page >= 0 && page <= lastPage) {
        state.components.list.page = page
        emit(state.events.SCROLL_XY, 0, 0, true)
        emit(state.events.RENDER)
      }
    }
  }
}
