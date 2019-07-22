import React from 'react';

import skills from '../constants/skills';
import interests from '../constants/interests';
import achievements from '../constants/achievements';

const semiColon = last =>
  last ? <div className="none-type-code">;</div> : null;
const equalsSign = <div className="none-type-code">=</div>;
const leftParen = <div className="none-type-code">(</div>;
const rightParen = <div className="none-type-code">)</div>;

export default {
  semiColon,
  equalsSign,
  leftParen,
  rightParen,
};
