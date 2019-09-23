const { walkSync } = require('@girchi/producers/helpers')
const { readFileSync } = require('fs')
const { resolve } = require('path')

const abs = str => resolve(__dirname, str)
const root = (str = '') => resolve(abs('../..'), str)

function transform (content) {
  return (
    content
      .replace(/\.\.\/images/g, '~assets/images')
      .replace(/\.\.\/fonts/g, '~assets/fonts')
  )
}

function * produceGen () {
  const stylesPath = root('girchi-com-ui/src/styles')
  const paths = walkSync(stylesPath)

  for (const path of paths) {
    yield {
      path: root(`workspaces/frontend/src/sass/${path}`),
      content: transform(readFileSync(resolve(stylesPath, path)).toString())
    }
  }
}

function produce () {
  return Array.from(produceGen())
}

module.exports = produce
