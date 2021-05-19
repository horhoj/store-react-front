import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { UserEntityType, UserResponseSchema } from '../../../types/user';

export const userDataRequest = async (): Promise<
  AxiosResponse<UserEntityType>
> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/user',
    method: 'get',
  };

  const response: AxiosResponse<UserEntityType> =
    await ajaxRequestWithAuthHeader(requestConfig);
  await UserResponseSchema.validate(response?.data);
  return response;
};
