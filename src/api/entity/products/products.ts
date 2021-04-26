import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import {
  ProductEntitySchema,
  ProductEntityType,
  ProductsResponseSchema,
  ProductsResponseType,
} from '../../../types/products';
import { GetProductsRequestConfig } from './types';

export const getProductsRequest = async (
  getProductsRequestConfig: GetProductsRequestConfig,
): Promise<AxiosResponse<ProductsResponseType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/products',
    method: 'get',
    params: getProductsRequestConfig,
  };

  const response: AxiosResponse<ProductsResponseType> = await ajaxRequestWithAuthHeader(
    requestConfig,
  );
  await ProductsResponseSchema.validate(response.data);

  return response;
};

export const getProductRequest = async (
  id: number,
): Promise<AxiosResponse<ProductEntityType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: `/products/${id}`,
    method: 'get',
  };

  const response: AxiosResponse<ProductEntityType> = await ajaxRequestWithAuthHeader(
    requestConfig,
  );

  ProductEntitySchema.validate(response.data);

  return response;
};

export const updateProductRequest = async (
  productData: ProductEntityType,
): Promise<void> => {
  const url = `/products/${productData.id}`;
  const requestConfig: AxiosRequestConfig = {
    url,
    method: 'put',
    data: productData,
  };

  await ajaxRequestWithAuthHeader(requestConfig);
};
