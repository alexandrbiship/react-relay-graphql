/* eslint import/extensions: 0 */

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { DEFAULT_PODCAST_THUMB } from 'client/constants';
import MediaItemLayout from 'client/components/_Global/MediaItem/MediaItemLayout.jsx';
import TileItemStyles from './TileItem.scss';

const PodcastTileLayout = ({
  data,
  heading,
  styles,
  subHeading,
  subHeadingUrl,
}) =>
  <div className={styles.tile}>
    <div className={styles.heading}>
      <h2>{heading}</h2>
      <a href={subHeadingUrl}>{subHeading}</a>
    </div>
    <div className={styles.tileItems}>
    {data.map(node =>
      <MediaItemLayout
        key={shortid.generate()}
        title={node.title}
        description={node.description}
        rhText={
          node.podcastCategoriesByPodcastId.nodes[0]
          ? node.podcastCategoriesByPodcastId.nodes[0].categoryByCategoryId.name
          : 'Podcast'
        }
        image={node.image ? node.image : DEFAULT_PODCAST_THUMB}
        url={node.siteUrl}
        styles={TileItemStyles}
      />
    )}
    </div>
  </div>

PodcastTileLayout.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string,
  styles: PropTypes.object,
  subHeading: PropTypes.string,
  subHeadingUrl: PropTypes.string,
};

PodcastTileLayout.defaultProps = {
  data: [],
  heading: '',
  styles: {},
  subHeading: '',
  subHeadingUrl: '',
};

export default PodcastTileLayout;
