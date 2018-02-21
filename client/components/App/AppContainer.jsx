import { connect } from 'react-redux';
import { getMarketId } from 'client/selectors';
import { consoleErr } from 'client/actions';

import App from './App.jsx';

const mapStateToProps = state => ({
  marketId: getMarketId(state),
});

const mapDispatchToProps = dispatch => ({
  consoleErr(error) {
    dispatch(consoleErr(error));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
