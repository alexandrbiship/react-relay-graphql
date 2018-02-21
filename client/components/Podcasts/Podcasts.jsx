/* eslint import/extensions: 0 */

import React from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from 'client/relay/environment';
import PodcastsLayout from '../Podcasts/PodcastsLayout.jsx';
import Loading from '../_Global/Loading/Loading.jsx';

const PodcastsQuery = graphql`
  query PodcastsQuery {
    ...PodcastCategories
  }
`;

class Podcasts extends React.Component {

  render() {
    const { marketId, genreId } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={PodcastsQuery}
        variables={{
          marketId,
          genreId
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <PodcastsLayout
                marketId={marketId}
                genreId={genreId}
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

export default Podcasts;
