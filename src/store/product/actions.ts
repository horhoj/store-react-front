import { ProductEntityType } from '../../types/product';
import {
  AddProduct,
  Clear,
  GetProduct,
  ProductActionType,
  ProductType,
  SetError,
  SetIsLoading,
  SetProduct,
  UpdateProduct,
} from './types';

export const setProduct = (product: ProductType): SetProduct => ({
  type: ProductActionType.SET_PRODUCT,
  payload: {
    product,
  },
});

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: ProductActionType.SET_IS_LOADING,
  payload: {
    isLoading,
  },
});

export const getProduct = (id: number): GetProduct => ({
  type: ProductActionType.GET_PRODUCT,
  payload: {
    id,
  },
});

export const setError = (error: number | null): SetError => ({
  type: ProductActionType.SET_ERROR,
  payload: {
    error,
  },
});

export const updateProduct = (
  productData: ProductEntityType,
): UpdateProduct => ({
  type: ProductActionType.UPDATE_PRODUCT,
  payload: {
    productData,
  },
});

export const addProduct = (productData: ProductEntityType): AddProduct => ({
  type: ProductActionType.ADD_PRODUCT,
  payload: {
    productData,
  },
});

export const clear = (): Clear => ({
  type: ProductActionType.CLEAR,
  payload: null,
});
