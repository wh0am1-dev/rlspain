// scripts section component

const html = require('choo/html')

const header = require('./section-header')

module.exports = () => {
  return html`
    ${header('🔨', 'scripts')}

    <p>we've outfitted your project with a small selection of commands to help you achieve results faster:</p>

    <ul>
      <li class="mb3">
        <strong>npm start</strong><br>
        local development server
      </li>

      <li class="mb3">
        <strong>npm run gen</strong><br>
        scaffold new components
      </li>

      <li class="mb3">
        <strong>npm run build</strong><br>
        compile files into <code>dist/</code>
      </li>

      <li class="mb3">
        <strong>npm test</strong><br>
        lint and validate deps
      </li>

      <li class="mb3">
        <strong>npm run inspect</strong><br>
        visualise the app structure
      </li>
    </ul>
  `
}
