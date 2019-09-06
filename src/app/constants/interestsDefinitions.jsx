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
      albums: [
        {
          title: 'BKLYN CLAY Work [2019]',
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
              src: 'https://imgur.com/0VrzL4V.jpg',
              thumbnail: 'https://imgur.com/0VrzL4V.jpg',
              thumbnailWidth: 640,
              caption: 'Turquoise and Brown Tumbler',
            },
          ],
        },
        {
          title: 'RIT Course Work [2018]',
          photoElements: [
            {
              src: 'https://imgur.com/omVBdW3.jpg',
              thumbnail: 'https://imgur.com/omVBdW3.jpg',
              thumbnailWidth: 640,
              caption: 'Blue Dip Mugs',
            },
            {
              src: 'https://imgur.com/N3RhFBV.jpg',
              thumbnail: 'https://imgur.com/N3RhFBV.jpg',
              thumbnailWidth: 640,
              caption: 'Blue Dip Mug',
            },
            {
              src: 'https://imgur.com/KxAFnn9.jpg',
              thumbnail: 'https://imgur.com/KxAFnn9.jpg',
              thumbnailWidth: 640,
              caption: 'Togepi Tumbler',
            },
            {
              src: 'https://imgur.com/js0Mx14.jpg',
              thumbnail: 'https://imgur.com/js0Mx14.jpg',
              thumbnailWidth: 640,
              caption: 'Ceramic Lamp',
            },
            {
              src: 'https://imgur.com/mYn53NX.jpg',
              thumbnail: 'https://imgur.com/mYn53NX.jpg',
              thumbnailWidth: 640,
              caption: 'Color Band Mugs',
            },
            {
              src: 'https://imgur.com/dmMAOuw.jpg',
              thumbnail: 'https://imgur.com/dmMAOuw.jpg',
              thumbnailWidth: 640,
              caption: 'Blue Dip Pourers',
            },
            {
              src: 'https://imgur.com/sHIMDiZ.jpg',
              thumbnail: 'https://imgur.com/sHIMDiZ.jpg',
              thumbnailWidth: 640,
              caption: 'Unglazed Mugs',
            },
          ],
        },
        {
          title: 'Community Arts Center Work [2014]',
          photoElements: [
            {
              src: 'https://imgur.com/JmOWbow.jpg',
              thumbnail: 'https://imgur.com/JmOWbow.jpg',
              thumbnailWidth: 640,
              caption: 'Eye Bowl',
            },

            {
              src: 'https://imgur.com/LAGfyVD.jpg',
              thumbnail: 'https://imgur.com/LAGfyVD.jpg',
              thumbnailWidth: 640,
              caption: 'Green Mug',
            },
            {
              src: 'https://imgur.com/WOZCwMH.jpg?1',
              thumbnail: 'https://imgur.com/WOZCwMH.jpg?1',
              thumbnailWidth: 640,
              caption: 'Tall Dish',
            },

            {
              src: 'https://imgur.com/vEMhfqL.jpg?1',
              thumbnail: 'https://imgur.com/vEMhfqL.jpg?1',
              thumbnailWidth: 640,
              caption: "Blue Hare's Fur Pieces",
            },

            {
              src: 'https://imgur.com/hZsgeXF.jpg',
              thumbnail: 'https://imgur.com/hZsgeXF.jpg',
              thumbnailWidth: 640,
              caption: 'Colorful Dishes',
            },
            {
              src: 'https://imgur.com/LT8y2xo.jpg?1',
              thumbnail: 'https://imgur.com/LT8y2xo.jpg?1',
              thumbnailWidth: 640,
              caption: 'Colorful Dishes',
            },
            {
              src: 'https://imgur.com/IVonQEY.jpg',
              thumbnail: 'https://imgur.com/IVonQEY.jpg',
              thumbnailWidth: 640,
              caption: 'Striped Plate',
            },
            {
              src: 'https://imgur.com/0HeiCix.jpg',
              thumbnail: 'https://imgur.com/0HeiCix.jpg',
              thumbnailWidth: 640,
              caption: 'Beginning Pieces',
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
