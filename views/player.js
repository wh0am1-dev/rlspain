const html = require('choo/html')
const button = require('../components/el/button')

const title = 'rlspain · '

module.exports = (state, emit) => {
  let idx = state.db.data.findIndex(p => p.id === state.params.id)
  let player = state.db.data[idx]

  if (!player) {
    emit(state.events.APP_NOT_FOUND)
    return
  }

  let _title = title + player.nick
  if (state.title !== _title) {
    emit(state.events.DOMTITLECHANGE, _title)
  }

  let team = player.team !== '' ? html`<span class="f6 db silver">${player.team}</span>` : ''
  let role = player.role !== '' ? html`<span class="f6 light-purple">[${player.role}]</span>` : ''
  let colour = player.vs3.deltaMmr < 0 ? 'red' : player.vs3.deltaMmr > 0 ? 'green' : 'silver'

  return html`
    <body
      class="code lh-copy bg-near-black near-white"
      style="cursor: default; user-select: none; scroll-behavior: smooth;"
    >
      <header class="tc w-100 dt">
        <section class="dtc v-mid">
          <h2 class="f3 f1-ns mt5">
            <span class="bg-yellow near-black ph3 pv2 shadow-5 br2">${player.nick}</span>
          </h2>
        </section>
      </header>

      <main class="ph4 cf center">
        <section class="fl w-100 h-100 pa4 tc ${!role && !team ? 'dn' : ''}">
          <h2 class="f5 f4-m f3-l yellow">Info</h2>
          ${role} ${team}
        </section>
        <section class="fl w-100 h-100 pa4 tc">
          <h2 class="f5 f4-m f3-l yellow">Rating</h2>
          <p class="f6 f5-m f4-l">pos: ${player.vs3.pos}</p>
          <p class="f6 f5-m f4-l">mmr: ${player.vs3.mmr}</p>
          <p class="f6 f5-m f4-l">
            delta:
            <span class="${colour}"> ${player.vs3.deltaMmr} </span>
          </p>
        </section>
      </main>

      <footer class="tc w-100 dt mv5">
        <section class="dtc v-mid">
          ${button({ text: 'Volver', handler: () => emit(state.events.PUSHSTATE, '#') })}
        </section>
      </footer>
    </body>
  `
}
