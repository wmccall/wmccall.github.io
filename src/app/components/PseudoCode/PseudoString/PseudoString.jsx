import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoString = props => {
  const { word, last, hoverCategory, permanentCategory } = props;

  const typeToClass = {
    skill: 'pseudo-string',
    interest: 'pseudo-method',
    achievement: 'pseudo-reserved',
  };

  return (
    <div
      className={`${
        typeToClass[word.type] ? typeToClass[word.type] : 'pseudo-string'
      } ${
        hoverCategory === word.type || permanentCategory === word.type
          ? 'visible'
          : 'blur'
      } ${permanentCategory === word.type ? 'underline' : 'noline'} ${
        word.tags ? word.tags.join('') : ''
      }`}
    >
      {"'"}
      {word.word}
      {"'"}
      {last && PseudoCodeUtils.semiColon}
    </div>
  );
};

PseudoString.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  hoverCategory: PropTypes.string,
  permanentCategory: PropTypes.string,
  last: PropTypes.bool,
};

PseudoString.defaultProps = {
  hoverCategory: null,
  permanentCategory: null,
  last: false,
};

export default PseudoString;
