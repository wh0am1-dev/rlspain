// link component

const html = require('choo/html')

module.exports = (text, href, external = false) => {
  let target = external ? '_blank' : ''
  let rel = external ? 'noopener noreferrer' : ''

  return html`
    <a class="link red bg-animate hover-bg-red hover-near-black" href=${href} target=${target} rel=${rel}>
      ${text}
    </a>
  `
}
