import { AxiosRequestConfig } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { ProductsResponseSchema } from '../../../types/products';

export const getProductsRequest = async (...arg: any[]) => {
  const requestConfig: AxiosRequestConfig = {
    url: '/products',
    method: 'get',
  };

  const response = await ajaxRequestWithAuthHeader(requestConfig);
  await ProductsResponseSchema.validate(response?.data);

  return response;
};
