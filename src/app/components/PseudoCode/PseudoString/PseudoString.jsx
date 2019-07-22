import React from 'react';
import { PropTypes } from 'prop-types';
import PseudoCodeUtils from '../../../utils/PseudoCodeUtils';

const PseudoString = props => {
  const { word, skillVisible, last } = props;

  return (
    <div className={`pseudo-string ${skillVisible ? 'visible' : 'blur'}`}>
      {"'"}
      {PseudoCodeUtils.renderWord(word)}
      {"'"}
      {PseudoCodeUtils.semiColon(last)}
    </div>
  );
};

PseudoString.propTypes = {
  word: PropTypes.string.isRequired,
  skillVisible: PropTypes.bool.isRequired,
  last: PropTypes.bool,
};

PseudoString.defaultProps = {
  last: false,
};

export default PseudoString;
