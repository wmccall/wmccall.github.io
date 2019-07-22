export const SET_SKILL_VISIBLE = 'SET_SKILL_VISIBLE';
export const SET_INTEREST_VISIBLE = 'SET_INTEREST_VISIBLE';
export const SET_ACHIEVEMENT_VISIBLE = 'SET_ACHIEVEMENT_VISIBLE';

export const setSkillVisible = isVisible => ({
  type: SET_SKILL_VISIBLE,
  isVisible,
});

export const setInterestVisible = isVisible => ({
  type: SET_INTEREST_VISIBLE,
  isVisible,
});

export const setAchievementVisible = isVisible => ({
  type: SET_ACHIEVEMENT_VISIBLE,
  isVisible,
});
