import { ProductEntityType } from '../../types/products';

export enum ProductActionType {
  SET_PRODUCT = 'PRODUCT/SET_PRODUCT',
  SET_IS_LOADING = 'PRODUCT/SET_IS_LOADING',
  GET_PRODUCT = 'PRODUCT/GET_PRODUCT',
  SET_ERROR = 'PRODUCT/SET_ERROR',
}

export interface ProductState {
  product: ProductType;
  isLoading: boolean;
  error: number | null;
}

export type ProductType = ProductEntityType | null;

export interface ProductAction<T = any> {
  type: ProductActionType;
  payload: T;
}

export type SetProduct = ProductAction<{
  product: ProductType;
}>;

export type SetIsLoading = ProductAction<{
  isLoading: boolean;
}>;

export type GetProduct = ProductAction<{
  id: number;
}>;

export type SetError = ProductAction<{
  error: number;
}>;
