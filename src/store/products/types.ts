import { ProductsResponseType } from '../../types/products';

export enum ProductsActionType {
  SET_PRODUCTS = 'PRODUCTS/SET_PRODUCTS',
  SET_IS_LOADING = 'PRODUCTS/SET_IS_LOADING',
  GET_PRODUCTS = 'PRODUCTS/GET_PRODUCTS',
  SET_ERROR = 'PRODUCTS/SET_ERROR',
}

export interface ProductsState {
  products: ProductsType;
  isLoading: boolean;
  error: number | null;
}

export interface ProductsAction<T = any> {
  type: ProductsActionType;
  payload: T;
}

export type ProductsType = ProductsResponseType | null;

export type SetProducts = ProductsAction<{ products: ProductsType }>;

export type SetIsLoading = ProductsAction<{ isLoading: boolean }>;

export type GetProducts = ProductsAction;

export type SetError = ProductsAction<{ error: number | null }>;
