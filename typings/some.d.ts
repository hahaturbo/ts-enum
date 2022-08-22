import _OhterNamespace = OtherNamespace;

declare enum NoConstEnumOnly {
  a,
}

declare namespace NoConstEnumNamespace {
  export enum NoConstEnum {
    a,
  }
}

declare const enum ConstEnumOnly {
  a,
}

declare namespace ConstEnumNamespace {
  export const enum ConstEnum {
    a,
  }
}
