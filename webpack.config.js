const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MyWebpackPlugin = require('./plugins/my-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: false,
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin({
    //   patterns:[
    //     { from: './public', toType: 'dir' }
    //   ]
    // })
    new MyWebpackPlugin({
      pages: path.resolve(__dirname, 'src/pages')
    })
  ],
};
