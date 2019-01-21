// <%= name %> view

const html = require('choo/html')
const title = '<%= name %>'

module.exports = (state, emit) => {
  if (state.title !== title) emit('DOMTitleChange', title)

  return html`
    <body>
      <h1><%= name %></h1>
    </body>
  `
}
