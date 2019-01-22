// home view

const html = require('choo/html')
const title = 'rlspain'

const header = require('../components/header')
const filter = require('../components/filter')
const list = require('../components/list/list')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white">
      <main class="ph4 cf center">
        ${header()}
        ${filter(state.filter, emit)}
        ${list(state.db, state.filter)}
      </main>
    </body>
  `
}
