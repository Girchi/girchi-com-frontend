const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const babelrc = require('./.babelrc.js')

const abs = str => path.resolve(__dirname, str)
const rootAbs = str => path.resolve(abs('../..'), str)
const groundAbs = str => path.resolve(rootAbs('workspaces/frontend'), str)
const blessingAbs = str => path.resolve(rootAbs('scripts/blessing'), str)

module.exports = async ({ config, mode }) => {
  config.module.rules[0].use[0].options = {
    babelrc: false,
    cacheDirectory: true,
    root: groundAbs('.'),
    ...babelrc
  }

  config.output.publicPath = '/'

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'cache/css/[name]-[chunkhash].css',
      chunkFilename: 'cache/css/[name]-[chunkhash].chunks.css'
    })
  )

  config.resolve.modules = [
    rootAbs('node_modules'),
    blessingAbs('node_modules'),
    groundAbs('node_modules'),
    groundAbs('src/js'),
    groundAbs('src/sass'),
    groundAbs('src'),
    groundAbs('.')
  ]

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            autoprefixer({
              overrideBrowserslist: ['> 0%']
            })
          ]
        }
      },
      'resolve-url-loader?sourceMap',
      'sass-loader?sourceMap',
      'import-glob-loader'
    ]
  })

  return config
}
