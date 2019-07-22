import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoReserved = props => {
  const {
    word,
    last,
    skillVisible,
    interestVisible,
    achievementVisible,
  } = props;

  const typeToState = {
    skill: skillVisible,
    interest: interestVisible,
    achievement: achievementVisible,
  };

  const typeToClass = {
    skill: 'pseudo-string',
    interest: 'pseudo-method',
    achievement: 'pseudo-reserved',
  };

  return (
    <div
      className={`${
        typeToClass[word.type] ? typeToClass[word.type] : 'pseudo-reserved'
      } ${typeToState[word.type] ? 'visible' : 'blur'}`}
    >
      {word.word}
      {PseudoCodeUtils.semiColon(last)}
    </div>
  );
};

PseudoReserved.propTypes = {
  word: PropTypes.shape({ word: PropTypes.string, type: PropTypes.string })
    .isRequired,
  skillVisible: PropTypes.bool.isRequired,
  interestVisible: PropTypes.bool.isRequired,
  achievementVisible: PropTypes.bool.isRequired,
  last: PropTypes.bool,
};

PseudoReserved.defaultProps = {
  last: false,
};

export default PseudoReserved;
