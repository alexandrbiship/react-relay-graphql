/* eslint import/extensions: 0 */

import React from 'react';
import RecentsLayout from 'client/components/_Global/Recents/RecentsLayout.jsx';
import { propTypes, defaultProps } from './RecentsProps';

class Recents extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  componentDidMount() {
    const recents = JSON.parse(window.localStorage.getItem('recents')) || [];
    this.props.loadRecents(recents);
  }

  formatStations = stations => {
    const data = stations.slice(0, 3);
    return data.map(station => ({
      title: station.name,
      description: station.marketByMarketId.displayName,
      image: station.squareLogoSmall,
      rhText: station.stationGenresByStationId.nodes[0].genreByGenreId.name,
      url: station.listenLiveUrl,
    }));
  }

  render() {
    const { recents, localStations, recStations } = this.props;
    if (recents.length)
      return <RecentsLayout
        heading='Recently Played'
        data={recents}
      />
    else if (localStations.nodes.length)
      return <RecentsLayout
        heading='Local Stations'
        data={this.formatStations(localStations.nodes)}
      />
    return <RecentsLayout
      heading='Recommended Stations'
      data={this.formatStations(recStations.nodes)}
    />
  }
}

export default Recents;
