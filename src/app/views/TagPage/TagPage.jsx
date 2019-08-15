import React from 'react';
import { PropTypes } from 'prop-types';
import union from 'lodash.union';

const containsTag = (word, currentTags, currentTagType) => {
  if (word.type === currentTagType) {
    const allTags = union(word.tags, currentTags);
    return allTags.length < word.tags.length + currentTags.length;
  }
  return false;
};

const TagPage = props => {
  const {
    setCurrentTags,
    currentTags,
    currentTagType,
    allWords,
    setCurrentPage,
  } = props;

  const backArrow = '<=';

  const wordsWithCurrentTags = () => {
    return allWords
      .filter(word => containsTag(word, currentTags, currentTagType))
      .map(word => word.word);
  };

  const backButton = () => (
    <button
      className="clear-tags"
      type="button"
      onClick={() => setCurrentTags(null, null) && setCurrentPage('home')}
    >
      {backArrow}
    </button>
  );

  return (
    <div className="tag-page">
      <div className="top-bar">
        {backButton()}
        <div className={`tag-title ${currentTagType}`}>
          {currentTags.join(', ')}
        </div>
      </div>
      <div className="page-inner">
        <div className="words">{wordsWithCurrentTags().join(', ')}</div>
      </div>
    </div>
  );
};

TagPage.propTypes = {
  setCurrentTags: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentTags: PropTypes.arrayOf(PropTypes.string),
  currentTagType: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

TagPage.defaultProps = {
  currentTags: null,
  currentTagType: null,
};

export default TagPage;
