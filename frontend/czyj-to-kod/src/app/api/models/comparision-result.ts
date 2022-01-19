/* tslint:disable */
/* eslint-disable */
export interface ComparisionResult {
  aVariables?: null | Array<string>;
  bVariables?: null | Array<string>;
  commonVariables?: null | Array<string>;
  difference?: null | {
[key: string]: number;
};
  differencesInLanguageWords?: number;
  percentOfSimilarity?: number;
}
