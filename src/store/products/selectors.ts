import { StoreState } from '../types';
import { ProductsType } from './types';

export const getProducts = (state: StoreState): ProductsType =>
  state.products.products;

export const getIsLoading = (state: StoreState): boolean =>
  state.products.isLoading;

export const getError = (state: StoreState): number | null =>
  state.products.error;
