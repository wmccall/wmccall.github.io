const INTERESTS_WORDS = [
  { word: 'ceramics', tags: ['art'] },
  { word: 'photography', tags: ['art'] },
  { word: 'illustrator', tags: ['art'] },
  { word: 'photoshop', tags: ['art'] },
  { word: 'music', tags: ['entertainment'] },
  { word: 'movies', tags: ['entertainment'] },
  { word: 'video games', tags: ['entertainment'] },
];

const interests = INTERESTS_WORDS.map(wordObject => ({
  type: 'interest',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default interests;
