import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.width};
  display: flex;
  text-align: center;
`;

const StyledImage = styled.img`
  overflow: hidden;
  object-fit: ${props => props.fit};
  border-radius: ${props => props.radius};
  max-width: '100%';
  height: 'auto';
`;

const Photo = props => {
  const { fit, photoPath, photoText, radius, width } = props;
  return (
    <PhotoContainer width={width}>
      <StyledImage src={photoPath} alt={photoText} fit={fit} radius={radius} />
    </PhotoContainer>
  );
};

Photo.propTypes = {
  fit: PropTypes.string,
  photoPath: PropTypes.string.isRequired,
  photoText: PropTypes.string.isRequired,
  radius: PropTypes.string,
  width: PropTypes.string.isRequired,
};

Photo.defaultProps = {
  radius: '0px',
  fit: 'contain',
};

export default Photo;
