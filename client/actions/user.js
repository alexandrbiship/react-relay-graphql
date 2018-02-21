import * as C from 'client/constants';

export const loginUser = username => 
  ({type: C.LOGIN_USER, username});

export const logoutUser = () => 
  ({type: C.LOGOUT_USER});

export const loggedIn = () => 
  ({type: C.LOGIN_SUCCESS});

export const loggedOut = () => 
  ({type: C.LOGOUT_SUCCESS});
