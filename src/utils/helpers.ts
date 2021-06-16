// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getHTTPStatusFromError = (e: any): number =>
  e.response ? e.response.status : 0;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getErrorDataFromError = (e: any): any =>
  e.response ? e.response.data : null;
