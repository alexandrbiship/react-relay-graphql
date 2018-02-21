/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { match, Router, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';

import store from './store';
import routes from './routes';

const browserHistory = useRouterHistory(createHistory)(
  {
    // basename: '/',
  }
);

const history = syncHistoryWithStore(browserHistory, store);

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    document.getElementById('root')
  );
});
