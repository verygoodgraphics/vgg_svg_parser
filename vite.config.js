const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/parser.js'),
      name: 'vgg-svg-parser',
      fileName: (format) => `vgg-svg-parser.${format}.js`
    },
  },
  server: {
    open: "/demo/index.html",
  },
})
