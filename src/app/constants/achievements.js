const ACHIEVEMENTS_WORDS = [
  { word: 'RIT Presidential Scholarship', tags: ['Academics'] },
  { word: '{DeansList:[2015,2016,2017,2018,2019]}', tags: ['Academics'] },
];

const achievements = ACHIEVEMENTS_WORDS.map(wordObject => ({
  type: 'achievement',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default achievements;
