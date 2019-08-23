import React from 'react';
import { PropTypes } from 'prop-types';
import Gallery from 'react-grid-gallery';

import { skillWordDiscussions } from '../../constants/skillsDefinitions';
import { interestWordDiscussions } from '../../constants/interestsDefinitions';
import { projectWordDiscussions } from '../../constants/projectsDefinitions';

const discussions = {
  skill: skillWordDiscussions,
  interest: interestWordDiscussions,
  project: projectWordDiscussions,
};

const separateMainAndSubTopics = topicDiscussions => ({
  mainTopic: topicDiscussions[0],
  subTopics: topicDiscussions.slice(1),
});

const generateMainTopicTitle = (type, word, topicTitle) => (
  <>
    {word}
    {topicTitle && (
      <>
        <div className="neutral">:</div>
        <div className="neutral italic small">{topicTitle}</div>
      </>
    )}
  </>
);

const generateSubTopics = (type, subTopics) =>
  subTopics.map(({ title, description, photoElements }, index) => (
    <div className="sub-topic" key={`st_${index.toString()}_${title}`}>
      <div className={`word ${type}`}>{title}</div>
      <div className="description">
        <div className="tab" />
        {description}
      </div>
      <div className="main-photos">
        <Gallery images={photoElements} />
      </div>
    </div>
  ));

const Discussion = ({ type, word }) => {
  const { mainTopic, subTopics } = separateMainAndSubTopics(
    discussions[type][word],
  );

  return (
    <div className="Discussion">
      <div className="main-topic">
        <div className={`main-word ${type}`}>
          {generateMainTopicTitle(type, word, mainTopic.title)}
        </div>
        <div className="main-description">
          <div className="tab" />
          {mainTopic.description}
        </div>
        <div className="main-photos">
          <Gallery images={mainTopic.photoElements} />
        </div>
      </div>
      <div className="sub-topics">{generateSubTopics(type, subTopics)}</div>
    </div>
  );
};

Discussion.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Discussion;
