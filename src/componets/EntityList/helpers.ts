import { Items } from './types';

export const sortHelper =
  (fieldName: string) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  (ax: any, bx: any): number => {
    const a = ax[fieldName];
    const b = bx[fieldName];
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  };

export const searchFilter = (
  items: Items,
  searchStr: string,
  fields: string[],
): Items => {
  return items.filter((item) => {
    let result = false;
    const keys = fields;
    for (let i = 0; i < keys.length; i++) {
      const x = String(item[keys[i]]);
      const check = x.toLowerCase().includes(searchStr.trim().toLowerCase());
      result = result || check;
      if (result) {
        return result;
      }
    }
    return result;
  });
};
