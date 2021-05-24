import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  CategoryEntitySchema,
  CategoryEntityType,
} from '../../../types/category';
import { ajaxRequestWithAuthHeader } from '../../transport';

export const getCategoryRequest = async (
  id: number,
): Promise<AxiosResponse<CategoryEntityType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: `/categories/${id}`,
    method: 'get',
  };

  const response: AxiosResponse<CategoryEntityType> =
    await ajaxRequestWithAuthHeader(requestConfig);
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
