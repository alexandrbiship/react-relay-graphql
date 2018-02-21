import {
  SET_GEOLOCATION,
  SET_MARKETS,
  TOGGLE_GEOLOCATION_MODAL,
  APPLY_SAVED_GEOLOCATION,
  SAVE_GEOLOCATION,
} from 'client/constants';

const defaultGeolocation = {
  showGeolocationModal: false,
  cityName: 'National',
  lat: null,
  lon: null,
  zip: null,
  markets: [14],
}

const geolocation = (state = defaultGeolocation, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return action.geolocation;
    case SET_MARKETS:
      return {
        ...state,
        lat: null,
        lon: null,
        zip: null,
        cityName: action.markets.displayName,
        markets: [action.markets.id],
      }
    case TOGGLE_GEOLOCATION_MODAL:
      return {
        ...state,
        showGeolocationModal: !state.showGeolocationModal,
      }
    // TODO: remove localStorage from reducer
    case SAVE_GEOLOCATION:
      window.localStorage.setItem('geolocation', JSON.stringify(state));
    default:
      return state;
  }
};

export default geolocation;