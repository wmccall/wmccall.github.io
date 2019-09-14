import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  // {
  //   title: 'Tux and Frost',
  //   photoElements: [
  //     { src: 'https://imgur.com/Bmd2IWP.jpg', caption: 'Starting the Build' },
  //     {
  //       src: 'https://imgur.com/0QhapEh.jpg',
  //       caption: 'Placing the Clear Switches',
  //     },
  //     {
  //       src: 'https://imgur.com/WJE6VF2.jpg',
  //       caption: 'Placing the Brown Switches',
  //     },
  //     { src: 'https://imgur.com/08NrPhn.jpg', caption: 'Soldering' },
  //     { src: 'https://imgur.com/UEY3uKg.jpg', caption: 'Finshed Keyboards' },
  //     { src: 'https://imgur.com/reBKTrr.jpg', caption: 'Tux' },
  //     { src: 'https://imgur.com/ByFumyi.jpg', caption: 'Frost' },
  //   ],
  // },
  {
    title: 'Mint',
    photoElements: [
      { src: 'https://imgur.com/aYUlcvr.jpg', caption: 'Starting the Build' },
      {
        src: 'https://imgur.com/j3Uiz0D.jpg',
        caption: 'Preparing to Solder',
      },
      {
        src: 'https://imgur.com/0H9VL38.jpg',
        caption: 'Soldering the LEDs',
      },
      { src: 'https://imgur.com/fA85p5I.jpg', caption: 'Testing the LEDs' },
      { src: 'https://imgur.com/ayUXth3.jpg', caption: 'All Done' },
      { src: 'https://imgur.com/yoWGUIR.jpg', caption: 'Custom Coiled Cable' },
      { src: 'https://imgur.com/PJtqI9n.jpg', caption: 'Left Macro' },
      { src: 'https://imgur.com/O0j7vny.jpg', caption: 'Right Macro' },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
