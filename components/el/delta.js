// delta component

const html = require('choo/html')

module.exports = delta => {
  if (delta < 0) {
    return html`
      <span class="flex flex-column fl mr2">
        <svg class="w1 green w-100 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" style="width: .875rem; height: .875rem; top: 2px;">
          <path fill="currentColor" d="M165,75 L165,75 L75,255 L75,255 L255,255 L255,255 L165,75 "/>
        </svg>
        <span class="f6 green w-100 tc relative" style="top: -2px;">
          ${Math.abs(delta)}
        </span>
      </span>
    `
  }

  if (delta > 0) {
    return html`
      <span class="flex flex-column fl mr2">
        <span class="f6 red w-100 tc relative" style="top: 2px;">
          ${Math.abs(delta)}
        </span>
        <svg class="w1 red w-100 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"
          style="width: .875rem; height: .875rem; top: -2px;">
          <path fill="currentColor" d="M75,75 L75,75 L165,255 L165,255 L255,75 L255,75 L75,75 "/>
        </svg>
      </span>
    `
  }

  return html`
    <span class="flex flex-column fl mr2">
      <svg class="w1 near-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" style="width: .875rem; height: .875rem;">
        <path fill="currentColor" d="M75,150 L75,150 L75,180 L75,180 L255,180 L255,180 L255,150 L255,150 L75,150 "/>
      </svg>
    </span>
  `
}
