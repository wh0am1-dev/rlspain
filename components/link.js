// link component

const html = require('choo/html')

module.exports = (text, href, external = false) => {
  let target = external ? '_blank' : ''
  let rel = external ? 'noopener noreferrer' : ''

  return html`
    <a class="link yellow bg-animate hover-bg-yellow hover-near-black br2 pa1" href=${href} target=${target} rel=${rel}>
      ${text}
    </a>
  `
}
