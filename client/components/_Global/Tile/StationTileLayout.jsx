/* eslint import/extensions: 0 */

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import StationItem from 'client/components/_Global/MediaItem/StationItem.jsx';
import TileItemStyles from './TileItem.scss';

const StationTileLayout = ({
  heading,
  subHeading,
  subHeadingUrl,
  styles,
  data,
}) =>
  <div className={styles.tile}>
    <div className={styles.heading}>
      <h2>{heading}</h2>
      <a href={subHeadingUrl}>{subHeading}</a>
    </div>
    <div className={styles.tileItems}>
    {data.map(node =>
      <StationItem
        key={shortid.generate()}
        title={node.name}
        description={node.marketByMarketId.displayName}
        rhText={node.stationGenresByStationId.nodes[0].genreByGenreId.name}
        url={node.listenLiveUrl}
        image={node.squareLogoSmall}
        styles={TileItemStyles}
      />
    )}
    </div>
  </div>

StationTileLayout.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string,
  styles: PropTypes.object,
  subHeading: PropTypes.string,
  subHeadingUrl: PropTypes.string,
};

StationTileLayout.defaultProps = {
  data: [],
  heading: '',
  styles: {},
  subHeading: '',
  subHeadingUrl: '',
};

export default StationTileLayout;
