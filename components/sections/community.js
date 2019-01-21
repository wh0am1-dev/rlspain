// community section component

const html = require('choo/html')

const header = require('./section-header')
const link = require('../link')

module.exports = () => {
  let docs = link('docs', 'https://choo.io/docs', true)
  let github = link('github', 'https://github.com/choojs/choo', true)
  let irc = link('irc', 'https://www.irccloud.com/irc/freenode/channel/choo', true)

  return html`
    ${header('🌈', 'community')}

    <p>and that's about it ! thanks for reading</p>
    <p>if you have any questions, check out the ${docs} or reach out on ${github} or ${irc}</p>
    <p>we're online everyday, and always around to help</p>
    <p>happy hacking !</p>
  `
}
