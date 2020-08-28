const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MyWebpackPlugin = require('./plugins/my-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true
  },
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     use: {
    //       loader: 'babel-loader'
    //     }
    //   }
    // ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new MyWebpackPlugin({
    //   pages: path.resolve(__dirname, 'src/pages')
    // })
  ],
};
