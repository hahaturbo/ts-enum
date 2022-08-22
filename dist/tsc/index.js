import { TestExport } from "./export-test.d";
var NoConstEnumTypes = NoConstEnumOnly;
var NoConstEnumNamespaceTypes = NoConstEnumNamespace;
var OtherNamespaceTypes = OtherNamespace;
var a = NoConstEnumOnly.a;
var constA = 0;
var aCopy = NoConstEnumTypes.a;
var constACopy = 0;
var a2 = NoConstEnumNamespace.NoConstEnum.a;
var constA2 = 0;
var a2Copy = NoConstEnumNamespaceTypes.NoConstEnum.a;
var constA2Copy = 0;
var otherA = OtherNamespace.NoConstEnum.a;
var otherConstA = 0;
var otherACopy = OtherNamespaceTypes.NoConstEnum.a;
var otherConstACopy = 0;
var otherAGlobalCopy = _OhterNamespace.NoConstEnum.a;
var otherConstAGlobalCopy = 0;
var importA = TestExport.a;
if ([
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
].every(Boolean)) {
    console.info('log');
}
//# sourceMappingURL=index.js.map