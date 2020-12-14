// link component

const html = require('choo/html')

module.exports = (text, href, external = false, classes = '') => {
  let target = external ? '_blank' : ''
  let rel = external ? 'noopener noreferrer' : ''

  return html`
    <a
      href=${href}
      target=${target}
      rel=${rel}
      onclick=${ev => ev.target.blur()}
      class="link yellow hover-near-black hover-bg-yellow bg-animate pa1 br2 ${classes}"
    >
      ${text}
    </a>
  `
}
