// welcome section component

const html = require('choo/html')

const header = require('./section-header')

module.exports = () => {
  return html`
    ${header('🚂', 'welcome')}

    <p>we're very happy you've made it this far</p>
    <p>you're now in control of your own choo app</p>
    <p>the moment you decide to deploy it, it'll work offline and on any device</p>
  `
}
