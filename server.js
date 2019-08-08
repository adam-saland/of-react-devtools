/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const { launch } = require('hadouken-js-adapter');
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', async (err) => {
  if (err) {
    console.log(err);
  }
  await launch({ manifestUrl: "http://localhost:8080/app.json"})
  console.log('Listening at localhost:8080');
});
