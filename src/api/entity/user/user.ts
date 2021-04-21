import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { UserResponseSchema } from '../../../types/user';

export const userDataRequest = async (): Promise<AxiosResponse | undefined> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/user',
    method: 'get',
  };

  const response: AxiosResponse | undefined = await ajaxRequestWithAuthHeader(
    requestConfig,
  );
  await UserResponseSchema.validate(response?.data);
  return response;
};
