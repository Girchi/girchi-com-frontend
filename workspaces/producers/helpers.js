const { readdirSync, statSync } = require('fs')
const { relative } = require('path')

function walkSync (path, base) {
  base = base || path

  return (
    readdirSync(path)
      .reduce((files, file) => {
        const filePath = `${path}/${file}`

        return files.concat(
          statSync(filePath).isDirectory()
            ? walkSync(filePath, base)
            : [relative(base, filePath)]
        )
      }, [])
  )
}

function productHeader () {
  return nl([
    '// @flow strict-local',
    '// Auto Generated, Don\'t Modify Manually'
  ])
}

// new line as needed
function nl (lines) {
  if (lines.length > 0) {
    if (lines[lines.length - 1] !== '') {
      return [...lines, '']
    } else {
      return [...lines.slice(0, lines.lastIndexOf('')), '']
    }
  } else {
    return lines
  }
}

function flatten (input) {
  const stack = [...input]
  const res = []

  while (stack.length) {
    const next = stack.pop()

    if (Array.isArray(next)) {
      stack.push(...next)
    } else {
      res.push(next)
    }
  }

  return res.reverse()
}

function linesToString (lines) {
  return nl(flatten(lines)).join('\n')
}

function optional (bool, val) {
  if (bool) {
    if (Array.isArray(val)) {
      return val
    } else {
      return [val]
    }
  } else {
    return []
  }
}

module.exports = {
  walkSync,
  productHeader,
  nl,
  optional,
  flatten,
  linesToString
}
