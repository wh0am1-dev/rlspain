const html = require('choo/html')

module.exports = ({ children }) =>
  html` <div class="center w-100 w-two-thirds-m w-50-l">${children}</div> `
