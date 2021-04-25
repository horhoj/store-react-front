import { StoreState } from '../types';

export const getProduct = (state: StoreState) => state.product.product;

export const getIsLoading = (state: StoreState) => state.product.isLoading;

export const getError = (state: StoreState) => state.product.error;
