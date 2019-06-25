import React from 'react';
import { PropTypes } from 'prop-types';
import NavBar from '../components/NavBar';

const BasePage = props => {
  const { pages, children } = props;

  return (
    <div className="base-page-container">
      <div className="base-page">
        <div className="base-page-inner">
          <div className="nav-bar-container">
            <NavBar>{pages}</NavBar>
          </div>
          <div className="children-container">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BasePage.propTypes = {
  children: PropTypes.shape({}).isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BasePage;
