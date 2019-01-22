// list-item component

const html = require('choo/html')

const position = require('./position')
const info = require('./info')
const mmr = require('./mmr')

module.exports = (filter, player, idx) => {
  return html`
    <li class="${show()} items-center lh-copy pa3 bb b--dark-gray" onclick=${twitter}>
      ${position(idx)}
      ${info(player)}
      ${mmr(player)}
    </li>
  `

  function show() {
    return player.nickname.toLowerCase().indexOf(filter.query.toLowerCase()) > -1 ? 'flex' : 'dn'
  }

  function twitter() {
    window.open(`https://twitter.com/${player.twitter}`, '_blank')
  }

  function steam() {
    window.open(`https://steamcommunity.com/profiles/${player.id}`, '_blank')
  }
}
