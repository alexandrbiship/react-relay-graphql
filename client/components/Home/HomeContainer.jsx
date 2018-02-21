/* eslint import/extensions: 0 */

import { connect } from 'react-redux';
import {
  selectIsLoggedIn,
  getMarketId,
} from 'client/selectors';
import {
  loginUser,
  loggedIn,
  consoleErr,
} from 'client/actions';
import Home from './Home.jsx';

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  marketId: getMarketId(state),
});

const mapDispatchToProps = dispatch => ({
  loginUser(user) {
    dispatch(loginUser(user));
  },
  loggedIn() {
    dispatch(loggedIn());
  },
  consoleErr(error) {
    dispatch(consoleErr(error));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
