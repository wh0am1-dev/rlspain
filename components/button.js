// button component

const html = require('choo/html')

module.exports = (text, handler) => {
  return html`
    <button class="br-pill b--yellow dim ph3 pv2 pointer bg-near-black yellow" onclick=${handler}>
      ${text}
    </button>
  `
}
