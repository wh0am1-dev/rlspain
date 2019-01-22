// filter component

const html = require('choo/html')

const button = require('./button')

module.exports = (filter, emit) => {
  return html`
    <div class="center w-100 w-50-m w-third-l mb4 tc">
      ${button('¡Añádeme a la lista!', register)}

      <input class="bg-near-black near-white br-pill b--yellow pv2 ph3 w-100 mt4"
        value=${filter.query} oninput=${update}
        type="text" name="query" placeholder="Buscar...">
    </div>
  `

  function update(e) {
    emit('filter:update', e.target.value)
  }

  function register() {
    window.open('https://google.com', '_blank')
  }
}
