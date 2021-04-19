import { AxiosRequestConfig } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { UserResponseSchema } from '../../../types/user';

export const userDataRequest = async () => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/user',
    method: 'get',
  };

  const response = await ajaxRequestWithAuthHeader(requestConfig);
  await UserResponseSchema.validate(response?.data);
  return response;
};
