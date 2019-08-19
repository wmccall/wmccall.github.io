import React from 'react';
import { PropTypes } from 'prop-types';

const wordAndTagSame = (word, currentWord, type, currentType) =>
  word === currentWord && type === currentType;

const WordLink = ({
  punc,
  word,
  tag,
  type,
  currentWord,
  currentType,
  setCurrentWord,
  setCurrentTag,
}) => {
  const shouldLink = !wordAndTagSame(word, currentWord, type, currentType);

  const linkClasses = `${type} link`;

  const clickHandler = () => {
    if (shouldLink) {
      setCurrentWord(word);
      setCurrentTag(tag, type);
    }
  };

  return (
    <button type="button" className="WordLink" onClick={clickHandler}>
      <span className={`word ${shouldLink ? linkClasses : 'no-link'}`}>
        {word}
      </span>
      <span className="punctuation">{punc}</span>
    </button>
  );
};

WordLink.propTypes = {
  punc: PropTypes.string,
  word: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currentWord: PropTypes.string.isRequired,
  currentType: PropTypes.string.isRequired,
  setCurrentWord: PropTypes.func.isRequired,
  setCurrentTag: PropTypes.func.isRequired,
};

WordLink.defaultProps = {
  punc: '',
};

export default WordLink;
