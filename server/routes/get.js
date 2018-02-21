import React from 'react';

import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import routes from 'client/routes';
import store from 'client/store';
import dedent from 'helpers/dedent';

const PAGE_NAME = 'radio';
// Google Ads
const GPT = 'https://www.googletagservices.com/tag/js/gpt.js';
const CAN_RUN_ADS = 'assets/scripts/ads.js';

// Google Tag Manager, Analytics Tracking
const ANALYTICS = 'https://www.google-analytics.com/analytics.js'
const GA_TRACKING_CUSTOM = 'assets/scripts/gatracking.js';

// Branch code
const BRANCH = 'assets/scripts/branch.js';
const DISABLE_DEV_TOOLS = 'assets/scripts/disableDevTools.js';
const isDev = process.env.NODE_ENV === 'development';
const HTML_TITLE = 'Radio.com | Listen to your favorite music, news, talk, sports, and podcasts online';

const get = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).send(dedent(`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1">
            <title>${isDev ? 'DEV >>>' : HTML_TITLE}</title>
            <link id="css-bundle" rel="stylesheet" type="text/css" href="/styles.css" />
            <script src="${BRANCH}"></script>
            <script async src="${GPT}"></script>
            <script src="${ANALYTICS}"></script>
            <script src="${GA_TRACKING_CUSTOM}"></script>
            <script src="${CAN_RUN_ADS}"></script>
            ${isDev ? '' : `<script src="${DISABLE_DEV_TOOLS}"></script>`}
          </head>
          <body>
            <div id='root'>
            ${isDev
              ? ''
              : renderToStaticMarkup(
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              )}
            </div>
            <script src="${PAGE_NAME}.bundle.js"></script>
          </body>
        </html>
    `));
    } else {
      res.status(404).send('Not found');
    }
  });
};

export default get;
