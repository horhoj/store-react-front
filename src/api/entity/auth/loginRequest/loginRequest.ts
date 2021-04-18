import { UserCredential } from '../../../../types/auth';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequest } from '../../../transport';
import { ACCESS_TOKEN_LS_KEY } from '../../../../config/API';
import { LoginResponse, LoginResponseSchema } from './types';

export const loginRequest = async (
  userCredential: UserCredential,
): Promise<void> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/login',
    data: userCredential,
    method: 'post',
  };
  const response: AxiosResponse<LoginResponse> | undefined = await ajaxRequest(
    requestConfig,
  );
  await LoginResponseSchema.validate(response?.data);
  if (response) localStorage.setItem(ACCESS_TOKEN_LS_KEY, response.data.token);
};
