import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './reducers/user';
import recents from './reducers/recents/recentsReducer';
import categories from './reducers/categories/categoriesReducer';
import errorLog from './reducers/errorLog/errorLogReducer';
import geolocation from './reducers/geolocation/geolocationReducer';

const rootReducer = combineReducers({
	user: userReducer,
	recents,
	categories,
	errorLog,
	geolocation,
  routing: routerReducer,
});

export default rootReducer;
