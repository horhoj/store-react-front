import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { UserCredential } from '../../../types/auth';
import { ajaxRequest, ajaxRequestWithAuthHeader } from '../../transport';
import { ACCESS_TOKEN_LS_KEY } from '../../../config/API';
import { SignUpData } from '../../../types/signUp';
import { LoginResponse, LoginResponseSchema } from './types';

export const loginRequest = async (
  userCredential: UserCredential,
): Promise<void> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/login',
    data: userCredential,
    method: 'post',
  };
  const response: AxiosResponse<LoginResponse> = await ajaxRequest(
    requestConfig,
  );
  await LoginResponseSchema.validate(response.data);
  if (response) {
    localStorage.setItem(ACCESS_TOKEN_LS_KEY, response.data.token);
  }
};

export const logoutRequest = async (): Promise<void> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/logout',
    method: 'get',
  };
  await ajaxRequestWithAuthHeader(requestConfig);
  localStorage.removeItem(ACCESS_TOKEN_LS_KEY);
};

export const signUpRequest = async (signUpData: SignUpData): Promise<void> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/auth/register',
    method: 'post',
    data: signUpData,
  };
  await ajaxRequest(requestConfig);
};
