import { ProductsResponseType } from '../../types/products';
import { GetProductsRequestConfig } from '../../api/entity/products/types';

export enum ProductsActionType {
  SET_PRODUCTS = 'PRODUCTS/SET_PRODUCTS',
  SET_IS_LOADING = 'PRODUCTS/SET_IS_LOADING',
  GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS',
  SET_ERROR = 'PRODUCTS/SET_ERROR',
  SET_REQUEST_CONFIG_DIFF = 'PRODUCTS/SET_REQUEST_CONFIG_DIFF',
  DELETE_PRODUCT = 'PRODUCTS/DELETE_PRODUCT',
}

export type ProductsType = ProductsResponseType | null;

export interface ProductsState {
  products: ProductsType;
  isLoading: boolean;
  error: number | null;
  requestConfig: GetProductsRequestConfig;
}

export type ProductsAction =
  | SetProducts
  | SetIsLoading
  | GetProducts
  | SetError
  | SetRequestConfigDiff
  | DeleteProduct;

export interface SetProducts {
  type: ProductsActionType.SET_PRODUCTS;
  payload: {
    products: ProductsType;
  };
}

export interface SetIsLoading {
  type: ProductsActionType.SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export interface GetProducts {
  type: ProductsActionType.GET_PRODUCTS;
  payload: {
    getProductsRequestConfig: Partial<GetProductsRequestConfig>;
  };
}

export interface SetError {
  type: ProductsActionType.SET_ERROR;
  payload: {
    error: number | null;
  };
}

export interface SetRequestConfigDiff {
  type: ProductsActionType.SET_REQUEST_CONFIG_DIFF;
  payload: {
    requestConfigDiff: Partial<GetProductsRequestConfig>;
  };
}

export interface DeleteProduct {
  type: ProductsActionType.DELETE_PRODUCT;
  payload: {
    id: number;
  };
}
