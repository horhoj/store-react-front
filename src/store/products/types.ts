import { ProductsResponseType } from '../../types/products';
import { GetProductsRequestConfig } from '../../api/entity/products/types';
import { SagaReturnType } from 'redux-saga/effects';
import { getProductsRequest } from '../../api/entity/products';

export enum ProductsActionType {
  SET_PRODUCTS = 'PRODUCTS/SET_PRODUCTS',
  SET_IS_LOADING = 'PRODUCTS/SET_IS_LOADING',
  GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS',
  SET_ERROR = 'PRODUCTS/SET_ERROR',
  SET_REQUEST_CONFIG_DIFF = 'PRODUCTS/SET_REQUEST_CONFIG_DIFF',
}

export interface ProductsState {
  products: ProductsType;
  isLoading: boolean;
  error: number | null;
  requestConfig: GetProductsRequestConfig;
}

export interface ProductsAction<T = any> {
  type: ProductsActionType;
  payload: T;
}

export type GetProductsRequest = SagaReturnType<typeof getProductsRequest>;

export type ProductsType = ProductsResponseType | null;

export type SetProducts = ProductsAction<{ products: ProductsType }>;

export type SetIsLoading = ProductsAction<{ isLoading: boolean }>;

export type GetProducts = ProductsAction<{
  getProductsRequestConfig: Partial<GetProductsRequestConfig>;
}>;

export type SetError = ProductsAction<{ error: number | null }>;

export type SetRequestConfigDiff = ProductsAction<{
  requestConfigDiff: Partial<GetProductsRequestConfig>;
}>;
