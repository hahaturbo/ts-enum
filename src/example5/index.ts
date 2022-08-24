//
// import { BabelPartialConstEnum, BabelPartialEnum, BabelPartialNamespace, BabelPartialConstNamespace } from './partial';
//
import {
  BabelPartialConstEnum,
  BabelPartialEnum,
  BabelPartialNamespace,
  BabelPartialConstNamespace,
} from './partial.d';

const enum Test {
  A,
}

const testA = Test.A;

const babelPartialA = BabelPartialEnum.A;
const babelPartialB = BabelPartialEnum.B;

const babelPartialNamespaceA = BabelPartialNamespace.BabelPartialEnum.A;
const babelPartialNamespaceB = BabelPartialNamespace.BabelPartialEnum.B;

const babelGlobalA = BabelNotConstEnum.A;
const babelGlobalB = BabelNotConstEnum.B;

const babelGlobalNamespaceB = BabelNotConstNamespace.BabelNotConstEnum.B;
const babelGlobalNamespaceA = BabelNotConstNamespace.BabelNotConstEnum.A;

const babelPartialConstA = BabelPartialConstEnum.A;
const babelPartialConstB = BabelPartialConstEnum.B;

const babelPartialConstNamespaceA = BabelPartialConstNamespace.BabelPartialConstEnum.A;
const babelPartialConstNamespaceB = BabelPartialConstNamespace.BabelPartialConstEnum.B;

const babelGlobalConstA = BabelConstEnum.A;
const babelGlobalConstB = BabelConstEnum.B;

const babelGlobalConstNamespaceA = BabelConstNamespace.BabelConstEnum.A;
const babelGlobalConstNamespaceB = BabelConstNamespace.BabelConstEnum.B;
