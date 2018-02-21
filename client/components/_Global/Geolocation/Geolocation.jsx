import React, { Component } from 'react';
import styles from './Geolocation.scss';
import GeolocationInfo from 'client/components/_Global/GeolocationInfo/GeolocationInfo.jsx';
import GeolocationModalContainer from 'client/components/_Global/GeolocationModal/GeolocationModalContainer';
import { propTypes } from './GeolocationProps';

class Geolocation extends Component {
  static propTypes = propTypes;

  componentDidMount() {
    const { fetchGeolocation } = this.props;
    if (window.localStorage.getItem('geolocation') === null) {
      fetchGeolocation();
    }
  }

  render() {
    const {
      cityName,
      showGeolocationModal,
      toggleGeolocationModal,
    } = this.props;
    return (
      <div className={styles.geolocation}>
        {showGeolocationModal ? <GeolocationModalContainer /> : null}
        <GeolocationInfo cityName={cityName} />
        <a className={styles.updateLocation}
          onClick={toggleGeolocationModal}>{cityName ? 'Change Location' : 'Provide Location'}
        </a>
      </div>
    )
  }
}

export default Geolocation;