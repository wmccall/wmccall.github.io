import { LoremIpsum } from 'lorem-ipsum';

const replaceAll = (word, search, replacement) => {
  return word.split(search).join(replacement);
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default { lorem, replaceAll };
