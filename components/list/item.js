// list-item component

const html = require('choo/html')

module.exports = (state, emit, player, idx) => {
  if (!player.mmr) return ''

  return html`
    <li class="${show()} items-center lh-copy pa3 bb b--dark-gray shadow-hover grow" onclick=${viewPlayer}>
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
    if (player._mmr === 0)
      return '¡nuevo!'

    let diff = player.mmr - player._mmr
    return `${diff > 0 ? '+' : ''}${diff}`
  }

  function deltaColour (d) {
    if (player._mmr === 0)
      return 'green'

    let diff = player.mmr - player._mmr
    return diff < 0 ? 'red' : (diff > 0 ? 'green' : 'silver')
  }

  function viewPlayer () {
    emit('db:setDetails', idx)
    emit('pushState', `/player/${player.id}`)
  }

  function show () {
    let res = true

    if (state.filter.trim() !== '') {
      res = false

      state.filter.trim().toLowerCase().split(/(?:,| )+/).forEach(keyword => {
        res = res || player.nickname.toLowerCase().indexOf(keyword) > -1
      })
    }

    return res ? 'flex' : 'dn'
  }
}
