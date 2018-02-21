import { combineReducers } from 'redux';

import username from './usernameReducer';
import isLoggedIn from './isLoggedInReducer';

const userReducer = combineReducers({
	username,
	isLoggedIn,
});

export default userReducer;
