import produce from 'immer';
import allWords from '../../constants/allWords';
import {
  SET_HOVER_CATEGORY,
  SET_PERMANENT_CATEGORY,
  SET_CURRENT_PAGE,
  SET_CURRENT_TAGS,
} from './ViewsActions';

export const initialState = {
  page: 'home',
  tags: null,
  hoverCategory: null,
  permanentCategory: null,
  allWords: allWords(),
};

export default (baseState = initialState, action) =>
  produce(baseState, draftState => {
    switch (action.type) {
      case SET_HOVER_CATEGORY:
        draftState.hoverCategory = action.category;
        return draftState;
      case SET_PERMANENT_CATEGORY:
        draftState.permanentCategory = action.category;
        return draftState;
      case SET_CURRENT_PAGE:
        draftState.page = action.page;
        return draftState;
      case SET_CURRENT_TAGS:
        draftState.tags = action.tags;
        return draftState;
      default:
        return draftState;
    }
  });
