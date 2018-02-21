import {
  LOGIN_USER,
  LOGOUT_USER,
} from 'client/constants';

const username = (state = '', action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.username;
    case LOGOUT_USER:
      return '';
    default:
      return state;
  }
};

export default username;
