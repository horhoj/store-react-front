import {
  GetProducts,
  ProductsActionType,
  ProductsType,
  SetError,
  SetIsLoading,
  SetProducts,
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

export const getProducts = (): GetProducts => ({
  type: ProductsActionType.GET_PRODUCTS,
  payload: null,
});

export const setError = (error: number | null): SetError => ({
  type: ProductsActionType.SET_ERROR,
  payload: {
    error,
  },
});
