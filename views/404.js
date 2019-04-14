// 404 view

const html = require('choo/html')
const title = 'rlspain.cf · 404'

const button = require('../components/el/button')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      <main class="ph4 cf center">
        <section class="tc w-100 dt">
          <div class="dtc v-mid">
            <h2 class="f3 f1-ns mt5">
              <span class="bg-yellow near-black ph3 pv2 shadow-5 br2">404</span>
            </h2>

            <div class="mv5">
              <h2>(╯°□°)╯︵ ┻━┻</h2>
              <h1 class="f4 f3-m f2-l w-50 center">No hay nada aquí...</h1>
            </div>

            ${button('Inicio', () => emit('pushState', '/'))}
          </div>
        </section>
      </main>
    </body>
  `
}
