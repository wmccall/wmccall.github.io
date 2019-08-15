export const SET_HOVER_CATEGORY = 'SET_HOVER_CATEGORY';
export const SET_PERMANENT_CATEGORY = 'SET_PERMANENT_CATEGORY';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_CURRENT_TAGS = 'SET_CURRENT_TAGS';

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const setCurrentTags = (word, tags, tagType) => ({
  type: SET_CURRENT_TAGS,
  word,
  tags,
  tagType,
});

export const setHoverCategory = category => ({
  type: SET_HOVER_CATEGORY,
  category,
});
export const setPermanentCategory = category => ({
  type: SET_PERMANENT_CATEGORY,
  category,
});
