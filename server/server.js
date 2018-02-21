import FileStreamRotator from 'file-stream-rotator';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import routes from './routes';
import webpackConfig from '../webpack.config.babel';

const app = express();
const port = process.env.PORT || 3942;

// hot reloading for front end
if (process.env.HMR) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

const logDirectory = 'server/log';

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: `${logDirectory}/access-%DATE%.log`,
  frequency: 'daily',
  verbose: false,
});

// HTTP headers for security
app.use(helmet());

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// app.use(favicon(path.join(__dirname, '../public/assets/images/icons/favicon.png')));

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

app.listen(port, () => { console.log(`Listening on port ${port}`) });
