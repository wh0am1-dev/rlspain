// structure section component

const html = require('choo/html')

const header = require('./section-header')

module.exports = () => {
  return html`
    ${header('🚧', 'structure')}

    <p>your project also comes with a few directories</p>
    <p>these names have special meanings for the build tool, so it's good to know what they do:</p>

    <ul>
      <li class="mb3">
        <strong>assets/</strong><br>
        static files that can be served up, such as images and fonts
      </li>

      <li class="mb3">
        <strong>components/</strong><br>
        reusable fragments that can be composed into views
      </li>

      <li class="mb3">
        <strong>views/</strong><br>
        combinations of components that are mapped to routes
      </li>

      <li class="mb3">
        <strong>stores/</strong><br>
        pieces of logic that are shared by multiple components
      </li>

      <li class="mb3">
        <strong>plugins/</strong><br>
        special stores capable of interacting with the app instance
      </li>
    </ul>
  `
}
