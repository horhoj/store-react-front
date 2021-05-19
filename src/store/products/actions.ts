import { GetProductsRequestConfig } from '../../api/entity/products/types';
import {
  DeleteProduct,
  GetProducts,
  ProductsActionType,
  ProductsType,
  SetError,
  SetIsLoading,
  SetProducts,
  SetRequestConfigDiff,
} from './types';

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: ProductsActionType.SET_IS_LOADING,
  payload: {
    isLoading,
  },
});

export const setProducts = (products: ProductsType): SetProducts => ({
  type: ProductsActionType.SET_PRODUCTS,
  payload: {
    products,
  },
});

export const getProducts = (
  getProductsRequestConfig: Partial<GetProductsRequestConfig>,
): GetProducts => ({
  type: ProductsActionType.GET_PRODUCTS,
  payload: {
    getProductsRequestConfig,
  },
});

export const setError = (error: number | null): SetError => ({
  type: ProductsActionType.SET_ERROR,
  payload: {
    error,
  },
});

export const setRequestConfigDiff = (
  requestConfigDiff: Partial<GetProductsRequestConfig>,
): SetRequestConfigDiff => ({
  type: ProductsActionType.SET_REQUEST_CONFIG_DIFF,
  payload: {
    requestConfigDiff,
  },
});

export const deleteProduct = (id: number): DeleteProduct => ({
  type: ProductsActionType.DELETE_PRODUCT,
  payload: {
    id,
  },
});
