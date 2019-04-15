// list component

const html = require('choo/html')

const container = require('./container')
const button = require('../el/button')
const delta = require('../el/delta')

module.exports = (state, emit) => {
  state.components.list = {
    PAGE_SIZE: 50,
    page: state.components.list
      ? state.components.list.page || 0
      : 0
  }

  let from = state.components.list.page * state.components.list.PAGE_SIZE
  let to = from + state.components.list.PAGE_SIZE
  let page = state.db.filteredData.slice(from, to)

  return container(state, emit, html`
    ${filter()}
    ${pagination()}

    <ul class="list pl0 mt4">
      ${page.map(item)}
    </ul>

    ${pagination()}
  `)

  function filter () {
    return html`
      <div class="tc mh4 mh5-l">
        ${button('FAQ', () => emit(state.events.PUSHSTATE, '/faq'), 'mr4')}
        ${button('Peticiones', () => window.open('https://goo.gl/forms/ue1I68eSmeDDpTvj2', '_blank'))}

        <input class="input-reset outline-0 bg-near-black near-white br-pill b--yellow pv2 ph3 mt4 w-100"
          value=${state.db.filter} oninput="${e => emit(state.events.DB_FILTER, e.target.value)}"
          type="text" name="query" placeholder="Buscar...">
      </div>
    `
  }

  function item (player) {
    let team = player.team ? html`<span class="f6 db silver">${player.team}</span>` : ''
    let role = player.role ? html`<span class="f6 light-purple ml2">[${player.role}]</span>` : ''
    let colour = parseInt(player.vs3.deltaMmr) > 0 ? 'green' : (parseInt(player.vs3.deltaMmr) < 0 ? 'red' : 'silver')
    let deltaMmr = `${player.vs3.deltaMmr > 0 ? '+' : ''}${player.vs3.deltaMmr}`

    return html`
      <li class="flex items-center lh-copy pa3 bb b--dark-gray shadow-hover grow"
        onclick="${() => window.open(`https://twitter.com/${player.twitter}`, '_blank')}">

        <span class="flex items-center f3 f2-l yellow">
          ${delta(player.vs3.deltaPos)}
          ${player.vs3.pos}
        </span>

        <div class="pl3 flex-auto">
          <span class="f5 f4-m f3-l">
            ${player.nickname}
            ${role}
          </span>
          ${team}
        </div>

        <div>
          <span class="f5 f4-m f3-l db">
            ${player.vs3.mmr}
          </span>
          <span class="f6 fr ${colour}">
            ${deltaMmr}
          </span>
        </div>

      </li>
    `
  }

  function pagination () {
    let lastPage = Math.floor(state.db.filteredData.length / state.components.list.PAGE_SIZE)

    return html`
      <div class="center tc mt4">
        ${button('<<', () => page(0), 'mr2')}
        ${button('<', () => page(state.components.list.page - 1))}

        <span class="yellow mh2">
          ${state.components.list.page + 1}/${Math.ceil(state.db.filteredData.length / state.components.list.PAGE_SIZE)}
        </span>

        ${button('>', () => page(state.components.list.page + 1))}
        ${button('>>', () => page(lastPage), 'ml2')}
      </div>
    `

    function page (page) {
      if (page !== state.components.list.page && page >= 0 && page <= lastPage) {
        state.components.list.page = page
        emit(state.events.SCROLL_EL, '#content', true)
        emit(state.events.RENDER)
      }
    }
  }
}
