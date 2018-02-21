/* eslint import/extensions: 0 */

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PodcastTileLayout from 'client/components/_Global/Tile/PodcastTileLayout.jsx';
import { propTypes, defaultProps } from './RecPodcastsProps';
import styles from './recPodcasts.scss';

class RecPodcasts extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const data = this.props.recPodcasts.recPodcastsData.nodes;
    return (
      <PodcastTileLayout
        heading='Recommended Podcasts'
        data={data}
        subHeading={null}
        styles={styles}
      />
    );
  }
}

export default createFragmentContainer(RecPodcasts, graphql`
fragment RecPodcasts_recPodcasts on Query {
  recPodcastsData: recommendedPodcastsByMarketId (id: $marketId, first: 4) {
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
