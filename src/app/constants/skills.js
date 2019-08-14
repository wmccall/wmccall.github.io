const SKILLS_WORDS = [
  { word: 'Java', tags: ['language'] },
  { word: 'Python', tags: ['language'] },
  { word: 'React', tags: ['web development'] },
  { word: 'CSS', tags: ['web development'] },
  { word: 'AWS', tags: ['infrastructure'] },
  { word: 'Git', tags: ['version-control'] },
  { word: 'C#', tags: ['language'] },
  { word: 'Terraform', tags: ['infrastructure'] },
  { word: 'Serverless', tags: ['infrastructure'] },
  { word: 'Docker', tags: ['infrastructure'] },
];

const skills = SKILLS_WORDS.map(wordObject => ({
  type: 'skill',
  word: wordObject.word,
  tags: wordObject.tags,
}));

export default skills;
