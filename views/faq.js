// faq view

const html = require('choo/html')
const title = 'rlspain · faq'

const nav = require('../components/blck/nav')
const footer = require('../components/blck/footer')
const header = require('../components/el/header')

module.exports = (state, emit) => {
  if (state.title !== title) {
    emit(state.events.DOMTITLECHANGE, title)
  }

  return html`
    <body
      class="code lh-copy bg-near-black near-white ${state.debug}"
      style="cursor: default; user-select: none; scroll-behavior: smooth;"
    >
      ${nav(state, emit)} ${header('FAQ', 'pt6')}
      <main class="ph4 cf center w-100 w-90-m w-80-l">${state.faq.map(section)}</main>
      ${footer(state, emit)}
    </body>
  `

  function section(faq) {
    return html`
      <section class="fl w-100 w-50-l h-100 pa4">
        <h2 class="f5 f4-m f3-l yellow">${faq.q}</h2>
        <p class="f6 f5-m f4-l">${faq.a}</p>
      </section>
    `
  }
}
