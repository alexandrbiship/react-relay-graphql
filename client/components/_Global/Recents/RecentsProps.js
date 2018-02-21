import PropTypes from 'prop-types';

export const propTypes = {
  loadRecents: PropTypes.func,
  localStations: PropTypes.object,
  recents: PropTypes.array,
  recStations: PropTypes.object,
};

export const defaultProps = {
  loadRecents: () => null,
  localStations: {},
  recents: [],
  recStations: {},
};
