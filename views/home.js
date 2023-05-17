const html = require('choo/html')
const nav = require('../components/blck/nav')
const footer = require('../components/blck/footer')

const title = 'rlspain'

module.exports = (state, emit) => {
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)

  return html`
    <body
      class="code lh-copy bg-near-black near-white ${state.debug}"
      style="cursor: default; user-select: none; scroll-behavior: smooth;"
    >
      ${nav({ state, emit })}

      <main class="w-100 tc min-vh-100 dt pt6">
        <section class="dtc v-mid">
          <img src="assets/img/rlspain.svg" class="w5 bt bl b--yellow bw2 br-pill shadow-5 grow" />

          <h1 class="f3 mt4">
            <span class="bg-yellow near-black ph3 pv2 shadow-5 br2">rlspain</span>
          </h1>

          ${footer()}
        </section>
      </main>
    </body>
  `
}
