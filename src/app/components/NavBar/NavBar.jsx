import React from 'react';
import { PropTypes } from 'prop-types';
import toLower from 'lodash.tolower';

import StyledButtons from '../StyledButtons';

const changePage = (props, page) => {
  props.setCurrentPage(page);
};

const NavBar = props => {
  const { children, currentPage } = props;

  return (
    <div>
      {children.map(child => {
        const page = toLower(child);
        return (
          <StyledButtons.NavButton
            key={`nav_button_${page}`}
            onClick={() => changePage(props, page)}
            thisPage={page === currentPage}
          >
            {child}
          </StyledButtons.NavButton>
        );
      })}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default NavBar;
