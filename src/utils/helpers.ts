export const getHTTPStatusFromError = (e: any) =>
  e.response ? e.response.status : 0;
