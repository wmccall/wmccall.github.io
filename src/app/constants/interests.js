const INTERESTS_WORDS = [
  { word: 'Ceramics', tags: ['Art'] },
  { word: 'Photography', tags: ['Art'] },
  { word: 'Illustrator', tags: ['Art'] },
  { word: 'Photoshop', tags: ['Art'] },
  { word: 'Music', tags: ['Entertainment'] },
  { word: 'Movies', tags: ['Entertainment'] },
  { word: 'Video Games', tags: ['Entertainment'] },
];

const interests = INTERESTS_WORDS.map(wordObject => ({
  type: 'interest',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default interests;
