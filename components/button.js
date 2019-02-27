// button component

const html = require('choo/html')

module.exports = (text, handler, classes = '') => {
  return html`
    <button class="br-pill b--yellow ph3 pv2 pointer bg-near-black yellow hover-bg-yellow hover-near-black bg-animate outline-0 ${classes}" onclick=${handler}>
      ${text}
    </button>
  `
}
