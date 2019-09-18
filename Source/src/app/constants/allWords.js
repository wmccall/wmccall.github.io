import projects from './projects';
import interests from './interests';
import skills from './skills';

const allWords = () =>
  [...projects, ...interests, ...skills].sort((a, b) => {
    if (a.word.toLowerCase() < b.word.toLowerCase()) {
      return -1;
    }
    if (a.word.toLowerCase() > b.word.toLowerCase()) {
      return 1;
    }
    return 0;
  });

export default allWords;
