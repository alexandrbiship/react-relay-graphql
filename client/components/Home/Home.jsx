/* eslint import/extensions: 0 */

import React from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from 'client/relay/environment';

import { propTypes, defaultProps } from './HomeProps';
import HomeLayout from './HomeLayout.jsx';
import Loading from '../_Global/Loading/Loading.jsx';

const HomeQuery = graphql`
  query HomeQuery ($marketId: Int) {
    ...Search_stationsResults
    ...Search_podcastsResults
    ...LocalPodcasts_localPodcasts
    ...RecPodcasts_recPodcasts
    ...PopularStations_popularStations
    ...PopularPodcasts_popularPodcasts
  }
`;

class Home extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { marketId, appData } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={HomeQuery}
        variables={{
          search: '',
          marketId,
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <HomeLayout
                appData={appData}
                marketId={marketId}
                relayDataProps={props}
              />
            )
          }
          return <Loading />
        }}
      />
    );
  }
}

export default Home;
