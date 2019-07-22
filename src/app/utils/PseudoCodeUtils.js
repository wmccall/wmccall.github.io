import React from 'react';

import skills from '../constants/skills';
import interests from '../constants/interests';
import achievements from '../constants/achievements';

const renderWord = word => <div className={word.type}>{word.word}</div>;
const semiColon = last => (last ? <div className="semi-colon">;</div> : null);

export default { renderWord, semiColon };
