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
    currentWord,
    currentTags,
    currentTagType,
    allWords,
    setCurrentPage,
  } = props;

  const backArrow = '<=';
  const nextArrow = '╚>';
  const leftCurlyBrace = '{';
  const rightCurlyBrace = '}';
  const singleQuote = "'";

  const wordsWithCurrentTags = () => {
    return allWords
      .filter(
        word =>
          containsTag(word, currentTags, currentTagType) &&
          word.word !== currentWord,
      )
      .map(word => word.word);
  };

  const backButton = () => (
    <button
      className={`clear-tags ${currentTagType}`}
      type="button"
      onClick={() => setCurrentTags(null, null, null) && setCurrentPage('home')}
    >
      {backArrow}
    </button>
  );

  const showExtraWords = () => wordsWithCurrentTags().length > 0;

  return (
    <div className="tag-page">
      <div className={`top-bar ${currentTagType}`}>
        <div className="level-one ">
          {backButton()}
          <div className="tag-title ">
            <div className="title-main">{currentWord}</div>
            {showExtraWords() && (
              <div className="words">, {wordsWithCurrentTags().join(', ')}</div>
            )}
          </div>
        </div>
        <div className="level-two">
          <div className="arrow">{nextArrow}</div>
          <div className="tag">
            {leftCurlyBrace}Topic: {singleQuote}
            {currentTags.join(', ')}
            {singleQuote}
            {rightCurlyBrace}
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="page-inner"></div>
      </div>
    </div>
  );
};

TagPage.propTypes = {
  setCurrentTags: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentTags: PropTypes.arrayOf(PropTypes.string),
  currentTagType: PropTypes.string,
  currentWord: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

TagPage.defaultProps = {
  currentWord: null,
  currentTags: null,
  currentTagType: null,
};

export default TagPage;
