import React from 'react';

import WordLink from '../components/WordLink';
import { projectObjects } from './projects';
import { skillObjects } from './skills';

export const projectTagDefinitions = {
  Mobile: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈmōbəl,ˈmōˌbīl/',
    description: (
      <>
        Since mobile phones and devices have become virtual extensions of most
        people, I have found it so interesting to constantly be in close contact
        with nearly everyone around me. Being able to put a program on a
        platform so readily available is incredibly exciting. With my only true
        attempt at a mobile specific app being{' '}
        <WordLink {...projectObjects["Q'd Up"]} />, I understand the challenges,
        but I am still interested in giving new ideas a shot.
      </>
    ),
  },
  Plugin: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈpləɡ ˌin/',
    description: (
      <>
        While I have only limited experience writing plugins,{' '}
        <WordLink {...projectObjects['Quick Search']} />, I loved the quick
        development time to add a tiny feature that I wanted from Firefox. I
        have yet to run into more desired features, but am prepared to jump
        right in when the next opportunity appears.
      </>
    ),
  },
  Web: {
    partOfSpeech: 'noun',
    pronunciation: '/web/',
    description: (
      <>
        I was not expecting to enjoy developing websites as much as I have. My
        initial dive into building a website was a raw{' '}
        <WordLink {...skillObjects.HTML} /> and light{' '}
        <WordLink {...skillObjects.CSS} /> site I can only hope has not been
        captured by Internet Archive&apos;s Wayback Machine. Oh no, it has...
        Anyway, that abomination initially turned me off from trying to develop
        websites because I just hadn&apos;t grasped the power of effective CSS.
        As well, I was more interested in logic and at the time of writing my
        first site, I found that little logic was in play - I was building a
        static site of links. Since then I have learned a thing or two about{' '}
        <WordLink {...skillObjects.Javascript} /> and{' '}
        <WordLink {...skillObjects.React} /> and now know that I can get
        seriously logical about developing websites.
      </>
    ),
  },
  'Desktop Application': {
    partOfSpeech: 'noun',
    pronunciation: '/ˈdeskˌtäp ˌapləˈkāSH(ə)n/',
    description: (
      <>
        GUI applications, along with CLI applications, were the first
        applications I learned to write since they were the easiest to teach
        computer science with. I enjoyed starting out with writing these
        applications, they were relatively simple and totally exploratory. They
        quickly evolved into a platform for me to add functionality to my
        desktop. Whether it was to clean up my ever growing Downloads folder
        with <WordLink {...projectObjects['Clear Downloads']} punc="," />{' '}
        attempt to &quot;Visually Encrypt&quot; photos with{' '}
        <WordLink {...projectObjects.PictoCrypt} punc="," /> or continually ping
        multiple computers with{' '}
        <WordLink {...projectObjects.BulkPing} punc="," /> I was continually
        attempting to add something new to my computer.
      </>
    ),
  },
};

export const projectWordDiscussions = {
  PictoCrypt: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  BulkPing: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  'Clear Downloads': [
    {
      title: 'Clear Downloads',
      description: <></>,
      photoElements: [],
    },
  ],
  'Program Snapshot': [
    {
      title: 'Program Snapshot',
      description: <></>,
      photoElements: [],
    },
  ],
  "Q'd Up": [
    {
      title: "Q'd Up",
      description: <></>,
      photoElements: [],
    },
  ],
  'Quick Search': [
    {
      title: 'Quick Search',
      description: <></>,
      photoElements: [],
    },
  ],
  'This Website': [
    {
      title: 'This Website',
      description: <></>,
      photoElements: [],
    },
  ],
};
