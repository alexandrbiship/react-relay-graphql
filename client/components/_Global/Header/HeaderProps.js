import PropTypes from 'prop-types';

export const propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  saveLogout: PropTypes.func,
  consoleErr: PropTypes.func,
  loginUser: PropTypes.func,
  loggedIn: PropTypes.func,
};

export const defaultProps = {
  username: '',
  isLoggedIn: false,
  saveLogout: () => null,
  consoleErr: () => null,
  loginUser: () => null,
  loggedIn: () => null,
};
