import NavBarContainer from './NavBarContainer';

import reducer, { initialState } from './ducks/NavBarReducers';
import * as NavBarActions from './ducks/NavBarActions';

const NavBarReducer = reducer;

export { NavBarReducer, NavBarActions, initialState };

export default NavBarContainer;
