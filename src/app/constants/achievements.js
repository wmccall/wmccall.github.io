const ACHIEVEMENTS_WORDS = [
  'RIT_Presidential_Scholarship',
  '{DeansList:[2015,2016,2017,2018]}',
];

const achievements = ACHIEVEMENTS_WORDS.map(word => ({
  type: 'achievement',
  word,
}));

export default achievements;
