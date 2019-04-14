// delta component

const html = require('choo/html')

module.exports = delta => {
  if (delta < 0) {
    return html`
      <svg class="w1 green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
        <path fill="currentColor" d="M165,75 L165,75 L75,255 L75,255 L255,255 L255,255 L165,75 "/>
      </svg>
    `
  }

  if (delta > 0) {
    return html`
      <svg class="w1 red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
        <path fill="currentColor" d="M75,75 L75,75 L165,255 L165,255 L255,75 L255,75 L75,75 "/>
      </svg>
    `
  }

  return html`
    <svg class="w1 near-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
      <path fill="currentColor" d="M75,150 L75,150 L75,180 L75,180 L255,180 L255,180 L255,150 L255,150 L75,150 "/>
    </svg>
  `
}
