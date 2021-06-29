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

export type ProductAction =
  | SetProduct
  | SetIsLoading
  | GetProduct
  | SetError
  | UpdateProduct
  | AddProduct
  | Clear;

export interface SetProduct {
  type: ProductActionType.SET_PRODUCT;
  payload: {
    product: ProductType;
  };
}

export interface SetIsLoading {
  type: ProductActionType.SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export interface GetProduct {
  type: ProductActionType.GET_PRODUCT;
  payload: {
    id: number;
  };
}

export interface SetError {
  type: ProductActionType.SET_ERROR;
  payload: { error: number | null };
}

export interface UpdateProduct {
  type: ProductActionType.UPDATE_PRODUCT;
  payload: {
    productData: ProductEntityType;
  };
}

export interface AddProduct {
  type: ProductActionType.ADD_PRODUCT;
  payload: {
    productData: ProductEntityType;
  };
}

export interface Clear {
  type: ProductActionType.CLEAR;
  payload: null;
}
