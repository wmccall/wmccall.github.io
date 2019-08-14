import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoElement = props => {
  const { word, last, hoverCategory, permanentCategory, defaultType } = props;

  const typeToClass = {
    skill: 'pseudo-string',
    interest: 'pseudo-method',
    achievement: 'pseudo-reserved',
  };

  const defaultClass = `pseudo-${defaultType}`;

  return (
    <div
      className={`${
        typeToClass[word.type] ? typeToClass[word.type] : defaultClass
      } ${
        hoverCategory === word.type || permanentCategory === word.type
          ? 'visible'
          : 'blur'
      } ${permanentCategory === word.type ? 'underline' : 'noline'} ${
        word.tags ? word.tags.join('') : ''
      }`}
    >
      {word.word}
      {last && PseudoCodeUtils.semiColon}
    </div>
  );
};

PseudoElement.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  defaultType: PropTypes.string.isRequired,
  hoverCategory: PropTypes.string,
  permanentCategory: PropTypes.string,
  last: PropTypes.bool,
};

PseudoElement.defaultProps = {
  hoverCategory: null,
  permanentCategory: null,
  last: false,
};

export default PseudoElement;
