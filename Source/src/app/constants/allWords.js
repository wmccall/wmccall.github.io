import projects from './projects';
import interests from './interests';
import skills from './skills';

const allWords = () =>
  [...skills, ...projects, ...interests].sort((a, b) => {
    if (a.tag.toLowerCase() < b.tag.toLowerCase()) {
      return -1;
    }
    if (a.tag.toLowerCase() > b.tag.toLowerCase()) {
      return 1;
    }
    return 0;
  });

export default allWords;
