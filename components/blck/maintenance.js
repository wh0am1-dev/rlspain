// maintenance component

const html = require('choo/html')

const container = require('./container')

module.exports = (state, emit) => {
  return container(state, emit, html`
    <section class="tc pt5">
      <h2 class="mb5">(╯°□°)╯︵ ┻━┻</h2>
      <h1 class="f3 f2-m f1-l mt4"><span class="yellow ph3">Lo sentimos, estamos en mantenimiento !</span></h1>
    </div>
  `)
}
