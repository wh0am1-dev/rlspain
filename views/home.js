// home view

const html = require('choo/html')
const title = 'choof'

const welcome = require('../components/sections/welcome')
const scripts = require('../components/sections/scripts')
const structure = require('../components/sections/structure')
const examples = require('../components/sections/examples')
const devtools = require('../components/sections/devtools')
const community = require('../components/sections/community')

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  let section = body => html`
    <section class="fl w-100 w-third-l h-100 pa4">
      ${body}
    </section>
  `

  return html`
    <body class="code lh-copy bg-near-black near-white">
      <main class="ph4 cf center">

        <div class="tc vh-100 w-100 dt">
          <div class="dtc v-mid">
            <img src="assets/img/choof.svg" class="w-50 w-third-m w-25-l">
            <h1 class="f3 f2-m f1-l"><span class="bg-yellow near-black ph3">choof</span></h1>
          </div>
        </div>

        ${section(welcome())}
        ${section(scripts())}
        ${section(structure())}
        ${section(examples(state.clicks, emit))}
        ${section(devtools())}
        ${section(community())}

      </main>
    </body>
  `
}
