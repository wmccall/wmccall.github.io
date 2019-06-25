import React from 'react';
import { storiesOf } from '@storybook/react';

import willPhoto from '../../resources/Will.jpg';
import Photo from './Photo';

const DATA = { photoPath: willPhoto, photoText: 'Will McCall', width: '300px' };

storiesOf('Photo', module)
  .add('Will Photo Contain', () => {
    return <Photo {...DATA} />;
  })
  .add('Will Photo Cover', () => {
    return <Photo {...DATA} fit="cover" />;
  })
  .add('Will Photo Cover Round', () => {
    return <Photo {...DATA} fit="cover" radius="300px" />;
  });
