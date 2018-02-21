/* eslint import/extensions: 0 */

import { connect } from 'react-redux';

import { selectRecents } from 'client/selectors';
import {
  loadRecents,
  consoleErr,
} from 'client/actions';
import Recents from './Recents.jsx';

const mapStateToProps = state => ({
  recents: selectRecents(state),
});

const mapDispatchToProps = dispatch => ({
  loadRecents(recents) {
    dispatch(loadRecents(recents));
  },
  consoleErr(error) {
    dispatch(consoleErr(error));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recents);
