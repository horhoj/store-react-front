import { StoreState } from '../types';
import { ProductType } from './types';

export const getProduct = (state: StoreState): ProductType =>
  state.product.product;

export const getIsLoading = (state: StoreState): boolean =>
  state.product.isLoading;

export const getError = (state: StoreState): number | null =>
  state.product.error;

export const getRedirectToProductList = (state: StoreState): boolean =>
  state.product.redirectToProductList;
