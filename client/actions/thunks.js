/* eslint spaced-comment: 0 */

import axios from 'axios';

import {
  GEO_URL,
} from 'client/constants';

import { setGeolocation } from './geolocation';
import { consoleErr } from './errorLog';

/*************************** GEOLOCATION ***********************/
export const fetchGeolocationQuery = config => axios.request(config);

export const fetchGeolocation = () => {
  const locationConfig = {
    method: 'get',
    url: `${GEO_URL}/location`,
  };
  const marketConfig = {
    method: 'get',
    url: `${GEO_URL}/markets`,
  }
  const fetchLocation = () => fetchGeolocationQuery(locationConfig);
  const fetchMarkets = () => fetchGeolocationQuery(marketConfig);
  return dispatch =>
    Promise.all([fetchLocation(), fetchMarkets()])
      .then(([ location, markets ]) => {
        const locationData = location.data;
        const marketData = markets.data;
        const geoData = {
          showGeolocationModal: false,
          cityName: locationData.city.names.en,
          lat: locationData.location.latitude,
          lon: locationData.location.longitude,
          zip: locationData.postal.code,
          markets: [],
        }
        // check if any markets
        if (marketData.Markets.length) {
          for (const market of marketData.Markets) {
            geoData.markets.push(market.id);
          }
        } else {
          // no market
          geoData.markets.push(14);
        }
        window.localStorage.setItem('geolocation', JSON.stringify(geoData));
        dispatch(setGeolocation(geoData));
      })
      .catch(error => {
        dispatch(consoleErr(error));
      });
};
