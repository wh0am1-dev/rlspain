const html = require('choo/html')
const nav = require('../components/blck/nav')
const header = require('../components/el/header')
const list = require('../components/blck/list')
const footer = require('../components/blck/footer')

const title = 'rlspain · '

module.exports = (state, emit) => {
  if (['1v1', '2v2', '3v3'].indexOf(state.params.category) < 0) {
    emit(state.events.APP_NOT_FOUND)
    return
  }

  let _title = title + state.params.category
  if (state.title !== _title) {
    emit(state.events.DOMTITLECHANGE, _title)
  }

  return html`
    <body
      class="code lh-copy bg-near-black near-white ${state.debug}"
      style="cursor: default; user-select: none; scroll-behavior: smooth;"
    >
      ${nav({ state, emit })} ${header({ text: state.params.category, classes: 'pt6' })}
      <main id="content" class="cf min-vh-100">${list({ state, emit })} ${footer()}</main>
    </body>
  `
}
