/* eslint spaced-comment: 0 */

import config from './config';

/************************* USER **************************/

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/************************* RECENTS ***********************/

export const LOAD_RECENTS = 'LOAD_RECENTS';
export const CLEAR_RECENTS = 'CLEAR_RECENTS';

/************************* CATEGORIES ********************/

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';

/************************* GEOLOCATION *******************/

export const SET_GEOLOCATION = 'SET_GEOLOCATION';
export const SET_MARKETS = 'SET_MARKETS';
export const TOGGLE_GEOLOCATION_MODAL = 'TOGGLE_GEOLOCATION_MODAL';
export const SAVE_GEOLOCATION = 'SAVE_GEOLOCATION';
export const APPLY_SAVED_GEOLOCATION = 'APPLY_SAVED_GEOLOCATION';

/************************* ADS ***************************/

export const DOUBLECLICK_PREFIX = '/4128/';
export const AD_UNIT = 'CBS.RADIO/default';
export const AD_REFRESH_INTERVAL = 60000;   // in milliseconds
export const TAGS = ['cbslocalplayer'];
export const AD_TYPES = {
  billboard: 'billboard',
  rectangle: 'rectangle',
  leaderboard: 'leaderboard',
}
export const DIMS = {
  billboard: [[728, 90], [970, 250]],
  rectangle: [300, 250],
  leaderboard: [728, 90],
};
export const MOBILE_DIMS = {
  billboard: [[320, 50], [300, 50]],
  rectangle: [[300, 250], [300, 50]],
  leaderboard: [[320, 50], [300, 50]],
};

/************************* ERROR *************************/

export const ERROR_MESSAGE = 'ERROR_MESSAGE';

/************************* URLs **************************/

export const STATION_DIR_URL = 'http://player.radio.com/station-directory';
export const PODCAST_LOC_URL = 'http://www1.play.it/audio/location';
export const RAD_NEWS_URL = 'http://news.radio.com';

/************************* ASSETS ************************/

export const CBS_RADIO_LOGO = 'assets/images/logos/radio_logo_308x36_2x.png';
export const DEFAULT_PODCAST_THUMB = '/assets/images/icons/podcast_default_thumb.jpg';

/************************* APIs **************************/

export const {
  GEO_URL,
  NEWS_FEED_URL,
  GRAPHQL_URL
} = config;