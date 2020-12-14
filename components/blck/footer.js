// footer component

const html = require('choo/html')

const button = require('../el/button')
const link = require('../el/link')
const heart = require('../el/heart')

/*
  <section>
    ${button('Peticiones', () => window.open('https://goo.gl/forms/ue1I68eSmeDDpTvj2', '_blank'))}
  </section>
*/

module.exports = () => html`
  <footer class="pv3 ph4 mv4 cf tc f6 f5-m f4-l">
    <section class="mt4">
      made with ${heart()} by<br />
      ${link('neko250', 'https://github.com/neko250', true)} &
      ${link('Salve', 'https://twitter.com/Salve_RL', true)}
    </section>
    <section class="mt4">
      <span class="yellow hover-near-black hover-bg-yellow bg-animate ba b--yellow br2 pv1 ph2">
        v${require('../../package.json').version} beta
      </span>
    </section>
  </footer>
`
