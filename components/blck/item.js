// item component

const html = require('choo/html')

const delta = require('../el/delta')

module.exports = (player, category) => {
  let team = player.team ? html`<span class="f6 db silver">${player.team}</span>` : ''
  let role = player.role ? html`<span class="f6 light-purple ml2">[${player.role}]</span>` : ''
  let colour =
    parseInt(player[category].deltaMmr) > 0
      ? 'green'
      : parseInt(player[category].deltaMmr) < 0
      ? 'red'
      : 'silver'
  let deltaMmr = `${player[category].deltaMmr > 0 ? '+' : ''}${player[category].deltaMmr}`

  return html`
    <li
      class="flex items-center lh-copy pa3 bb b--dark-gray hover-bg-black-90 pointer"
      onclick="${() => window.open(`https://twitter.com/${player.twitter}`, '_blank')}"
    >
      <span class="flex items-center f3 f2-l yellow">
        ${delta(player[category].deltaPos)} ${player[category].pos}
      </span>

      <div class="pl3 flex-auto">
        <span class="f5 f4-m f3-l"> ${player.nick} ${role} </span>
        ${team}
      </div>

      <div>
        <span class="f5 f4-m f3-l db"> ${player[category].mmr} </span>
        <span class="f6 fr ${colour}"> ${deltaMmr} </span>
      </div>
    </li>
  `
}
