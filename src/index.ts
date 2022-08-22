import { TestExport } from "./export-test.d";
import NoConstEnumTypes = NoConstEnumOnly;
import ConstEnumTypes = ConstEnumOnly;

import NoConstEnumNamespaceTypes = NoConstEnumNamespace;
import ConstEnumNamespaceTypes = ConstEnumNamespace;

import OtherNamespaceTypes = OtherNamespace;

const a = NoConstEnumOnly.a;
const constA = ConstEnumOnly.a;

const aCopy = NoConstEnumTypes.a;
const constACopy = ConstEnumTypes.a;

const a2 = NoConstEnumNamespace.NoConstEnum.a;
const constA2 = ConstEnumNamespace.ConstEnum.a;

const a2Copy = NoConstEnumNamespaceTypes.NoConstEnum.a;
const constA2Copy = ConstEnumNamespaceTypes.ConstEnum.a;

const otherA = OtherNamespace.NoConstEnum.a;
const otherConstA = OtherNamespace.ConstEnum.a;

const otherACopy = OtherNamespaceTypes.NoConstEnum.a;
const otherConstACopy = OtherNamespaceTypes.ConstEnum.a;

/** 一个类型 在另一个声明文件 import 使用 然后直接使用枚举 */
const otherAGlobalCopy = _OhterNamespace.NoConstEnum.a;
const otherConstAGlobalCopy = _OhterNamespace.ConstEnum.a;

const importA = TestExport.a;

if (
  [
    a,
    constA,
    aCopy,
    constACopy,
    a2,
    constA2,
    a2Copy,
    constA2Copy,
    otherA,
    otherConstA,
    otherACopy,
    otherConstACopy,
    otherAGlobalCopy,
    otherConstAGlobalCopy,
  ].every(Boolean)
) {
  console.info('log');
}
