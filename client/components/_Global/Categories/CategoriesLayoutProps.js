import PropTypes from 'prop-types';

export const propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  categories: PropTypes.array
};

export const defaultProps = {
  heading: 'Browse Categories',
  subHeading: 'VIEW MORE',
  categories: []
};
