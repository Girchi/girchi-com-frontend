const { resolve, relative, basename, dirname } = require('path')
const { walkSync, productHeader, nl, linesToString, flatten, optional } = require('@girchi/producers/helpers')
const { readFileSync, writeFileSync, readdirSync, statSync, existsSync } = require('fs')
const { red, yellow, green, blue } = require('chalk')
const jsx_of_html = require('./jsx_of_html')

const abs = str => resolve(__dirname, str)
const root = (str = '') => resolve(abs('../..'), str)

// https://github.com/huynhsamha/js-pascalcase/blob/master/index.js
function pascalCase(str) {
	return String(str)
		.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
		.replace(/[^A-Za-z0-9]+/g, '$')
		.replace(/([a-z])([A-Z])/g, (m, a, b) => a + '$' + b)
		.toLowerCase()
		.replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
}

function transform(content, componentName) {
  let jsx = (
    (
      new jsx_of_html({
        createClass: false
      })
    ).convert(
      content
        .replace(/<span\s+class="text-uppercase text-grey font-size-1"\s+<span\s+class="text-uppercase text-grey font-size-1"/g, '<span class="text-uppercase text-grey font-size-1"')
    )
      .replace(/<meta [^\/]+\/>\s+/g, '')
      .replace(/<title>.+<\/title>\s+/g, '')
  )

  const imports = [`import React from 'react'`]

  if (jsx.includes(`\${'{'}require('./partials/header.html'){'}'}`)) {
    jsx = jsx.replace(`\${'{'}require('./partials/header.html'){'}'}`, `<Header />`)

    imports.push(`import Header from 'jsx_of_html/partials/Header'`)
  }

  if (jsx.includes(`\${'{'}require('./partials/footer.html'){'}'}`)) {
    jsx = jsx.replace(`\${'{'}require('./partials/footer.html'){'}'}`, `<Footer />`)

    imports.push(`import Footer from 'jsx_of_html/partials/Footer'`)
  }

  const images = jsx.match(/src="(\.?\.\/|images)[^"]+"/g)

  if (images) {
    for (const image of images) {
      jsx = jsx.replace(image, `src={require(${image.replace(/src="(\.?\.\/)?/, '"assets/')})}`)
    }
  }

  return linesToString([
    productHeader(),
    imports,
    ``,
    `export default function ${componentName} (_: {||}): React$Node {`,
    `  return (`,
    jsx.trim().split('\n').map(l => `    ${l}`),
    `  )`,
    `}`
  ])
}

function story(components) {
  const imports = [
    `import { storiesOf } from '@storybook/react'`,
    `import React from 'react'`,
    '',
    components.map(([path, name]) => `import ${name} from 'jsx_of_html/${path}'`),
    '',

  ]

  return linesToString([
    productHeader(),
    imports,
    `storiesOf('jsx_of_html', module)`,
    components.map(([path, name]) => linesToString([
      `  .add('${path.replace(/\.js$/, '')}', () => {`,
      `    return (`,
      `      <${name} />`,
      `    )`,
      `  })`
    ]))
  ])
}

function *produceGen () {
  const htmlsPath = root('girchi-com-ui/src')

  const paths = (
    walkSync(htmlsPath)
      .filter(path => /\.html$/.test(path))
  )

  const components = []

  for (const path of paths) {
    const componentName = pascalCase(basename(path, '.html'))
    const componentDirname = dirname(path)
    const componentPath = relative('.', `${componentDirname}/${componentName}.js`)

    components.push([componentPath, componentName])

    yield {
      path: root(`workspaces/frontend/src/jsx_of_html/${componentPath}`),
      content: transform(readFileSync(resolve(htmlsPath, path)).toString(), componentName)
    }
  }

  yield {
    path: root('workspaces/frontend/src/stories/jsx_of_html.js'),
    content: story(components)
  }
}

function produce () {
  return Array.from(produceGen())
}

module.exports = produce
