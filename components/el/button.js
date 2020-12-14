// button component

const html = require('choo/html')

module.exports = (text, handler, classes = '') => {
  return html`
    <button
      onclick=${_handler}
      class="yellow hover-near-black bg-near-black hover-bg-yellow bg-animate b--yellow br-pill outline-0 pointer ph3 pv2 ${classes}"
    >
      ${text}
    </button>
  `

  function _handler(ev) {
    ev.target.blur()
    handler(ev)
  }
}
