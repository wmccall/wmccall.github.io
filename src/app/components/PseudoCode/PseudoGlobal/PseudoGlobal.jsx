import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoGlobal = props => {
  const { word, last, hoverCategory, permanentCategory } = props;

  const typeToClass = {
    skill: 'pseudo-string',
    interest: 'pseudo-method',
    achievement: 'pseudo-reserved',
  };

  return (
    <div
      className={`${
        typeToClass[word.type] ? typeToClass[word.type] : 'pseudo-global'
      } ${
        hoverCategory === word.type || permanentCategory === word.type
          ? 'visible'
          : 'blur'
      } ${permanentCategory === word.type ? 'underline' : 'noline'}`}
    >
      {word.word}
      {last && PseudoCodeUtils.semiColon}
    </div>
  );
};

PseudoGlobal.propTypes = {
  word: PropTypes.shape({ word: PropTypes.string, type: PropTypes.string })
    .isRequired,
  hoverCategory: PropTypes.string,
  permanentCategory: PropTypes.string,
  last: PropTypes.bool,
};

PseudoGlobal.defaultProps = {
  hoverCategory: null,
  permanentCategory: null,
  last: false,
};

export default PseudoGlobal;
