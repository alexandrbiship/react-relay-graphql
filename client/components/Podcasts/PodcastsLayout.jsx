import React from 'react';

import Ad from 'client/components/_Global/Ad/Ad.jsx';
import PodcastCategories from 'client/components/_Global/PodcastCategories/PodcastCategories.jsx';
import Footer from 'client/components/_Global/Footer/Footer.jsx';

import * as C from 'client/constants';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import styles from './Podcasts.scss';

const PodcastsLayout = ({marketId, relayDataProps}) => (
  <div className={styles.podcasts}>
    <PodcastCategories
      data={relayDataProps}
    />
    <Ad
      type={C.AD_TYPES.leaderboard}
      hrFrame
      adId={`${shortid.generate()}`}
    />
    <Footer />
  </div>
);

PodcastsLayout.propTypes = {
  marketId: PropTypes.number,
  relayDataProps: PropTypes.object,
};

PodcastsLayout.defaultProps = {
  marketId: 0,
  relayDataProps: {},
};

export default PodcastsLayout;
