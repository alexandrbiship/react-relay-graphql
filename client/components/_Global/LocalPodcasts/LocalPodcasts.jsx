/* eslint import/extensions: 0 */

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import marketsMap from 'client/data/marketsMap';
import { PODCAST_LOC_URL } from 'client/constants';
import PodcastTileLayout from 'client/components/_Global/Tile/PodcastTileLayout.jsx';
import PopularPodcasts from 'client/components/_Global/PopularPodcasts/PopularPodcasts.jsx';
import { propTypes, defaultProps } from './LocalPodcastsProps';
import styles from './localPodcasts.scss';

class LocalPodcasts extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { localPodcasts, marketId, popularPodcasts } = this.props;
    const { marketSlug } = marketsMap[marketId];
    const data = localPodcasts.localPodcastsData.nodes;
    return (
      // default to popular if no data or marketId
      !data.length || !marketId ?
      <PopularPodcasts popularPodcasts={popularPodcasts} /> :
      <PodcastTileLayout
        heading='Local Podcasts'
        subHeading='VIEW MORE'
        subHeadingUrl={`${PODCAST_LOC_URL}/${marketSlug}`}
        data={data}
        styles={styles}
      />
    );
  }
}

export default createFragmentContainer(LocalPodcasts, graphql`
fragment LocalPodcasts_localPodcasts on Query {
  localPodcastsData: popularPodcastsByMarketId (id: $marketId, first: 4) {
    nodes {
      title
      description
      image
      siteUrl
      podcastCategoriesByPodcastId {
        nodes {
          categoryByCategoryId {
            name
          }
        }
      }
    }
  }
}
`);
