import { ProductEntityType } from '../../types/product';

export enum ProductActionType {
  SET_PRODUCT = 'PRODUCT/SET_PRODUCT',
  SET_IS_LOADING = 'PRODUCT/SET_IS_LOADING',
  GET_PRODUCT = 'PRODUCT/GET_PRODUCT',
  SET_ERROR = 'PRODUCT/SET_ERROR',
  UPDATE_PRODUCT = 'PRODUCT/UPDATE_PRODUCT',
  ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT',
  CLEAR = 'PRODUCT/CLEAR',
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
  error: number | null;
}>;

export type UpdateProduct = ProductAction<{
  productData: ProductEntityType;
}>;

export type AddProduct = ProductAction<{
  productData: ProductEntityType;
}>;

export type Clear = ProductAction;
