const html = require('choo/html')
const link = require('../el/link')
const heart = require('../el/heart')

/*
  <section>
    ${button({ text: 'Peticiones', handler: () => window.open('https://goo.gl/forms/ue1I68eSmeDDpTvj2', '_blank') })}
  </section>
*/

module.exports = () => html`
  <footer class="pv3 ph4 mv4 cf tc f6 f5-m f4-l">
    <section class="mt4">
      hecho con ${heart()} por<br />
      ${link({ text: 'carlos aguilar', href: 'https://carlos-aguilar.com', external: true })} &
      ${link({ text: 'salve', href: 'https://twitter.com/Salve_RL', external: true })}
    </section>
    <section>
      <span class="f6">última actualización: 26/08/2020</span>
    </section>
    <section class="mt4">
      <span class="yellow hover-near-black hover-bg-yellow bg-animate ba b--yellow br2 pv1 ph2">
        v${require('../../package.json').version} legacy
      </span>
    </section>
  </footer>
`
