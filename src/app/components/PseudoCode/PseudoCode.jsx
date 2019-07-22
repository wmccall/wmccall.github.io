import React from 'react';
import PseudoReserved from './PseudoReserved';
import PseudoGlobal from './PseudoGlobal';
import PseudoString from './PseudoString';

const pseudoCode = code => <div className="pseudo-code">{code}</div>;

const pseudoImport = (pseudoModule, pseudoPackage) =>
  pseudoCode([
    <PseudoReserved word={{ type: 'none', word: 'import' }} />,
    <PseudoGlobal word={pseudoModule} />,
    <PseudoReserved word={{ type: 'none', word: 'from' }} />,
    <PseudoString word={pseudoPackage} last />,
  ]);

// const pseudoImport = (pseudoModule, pseudoPackage) =>

export default { pseudoImport };
