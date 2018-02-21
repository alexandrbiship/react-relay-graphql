import React, { Component } from 'react';

import styles from './GeolocationInfo.scss';
const GEOLOCATION_ICON = '/assets/images/icons/located_icon.png';

class GeolocationInfo extends Component {
  render() {
    let { cityName } = this.props;
    return (
      <div className={styles.geolocationInfo}>
        <img className={styles.icon} src={GEOLOCATION_ICON} alt='located_icon' />
        <span className={styles.cityName}>{cityName ? cityName : 'Unknown'}</span>
      </div>
    )
  }
}

export default GeolocationInfo;