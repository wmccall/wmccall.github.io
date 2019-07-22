import React from 'react';

const renderWord = word => <div className={word.type}>{word.word}</div>;

const semiColon = last => (last ? <div className="semi-colon">;</div> : null);
const pseudoCode = code => <div className="pseudo-code">{code}</div>;

const pseudoReserved = (word, actionHover, last = false) => (
  <div className={`pseudo-reserved ${actionHover ? 'visible' : 'blur'}`}>
    {renderWord(word)}
    {semiColon(last)}
  </div>
);
const pseudoGlobal = (word, actionHover = false, last = false) => (
  <div className={`pseudo-global ${actionHover ? 'visible' : 'blur'}`}>
    {renderWord(word)}
    {semiColon(last)}
  </div>
);
const pseudoString = (word, actionHover, last = false) => (
  <div className={`pseudo-string ${actionHover ? 'visible' : 'blur'}`}>
    {"'"}
    {renderWord(word)}
    {"'"}
    {semiColon(last)}
  </div>
);
const pseudoMethod = (word, actionHover, last = false) => (
  <div className={`pseudo-method ${actionHover ? 'visible' : 'blur'}`}>
    {renderWord(word)}
    {semiColon(last)}
  </div>
);

const pseudoImport = (pseudoModule, pseudoPackage, actionHovers) =>
  pseudoCode([
    pseudoReserved({ type: 'none', word: 'import' }),
    pseudoGlobal(pseudoModule),
    pseudoReserved({ type: 'none', word: 'from' }),
    pseudoString(pseudoPackage, actionHovers.skillHover, true),
  ]);

// const pseudoImport = (pseudoModule, pseudoPackage) =>

export default { pseudoImport };
