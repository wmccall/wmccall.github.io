import HomeContainer from './HomeContainer';

import reducer, { initialState } from './ducks/HomeReducers';
import * as HomeActions from './ducks/HomeActions';

const HomeReducer = reducer;

export { HomeReducer, HomeActions, initialState };

export default HomeContainer;
