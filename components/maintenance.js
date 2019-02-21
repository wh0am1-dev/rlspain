// maintenance component

const html = require('choo/html')

module.exports = () => {
  return html`
    <div class="tc vh-75 w-100 dt">
      <div class="dtc v-mid">
        <h2 class="mb5">(╯°□°)╯︵ ┻━┻</h2>
        <h1 class="f3 f2-m f1-l mt4"><span class="yellow ph3 shadow-5">sorry, we are on maintenance !</span></h1>
      </div>
    </div>
  `
}
