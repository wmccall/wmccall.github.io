import produce from 'immer';
import { SET_CURRENT_PAGE } from './NavBarActions';

export const initialState = {
  page: 'home',
};

export default (baseState = initialState, action) =>
  produce(baseState, draftState => {
    switch (action.type) {
      case SET_CURRENT_PAGE:
        draftState.page = action.page;
        return draftState;
      default:
        return draftState;
    }
  });
