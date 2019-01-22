// mmr component

const html = require('choo/html')

module.exports = player => {
  let diff = player.mmr - player._mmr

  return html`
    <div>
      <span class="f5 f4-m f3-l db">${player.mmr}</span>
      <span class="f6 ${colour()} fr">${delta()}</span>
    </div>
  `

  function delta() {
    return `${diff > 0 ? '+' : ''}${diff}`
  }

  function colour(d) {
    return diff < 0 ? 'red' : (diff > 0 ? 'green' : 'silver')
  }
}
