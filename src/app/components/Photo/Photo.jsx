import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.width};
  border-radius: ${props => props.radius};
  display: flex;
  text-align: center;
  overflow: hidden;
`;
PhotoContainer.displayName = 'PhotoContainer';

const StyledImage = styled.img`
  object-fit: ${props => props.fit};
  object-position: ${props => props.position};
  transform: scale(${props => props.scale});
  overflow: hidden;
`;

const Photo = props => {
  const { fit, photoPath, photoText, radius, width, position, scale } = props;
  return (
    <PhotoContainer width={width} radius={radius}>
      <StyledImage
        src={photoPath}
        alt={photoText}
        fit={fit}
        position={position}
        scale={scale}
      />
    </PhotoContainer>
  );
};

Photo.propTypes = {
  fit: PropTypes.string,
  photoPath: PropTypes.string.isRequired,
  photoText: PropTypes.string.isRequired,
  position: PropTypes.string,
  scale: PropTypes.number,
  radius: PropTypes.string,
  width: PropTypes.string.isRequired,
};

Photo.defaultProps = {
  radius: '0px',
  scale: 1,
  position: '50% 50%',
  fit: 'contain',
};

export default Photo;
