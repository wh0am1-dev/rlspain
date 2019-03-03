// player view

const html = require('choo/html')
const title = 'rlspain.cf · '

module.exports = (state, emit) => {
  let player = getPlayer()
  if (state.title !== title) emit('DOMTitleChange', title + player.nickname)

  return html`
    <body class="code lh-copy bg-near-black near-white" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      <main class="ph4 cf center">
        <h1>${player.nickname}</h1>
      </main>
    </body>
  `

  function twitter () {
    window.open(`https://twitter.com/${player.twitter}`, '_blank')
  }


  function getPlayer () {
    let ref = null

    state.db.forEach(player => {
      if (player.id === state.params.id)
        ref = player
    })

    return ref
  }
}
