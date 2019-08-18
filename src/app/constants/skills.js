const SKILLS_WORDS = {
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

const skills = Object.keys(SKILLS_WORDS).map(word => ({
  type: 'skill',
  word,
  tag: SKILLS_WORDS[word],
}));

export const skillObjects = skills.reduce((obj, item) => {
  // eslint-disable-next-line no-param-reassign
  obj[item.word] = item;
  return obj;
}, {});

export default skills;
