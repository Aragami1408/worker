import * as R from "ramda";
import { Tallied } from "../typings/util";

export const containsSublist = (blacklist: string[], checking: string[]) =>
  R.intersection(blacklist.map(R.toLower), checking.map(R.toLower)).length !== 0;

export const tally = (items: string[]): Tallied => items.reduce((coll, item) => ({
  ...coll,
  [item]: coll[item] === undefined ? 0 : coll[item] + 1
}), {});

export const mapLower = R.map(R.toLower);

export const forEachAsync = async <T>(callback: (item:T) => Promise<any>, iterable: T[]) => {
  // noinspection TsLint (ok there is literally no other way to do this)
  for (const item of iterable) {
    await callback(item);
  }
};
