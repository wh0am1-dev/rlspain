// home view

const html = require('choo/html')
const title = 'choof'

const header = require('../components/header')
const list = require('../components/list')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white">
      <main class="ph4 cf center">
        ${header()}
        ${list(state.db)}
      </main>
    </body>
  `
}
