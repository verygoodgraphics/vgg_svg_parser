import { prettySvg, preprocessSvg, xml2json, svg2vgg } from '../src/parser.js'
import './style.css'

import viteSvgString from './public/vite.svg?raw'
import tigerSvgString from './public/tiger.svg?raw'
import javascriptSvgString from './public/javascript.svg?raw'

const examples = {
  "vite": viteSvgString,
  "tiger": tigerSvgString,
  "javascript": javascriptSvgString,
};

for (let name in examples) {
  const opt = document.createElement('option');
  opt.value = examples[name];
  opt.textContent = name;
  document.querySelector('#input-selector').appendChild(opt);
}

document.querySelector('#input-selector').addEventListener('change', function(evt) {
  const val = evt?.target?.value;
  document.querySelector('#input-render').innerHTML = val;
  document.querySelector('#input').innerText = prettySvg(val);
  document.querySelector('#preprocessed-input').innerText = JSON.stringify(xml2json(preprocessSvg(val)), null, 2);
  document.querySelector('#output').innerText = JSON.stringify(svg2vgg(val), null, 2);
});
document.querySelector('#input-selector').dispatchEvent(new Event('change'));
