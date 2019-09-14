import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: null,
    photoElements: [
      { src: 'https://imgur.com/PCNAF3u.png', caption: 'SWAT Profile' },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
