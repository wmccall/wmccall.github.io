import achievements from './achievements';
import interests from './interests';
import skills from './skills';

const allWords = () => {
  const all = [];
  const allTypes = [achievements, interests, skills].sort((a, b) => {
    return a.length >= b.length ? -1 : 1;
  });

  const firstPeriod = Math.floor(allTypes[0].length / (allTypes[1].length + 1));
  const secondPeriod = Math.floor(
    allTypes[1].length / (allTypes[2].length + 1),
  );
  const firstHalfDifference = (allTypes[0].length - allTypes[1].length) / 2;
  const secondHalfDifference = (allTypes[1].length - allTypes[2].length) / 2;
  let second = 0;
  let third = 0;
  for (let first = 0; first < allTypes[0].length; first += 1) {
    if (
      first >= firstHalfDifference &&
      first % firstPeriod === 0 &&
      second < allTypes[1].length
    ) {
      all.push(allTypes[1][second]);
      second += 1;
    }
    if (
      second >= secondHalfDifference &&
      second % secondPeriod === 0 &&
      third < allTypes[2].length
    ) {
      all.push(allTypes[2][third]);
      third += 1;
    }
    all.push(allTypes[0][first]);
  }
  return all;
};

export default allWords;
