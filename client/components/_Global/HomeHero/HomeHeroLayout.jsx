/* eslint import/extensions: 0 */

import React from 'react';
import Search from 'client/components/_Global/Search/Search.jsx';
import RecentsContainer from 'client/components/_Global/Recents/RecentsContainer';
import GeolocationContainer from 'client/components/_Global/Geolocation/GeolocationContainer';
import { CBS_RADIO_LOGO } from 'client/constants';
import { propTypes, defaultProps } from './HomeHeroLayoutProps';
import styles from './homeHero.scss';

const HOME_TITLE_1 = 'Music, Sports, News and More.';
const HOME_TITLE_2 = 'Start Listening Now.';

const HomeHeroLayout = props =>
  <div className={styles.homeHero}>
    <div className={styles.heroContent}>
      <div className={styles.heroLeft}>
        <img className={styles.radioLogo} src={CBS_RADIO_LOGO} alt='logo' />
        <h1>
          {HOME_TITLE_1}<br />
          {HOME_TITLE_2}
        </h1>
        <Search
          stationsResults={props.stationsResults}
          podcastsResults={props.podcastsResults}
        />
      </div>
      <div className={styles.heroRight}>
        <div className={styles.geolocation}>
          <GeolocationContainer />
        </div>
        <RecentsContainer
          localStations={props.localStations}
          recStations={props.recStations}
        />
      </div>
    </div>
  </div>

HomeHeroLayout.propTypes = propTypes;
HomeHeroLayout.defaultProps = defaultProps;

export default HomeHeroLayout;
