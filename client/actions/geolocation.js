import * as C from 'client/constants';

export const setGeolocation = geolocation =>
  ({type: C.SET_GEOLOCATION, geolocation});

export const setMarkets = markets =>
  ({type: C.SET_MARKETS, markets});

export const toggleGeolocationModal = () =>
  ({type: C.TOGGLE_GEOLOCATION_MODAL});

export const saveGeolocation = () =>
  ({type: C.SAVE_GEOLOCATION});

export const applySavedGeolocation = () =>
  ({type: C.APPLY_SAVED_GEOLOCATION});