import React from 'react';
import { PropTypes } from 'prop-types';

import { skillWordDiscussions } from '../../constants/skillsDefinitions';
import { interestWordDiscussions } from '../../constants/interestsDefinitions';
import { projectWordDiscussions } from '../../constants/projectsDefinitions';

const discussions = {
  skill: skillWordDiscussions,
  interest: interestWordDiscussions,
  project: projectWordDiscussions,
};

const Discussion = ({ type, word }) => {
  const { description } = discussions[type][word];

  return (
    <div className="Discussion">
      <div className="word-and-speech">
        <div className={`word ${type}`}>{word}</div>
      </div>
      <div className="description">
        <div className="tab" />
        {description}
      </div>
    </div>
  );
};

Discussion.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Discussion;
