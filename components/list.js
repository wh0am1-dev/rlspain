// list component

const html = require('choo/html')
const listItem = require('./list-item')

module.exports = db => {
  return html`
    <ul class="list center mt4 pl0 w-100 w-two-thirds-m w-50-l">
      ${db.map(listItem)}
    </ul>
  `
}
