import React from 'react';

import WordLink from '../components/WordLink';
import { interestObjects } from './interests';
import ceramicsPhotoElements from './ceramicsPhotoElements';

export const interestTagDefinitions = {
  Art: {
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

export const interestPageData = {
  Ceramics: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I had not expected to fall in love with
            ceramics when I first was introduced to it back in 2014. I was
            digitally focussed at the time, tinkering with{' '}
            <WordLink {...interestObjects.Photoshop} /> mostly, and the shine of
            physical art lost its luster around early high school. However, I
            had just moved and after all of the change I wanted to try something
            new. My mom found that we had a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://communityartscenter.org"
            >
              Community Arts Center
            </a>{' '}
            in our area, so we decided I should give a ceramics class a shot.
            Despite the challenge of centering the clay and patience required to
            bring my ideas to life, I was hooked.
            <div className="new-line" />
            <div className="tab" />
            Since then I have taken a handful of classes both during school and
            my internships, but most recently I threw at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bklynclay/"
            >
              BKLYN CLAY
            </a>{' '}
            in NYC. I truly found my love for mug making there! Some say I may
            have went overboard on the quantity, but I felt they were the right
            challenge: making an appropriately sized vessel, pulling a proper
            handle, and attaching it comfortably. Not to mention, the colors at
            BKLYN CLAY were phenomenal!
          </>
        ),
      },
    ],
    media: {
      albums: [...ceramicsPhotoElements],
    },
  },
  Photography: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Illustrator: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Photoshop: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Music: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Movies: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  'Video Games': {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  'Mechanical Keyboards': {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
};
