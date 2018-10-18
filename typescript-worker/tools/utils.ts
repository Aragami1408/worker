import * as R from "ramda";

export const containsSublist = (blacklist: string[], checking: string[]) =>
  R.intersection(blacklist.map(R.toLower), checking.map(R.toLower)).length !== 0;

export const toPromise = async <T, K> (func: (T, args) => K) => R.curry(func);