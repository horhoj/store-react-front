import { GetCategoriesRequestConfig } from './types';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  CategoryResponseSchema,
  CategoryResponseType,
} from '../../../types/categories';
import { ajaxRequestWithAuthHeader } from '../../transport';

export const getCategoriesRequest = async (
  getCategoriesRequestConfig: GetCategoriesRequestConfig,
): Promise<AxiosResponse<CategoryResponseType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/categories',
    method: 'get',
    params: getCategoriesRequestConfig,
  };
  const response: AxiosResponse<CategoryResponseType> = await ajaxRequestWithAuthHeader(
    requestConfig,
  );

  await CategoryResponseSchema.validate(response.data);

  return response;
};
