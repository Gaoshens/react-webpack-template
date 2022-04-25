const { baseConfig, resolvePath } = require('./webpack.base.conf')
const { merge } = require('webpack-merge')

const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
})