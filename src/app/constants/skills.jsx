import React from 'react';

const SKILLS_WORDS = [
  { word: 'React', tags: ['Web Development'] },
  { word: 'Python', tags: ['Language'] },
  { word: 'AWS', tags: ['Infrastructure'] },
  { word: 'Javascript', tags: ['Language'] },
  { word: 'Git', tags: ['Version-Control'] },
  { word: 'C#', tags: ['Language'] },
  { word: 'Terraform', tags: ['Infrastructure'] },
  { word: 'CSS', tags: ['Web Development'] },
  { word: 'Serverless', tags: ['Infrastructure'] },
  { word: 'Java', tags: ['Language'] },
  { word: 'Docker', tags: ['Infrastructure'] },
];

const skills = SKILLS_WORDS.map(wordObject => ({
  type: 'skill',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export const skillDefinitions = {
  Language: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈlaNGɡwij/',
    description: (
      <div>
        I started working with programming languages in 2011 when I took my
        first Java course. I then spent the most of my time working with Java
        off and on again up until 2016 when I was formally introduced to Python
        and C#. Python quickly became my favorite language to work with because
        of its ease in prototyping and quick scripting. Most recently I have
        been using Javascript to work with React to build webpages personally
        and professionally.
      </div>
    ),
  },
  'Web Development': {
    partOfSpeech: 'noun',
    pronunciation: '/web dəˈveləpmənt/',
    description: <div></div>,
  },
  Infrastructure: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈinfrəˌstrək(t)SHər/',
    description: <div></div>,
  },
  'Version-Control': {
    partOfSpeech: 'noun',
    pronunciation: '/ˈvərZHən kənˈtrōl/',
    description: <div></div>,
  },
};

export default skills;
