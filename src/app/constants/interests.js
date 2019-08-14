const INTERESTS_WORDS = [
  { word: 'ceramics', tags: [] },
  { word: 'photography', tags: [] },
  { word: 'illustrator', tags: [] },
  { word: 'photoshop', tags: [] },
  { word: 'music', tags: [] },
  { word: 'movies', tags: [] },
  { word: 'video games', tags: [] },
];

const interests = INTERESTS_WORDS.map(wordObject => ({
  type: 'interest',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default interests;
