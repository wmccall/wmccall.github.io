import React from 'react';
import { PropTypes } from 'prop-types';
import Gallery from 'react-grid-gallery';

import Definition from '../../components/Definition';

const containsTag = (word, currentTag, currentTagType) => {
  if (word.type === currentTagType) {
    return word.tag === currentTag;
  }
  return false;
};

const TagPage = props => {
  const {
    setCurrentTag,
    setCurrentWord,
    currentWord,
    currentTag,
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
  const doubleQuote = '"';
  const comma = ',';

  const wordsWithCurrentTag = () => {
    const filteredWords = allWords.filter(
      word =>
        containsTag(word, currentTag, currentTagType) &&
        word.word !== currentWord,
    );
    return filteredWords.map((word, index) => (
      <>
        <button
          className={`word ${currentTagType}`}
          type="button"
          onClick={() =>
            setCurrentTag(currentTag, currentTagType) &&
            setCurrentWord(word.word)
          }
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
      className={`clear-tag ${currentTagType}`}
      type="button"
      onClick={() =>
        setCurrentTag(null, null) &&
        setCurrentWord(null) &&
        setCurrentPage('home')
      }
    >
      {backArrow}
    </button>
  );

  const showExtraWords = () => wordsWithCurrentTag().length > 0;

  const containsSingleQuote = word => word.search("'") > 0;

  const doubleQuoteTag = containsSingleQuote(currentTag);

  const doubleQuoteWord = containsSingleQuote(currentWord);

  return (
    <div className="tag-page">
      <div className={`top-bar ${currentTagType}`}>
        <div className="level-one ">
          {backButton()}
          <div className="tag-title ">
            <div className="bracket">{leftBracket}</div>
            <div className="title-main">{currentWord}</div>
            {showExtraWords() && (
              <div className="words">, {wordsWithCurrentTag()}</div>
            )}
            <div className="bracket">{rightBracket}</div>
          </div>
        </div>
        <div className="level-two">
          <div className="arrow">{nextArrow}</div>
          <div className="tag">
            <span className="neutral">{leftCurlyBrace}</span>
            <span className="constant">
              {currentTagType.toUpperCase()}_CLASS
            </span>
            <span className="neutral">: </span>
            {doubleQuoteTag ? doubleQuote : singleQuote}
            {currentTag}
            {doubleQuoteTag ? doubleQuote : singleQuote}
            <span className="neutral">{comma} </span>
            <span className="constant">
              {currentTagType.toUpperCase()}_NAME
            </span>
            <span className="neutral">: </span>
            {doubleQuoteWord ? doubleQuote : singleQuote}
            {currentWord}
            {doubleQuoteWord ? doubleQuote : singleQuote}
            <span className="neutral">{rightCurlyBrace}</span>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="page-inner">
          <div className="top-padding" />

          <div className="topic-discussion">
            <Definition />
          </div>
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
  setCurrentTag: PropTypes.func.isRequired,
  setCurrentWord: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentTag: PropTypes.string,
  currentTagType: PropTypes.string,
  currentWord: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

TagPage.defaultProps = {
  currentWord: null,
  currentTag: null,
  currentTagType: null,
};

export default TagPage;
