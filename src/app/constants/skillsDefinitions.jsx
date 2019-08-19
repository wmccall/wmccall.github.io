import React from 'react';

import WordLink from '../components/WordLink';
import { skillObjects } from './skills';

export const skillTagDefinitions = {
  Language: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈlaNGɡwij/',
    description: (
      <>
        I started working with programming languages in 2011 when I took my
        first <WordLink {...skillObjects.Java} /> course. I then spent the most
        of my time working with Java off and on again up until 2016 when I was
        formally introduced to <WordLink {...skillObjects.Python} /> and{' '}
        <WordLink {...skillObjects['C#']} />. Python quickly became my favorite
        language to work with because of its ease in prototyping and quick
        scripting. Most recently I have been using{' '}
        <WordLink {...skillObjects.Javascript} /> to work with{' '}
        <WordLink {...skillObjects.React} /> to build webpages personally and
        professionally.
      </>
    ),
  },
  'Web Development': {
    partOfSpeech: 'noun',
    pronunciation: '/web dəˈveləpmənt/',
    description: <></>,
  },
  Infrastructure: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈinfrəˌstrək(t)SHər/',
    description: <></>,
  },
  'Version-Control': {
    partOfSpeech: 'noun',
    pronunciation: '/ˈvərZHən kənˈtrōl/',
    description: <></>,
  },
};

export const skillDefinitions = {};
