declare enum BabelNotConstEnum {
  A = 1,
  B,
}

declare namespace BabelNotConstNamespace {
  export enum BabelNotConstEnum {
    A = 1,
    B,
  }
}

declare const enum BabelConstEnum {
  A = 1,
  B,
}

declare namespace BabelConstNamespace {
  export const enum BabelConstEnum {
    A = 1,
    B,
  }
}
