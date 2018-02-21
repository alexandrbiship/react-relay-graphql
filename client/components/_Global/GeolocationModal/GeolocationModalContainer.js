import { connect } from 'react-redux';
import {
  fetchGeolocation,
  setMarkets,
  toggleGeolocationModal,
  saveGeolocation,
  consoleErr,
} from 'client/actions';
import GeolocationModal from './GeolocationModal.jsx';

const mapDispatchToProps = dispatch => ({
  fetchGeolocation() {
    dispatch(fetchGeolocation());
  },
  setMarkets(market) {
    dispatch(setMarkets(market));
  },
  toggleGeolocationModal() {
    dispatch(toggleGeolocationModal());
  },
  saveGeolocation() {
    dispatch(saveGeolocation());
  },
  consoleErr(error) {
    dispatch(consoleErr(error));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(GeolocationModal);