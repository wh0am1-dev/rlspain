// footer component

const html = require('choo/html')

const link = require('../el/link')
const heart = require('../el/heart')

module.exports = (state, emit) => {
  return html`
    <footer class="pv3 ph4 mv4 cf tc">
      <section class="f6 f5-m f4-l">
        made with ${heart()} by<br>
        ${link('neko250', 'https://github.com/neko250', true)}
        & ${link('Salve', 'https://twitter.com/Salve_RL', true)}
      </section>
      <section class="f6 f5-m f4-l mt4">
        <span class="yellow hover-near-black hover-bg-yellow bg-animate ba b--yellow br2 pv1 ph2">
          v${require('../../package.json').version} beta
        </span>
      </section>
    </footer>
  `
}
