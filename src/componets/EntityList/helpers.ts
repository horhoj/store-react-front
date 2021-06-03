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
