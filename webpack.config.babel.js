import webpack from 'webpack';
import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const PROJECT_ROOT = path.resolve(__dirname);
const BUILD_DIR = path.join(PROJECT_ROOT, 'public');
const CLIENT_DIR = path.join(PROJECT_ROOT, 'client');
const ASSETS_DIR = path.join(CLIENT_DIR, 'assets');

const DEBUG = process.env.NODE_ENV === 'development';
const CONFIG = process.env.CONFIG;

const webpackConfig = {
  entry: {
    radio: ['babel-polyfill', CLIENT_DIR]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
      disable: DEBUG,
    }),
    new CopyWebpackPlugin([
      {
        from: ASSETS_DIR,
        to: path.join(BUILD_DIR, '/assets'),
      },
    ]),
    new webpack.DefinePlugin({
      'process.env.CONFIG': JSON.stringify(CONFIG || 'dev'),
    })
  ],
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname),
          CLIENT_DIR,
          path.join(PROJECT_ROOT, '/helpers'),
        ],
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        include: CLIENT_DIR,
        exclude: /(node_modules)/,
        use: DEBUG
        ? [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
              // options: {
              //   sourceMap: true
              // },
            },
          ]
        : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
            // publicPath: "/"
          }),
        // loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'),
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
    ]
  },
};

if (process.env.HMR) {
  webpackConfig.entry.radio.unshift('webpack-hot-middleware/client');
  webpackConfig.devtool = 'eval';
  const plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];
  webpackConfig.plugins.push(...plugins);
  webpackConfig.module.rules[0].loaders.unshift('react-hot-loader');
}

export default webpackConfig;
