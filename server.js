/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const { launch, connect } = require('hadouken-js-adapter');
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
  const port = await launch({ manifestUrl: "http://localhost:8080/app.json" })
  const fin = await connect({
    uuid: 'server-connection', //Supply an addressable Id for the connection
    address: `ws://localhost:${port}`, //Connect to the given port.
    nonPersistent: true //We want OpenFin to exit as our application exists.
  });

  //Once OpenFin exists we shut down the server.
  fin.once('disconnected', process.exit);
  console.log('Listening at localhost:8080');
});