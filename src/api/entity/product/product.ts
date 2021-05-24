import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ajaxRequestWithAuthHeader } from '../../transport';
import { ProductEntitySchema, ProductEntityType } from '../../../types/product';

export const getProductRequest = async (
  id: number,
): Promise<AxiosResponse<ProductEntityType>> => {
  const requestConfig: AxiosRequestConfig = {
    url: `/products/${id}`,
    method: 'get',
  };

  const response: AxiosResponse<ProductEntityType> =
    await ajaxRequestWithAuthHeader(requestConfig);

  await ProductEntitySchema.validate(response.data);

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

export const addProductRequest = async (
  productData: ProductEntityType,
): Promise<void> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/products',
    method: 'post',
    data: productData,
  };

  await ajaxRequestWithAuthHeader(requestConfig);
};
