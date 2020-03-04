const { override, addBabelPreset } = require('customize-cra')
module.exports = override(
  addBabelPreset([
    '@emotion/babel-preset-css-prop',
    {
      sourceMap: true,
      labelFormat: '[dirname]--[local]',
      autoLabel: process.env.NODE_ENV !== 'production',
    },
  ])
)
