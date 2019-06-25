import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import Photo from '../Photo';

const PhotoTextContainer = styled.div`
  background-color: white;
  display: block;
  width: 100%;
  height: 50px;
  margin-top: -50px;
  position: relative;
  text-align: center;
`;

const PhotoButtonContainer = styled.button`
  background: none;
  outline: 0;
  border: 0;
  border-radius: ${props => props.radius};
  text-align: center;

  &:hover ${PhotoTextContainer} {
    background-color: lightgray;
  }
`;

const Content = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
`;

const PhotoText = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode',
    'Lucida Sans', sans-serif;
  font-size: 30px;
  display: inline-block;
  color: black;
`;

const PhotoButton = props => {
  const { children, fit, photoPath, photoText, width } = props;
  return (
    <PhotoButtonContainer>
      <Photo
        photoPath={photoPath}
        photoText={photoText}
        width={width}
        fit={fit}
      />
      <PhotoTextContainer>
        <PhotoText>{photoText}</PhotoText>
      </PhotoTextContainer>
      <Content isVisible={false}>{children}</Content>
    </PhotoButtonContainer>
  );
};

PhotoButton.propTypes = {
  children: PropTypes.element.isRequired,
  fit: PropTypes.string,
  photoPath: PropTypes.string.isRequired,
  photoText: PropTypes.string.isRequired,
  radius: PropTypes.string,
  width: PropTypes.string.isRequired,
};

PhotoButton.defaultProps = {
  fit: 'contain',
  radius: '0px',
};

export default PhotoButton;
