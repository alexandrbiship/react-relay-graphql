/* eslint import/extensions: 0 */

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

import StationTileLayout from 'client/components/_Global/Tile/StationTileLayout.jsx';
import styles from './PopularStations.scss';

class PopularStations extends React.Component {
  render() {
    const { popularStations } = this.props;
    const data = popularStations.popularStationsData.nodes;
    return (
      <StationTileLayout
        heading='Popular Stations'
        subHeading={null}
        data={data}
        styles={styles}
      />
    );
  }
}

export default createFragmentContainer(PopularStations, graphql`
fragment PopularStations_popularStations on Query {
  popularStationsData: allStations (orderBy: POPULARITY_DESC, first: 4) {
    nodes {
      name
      listenLiveUrl
      squareLogoSmall
      marketByMarketId {
        displayName
      }
      stationGenresByStationId {
        nodes {
          genreByGenreId {
            name
          }
        }
      }
    }
  }
}
`);