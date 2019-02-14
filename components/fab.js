// fab component

const html = require('choo/html')

module.exports = () => {
  return html`
    <div id="fab" class="pa2 grow w3 h3 fixed bottom-1 right-1 bottom-2-ns right-2-ns bg-near-black bt bl bw1 b--yellow br-pill pointer shadow-1 dn" onclick=${scroll}>
      <svg class="yellow ma1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
        <path fill="currentColor" d="M 112.02623,336 H 163.62623 V 432 C 163.62623,458.5 185.12623,480 211.62623,480 H 300.22623 C 326.72623,480 348.22623,458.5 348.22623,432 V 336 H 399.82623 C 442.42623,336 464.02623,284.3 433.72623,254.1 L 289.82623,110.1 C 271.12623,91.4 240.72623,91.4 221.92623,110.1 L 77.926224,254.1 C 48.026224,284.2 69.326224,336 112.02623,336 Z M 256.02623,144 400.02623,288 H 300.32623 V 432 H 211.72623 V 288 H 112.02623 Z M 64.026224,68 V 44 C 64.026224,37.4 69.426224,32 76.026224,32 H 436.02623 C 442.62623,32 448.02623,37.4 448.02623,44 V 68 C 448.02623,74.6 442.62623,80 436.02623,80 H 76.026224 C 69.426224,80 64.026224,74.6 64.026224,68 Z"></path>
      </svg>
    </div>
  `

  function scroll () {
    document.querySelector('#content').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
