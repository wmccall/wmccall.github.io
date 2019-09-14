import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: null,
    photoElements: [
      { src: 'https://imgur.com/G09ant4.jpg', caption: 'Poly Headshot' },
      { src: 'https://imgur.com/z3P6Mft.jpg', caption: 'Colin VHS' },
      { src: 'https://imgur.com/n5hjjrP.jpg', caption: 'California Hills' },
      { src: 'https://imgur.com/jYyolYF.jpg', caption: 'Vaporwave Connor' },
      { src: 'https://imgur.com/LUErw0S.jpg', caption: 'Space' },
      { src: 'https://imgur.com/OTiixhs.jpg', caption: 'Crystal Ripple' },
      { src: 'https://imgur.com/0IkV8wM.jpg', caption: 'Sunset' },
      { src: 'https://imgur.com/YHjQFeR.jpg', caption: 'Snow Transition' },
      { src: 'https://imgur.com/gdcHeBl.jpg', caption: "Haven't Peaked" },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
