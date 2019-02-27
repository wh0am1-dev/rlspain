// home view

const html = require('choo/html')
const title = 'rlspain.cf'

const button = require('../components/button')
const filter = require('../components/filter')
const header = require('../components/header')
const heart = require('../components/heart')
const link = require('../components/link')
const list = require('../components/list/list')
const maintenance = require('../components/maintenance')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      <main class="ph4 cf center">
        ${header()}

        <div id="content" class="min-vh-100 pt5">
          ${body()}

          <footer class="pv3 ph4 mt4 cf tc">
            <p class="f6 f5-m f4-l">made with ${heart()} by<br>${link('neko250', 'https://github.com/neko250', true)} & ${link('Salve', 'https://twitter.com/Salve_RL', true)}</p>
            <p class="f6 f5-m f4-l mt4"><span class="yellow hover-near-black hover-bg-yellow bg-animate ba b--yellow br2 pv1 ph2">v${require('../package.json').version} beta</span></p>
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
