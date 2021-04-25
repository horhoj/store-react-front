import {
  GetProduct,
  ProductActionType,
  ProductType,
  SetError,
  SetIsLoading,
  SetProduct,
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

export const setError = (error: number): SetError => ({
  type: ProductActionType.SET_ERROR,
  payload: {
    error,
  },
});
