import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoMethod = props => {
  const { word, interestVisible, last } = props;

  return (
    <div className={`pseudo-method ${interestVisible ? 'visible' : 'blur'}`}>
      {PseudoCodeUtils.renderWord(word)}
      {PseudoCodeUtils.semiColon(last)}
    </div>
  );
};

PseudoMethod.propTypes = {
  word: PropTypes.string.isRequired,
  interestVisible: PropTypes.bool.isRequired,
  last: PropTypes.bool,
};

PseudoMethod.defaultProps = {
  last: false,
};

export default PseudoMethod;
