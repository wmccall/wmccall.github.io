import pseudoCode from '../components/PseudoCode';

// Distribute the words into the background code with
// filler code to take up more space
const backgroundCode = words => {
  const allCode = [];
  let wordCount = 0;
  for (let codeCount = 0; wordCount < words.length; codeCount += 1) {
    if (codeCount % 13 === 0) {
      allCode.push(
        pseudoCode.pseudoImport(words[wordCount], {
          type: 'none',
          word: 'react',
        }),
      );
      wordCount += 1;
    }
    if (codeCount % 11 === 0) {
      allCode.push(pseudoCode.pseudoMethodCall(words[wordCount]));
      wordCount += 1;
    }
    // filler below
    if (codeCount % 3 === 0) {
      allCode.push(pseudoCode.pseudoReturnMethod());
    }
    if (codeCount % 4 === 0) {
      allCode.push(pseudoCode.pseudoReturnString());
    }
    if (codeCount % 10 === 0) {
      allCode.push(pseudoCode.pseudoStringConstDefinition());
    }
  }
  return allCode;
};

export default backgroundCode;
