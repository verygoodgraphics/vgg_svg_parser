import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { prettySvg, preprocessSvg, xml2json } from './parser.js'
import viteLogoSvgString from '/vite.svg?raw'
import tigerSvgString from './tiger.svg?raw'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

document.querySelector('#input').innerText = prettySvg(tigerSvgString);
document.querySelector('#output').innerText = JSON.stringify(xml2json(preprocessSvg(tigerSvgString)), null, 2);
