import PropTypes from 'prop-types';

export const propTypes = {
  heading: PropTypes.string,
  recents: PropTypes.array,
};

export const defaultProps = {
  heading: 'Recents Heading',
  recents: [],
};
