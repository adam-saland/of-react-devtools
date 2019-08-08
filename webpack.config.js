var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'redux-devtools/lib': path.join(__dirname, 'node_modules', 'redux-devtools', 'lib'),
      'redux-devtools': path.join(__dirname, 'node_modules', 'redux-devtools'),
      react: path.join(__dirname, 'node_modules', 'react'),
      'react-redux': path.join(__dirname, 'node_modules', 'react-redux')
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      // {
      //   test: /\.js$/,
      //   loaders: ['babel'],
      //   include: __dirname
      // },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  }
};
