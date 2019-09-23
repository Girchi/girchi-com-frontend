module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        forceAllTransforms: true,
        loose: true,
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3
      }
    ],
    '@babel/preset-flow',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-add-react-displayname'
  ]
}
