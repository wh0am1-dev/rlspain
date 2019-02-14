// home view

const html = require('choo/html')
const title = 'rlspain.cf'

const header = require('../components/header')
const filter = require('../components/filter')
const list = require('../components/list/list')
const link = require('../components/link')
const fab = require('../components/fab')
const heart = require('../components/heart')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  let fab_ = document.querySelector('#fab')
  let showFab_ = showFab()

  return html`
    <body class="code lh-copy bg-near-black near-white" onscroll=${onScroll}>
      <main class="ph4 cf center">
        ${header()}

        <div id="content" class="min-vh-100 pt5">
          ${filter(state.filter, emit)}
          ${list(state.db, state.filter)}

          <footer class="ph4 mt4 cf tc">
            <p class="f6 f5-m f4-l">made with ${heart()} by<br>${link('neko250', 'https://github.com/neko250', true)} & ${link('Salve', 'https://twitter.com/Salve_RL', true)}</p>
          </footer>
        </div>
      </main>

      ${fab()}
    </body>
  `

  function showFab () {
    return document.documentElement.scrollTop > (window.innerHeight * 1.5)
  }

  function onScroll () {
    if (!showFab_ && showFab() || showFab_ && !showFab()) {
      showFab_ = !showFab_
      fab_.classList.toggle('db', showFab_)
    }
  }
}
