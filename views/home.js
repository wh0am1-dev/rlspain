// home view

const html = require('choo/html')
const title = 'rlspain'

const header = require('../components/header')
const filter = require('../components/filter')
const list = require('../components/list/list')
const link = require('../components/link')
const heart = require('../components/heart')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white">
      <main class="ph4 cf center">
        ${header()}

        <div class="min-vh-100 mt5">
          ${filter(state.filter, emit)}
          ${list(state.db, state.filter)}

          <footer class="ph4 mt4 cf tc">
            <p class="f6 f5-m f4-l">made with ${heart()} by ${link('neko250', 'https://github.com/neko250', true)}</p>
          </footer>
        </div>
      </main>
    </body>
  `
}
