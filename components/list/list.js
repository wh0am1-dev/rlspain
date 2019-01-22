// list component

const html = require('choo/html')

const item = require('./item')

module.exports = (db, filter) => {
  return html`
    <ul class="list center pl0 w-100 w-two-thirds-m w-50-l">
      ${db.map(item.bind(null, filter))}
    </ul>
  `
}
