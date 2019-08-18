const INTERESTS_WORDS = {
  Ceramics: 'Art',
  Photography: 'Art',
  Illustrator: 'Art',
  Photoshop: 'Art',
  Music: 'Entertainment',
  Movies: 'Entertainment',
  'Video Games': 'Entertainment',
};

export default Object.keys(INTERESTS_WORDS).map(word => ({
  type: 'interest',
  word,
  tag: INTERESTS_WORDS[word],
}));
