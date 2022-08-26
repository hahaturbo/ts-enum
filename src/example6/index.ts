import _BabelDoneConstEnum = BabelDoneConstEnum;
import _BabelDoneNamespace = BabelDoneNamespace;

const noImportA = BabelDoneConstEnum.A;
const noImportB = BabelDoneConstEnum.B;

const noImportNamespaceA = BabelDoneNamespace.BabelDoneConstEnum.A;
const noImportNamespaceB = BabelDoneNamespace.BabelDoneConstEnum.B;

if (2 === BabelDoneConstEnum.A) {
  // dosomething
}

const importA = _BabelDoneConstEnum.A;
const importB = _BabelDoneConstEnum.B;

const importNamespaceA = _BabelDoneNamespace.BabelDoneConstEnum.A;
const importNamespaceB = _BabelDoneNamespace.BabelDoneConstEnum.B;
