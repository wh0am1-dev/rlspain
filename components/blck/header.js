// header component

const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <header class="tc vh-100 w-100 dt">
      <section class="dtc v-mid">
        <img src="/assets/img/rlscrapper.svg" onclick=${scroll}
          class="w-50 w-third-m w-25-l bt bl b--yellow bw2 br-pill shadow-5 grow">
        <h1 class="f3 f2-m f1-l mt4">
          <span class="bg-yellow near-black ph3 pv2 shadow-5 br2">
            rlspain.cf
          </span>
        </h1>
      </section>
    </header>
  `

  function scroll () {
    emit(state.events.SCROLL_EL, '#content', true)
  }
}
