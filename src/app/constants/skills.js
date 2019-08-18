export const SKILLS_WORDS = {
  React: 'Web Development',
  Python: 'Language',
  AWS: 'Infrastructure',
  Javascript: 'Language',
  Git: 'Version-Control',
  'C#': 'Language',
  Terraform: 'Infrastructure',
  CSS: 'Web Development',
  Serverless: 'Infrastructure',
  Java: 'Language',
  Docker: 'Infrastructure',
};

export default Object.keys(SKILLS_WORDS).map(word => ({
  type: 'skill',
  word,
  tag: SKILLS_WORDS[word],
}));
