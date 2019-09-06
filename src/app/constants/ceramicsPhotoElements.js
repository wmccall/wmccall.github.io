import photoAlbumsCreator from '../utils/PhotoAlbumsCreator';

const ALBUMS = [
  {
    title: 'BKLYN CLAY Work [2019]',
    photoElements: [
      { src: 'https://imgur.com/bYdxsHx.jpg', caption: 'Starry Night Mug' },
      { src: 'https://imgur.com/JBo3WN0.jpg', caption: 'Caramel and Aqua Mug' },
      { src: 'https://imgur.com/oRPHDTj.jpg', caption: 'Blue and White Mug' },
      { src: 'https://imgur.com/uPB6EiS.jpg', caption: 'Blue and White Plate' },
      { src: 'https://imgur.com/zGTFZO9.jpg', caption: 'Blue and White Bowl' },
      { src: 'https://imgur.com/TBc5n1b.jpg', caption: 'White Carved Mug' },
      { src: 'https://imgur.com/2pm1E3m.jpg', caption: 'Teal Carved Mug' },
      { src: 'https://imgur.com/XAvs7Ji.jpg', caption: 'Carved Speckled Bowl' },
      { src: 'https://imgur.com/0Ncv1ZT.jpg', caption: 'Fish Bone Mug' },
      { src: 'https://imgur.com/cjfWmxh.jpg', caption: 'Black and White Mug' },
      { src: 'https://imgur.com/IepZqtu.jpg', caption: 'Black and White Mugs' },
      { src: 'https://imgur.com/AOTrneV.jpg', caption: 'Tan and Moss Mug' },
      {
        src: 'https://imgur.com/mdY6hLf.jpg',
        caption: 'Turquoise and Brown Mug',
      },
      {
        src: 'https://imgur.com/E4SrFqO.jpg',
        caption: 'Turquoise and Black Mug',
      },
      {
        src: 'https://imgur.com/Ec5M2y7.jpg',
        caption: 'Turquoise and Black Mug',
      },
      {
        src: 'https://imgur.com/nZAuT9O.jpg',
        caption: 'Turquoise and Pastel Blue Mug',
      },
      { src: 'https://imgur.com/cjzhH9e.jpg', caption: 'Zebra Carved Bowl' },
      { src: 'https://imgur.com/5kliG5j.jpg', caption: 'Espresso Mug' },
      {
        src: 'https://imgur.com/XIqa49r.jpg',
        caption: 'Red and White Carved Mug',
      },
      { src: 'https://imgur.com/vdCKeLh.jpg', caption: 'Red and Black Mug' },
      { src: 'https://imgur.com/htrRZ0f.jpg', caption: 'Speckled Pot' },
      { src: 'https://imgur.com/EJuoBds.jpg', caption: 'Cigar Ash Tray' },
      {
        src: 'https://imgur.com/0VrzL4V.jpg',
        caption: 'Turquoise and Brown Tumbler',
      },
    ],
  },
  {
    title: 'RIT Course Work [2018]',
    photoElements: [
      { src: 'https://imgur.com/omVBdW3.jpg', caption: 'Blue Dip Mugs' },
      { src: 'https://imgur.com/N3RhFBV.jpg', caption: 'Blue Dip Mug' },
      { src: 'https://imgur.com/KxAFnn9.jpg', caption: 'Togepi Tumbler' },
      { src: 'https://imgur.com/js0Mx14.jpg', caption: 'Ceramic Lamp' },
      { src: 'https://imgur.com/mYn53NX.jpg', caption: 'Color Band Mugs' },
      { src: 'https://imgur.com/dmMAOuw.jpg', caption: 'Blue Dip Pourers' },
      { src: 'https://imgur.com/sHIMDiZ.jpg', caption: 'Unglazed Mugs' },
    ],
  },
  {
    title: 'Community Arts Center Work [2014]',
    photoElements: [
      { src: 'https://imgur.com/JmOWbow.jpg', caption: 'Eye Bowl' },

      { src: 'https://imgur.com/LAGfyVD.jpg', caption: 'Green Mug' },
      { src: 'https://imgur.com/WOZCwMH.jpg?1', caption: 'Tall Dish' },

      {
        src: 'https://imgur.com/vEMhfqL.jpg?1',
        caption: "Blue Hare's Fur Pieces",
      },

      { src: 'https://imgur.com/hZsgeXF.jpg', caption: 'Colorful Dishes' },
      { src: 'https://imgur.com/LT8y2xo.jpg?1', caption: 'Colorful Dishes' },
      { src: 'https://imgur.com/IVonQEY.jpg', caption: 'Striped Plate' },
      { src: 'https://imgur.com/0HeiCix.jpg', caption: 'Beginning Pieces' },
    ],
  },
];

export default photoAlbumsCreator(ALBUMS);
