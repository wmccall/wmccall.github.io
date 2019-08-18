import React from 'react';
import { PropTypes } from 'prop-types';

import { skillDefinitions } from '../../constants/skills';
import { interestDefinitions } from '../../constants/interests';
import { achievementDefinitions } from '../../constants/achievements';

const definitions = {
  skill: skillDefinitions,
  interest: interestDefinitions,
  achievement: achievementDefinitions,
};

const Definition = ({ type, word }) => {
  const { partOfSpeech, pronunciation, description } = definitions[type][word];

  return (
    <div className="Definition">
      <div className="word-and-speech">
        <div className={`word ${type}`}>{word}</div>
        <div className="part-of-speech">{partOfSpeech}</div>
      </div>
      <div className="pronunciation">{pronunciation}</div>
      <div className="description">
        <div className="tab" />
        {description}
      </div>
    </div>
  );
};

Definition.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Definition;
