// header component

const html = require('choo/html')

module.exports = (text, classes = '') => html`
  <header class="tc w-100 dt ${classes}">
    <section class="dtc v-mid">
      <h2 class="f3 f1-ns">
        <span class="bg-yellow near-black ph3 pv2 shadow-5 br2">${text}</span>
      </h2>
    </section>
  </header>
`
