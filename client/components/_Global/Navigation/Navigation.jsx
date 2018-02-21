/* eslint import/extensions: 0 */

import React from "react";
import { propTypes, defaultProps } from "./NavigationProps";
import NavigationLayout from "./NavigationLayout.jsx";

class Navigation extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const {
      localStations,
      recStations,
      allGenres,
      popularPodcasts,
      localPodcasts,
      podcastCategories
    } = this.props;
    return (
      <NavigationLayout
        localStations={localStations}
        recStations={recStations}
        allGenres={allGenres}
        popularPodcasts={popularPodcasts}
        localPodcasts={localPodcasts}
        podcastCategories={podcastCategories}
      />
    );
  }
}
export default Navigation;
