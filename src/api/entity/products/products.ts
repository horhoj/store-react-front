import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import {
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
