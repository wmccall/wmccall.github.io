const PROJECTS_WORDS = {
  "Q'd Up": 'Mobile',
  'Quick Search': 'Plugin',
  'This Website': 'Web',
  PictoCrypt: 'Desktop Application',
  BulkPing: 'Desktop Application',
  'Clear Downloads': 'Desktop Application',
  'Program Snapshot': 'Desktop Application',
};

const projects = Object.keys(PROJECTS_WORDS).map(word => ({
  type: 'project',
  word,
  tag: PROJECTS_WORDS[word],
}));

export const projectObjects = projects.reduce((obj, item) => {
  // eslint-disable-next-line no-param-reassign
  obj[item.word] = item;
  return obj;
}, {});

export default projects;
