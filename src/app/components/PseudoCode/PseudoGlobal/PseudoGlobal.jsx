import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoGlobal = props => {
  const { word, last } = props;

  return (
    <div className={`pseudo-global ${false ? 'visible' : 'blur'}`}>
      {PseudoCodeUtils.renderWord(word)}
      {PseudoCodeUtils.semiColon(last)}
    </div>
  );
};

PseudoGlobal.propTypes = {
  word: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

PseudoGlobal.defaultProps = {
  last: false,
};

export default PseudoGlobal;
