import { StoreState } from '../types';

export const getIsAuthenticated = (state: StoreState): boolean =>
  state.auth.isAuthenticated;

export const getIsLoading = (state: StoreState): boolean =>
  state.auth.isLoading;

export const getErrors = (state: StoreState): object => state.auth.errors;
