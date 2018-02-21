/* eslint import/extensions: 0 */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from 'client/components/App/AppContainer.jsx';
import HomeContainer from 'client/components/Home/HomeContainer.jsx';
import Podcasts from 'client/components/Podcasts/Podcasts.jsx';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path="/podcasts" component={Podcasts} />
  </Route>
);

export default routes;
