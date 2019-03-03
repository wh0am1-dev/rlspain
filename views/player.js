// player view

const html = require('choo/html')
const title = 'rlspain.cf · '

const button = require('../components/button')

module.exports = (state, emit) => {
  let player = state.details !== null ? state.db[state.details] : {
    nickname: '', mmr: 0, id: '', team: '',
    role: '', twitter: '', ps: false, twitch: '',
    name: '', province: '', region: '', _mmr: 0
  }

  if (state.title !== title + player.nickname)
    emit('DOMTitleChange', title + player.nickname)

  return html`
    <body class="code lh-copy bg-near-black near-white" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      <main class="ph4 cf center">
        <div class="tc w-100 dt">
          <div class="dtc v-mid">
            <h2 class="f3 f1-ns mt5"><span class="bg-yellow near-black ph3 pv2 shadow-5 br2">${player.nickname}</span></h2>
          </div>
        </div>

        ${info()}
        ${rating()}

        <div class="tc w-100 dt mv5">
          <div class="dtc v-mid">
            ${button('Volver', close)}
          </div>
        </div>
      </main>
    </body>
  `

  function info () {
    return html`
      <section class="fl w-100 w-50-l h-100 pa4 tc">
        <h2 class="f5 f4-m f3-l yellow">Info</h2>
        <p class="f6 f5-m f4-l">Nickname: ${player.nickname}</p>
        ${role()}
        ${team()}
      </section>
    `
  }

  function role () {
    return html`<p class="f6 f5-m f4-l">Rol: ${player.role ? player.role : 'Jugador'}</p>`
  }

  function team () {
    return player.team ? html`<p class="f6 f5-m f4-l">Equipo: ${player.team}</p>` : ''
  }

  function rating () {
    return html`
      <section class="fl w-100 w-50-l h-100 pa4 tc">
        <h2 class="f5 f4-m f3-l yellow">Rating</h2>
        <p class="f6 f5-m f4-l">Posición: ${state.details}</p>
        <p class="f6 f5-m f4-l">MMR: ${player.mmr}</p>
        <p class="f6 f5-m f4-l">Diff: <span class="${deltaColour()}">${delta()}</span></p>
      </section>
    `
  }

  function delta () {
    if (player._mmr === 0)
      return '¡nuevo!'

    let diff = player.mmr - player._mmr
    return `${diff > 0 ? '+' : ''}${diff}`
  }

  function deltaColour () {
    if (player._mmr === 0)
      return 'green'

    let diff = player.mmr - player._mmr
    return diff < 0 ? 'red' : (diff > 0 ? 'green' : 'silver')
  }

  function twitter () {
    window.open(`https://twitter.com/${player.twitter}`, '_blank')
  }

  function close () {
    window.scrollTo({
      top: 0,
      left: 0
    })

    emit('pushState', '/')
  }
}
