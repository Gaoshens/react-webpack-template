const { baseConfig, resolvePath } = require('./webpack.base.conf')
const { merge } = require('webpack-merge')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  // 热更新 端口号等配置
  devServer: {
    port: 9008,
    hot: true,
    open: true,
    compress: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin()
  ]
})