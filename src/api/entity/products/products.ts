import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { ProductsResponseSchema } from '../../../types/products';
import { GetProductsRequestConfig } from './types';

export const getProductsRequest = async (
  getProductsRequestConfig: GetProductsRequestConfig,
): Promise<AxiosResponse | undefined> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/products',
    method: 'get',
    params: getProductsRequestConfig,
  };

  const response: AxiosResponse | undefined = await ajaxRequestWithAuthHeader(
    requestConfig,
  );
  await ProductsResponseSchema.validate(response?.data);

  return response;
};
