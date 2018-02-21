import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { DEFAULT_PODCAST_THUMB } from 'client/constants';
import MediaItemLayout from 'client/components/_Global/MediaItem/MediaItemLayout.jsx';
import styles from './PodcastCategory.scss';

class PodcastCategory extends React.Component {
  static propTypes = {
    categoryName: PropTypes.string,
    categoryPodcasts: PropTypes.array,
  }

  static defaultProps = {
    categoryPodcasts: [],
    categoryName: 'Podcasts',
  }

  render() {
    const { categoryName, categoryPodcasts } = this.props;
    return (
      <div className={styles.podcastCategory}>
        <h2>{categoryName}</h2>
        <div className={styles.podcastList}>
          {categoryPodcasts.map(({ podcastByPodcastId }) =>
            <MediaItemLayout
              key={shortid.generate()}
              image={
                podcastByPodcastId.image
                ? podcastByPodcastId.image
                : DEFAULT_PODCAST_THUMB
              }
              title={podcastByPodcastId.title}
              description={podcastByPodcastId.description}
              url={podcastByPodcastId.siteUrl}
            />
          )}
        </div>
      </div>
    )
  }
}

export default PodcastCategory;