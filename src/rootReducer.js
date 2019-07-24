import { combineReducers } from 'redux';

import { ViewsReducer } from './app/views/ducks';

export default combineReducers({
  viewState: ViewsReducer,
});
