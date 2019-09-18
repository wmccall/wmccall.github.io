import React from 'react';

const NON_CODE_SYMBOLS = {
  semiColon: ';',
  equalsSign: '=',
  leftParen: '(',
  rightParen: ')',
};

const nonCodeSymbols = Object.keys(NON_CODE_SYMBOLS).reduce(
  (obj, key) => ({
    ...obj,
    [key]: <div className="none-type-code">{NON_CODE_SYMBOLS[key]}</div>,
  }),
  {},
);

export default {
  ...nonCodeSymbols,
};
