const { readFileSync, writeFileSync, existsSync } = require('fs')
const { resolve, relative } = require('path')
const { walkSync } = require('./helpers')
const { red, yellow, green, blue } = require('chalk')

const abs = str => resolve(__dirname, str)
const root = (str = '') => resolve(abs('../..'), str)

function * getProducers () {
  for (const path of process.argv.slice(2)) {
    const dir = abs(resolve(process.cwd(), path))

    yield * (
      walkSync(dir)
        .filter(path => path.match(/_producer.js$/))
        .map(path => resolve(dir, path))
    )
  }
}

function executeProducers (producers) {
  let exitCode = 0

  for (const producerPath of producers) {
    const produce = require(producerPath)
    const files = produce()

    console.info(blue(`[PRODUCE] ${relative(root(), producerPath)}`))

    for (const file of files) {
      const content = existsSync(file.path)
        ? readFileSync(file.path).toString()
        : ''

      const filePath = relative(root(), file.path)

      if (file.content !== content) {
        if (process.env.PRODUCER_MODE === 'check') {
          console.info(red(`  [ERROR] ${filePath}`))
          exitCode = 1
        } else {
          console.info(yellow(`  [FIXED] ${filePath}`))
          writeFileSync(file.path, file.content)
        }
      } else {
        console.info(green(`   [OKEY] ${filePath}`))
      }
    }
  }

  return exitCode
}

process.exit(executeProducers(getProducers()))
