import { AxiosRequestConfig } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';

export const userDataRequest = async () => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/user',
    method: 'get',
  };

  return await ajaxRequestWithAuthHeader(requestConfig);
};
