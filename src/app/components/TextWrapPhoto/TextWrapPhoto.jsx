import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  float: ${props => (props.floatRight ? 'right' : 'left')};
`;

const TextWrapImage = props => {
  const { children, floatRight, text } = props;
  return (
    <div>
      <ImageContainer floatRight={floatRight}>{children}</ImageContainer>
      {text}
    </div>
  );
};

TextWrapImage.propTypes = {
  children: PropTypes.element.isRequired,
  floatRight: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

TextWrapImage.defaultProps = {
  floatRight: false,
};

export default TextWrapImage;
