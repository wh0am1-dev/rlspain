// home view

const html = require('choo/html')
const title = 'rlspain.cf'

const header = require('../components/header')
const filter = require('../components/filter')
const list = require('../components/list/list')
const link = require('../components/link')
const heart = require('../components/heart')
const maintenance = require('../components/maintenance')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)
  const maintenanceMode = true

  return html`
    <body class="code lh-copy bg-near-black near-white">
      <main class="ph4 cf center">
        ${header()}

        <div id="content" class="min-vh-100 pt5">
          ${body()}

          <footer class="ph4 mt4 cf tc">
            <p class="f6 f5-m f4-l">made with ${heart()} by<br>${link('neko250', 'https://github.com/neko250', true)} & ${link('Salve', 'https://twitter.com/Salve_RL', true)}</p>
          </footer>
        </div>
      </main>
    </body>
  `

  function body () {
    if (maintenanceMode) {
      return maintenance()
    }

    return html`
      ${filter(state.filter, emit)}
      ${list(state.db, state.filter)}
    `
  }
}
