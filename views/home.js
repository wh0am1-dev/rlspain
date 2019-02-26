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

  return html`
    <body class="code lh-copy bg-near-black near-white">
      <main class="ph4 cf center">
        ${header()}

        <div id="content" class="min-vh-100 pt5 relative">
          ${body()}

          <footer class="pv3 ph4 mt4 cf tc absolute bottom-0 w-100">
            <p class="f6 f5-m f4-l">made with ${heart()} by<br>${link('neko250', 'https://github.com/neko250', true)} & ${link('Salve', 'https://twitter.com/Salve_RL', true)}</p>
            <p class="f6 f5-m f4-l mt4"><span class="yellow ba br2 b--near-white pv1 ph2">v${require('../package.json').version} beta</span></p>
          </footer>
        </div>
      </main>
    </body>
  `

  function body () {
    if (state.maintenance) return maintenance()

    return html`
      ${filter(state.filter, emit)}
      ${list(state.db, state.filter)}
    `
  }
}
