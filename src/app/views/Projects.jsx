import React from 'react';
import { PropTypes } from 'prop-types';
import BasePage from './BasePage';
import PhotoButton from '../components/PhotoButton';
import QdUp from '../resources/QdUp.png';
import Eraser from '../resources/Eraser.png';

const Projects = props => {
  const { pages } = props;

  const pageContents = (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <PhotoButton
          photoPath={QdUp}
          photoText="QdUp"
          width="300px"
          scale={0.65}
        >
          <div>Qd Up</div>
        </PhotoButton>
        <PhotoButton
          photoPath={Eraser}
          photoText="ClearDownloads"
          width="300px"
          scale={0.8}
        >
          <div>Clear Downloads</div>
        </PhotoButton>
      </div>
    </div>
  );

  return <BasePage pages={pages}>{pageContents}</BasePage>;
};

Projects.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Projects;
