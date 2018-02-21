/* eslint import/extensions: 0 */

import React from 'react';

import marketsMap from 'client/data/marketsMap';
import { STATION_DIR_URL } from 'client/constants';
import PopularStations from 'client/components/_Global/PopularStations/PopularStations.jsx';
import StationTileLayout from 'client/components/_Global/Tile/StationTileLayout.jsx';
import { propTypes, defaultProps } from './LocalStationsProps';
import styles from './localStations.scss';

class LocalStations extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { localStations, marketId, popularStations } = this.props;
    const { displayName } = marketsMap[marketId];
    const data = localStations.nodes;
    return (
      // default to popular if no data or marketId
      !data.length || !marketId ?
      <PopularStations popularStations={popularStations} /> :
      <StationTileLayout
        heading='Local Stations'
        subHeading='VIEW MORE'
        subHeadingUrl={`${STATION_DIR_URL}/market/${displayName}`}
        data={data}
        styles={styles}
      />
    );
  }
}

export default LocalStations;
