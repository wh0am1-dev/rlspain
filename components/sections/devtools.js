// devtools section component

const html = require('choo/html')

const header = require('./section-header')
const link = require('../link')

module.exports = () => {
  let chooDevtools = link('devtools', 'https://github.com/choojs/choo-devtools', true)

  return html`
    ${header('🔬', 'devtools')}

    <p>to make your development journey more pleasant, we've also included ${chooDevtools}</p>
    <p>if you open your browser console, here's a selection of the commands that are at your disposal:</p>

    <ul>
      <li class="mb3">
        <strong>choo.state</strong><br>
        log the current application state
      </li>

      <li class="mb3">
        <strong>choo.log</strong><br>
        log the last 150 events received by the event bus
      </li>

      <li class="mb3">
        <strong>choo.emit</strong><br>
        emit an event inside the application event bus
      </li>

      <li class="mb3">
        <strong>choo.help</strong><br>
        see an overview of all available commands
      </li>
    </ul>
  `
}
