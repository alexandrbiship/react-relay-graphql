/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createMemoryHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import preloadedState from './preloadedState';

const composeEnhancers = typeof window !== 'undefined'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const middleware = [thunk];

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware, routerMiddleware(createMemoryHistory)))
);

export const history = syncHistoryWithStore(createMemoryHistory({}), store);

export default store;
