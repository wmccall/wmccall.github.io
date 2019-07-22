import { combineReducers } from 'redux';

import { NavBarReducer } from './app/components/NavBar';
import { HomeReducer } from './app/views/Home';

export default combineReducers({
  navState: NavBarReducer,
  homeState: HomeReducer,
});
