// info component

const html = require('choo/html')

module.exports = player => {
  return html`
    <div class="pl3 flex-auto">
      <span class="f5 f4-m f3-l db">${player.nickname} ${role()}</span>
      ${team()}
    </div>
  `

  function role() {
    return player.role !== '' ? html`<span class="f6 light-purple">[${player.role}]</span>` : ''
  }

  function team() {
    return player.team !== '' ? html`<span class="f6 db silver">${player.team}</span>` : ''
  }
}
