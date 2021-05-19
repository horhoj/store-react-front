// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getHTTPStatusFromError = (e: any): number =>
  e.response ? e.response.status : 0;
