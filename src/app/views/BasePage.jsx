import React from 'react';
import { PropTypes } from 'prop-types';
import NavBar from '../components/NavBar';

const BasePage = props => {
  const { pages, children } = props;

  return (
    <div>
      <NavBar>{pages}</NavBar>
      <div>{children}</div>
    </div>
  );
};

BasePage.propTypes = {
  children: PropTypes.shape({}).isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BasePage;
