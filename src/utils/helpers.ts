export const getHTTPStatusFromError = (e: any): number =>
  e.response ? e.response.status : 0;
