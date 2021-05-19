import { GetCategoriesRequestConfig } from './types';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  CategoryEntityType,
  CategoriesResponseSchema,
  CategoryResponseType,
  CategoryEntitySchema,
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

  await CategoriesResponseSchema.validate(response.data);

  return response;
};

export const deleteCategoryRequest = async (id: number) => {
  const requestConfig: AxiosRequestConfig = {
    url: `/categories/${id}`,
    method: 'delete',
  };

  await ajaxRequestWithAuthHeader(requestConfig);
};

export const getCategoryRequest = async (
  id: number,
): Promise<AxiosResponse<CategoryEntityType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: `/categories/${id}`,
    method: 'get',
  };

  const response: AxiosResponse<CategoryEntityType> = await ajaxRequestWithAuthHeader(
    requestConfig,
  );
  await CategoryEntitySchema.validate(response.data);
  return response;
};

export const updateCategoryRequest = async (
  categoryData: CategoryEntityType,
): Promise<void> => {
  const url = `/categories/${categoryData.id}`;
  const requestConfig: AxiosRequestConfig = {
    url,
    method: 'put',
    data: categoryData,
  };

  await ajaxRequestWithAuthHeader(requestConfig);
};

export const addCategoryRequest = async (
  categoryData: CategoryEntityType,
): Promise<void> => {
  const url = `/categories`;
  const requestConfig: AxiosRequestConfig = {
    url,
    method: 'post',
    data: categoryData,
  };

  await ajaxRequestWithAuthHeader(requestConfig);
};
