import React from 'react';

import PseudoCodeUtils from '../../utils/PseudoCodeUtils';
import PseudoReserved from './PseudoReserved';
import PseudoGlobal from './PseudoGlobal';
import PseudoString from './PseudoString';
import PseudoMethod from './PseudoMethod';

const mockWord = { word: 'theGrid' };

const pseudoCode = code => <div className="pseudo-code">{code}</div>;

const pseudoImport = (moduleName = mockWord, packageName = mockWord) =>
  pseudoCode([
    <PseudoReserved word={{ word: 'import' }} />,
    <PseudoGlobal word={moduleName} />,
    <PseudoReserved word={{ word: 'from' }} />,
    <PseudoString word={packageName} last />,
  ]);

const pseudoMethodCall = (methodName = mockWord, argumentName = mockWord) =>
  pseudoCode([
    <PseudoReserved word={{ word: 'bigVariableName' }} />,
    PseudoCodeUtils.equalsSign,
    <PseudoMethod word={methodName} />,
    PseudoCodeUtils.leftParen,
    <PseudoString word={argumentName} />,
    PseudoCodeUtils.rightParen,
    PseudoCodeUtils.semiColon,
  ]);

const pseudoStringDefinition = (
  pseudoModule = mockWord,
  pseudoPackage = mockWord,
) =>
  pseudoCode([
    <PseudoReserved word={{ word: 'import' }} />,
    <PseudoGlobal word={pseudoModule} />,
    <PseudoReserved word={{ word: 'from' }} />,
    <PseudoString word={pseudoPackage} last />,
  ]);

const pseudoReturnMethod = (methodName = mockWord) =>
  pseudoCode([
    <PseudoGlobal word={{ word: 'return' }} />,
    <PseudoMethod word={methodName} last />,
  ]);

const pseudoReturnString = (stringName = mockWord) =>
  pseudoCode([
    <PseudoGlobal word={{ word: 'return' }} />,
    <PseudoString word={stringName} last />,
  ]);

export default {
  pseudoImport,
  pseudoMethodCall,
  pseudoStringDefinition,
  pseudoReturnMethod,
  pseudoReturnString,
};
