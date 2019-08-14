import achievements from './achievements';
import interests from './interests';
import skills from './skills';

// This method evenly distributes the words into the code in a predictable
// and reproducible manner
const allWords = () => {
  const all = [];
  // Sort the word sets by size
  const allTypes = [achievements, interests, skills].sort((a, b) => {
    return a.length >= b.length ? -1 : 1;
  });

  // Get how many times the second longest word set goes into the longest
  const firstPeriod = Math.floor(allTypes[0].length / (allTypes[1].length + 1));
  // Get how many times the third longest word set goes into the second longest
  const secondPeriod = Math.floor(
    allTypes[1].length / (allTypes[2].length + 1),
  );
  // Get the dispersing padding of the longest words set for the second longest
  const firstHalfDifference = (allTypes[0].length - allTypes[1].length) / 2;
  // Get the dispersing padding of the second longest words set for the third longest
  const secondHalfDifference = (allTypes[1].length - allTypes[2].length) / 2;

  // Evenly disperse the words
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
