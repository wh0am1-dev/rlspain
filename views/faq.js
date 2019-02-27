// faq view

const html = require('choo/html')
const title = 'rlspain.cf · faq'

const button = require('../components/button')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  let questions = [
    {
      q: 'Soy español y no estoy en la lista, ¿cómo puedo acceder?',
      a: 'Haz click en el botón "Peticiones" y rellena el formulario.'
    },
    {
      q: '¿Cuáles son los requisitos para poder entrar en la lista?',
      a: 'Residir en España, tener más de 1000 de rating o ser una personalidad de la comunidad.'
    },
    {
      q: '¿Cada cuánto se actualiza la lista?',
      a: 'La lista se actualiza diaria y automáticamente de madrugada.'
    },
    {
      q: 'Hay información asociada a mí que es errónea.',
      a: 'Haz click en el botón "Peticiones" y rellena el formulario.'
    },
    {
      q: '¿Qué son los números en verde o rojo debajo del rating?',
      a: 'Es la diferencia de puntos entre el día anterior y el actual.'
    },
    {
      q: '¿Pensáis añadir las colas de 1v1 y 2v2?',
      a: 'Nuestro plan es añadir estas colas en un futuro.'
    }
  ]

  return html`
    <body class="code lh-copy bg-near-black near-white" style="cursor: default; user-select: none; scroll-behavior: smooth;">
      <main class="ph4 cf center">
        <div class="tc w-100 dt">
          <div class="dtc v-mid">
            <h2 class="f3 f1-ns mt5"><span class="bg-yellow near-black ph3 pv2 shadow-5 br2">FAQ</span></h2>
          </div>
        </div>

        ${questions.map(section)}

        <div class="tc w-100 dt mv5">
          <div class="dtc v-mid">
            ${button('Cerrar', close)}
          </div>
        </div>
    </body>
  `

  function section (question) {
    return html`
      <section class="fl w-100 w-50-l h-100 pa4">
        <h2 class="mb4"><span class="yellow pv1">${question.q}</span></h2>
        <p>${question.a}</p>
      </section>
    `
  }

  function close () {
    emit('replaceState', '/')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}