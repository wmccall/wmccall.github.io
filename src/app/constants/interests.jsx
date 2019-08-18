import React from 'react';

const INTERESTS_WORDS = [
  { word: 'Ceramics', tag: 'Art' },
  { word: 'Photography', tag: 'Art' },
  { word: 'Illustrator', tag: 'Art' },
  { word: 'Photoshop', tag: 'Art' },
  { word: 'Music', tag: 'Entertainment' },
  { word: 'Movies', tag: 'Entertainment' },
  { word: 'Video Games', tag: 'Entertainment' },
];

const interests = INTERESTS_WORDS.map(wordObject => ({
  type: 'interest',
  word: wordObject.word,
  tag: wordObject.tag,
}));

export const interestDefinitions = {
  Art: {
    partOfSpeech: 'noun',
    pronunciation: '/ärt/',
    description: <div></div>,
  },
  Entertainment: {
    partOfSpeech: 'noun',
    pronunciation: '/ˌen(t)ərˈtānmənt/',
    description: <div></div>,
  },
};

export default interests;
