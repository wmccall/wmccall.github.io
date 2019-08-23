import React from 'react';

import WordLink from '../components/WordLink';
import { interestObjects } from './interests';

export const interestTagDefinitions = {
  Art: {
    partOfSpeech: 'noun',
    pronunciation: '/ärt/',
    description: (
      <>
        Just like virtually everyone, I was introduced to art at a young age.
        Through my friends, school, and family I was exposed to different art
        forms; be it my friend&apos;s MS Paint pixel art, Andy Warhol&apos;s
        screen prints, or my grandmother&apos;s watercolors, they were all
        intriguing and fun. Over the years, several art forms really captured
        me: <WordLink {...interestObjects.Ceramics} /> for its utility,{' '}
        <WordLink {...interestObjects.Photography} /> for the moment it
        captures, and digital art for how much control given over the medium
        (not to mention CTRL+z for mistakes).
      </>
    ),
  },
  Entertainment: {
    partOfSpeech: 'noun',
    pronunciation: '/ˌen(t)ərˈtānmənt/',
    description: (
      <>
        I mean, who doesn&apos;t like some form of entertainment?{' '}
        <WordLink {...interestObjects.Music} /> is definitely my favorite form
        because it can be enjoyed just about anywhere, and concerts are unlike
        anything I have experienced elsewhere. Nonetheless, I find{' '}
        <WordLink {...interestObjects.Movies} /> and{' '}
        <WordLink {...interestObjects['Video Games']} /> to be a great way to
        kick back and enjoy some time with family and friends after work.
      </>
    ),
  },
  Technology: {
    partOfSpeech: 'noun',
    pronunciation: '/tekˈnäləjē/',
    description: (
      <>
        Growing up with a CRT with a built in web cam as my shiny main display I
        had no idea things could get much better than that. Technology has
        continued to surprise me and I&apos;ve enjoyed keeping up with the
        trends, refinements, and new developments. I&apos;m always curious what
        is right around the corner.
      </>
    ),
  },
};

export const interestWordDiscussions = {
  Ceramics: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  Photography: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  Illustrator: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  Photoshop: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  Music: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  Movies: [
    {
      title: null,
      description: <></>,
      photoElements: [],
    },
  ],
  'Video Games': [
    {
      title: 'Video Games',
      description: <></>,
      photoElements: [],
    },
  ],
  'Mechanical Keyboards': [
    {
      title: 'Mechanical Keyboards',
      description: <></>,
      photoElements: [],
    },
  ],
};
