// list component

const html = require('choo/html')

const item = require('./item')

module.exports = (state, emit) => {
  let _item = item.bind(null, state, emit)

  return html`
    <ul class="list center pl0 w-100 w-two-thirds-m w-50-l">
      ${state.db.map(_item)}
    </ul>
  `
}
