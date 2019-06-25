import React from 'react';
import { storiesOf } from '@storybook/react';

import willPhoto from '../../resources/WillLizard.jpg';
import dogsPhoto from '../../resources/Dogs.jpg';
import PhotoButton from './PhotoButton';

const WILL_DATA = {
  photoPath: willPhoto,
  photoText: 'WILL!!',
  width: '300px',
  fit: 'cover',
};
const DOG_DATA = {
  photoPath: dogsPhoto,
  photoText: 'DOGS!!',
  width: '300px',
};

storiesOf('PhotoButton', module)
  .add('Will Photo Button', () => {
    return (
      <PhotoButton {...WILL_DATA}>
        <div>Will!!</div>
      </PhotoButton>
    );
  })
  .add('Dogs Photo Button', () => {
    return (
      <PhotoButton {...DOG_DATA}>
        <div>Dogs!!</div>
      </PhotoButton>
    );
  });
