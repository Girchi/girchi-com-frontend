const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

const abs = str => path.resolve(__dirname, str)
const projectRootAbs = str => path.resolve(abs('../..'), str)

const yamlLoad = (path, optional) => {
  if (optional && !fs.existsSync(path)) {
    return {}
  } else {
    return yaml.safeLoad(fs.readFileSync(path, 'utf8'))
  }
}

module.exports = ({ NODE_ENV }) => {
  const gitRevisionPlugin = new GitRevisionPlugin()

  const env = {
    NODE_ENV: NODE_ENV,
    BRANCH: gitRevisionPlugin.branch(),
    COMMIT_HASH: gitRevisionPlugin.commithash(),
    ...yamlLoad(projectRootAbs('.env.default.yml')),
    ...yamlLoad(projectRootAbs('.env.yml'), true)
  }

  return {
    dependencies: [
      projectRootAbs('.env.default.yml'),
      projectRootAbs('.env.yml')
    ],
    code: `module.exports = ${JSON.stringify(env)}`
  }
}
