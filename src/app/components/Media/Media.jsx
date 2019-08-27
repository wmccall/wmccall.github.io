import React from 'react';
import { PropTypes } from 'prop-types';
import Gallery from 'react-grid-gallery';

import { skillPageData } from '../../constants/skillsDefinitions';
import { interestPageData } from '../../constants/interestsDefinitions';
import { projectPageData } from '../../constants/projectsDefinitions';

const pageData = {
  skill: skillPageData,
  interest: interestPageData,
  project: projectPageData,
};

const generateVideo = videoData => {
  const { title, src } = videoData;
  return (
    <div className="video">
      <div className="title">{title}</div>
      <iframe
        title={`${title} video`}
        src={src}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const generatePhotos = albumData => {
  const { title, photoElements } = albumData;
  return (
    <div className="album">
      {title && <div className="title">{title}</div>}
      <div className="album-photos">
        <Gallery images={photoElements} enableImageSelection={false} />
      </div>
    </div>
  );
};

const Media = ({ type, word }) => {
  const currentPageMedia = pageData[type][word].media;

  return currentPageMedia ? (
    <div className={`Media ${type}`}>
      {currentPageMedia.videos && (
        <div className="videos">
          <div>Videos</div>
          {currentPageMedia.videos.map(videoData => generateVideo(videoData))}
        </div>
      )}
      {currentPageMedia.albums && (
        <div className="photos">
          <div>Photos</div>
          {currentPageMedia.albums.map(albumData => generatePhotos(albumData))}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

Media.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default Media;
