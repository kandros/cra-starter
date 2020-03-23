const { override, addBabelPreset } = require('customize-cra')
module.exports = override(
  addBabelPreset([
    '@emotion/babel-preset-css-prop',
    {
      sourceMap: true,
      labelFormat:
        process.env.NODE_ENV === 'production'
          ? undefined
          : '[dirname]--[filename]--[local]',
      autoLabel: process.env.NODE_ENV !== 'production',
    },
  ])
)
