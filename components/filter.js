// filter component

const html = require('choo/html')

const button = require('./button')

module.exports = (filter, emit) => {
  return html`
    <div class="center w-100 w-50-m w-third-l mb4 tc">
      ${button('FAQ', openFAQ)}
      ${button('Peticiones', openForm, 'ml4')}

      <input class="input-reset outline-0 bg-near-black near-white br-pill b--yellow pv2 ph3 w-100 mt4"
        value=${filter.query} oninput=${update}
        type="text" name="query" placeholder="Buscar...">
    </div>
  `

  function update (e) {
    emit('filter:update', e.target.value)
  }

  function openForm () {
    window.open('https://goo.gl/forms/ue1I68eSmeDDpTvj2', '_blank')
  }

  function openFAQ () {
    emit('replaceState', '/faq')
    window.scrollTo(0, 0)
  }
}
