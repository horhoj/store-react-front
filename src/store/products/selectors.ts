import { StoreState } from '../types';
import { ProductsType } from './types';
import { GetProductsRequestConfig } from '../../api/entity/products/types';

export const getProducts = (state: StoreState): ProductsType =>
  state.products.products;

export const getIsLoading = (state: StoreState): boolean =>
  state.products.isLoading;

export const getError = (state: StoreState): number | null =>
  state.products.error;

export const getRequestConfig = (state: StoreState): GetProductsRequestConfig =>
  state.products.requestConfig;
