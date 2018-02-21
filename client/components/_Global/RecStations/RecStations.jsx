/* eslint import/extensions: 0 */

import React from 'react';

import StationTileLayout from 'client/components/_Global/Tile/StationTileLayout.jsx';
import { propTypes, defaultProps } from './RecStationsProps';
import styles from './recStations.scss';

class RecStations extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { recStations } = this.props;
    const data = recStations.nodes;
    return (
      <StationTileLayout
        heading='Recommended Stations'
        subHeading={null}
        data={data}
        styles={styles}
      />
    );
  }
}

export default RecStations;
