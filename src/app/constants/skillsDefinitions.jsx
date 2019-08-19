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
    description: (
      <>
        Web development is the latest area of software development that I have
        taken on. With little experience until 2019 I saw web dev work as
        complicated and misaligned with my interests in logic. This changed when
        I worked for a education technology company, Amplify, where I learned
        about <WordLink {...skillObjects.React} />. React turned out to be the
        perfect blend of logic and UI for me. It beautifully combined{' '}
        <WordLink {...skillObjects.Javascript} />,{' '}
        <WordLink {...skillObjects.CSS} />, and{' '}
        <WordLink {...skillObjects.HTML} /> into a straight forward mechanism
        for building websites, and since then I&apos;ve been hooked on web
        development.
      </>
    ),
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
