import React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from './NavBar';

const NAMES = ['Home', 'Projects', 'About'];
const NAMES_WITH_SPACES = ['About Me', 'Favorite Projects'];

storiesOf('NavBar', module)
  .add('Basic NavBar component', () => {
    return <NavBar>{NAMES}</NavBar>;
  })
  .add('NavBar Component with Spaces', () => {
    return <NavBar>{NAMES_WITH_SPACES}</NavBar>;
  });
