import React from 'react';
import { PropTypes } from 'prop-types';
import union from 'lodash.union';
import Gallery from 'react-grid-gallery';

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
  const leftBracket = '[';
  const rightBracket = ']';
  const singleQuote = "'";
  const comma = ',';

  const wordsWithCurrentTags = () => {
    const filteredWords = allWords.filter(
      word =>
        containsTag(word, currentTags, currentTagType) &&
        word.word !== currentWord,
    );
    return filteredWords.map((word, index) => (
      <>
        <button
          className={`word ${currentTagType}`}
          type="button"
          onClick={() => setCurrentTags(word.word, currentTags, currentTagType)}
        >
          {word.word}
        </button>
        {index !== filteredWords.length - 1 && (
          <div className="later-comma">{comma}</div>
        )}
      </>
    ));
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
            <div className="bracket">{leftBracket}</div>
            <div className="title-main">{currentWord}</div>
            {showExtraWords() && (
              <div className="words">, {wordsWithCurrentTags()}</div>
            )}
            <div className="bracket">{rightBracket}</div>
          </div>
        </div>
        <div className="level-two">
          <div className="arrow">{nextArrow}</div>
          <div className="tag">
            {leftCurlyBrace}Topic: {singleQuote}
            {currentTags.join(', ')}
            {singleQuote}
            {comma} Focus: {singleQuote}
            {currentWord}
            {singleQuote}
            {rightCurlyBrace}
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="page-inner">
          <div className="top-padding" />

          <div className="topic-discussion"></div>
          <div className="focus-discussion"></div>
          <div className="image-gallery">
            {/* TODO: Add images */}
            {/* <Gallery images={IMAGES} enableImageSelection={false} /> */}
          </div>

          <div className="bottom-padding"></div>
        </div>
        <div className="bottom-cover"></div>
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
