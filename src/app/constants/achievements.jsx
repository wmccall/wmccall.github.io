import React from 'react';

const ACHIEVEMENTS_WORDS = [
  { word: 'RIT Presidential Scholarship', tag: 'Academic' },
  { word: '{DeansList:[2015,2016,2017,2018,2019]}', tag: 'Academic' },
];

const achievements = ACHIEVEMENTS_WORDS.map(wordObject => ({
  type: 'achievement',
  word: wordObject.word,
  tag: wordObject.tag,
}));

export const achievementDefinitions = {
  Academic: {
    partOfSpeech: 'noun',
    pronunciation: '/ˌakəˈdemik/',
    description: <div></div>,
  },
};

export default achievements;
