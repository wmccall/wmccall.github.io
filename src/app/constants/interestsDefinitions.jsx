import React from 'react';

import WordLink from '../components/WordLink';
import { interestObjects } from './interests';

export const interestTagDefinitions = {
  Art: {
    partOfSpeech: 'noun',
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
            I had not expected to get into ceramics when I first was introduced
            to it in 2014.
          </>
        ),
      },
    ],
    media: {
      albums: [
        {
          title: null,
          photoElements: [
            {
              src: 'https://imgur.com/bYdxsHx.jpg',
              thumbnail: 'https://imgur.com/bYdxsHx.jpg',
              thumbnailWidth: 640,
              caption: 'Starry Night Mug',
            },
            {
              src: 'https://imgur.com/JBo3WN0.jpg',
              thumbnail: 'https://imgur.com/JBo3WN0.jpg',
              thumbnailWidth: 640,
              caption: 'Caramel and Aqua Mug',
            },
            {
              src: 'https://imgur.com/oRPHDTj.jpg',
              thumbnail: 'https://imgur.com/oRPHDTj.jpg',
              thumbnailWidth: 640,
              caption: 'Blue and White Mug',
            },
            {
              src: 'https://imgur.com/uPB6EiS.jpg',
              thumbnail: 'https://imgur.com/uPB6EiS.jpg',
              thumbnailWidth: 640,
              caption: 'Blue and White Plate',
            },
            {
              src: 'https://imgur.com/zGTFZO9.jpg',
              thumbnail: 'https://imgur.com/zGTFZO9.jpg',
              thumbnailWidth: 640,
              caption: 'Blue and White Bowl',
            },
            {
              src: 'https://imgur.com/TBc5n1b.jpg',
              thumbnail: 'https://imgur.com/TBc5n1b.jpg',
              thumbnailWidth: 640,
              caption: 'White Carved Mug',
            },
            {
              src: 'https://imgur.com/2pm1E3m.jpg',
              thumbnail: 'https://imgur.com/2pm1E3m.jpg',
              thumbnailWidth: 640,
              caption: 'Teal Carved Mug',
            },
            {
              src: 'https://imgur.com/XAvs7Ji.jpg',
              thumbnail: 'https://imgur.com/XAvs7Ji.jpg',
              thumbnailWidth: 640,
              caption: 'Carved Speckled Bowl',
            },
            {
              src: 'https://imgur.com/0Ncv1ZT.jpg',
              thumbnail: 'https://imgur.com/0Ncv1ZT.jpg',
              thumbnailWidth: 640,
              caption: 'Fish Bone Mug',
            },
            {
              src: 'https://imgur.com/N3RhFBV.jpg',
              thumbnail: 'https://imgur.com/N3RhFBV.jpg',
              thumbnailWidth: 640,
              caption: 'Blue Dip Mug',
            },
            {
              src: 'https://imgur.com/cjfWmxh.jpg',
              thumbnail: 'https://imgur.com/cjfWmxh.jpg',
              thumbnailWidth: 640,
              caption: 'Black and White Mug',
            },
            {
              src: 'https://imgur.com/IepZqtu.jpg',
              thumbnail: 'https://imgur.com/IepZqtu.jpg',
              thumbnailWidth: 640,
              caption: 'Black and White Mugs',
            },
            {
              src: 'https://imgur.com/AOTrneV.jpg',
              thumbnail: 'https://imgur.com/AOTrneV.jpg',
              thumbnailWidth: 640,
              caption: 'Tan and Moss Mug',
            },
            {
              src: 'https://imgur.com/mdY6hLf.jpg',
              thumbnail: 'https://imgur.com/mdY6hLf.jpg',
              thumbnailWidth: 640,
              caption: 'Turquoise and Brown Mug',
            },
            {
              src: 'https://imgur.com/E4SrFqO.jpg',
              thumbnail: 'https://imgur.com/E4SrFqO.jpg',
              thumbnailWidth: 640,
              caption: 'Black and Turquoise Mug',
            },
            {
              src: 'https://imgur.com/Ec5M2y7.jpg',
              thumbnail: 'https://imgur.com/Ec5M2y7.jpg',
              thumbnailWidth: 640,
              caption: 'Turquoise and Black Mug',
            },
            {
              src: 'https://imgur.com/nZAuT9O.jpg',
              thumbnail: 'https://imgur.com/nZAuT9O.jpg',
              thumbnailWidth: 640,
              caption: 'Turquoise and Pastel Blue Mug',
            },
            {
              src: 'https://imgur.com/cjzhH9e.jpg',
              thumbnail: 'https://imgur.com/cjzhH9e.jpg',
              thumbnailWidth: 640,
              caption: 'Zebra Carved Bowl',
            },
            {
              src: 'https://imgur.com/5kliG5j.jpg',
              thumbnail: 'https://imgur.com/5kliG5j.jpg',
              thumbnailWidth: 640,
              caption: 'Espresso Mug',
            },
            {
              src: 'https://imgur.com/XIqa49r.jpg',
              thumbnail: 'https://imgur.com/XIqa49r.jpg',
              thumbnailWidth: 640,
              caption: 'Red and White Carved Mug',
            },
            {
              src: 'https://imgur.com/vdCKeLh.jpg',
              thumbnail: 'https://imgur.com/vdCKeLh.jpg',
              thumbnailWidth: 640,
              caption: 'Red and Black Mug',
            },
            {
              src: 'https://imgur.com/htrRZ0f.jpg',
              thumbnail: 'https://imgur.com/htrRZ0f.jpg',
              thumbnailWidth: 640,
              caption: 'Speckled Pot',
            },
            {
              src: 'https://imgur.com/EJuoBds.jpg',
              thumbnail: 'https://imgur.com/EJuoBds.jpg',
              thumbnailWidth: 640,
              caption: 'Cigar Ash Tray',
            },
            {
              src: 'https://imgur.com/KxAFnn9.jpg',
              thumbnail: 'https://imgur.com/KxAFnn9.jpg',
              thumbnailWidth: 640,
              caption: 'Togepi Tumbler',
            },
            {
              src: 'https://imgur.com/0VrzL4V.jpg',
              thumbnail: 'https://imgur.com/0VrzL4V.jpg',
              thumbnailWidth: 640,
              caption: 'Turquoise and Brown Tumbler',
            },
            {
              src: 'https://imgur.com/js0Mx14.jpg',
              thumbnail: 'https://imgur.com/js0Mx14.jpg',
              thumbnailWidth: 640,
              caption: 'Ceramic Lamp',
            },
          ],
        },
      ],
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
