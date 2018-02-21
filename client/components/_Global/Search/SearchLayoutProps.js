import PropTypes from 'prop-types';

export const propTypes = {
  isHidden: PropTypes.bool,
  noResults: PropTypes.bool,
  stationsResults: PropTypes.object,
  podcastsResults: PropTypes.object,
  inputSearch: PropTypes.func,
  focusTabs: PropTypes.func,
};

export const defaultProps = {
  isHidden: false,
  noResults: true,
  stationsResults: {},
  podcastsResults: {},
  inputSearch: () => null,
  focusTabs: () => null,
};