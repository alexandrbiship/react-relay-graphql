import { connect } from 'react-redux';
import {
  showGeolocationModal,
  getCityName
} from 'client/selectors';
import {
  fetchGeolocation,
  toggleGeolocationModal,
  consoleErr,
} from 'client/actions';
import Geolocation from './Geolocation.jsx';

const mapStateToProps = state => ({
  showGeolocationModal: showGeolocationModal(state),
  cityName: getCityName(state),
});

const mapDispatchToProps = dispatch => ({
  fetchGeolocation() {
    dispatch(fetchGeolocation());
  },
  toggleGeolocationModal() {
    dispatch(toggleGeolocationModal());
  },
  consoleErr(error) {
    dispatch(consoleErr(error));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Geolocation);