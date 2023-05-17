const html = require('choo/html')

module.exports = ({ state, emit }) => {
  return html`
    <header
      class="bg-near-black fixed w-100 ph3 pv2 pv4-ns ph4-m ph5-l flex items-center bb b--dark-gray"
      style="z-index: 9999"
    >
      <img
        src="assets/img/rlspain.svg"
        onclick=${() => emit(state.events.PUSHSTATE, '#')}
        class="h2 mr4 shadow-5 br-pill bl bt b--yellow pointer"
      />
      <nav class="f6 fw6 tracked ttu tc">
        ${link({ text: '#1v1', href: '#rank/1v1', external: false, classes: 'mr3' })}
        ${link({ text: '#2v2', href: '#rank/2v2', external: false, classes: 'mr3' })}
        ${link({ text: '#3v3', href: '#rank/3v3', external: false, classes: 'mr3' })}
        ${link({ text: '#FAQ', href: '#faq', external: false, classes: 'mr3' })}
      </nav>
    </header>
  `

  function link({ text, href, external = false, classes = '' }) {
    let target = external ? '_blank' : ''
    let rel = external ? 'noopener noreferrer' : ''
    let inactive = 'yellow hover-near-black hover-bg-yellow'
    let active = 'near-black bg-yellow'
    let isActive = state.href.slice(1) === href.slice(2)

    return html`
      <a
        href=${href}
        target=${target}
        rel=${rel}
        onclick=${ev => ev.target.blur()}
        class="link bg-animate pa1 br2 dib ${isActive ? active : inactive} ${classes}"
      >
        ${text}
      </a>
    `
  }
}
