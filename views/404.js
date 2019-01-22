// 404 view

const html = require('choo/html')
const title = 'rlspain - 404'

const button = require('../components/button')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body class="code lh-copy bg-near-black near-white pa4">
      <h2>route not found...</h2>
      <h2 class="mb5">(╯°□°)╯︵ ┻━┻</h2>

      ${button('back to main', () => emit('pushState', '/'))}
    </body>
  `
}
