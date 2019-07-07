import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import toLower from 'lodash.tolower';

import colors from '../../constants/colors';

const StyledNavBar = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NavButton = styled.button`
  color: ${colors.WHITE};
  background-color: ${props => (props.thisPage ? colors.RED : colors.BLUE)};
  width: 100px;
  font-size: 15px;
  height: 50px;
  outline: 0;
  border-radius: 5px;
  border: 0;
  margin-right: 3px;
  :hover {
    background-color: ${props => (props.thisPage ? colors.RED : colors.GREEN)};
  }
`;

const changePage = (props, page) => {
  props.setCurrentPage(page);
};

const NavBar = props => {
  const { children, currentPage } = props;

  return (
    <StyledNavBar>
      {children.map(child => {
        const page = toLower(child);
        return (
          <NavButton
            key={`nav_button_${page}`}
            onClick={() => changePage(props, page)}
            thisPage={page === currentPage}
          >
            {child}
          </NavButton>
        );
      })}
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default NavBar;
