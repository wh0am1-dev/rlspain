// filter component

const html = require('choo/html')

module.exports = (filter, emit) => {
  return html`
    <div class="center w-100 w-50-m w-third-l mt4">
      <input class="bg-near-black near-white br-pill b--yellow pv2 ph3 w-100"
        value=${filter.query} oninput=${update}
        type="text" name="query" placeholder="Search...">
    </div>
  `

  function update(e) {
    emit('filter:update', e.target.value)
  }
}
