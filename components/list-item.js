// list-item component

const html = require('choo/html')

module.exports = (player, idx) => {
  let team = player => player.team !== '' ? html`<span class="f6 db silver">${player.team}</span>` : ''
  let role = player => player.role !== '' ? html`<span class="f6 light-purple">[${player.role}]</span>` : ''

  return html`
    <li class="flex items-center lh-copy pa3 ph0-l bb b--near-white">
      <span class="f3 f1-ns red">${idx + 1}.</span>
      <div class="pl3 flex-auto">
        <span class="f6 f4-ns db">${player.nickname} ${role(player)}</span>
        ${team(player)}
      </div>
      <div>
        <span class="f5 f3-ns">${player.mmr}</span>
      </div>
    </li>
  `
}
