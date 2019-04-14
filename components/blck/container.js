// container component

const html = require('choo/html')

module.exports = (state, emit, content) => {
  return html`
    <div class="center w-100 w-two-thirds-m w-50-l">
      ${content}
    </div>
  `
}
