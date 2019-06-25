import styled from 'styled-components';

const NavButton = styled.button`
  color: ${props => (props.thisPage ? 'lightgray' : 'black')};
  background-color: ${props => (props.thisPage ? 'black' : 'lightgray')};
  width: ${props => (props.thisPage ? '120px' : '100px')};
  height: 50px;
  outline: 0;
  border-radius: 5px;
  border: 0;
  margin-right: 3px;
  :active {
    color: ${props => (props.thisPage ? 'lightgray' : 'black')};
  }
`;

const StyledButtons = {
  NavButton,
};

export default StyledButtons;
