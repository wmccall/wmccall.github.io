import React from 'react';
import { storiesOf } from '@storybook/react';

import StringUtils from '../../utils/StringUtils';
import dogsPhoto from '../../resources/Dogs.jpg';
import willPhoto from '../../resources/WillLizard.jpg';
import Photo from '../Photo';
import TextWrapImage from './TextWrapPhoto';

const DATA = {
  photoPath: dogsPhoto,
  photoText: 'Dogs',
  width: '500px',
  fit: 'cover',
};

const TEXT = StringUtils.lorem.generateSentences(100);

storiesOf('TextWrapPhoto', module)
  .add('Dog Photo Right, with Text', () => {
    return (
      <TextWrapImage text={TEXT} floatRight>
        <Photo {...DATA} />
      </TextWrapImage>
    );
  })
  .add('Will Photo Left, with Text', () => {
    return (
      <TextWrapImage text={TEXT}>
        <Photo {...DATA} photoPath={willPhoto} />
      </TextWrapImage>
    );
  });
