const INTERESTS_WORDS = [
  { word: 'ceramics', tags: ['Art'] },
  { word: 'photography', tags: ['Art'] },
  { word: 'illustrator', tags: ['Art'] },
  { word: 'photoshop', tags: ['Art'] },
  { word: 'music', tags: ['Entertainment'] },
  { word: 'movies', tags: ['Entertainment'] },
  { word: 'video games', tags: ['Entertainment'] },
];

const interests = INTERESTS_WORDS.map(wordObject => ({
  type: 'interest',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default interests;
