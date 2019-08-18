const ACHIEVEMENTS_WORDS = {
  'RIT Presidential Scholarship': 'Academic',
  '{DeansList:[2015,2016,2017,2018,2019]}': 'Academic',
};

const achievements = Object.keys(ACHIEVEMENTS_WORDS).map(word => ({
  type: 'achievement',
  word,
  tag: ACHIEVEMENTS_WORDS[word],
}));

export const achievementObjects = achievements.reduce((obj, item) => {
  // eslint-disable-next-line no-param-reassign
  obj[item.word] = item;
  return obj;
}, {});

export default achievements;
