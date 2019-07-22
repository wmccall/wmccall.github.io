import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoReserved = props => {
  const { word, achievementVisible, last } = props;

  return (
    <div
      className={`pseudo-reserved ${achievementVisible ? 'visible' : 'blur'}`}
    >
      {PseudoCodeUtils.renderWord(word)}
      {PseudoCodeUtils.semiColon(last)}
    </div>
  );
};

PseudoReserved.propTypes = {
  word: PropTypes.string.isRequired,
  achievementVisible: PropTypes.bool.isRequired,
  last: PropTypes.bool,
};

PseudoReserved.defaultProps = {
  last: false,
};

export default PseudoReserved;
