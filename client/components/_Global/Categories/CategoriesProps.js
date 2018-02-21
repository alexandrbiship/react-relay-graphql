import PropTypes from 'prop-types';

export const propTypes = {
  categoriesLoad: PropTypes.func,
  categories: PropTypes.array
};

export const defaultProps = {
  categoriesLoad: () => null,
  categories: []
};

