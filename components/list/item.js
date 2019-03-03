// list-item component

const html = require('choo/html')

const position = require('./position')
const info = require('./info')
const mmr = require('./mmr')

module.exports = (filter, player, idx) => {
  if (!player.mmr) return ''
  let diff = player.mmr - player._mmr

  return html`
    <li class="${show()} items-center lh-copy pa3 bb b--dark-gray shadow-hover grow" onclick=${twitter}>
      <span class="f3 f2-l yellow">${idx + 1}</span>

      <div class="pl3 flex-auto">
        <span class="f5 f4-m f3-l db">${player.nickname} ${role()}</span>
        ${team()}
      </div>

      <div>
        <span class="f5 f4-m f3-l db">${player.mmr}</span>
        <span class="f6 ${deltaColour()} fr">${delta()}</span>
      </div>
    </li>
  `

  function role () {
    return player.role !== '' ? html`<span class="f6 light-purple">[${player.role}]</span>` : ''
  }

  function team () {
    return player.team !== '' ? html`<span class="f6 db silver">${player.team}</span>` : ''
  }

  function delta () {
    return `${diff > 0 ? '+' : ''}${diff}`
  }

  function deltaColour (d) {
    return diff < 0 ? 'red' : (diff > 0 ? 'green' : 'silver')
  }

  function twitter () {
    window.open(`https://twitter.com/${player.twitter}`, '_blank')
  }

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
}
