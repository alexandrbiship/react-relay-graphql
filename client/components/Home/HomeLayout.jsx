/* eslint import/extensions: 0 */

import React from 'react';

import HomeHeroLayout from 'client/components/_Global/HomeHero/HomeHeroLayout.jsx';
import Ad from 'client/components/_Global/Ad/Ad.jsx';
import CategoriesContainer from 'client/components/_Global/Categories/CategoriesContainer';
import LocalPodcasts from 'client/components/_Global/LocalPodcasts/LocalPodcasts.jsx';
import LocalStations from 'client/components/_Global/LocalStations/LocalStations.jsx';
import RecPodcasts from 'client/components/_Global/RecPodcasts/RecPodcasts.jsx';
import RecStations from 'client/components/_Global/RecStations/RecStations.jsx';
import LatestMusicNews from 'client/components/_Global/LatestMusicNews/LatestMusicNews.jsx';
import Footer from 'client/components/_Global/Footer/Footer.jsx';

import * as C from 'client/constants';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import styles from './home.scss';

const HomeLayout = ({marketId, relayDataProps, appData}) => (
  <div className={styles.home}>
    <Ad
      type={C.AD_TYPES.billboard}
      adId={`${shortid.generate()}`}
    />
    <HomeHeroLayout
      stationsResults={relayDataProps}
      podcastsResults={relayDataProps}
      localStations={appData.localStationsData}
      recStations={appData.recStationsData}
    />
    <div className={styles.mainContent}>
      <CategoriesContainer />
      <div className={styles.radContent}>
        <div className={styles.radItem}>
          <LocalStations
            localStations={appData.localStationsData}
            marketId={marketId}
            popularStations={relayDataProps}
          />
        </div>
        <div className={styles.radItem}>
          <RecStations recStations={appData.recStationsData} />
        </div>
        <div className={styles.radItem}>
          <LocalPodcasts
            localPodcasts={relayDataProps}
            popularPodcasts={relayDataProps}
            marketId={marketId}
          />
        </div>
        <div className={styles.radItem}>
          <RecPodcasts recPodcasts={relayDataProps} />
        </div>
        <Ad
          type={C.AD_TYPES.rectangle}
          adId={`${shortid.generate()}`}
        />
        <div className={styles.radItem}>
          <LatestMusicNews />
        </div>
      </div>
    </div>
    <Ad
      type={C.AD_TYPES.leaderboard}
      hrFrame
      adId={`${shortid.generate()}`}
    />
    <Footer />
  </div>
);

HomeLayout.propTypes = {
  appData: PropTypes.object,
  marketId: PropTypes.number,
  relayDataProps: PropTypes.object,
};

HomeLayout.defaultProps = {
  appData: {},
  marketId: 0,
  relayDataProps: {},
};

export default HomeLayout;
