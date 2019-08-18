import React from 'react';

const ACHIEVEMENTS_WORDS = [
  { word: 'RIT Presidential Scholarship', tags: ['Academic'] },
  { word: '{DeansList:[2015,2016,2017,2018,2019]}', tags: ['Academic'] },
];

const achievements = ACHIEVEMENTS_WORDS.map(wordObject => ({
  type: 'achievement',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export const achievementDefinitions = {
  Academic: {
    partOfSpeech: 'noun',
    pronunciation: '/ˌakəˈdemik/',
    description: <div></div>,
  },
};

export default achievements;
