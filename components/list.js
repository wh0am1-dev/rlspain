// list component

const html = require('choo/html')
const listItem = require('./list-item')

module.exports = db => {
  return html`
    <ul class="list center  mt4 w-100 w-50-l">
      ${db.map(listItem)}
    </ul>
  `
}
