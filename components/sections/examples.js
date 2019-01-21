// examples section component

const html = require('choo/html')

const header = require('./section-header')
const link = require('../link')
const button = require('../button')

module.exports = (clicks, emit) => {
  return html`
    ${header('🔮', 'examples')}

    <p>so far we've provided you with one base view, a ${link('fallback view', '/oh-no')}, a bunch of components, a store, and a plugin</p>
    <p>this serves as an example, a place to start from... it's your project now, so go ahead and delete them once you know how they work</p>

    <p>number of clicks stored: ${clicks}</p>
    ${button('emit a click event', () => emit('clicks:add', 1))}
  `
}
