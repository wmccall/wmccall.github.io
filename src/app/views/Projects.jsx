import React from 'react';
import { PropTypes } from 'prop-types';
import BasePage from './BasePage';

const Projects = props => {
  const { pages } = props;

  const pageContents = (
    <div className="projects">
      <p>projects page</p>
    </div>
  );

  return <BasePage pages={pages}>{pageContents}</BasePage>;
};

Projects.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Projects;
