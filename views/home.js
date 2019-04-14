// home view

const html = require('choo/html')
const title = 'rlspain.cf'

const header = require('../components/blck/header')
const list = require('../components/blck/list')
const footer = require('../components/blck/footer')
const maintenance = require('../components/blck/maintenance')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white ${state.debug}" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      ${header(state, emit)}

      <main id="content" class="cf pt4 min-vh-100">
        ${state.maintenance ? maintenance(state, emit) : list(state, emit)}
        ${footer(state, emit)}
      </main>
    </body>
  `
}
