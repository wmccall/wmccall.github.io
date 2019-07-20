import React from 'react';
import { storiesOf } from '@storybook/react';

import StringUtils from '../../utils/StringUtils';
import dogsPhoto from '../../resources/Dogs.jpg';
import willPhoto from '../../resources/WillLizard.jpg';
import TextWrapImage from './TextWrapPhoto';

const TEXT = StringUtils.lorem.generateSentences(100);

storiesOf('TextWrapPhoto', module)
  .add('Dog Photo Right, with Text', () => {
    return (
      <TextWrapImage text={TEXT} floatRight>
        <img src={dogsPhoto} alt="dogs" />
      </TextWrapImage>
    );
  })
  .add('Will Photo Left, with Text', () => {
    return (
      <TextWrapImage text={TEXT}>
        <img src={willPhoto} alt="will" />
      </TextWrapImage>
    );
  });
