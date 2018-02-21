/* eslint import/extensions: 0 */

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PodcastTileLayout from 'client/components/_Global/Tile/PodcastTileLayout.jsx';
import PropTypes from 'prop-types';
import styles from './PopularPodcasts.scss';

class PopularPodcasts extends React.Component {
  static propTypes = {
    popularPodcasts: PropTypes.object,
  }

  static defaultProps = {
    popularPodcasts: {},
  }

  render() {
    const data = this.props.popularPodcasts.popularPodcastsData.nodes;
    return (
      <PodcastTileLayout
        heading='Popular Podcasts'
        subHeading={null}
        subHeadingUrl={null}
        data={data}
        styles={styles}
      />
    );
  }
}

export default createFragmentContainer(PopularPodcasts, graphql`
fragment PopularPodcasts_popularPodcasts on Query {
  popularPodcastsData: allPodcasts (orderBy: POPULARITY_DESC, first: 4) {
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
