// nav component

const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <header class="bg-near-black fixed w-100 ph3 pv2 pv4-ns ph4-m ph5-l flex items-center bb b--dark-gray" style="z-index: 9999;">
      <img src="/assets/img/rlscrapper.svg" onclick=${home}
        class="h2 mr4 shadow-5 br-pill bl bt b--yellow pointer">
      <nav class="f6 fw6 tracked ttu tc">
        ${link('#1v1', '#rank/1v1', false, 'mr3')}
        ${link('#2v2', '#rank/2v2', false, 'mr3')}
        ${link('#3v3', '#rank/3v3', false, 'mr3')}
        ${link('#FAQ', '#faq', false, 'mr3')}
        ${link('#Peticiones', 'https://goo.gl/forms/ue1I68eSmeDDpTvj2', true)}
      </nav>
    </header>
  `

  function link (text, href, external = false, classes = '') {
    let target = external ? '_blank' : ''
    let rel = external ? 'noopener noreferrer' : ''
    let inactive = 'yellow hover-near-black hover-bg-yellow'
    let active = 'near-black bg-yellow'

    return html`
      <a href=${href} target=${target} rel=${rel} onclick=${blur}
        class="link bg-animate pa1 br2 dib ${state.href === href ? active : inactive} ${classes}">
        ${text}
      </a>
    `

    function blur (ev) {
      ev.target.blur()
    }
  }

  function home () {
    emit(state.events.PUSHSTATE, '/')
  }
}
