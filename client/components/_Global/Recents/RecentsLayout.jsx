/* eslint import/extensions: 0 */

import React from 'react';
import shortid from 'shortid';

import StationItem from 'client/components/_Global/MediaItem/StationItem.jsx';

import { propTypes, defaultProps } from './RecentsLayoutProps';
import TileItemStyles from '../Tile/TileItem.scss';
import styles from './recents.scss';


const RecentsLayout = ({
  heading,
  subHeading,
  data,
  onClick,
}) =>
  <div className={styles.tile}>
    <div className={styles.heading}>
      <h2>{heading}</h2>
      <div>{subHeading}</div>
    </div>
    <div className={styles.tileItems}>
    {data.map(recent =>
      <StationItem
        key={shortid.generate()}
        title={recent.title}
        description={recent.description}
        image={recent.image || null}
        rhText={recent.rhText}
        url={recent.url}
        styles={TileItemStyles}
      />
    )}
    </div>
  </div>

RecentsLayout.propTypes = propTypes;
RecentsLayout.defaultProps = defaultProps;

export default RecentsLayout;
