import React from 'react';

const SKILLS_WORDS = [
  { word: 'React', tag: 'Web Development' },
  { word: 'Python', tag: 'Language' },
  { word: 'AWS', tag: 'Infrastructure' },
  { word: 'Javascript', tag: 'Language' },
  { word: 'Git', tag: 'Version-Control' },
  { word: 'C#', tag: 'Language' },
  { word: 'Terraform', tag: 'Infrastructure' },
  { word: 'CSS', tag: 'Web Development' },
  { word: 'Serverless', tag: 'Infrastructure' },
  { word: 'Java', tag: 'Language' },
  { word: 'Docker', tag: 'Infrastructure' },
];

const skills = SKILLS_WORDS.map(wordObject => ({
  type: 'skill',
  word: wordObject.word,
  tag: wordObject.tag,
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
