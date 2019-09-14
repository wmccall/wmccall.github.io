import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: null,
    photoElements: [
      { src: 'https://imgur.com/F83ugMV.png', caption: 'Personal Logo' },
      { src: 'https://imgur.com/jWgnrTe.png', caption: 'Personal Logo: RGB' },
      { src: 'https://imgur.com/xwsRs2I.png', caption: 'Personal Logo: Thick' },
      { src: 'https://imgur.com/ziYmW2x.png', caption: 'CODE' },
      { src: 'https://imgur.com/I9oUMdY.png', caption: 'HopHead' },
      { src: 'https://imgur.com/zhrmzaL.png', caption: 'SWAT Logo' },
      { src: 'https://imgur.com/PCNAF3u.png', caption: 'SWAT Profile' },
      { src: 'https://imgur.com/KxbbQn7.png', caption: 'Wallpaper' },
      { src: 'https://imgur.com/YiC2PAa.png', caption: 'Shaqulator' },
      { src: 'https://imgur.com/XD3NXwS.png', caption: "Q'd Up" },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
