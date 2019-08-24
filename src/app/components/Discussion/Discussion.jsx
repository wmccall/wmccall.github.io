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

const generateMainTopicTitle = (word, topicTitle, sourceLink) => (
  <>
    {word}
    {topicTitle && (
      <>
        <div className="neutral">:</div>
        <div className="neutral italic small">{topicTitle}</div>
      </>
    )}
    {sourceLink && (
      <>
        <div className="neutral small">-</div>
        <div className="neutral no-pad small">[</div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sourceLink}
          className="small"
        >
          View Source
        </a>
        <div className="neutral no-pad small">]</div>
      </>
    )}
  </>
);

const generateSubTopicTitle = (topicTitle, sourceLink) => (
  <>
    {topicTitle}
    {sourceLink && (
      <>
        <div className="left-pad neutral small">-</div>
        <div className="neutral no-pad small">[</div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sourceLink}
          className="small"
        >
          View Source
        </a>
        <div className="neutral no-pad small">]</div>
      </>
    )}
  </>
);

const generateSubTopics = (type, subTopics) =>
  subTopics.map(({ title, description, photoElements, sourceLink }, index) => (
    <div className="sub-topic" key={`st_${index.toString()}_${title}`}>
      <div className={`sub-header ${type}`}>
        {generateSubTopicTitle(title, sourceLink)}
      </div>
      <div className="description">{description}</div>
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
        <div className={`header ${type}`}>
          {generateMainTopicTitle(word, mainTopic.title, mainTopic.sourceLink)}
        </div>
        <div className="description">{mainTopic.description}</div>
        <div className="photos">
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
