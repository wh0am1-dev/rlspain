const html = require('choo/html')
const nav = require('../components/blck/nav')
const header = require('../components/el/header')
const button = require('../components/el/button')

const title = 'rlspain · 404'

module.exports = (state, emit) => {
  if (state.title !== title) {
    emit(state.events.DOMTITLECHANGE, title)
  }

  return html`
    <body
      class="code lh-copy bg-near-black near-white ${state.debug}"
      style="cursor: default; user-select: none; scroll-behavior: smooth;"
    >
      ${nav({ state, emit })} ${header({ text: '404', classes: 'pt6' })}
      <main class="ph4 cf center">
        <section class="tc w-100 dt">
          <div class="dtc v-mid">
            <div class="mv5">
              <h2>(╯°□°)╯︵ ┻━┻</h2>
              <h1 class="f4 f3-m f2-l w-50 center">No hay nada aquí...</h1>
            </div>

            ${button({ text: 'Inicio', handler: () => emit(state.events.PUSHSTATE, '/') })}
          </div>
        </section>
      </main>
    </body>
  `
}
