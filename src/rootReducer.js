import { combineReducers } from 'redux';

import { NavBarReducer } from './app/components/NavBar';

export default combineReducers({
  navState: NavBarReducer,
});
