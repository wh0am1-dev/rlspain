// faq view

const html = require('choo/html')
const title = 'rlspain.cf · faq'

const button = require('../components/el/button')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      <header class="tc w-100 dt">
        <section class="dtc v-mid">
          <h2 class="f3 f1-ns mv5">
            <span class="bg-yellow near-black ph3 pv2 shadow-5 br2">FAQ</span>
          </h2>
        </section>
      </header>

      <main class="ph4 cf center w-100 w-90-m w-80-l">
        ${state.faq.map(section)}
      </main>

      <footer class="tc w-100 dt mv5">
        <section class="dtc v-mid">
          ${button('Inicio', () => emit(state.events.PUSHSTATE, '/'))}
        </section>
      </footer>
    </body>
  `

  function section (faq) {
    return html`
      <section class="fl w-100 w-50-l h-100 pa4">
        <h2 class="f5 f4-m f3-l yellow">${faq.q}</h2>
        <p class="f6 f5-m f4-l">${faq.a}</p>
      </section>
    `
  }
}
