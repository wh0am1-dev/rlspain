// list-item component

const html = require('choo/html')

const position = require('./position')
const info = require('./info')
const mmr = require('./mmr')

module.exports = (filter, player, idx) => {
  return html`
    <li class="${show()} items-center lh-copy pa3 bb b--dark-gray shadow-hover grow" onclick=${twitter}>
      ${position(idx)}
      ${info(player)}
      ${mmr(player)}
    </li>
  `

  function show () {
    let res = true

    if (filter.query.trim() !== '') {
      res = false

      filter.query.trim().toLowerCase().split(/(?:,| )+/).forEach(keyword => {
        res = res || player.nickname.toLowerCase().indexOf(keyword) > -1
      })
    }

    return res ? 'flex' : 'dn'
  }

  function twitter () {
    window.open(`https://twitter.com/${player.twitter}`, '_blank')
  }
}
