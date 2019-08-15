const SKILLS_WORDS = [
  { word: 'Java', tags: ['Languages'] },
  { word: 'Python', tags: ['Languages'] },
  { word: 'React', tags: ['Web Development'] },
  { word: 'CSS', tags: ['Web Development'] },
  { word: 'AWS', tags: ['Infrastructure'] },
  { word: 'Git', tags: ['Version-Control'] },
  { word: 'C#', tags: ['Languages'] },
  { word: 'Terraform', tags: ['Infrastructure'] },
  { word: 'Serverless', tags: ['Infrastructure'] },
  { word: 'Docker', tags: ['Infrastructure'] },
];

const skills = SKILLS_WORDS.map(wordObject => ({
  type: 'skill',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default skills;
