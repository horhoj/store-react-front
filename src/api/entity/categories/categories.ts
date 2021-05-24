import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  CategoriesResponseSchema,
  CategoryResponseType,
} from '../../../types/categories';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { GetCategoriesRequestConfig } from './types';

export const getCategoriesRequest = async (
  getCategoriesRequestConfig: GetCategoriesRequestConfig,
): Promise<AxiosResponse<CategoryResponseType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/categories',
    method: 'get',
    params: getCategoriesRequestConfig,
  };
  const response: AxiosResponse<CategoryResponseType> =
    await ajaxRequestWithAuthHeader(requestConfig);

  await CategoriesResponseSchema.validate(response.data);

  return response;
};

export const deleteCategoryRequest = async (id: number): Promise<void> => {
  const requestConfig: AxiosRequestConfig = {
    url: `/categories/${id}`,
    method: 'delete',
  };

  await ajaxRequestWithAuthHeader(requestConfig);
};
