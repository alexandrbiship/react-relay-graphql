import PropTypes from 'prop-types';

export const propTypes = {
  stationsResults: PropTypes.object,
  podcastsResults: PropTypes.object,
  localStations: PropTypes.object,
  recStations: PropTypes.object,
  allGenres: PropTypes.object,
  popularPodcasts: PropTypes.object,
  localPodcasts: PropTypes.object,
  podcastCategories: PropTypes.object,
};

export const defaultProps = {
  stationsResults: {},
  podcastsResults: {},
  marketId: 0,
  localStations: {},
  recStations: {},
  allGenres: {},
  popularPodcasts: {},
  localPodcasts: {},
  podcastCategories: {},
};

