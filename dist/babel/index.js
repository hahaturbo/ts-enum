"use strict";

var _exportTest = require("./export-test.d");

var a = NoConstEnumOnly.a;
var aCopy = NoConstEnumTypes.a;
var constACopy = 0
/*a*/
;
var a2 = NoConstEnumNamespace.NoConstEnum.a;
var a2Copy = NoConstEnumNamespaceTypes.NoConstEnum.a;
var constA2Copy = 0
/*a*/
;
var otherACopy = OtherNamespaceTypes.NoConstEnum.a;
var otherConstACopy = 0
/*a*/
;
/** 一个类型 在另一个声明文件 import 使用 然后直接使用枚举 */

var otherAGlobalCopy = _OhterNamespace.NoConstEnum.a;
var otherConstAGlobalCopy = _OhterNamespace.ConstEnum.a;
var importA = _exportTest.TestExport.a;

if ([a, constA, aCopy, constACopy, a2, constA2, a2Copy, constA2Copy, otherA, otherConstA, otherACopy, otherConstACopy, otherAGlobalCopy, otherConstAGlobalCopy].every(Boolean)) {
  console.info('log');
}