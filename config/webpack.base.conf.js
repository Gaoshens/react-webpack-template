const path = require('path');;


const resolvePath = resolve => path.resolve(__dirname, resolve);

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')



const baseConfig = {
  // 开发环境
  mode: 'development',
  // 入口
  entry: resolvePath('../src/index.js'),
  // 出口
  output: {
    path: resolvePath('../dist'),
    filename: '[name].build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader', 'less-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.jpe?g|png|webg|jif|svg$/,
        type: 'asset/resource',
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:6].css'
    }),
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      title: 'React'
    }),
  ]

}


module.exports = {
  baseConfig,
  resolvePath
}