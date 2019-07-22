import produce from 'immer';
import {
  SET_SKILL_VISIBLE,
  SET_INTEREST_VISIBLE,
  SET_ACHIEVEMENT_VISIBLE,
} from './HomeActions';

export const initialState = {
  skillVisible: false,
  interestVisible: false,
  achievementVisible: false,
};

export default (baseState = initialState, action) =>
  produce(baseState, draftState => {
    switch (action.type) {
      case SET_SKILL_VISIBLE:
        draftState.skillVisible = action.isVisible;
        return draftState;
      case SET_INTEREST_VISIBLE:
        draftState.interestVisible = action.isVisible;
        return draftState;
      case SET_ACHIEVEMENT_VISIBLE:
        draftState.achievementVisible = action.isVisible;
        return draftState;
      default:
        return draftState;
    }
  });
