const { basename, dirname } = require('path')
const { walkSync, productHeader, nl, linesToString, flatten, optional } = require('@girchi/producers/helpers')
const { readFileSync, writeFileSync, readdirSync, statSync, existsSync } = require('fs')
const { resolve, relative } = require('path')
const { red, yellow, green, blue } = require('chalk')

const abs = str => resolve(__dirname, str)
const root = (str = '') => resolve(abs('../..'), str)

function transform(content) {
  return (
    content
      .replace(/\.\.\/images/g, '~assets/images')
      .replace(/\.\.\/fonts/g, '~assets/fonts')
  )
}

function *produceGen () {
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
