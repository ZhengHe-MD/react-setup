import path from 'path';
import express from 'express';
// for dev
import webpack from 'webpack';
import config from './webpack.config.js';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/static', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

/* eslint-disable no-console */
app.listen(port, host, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`listening at ${host}:${port}`);
});
/* eslint-enable no-console */
