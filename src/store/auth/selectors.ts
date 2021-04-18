import { StoreState } from '../types';

const getIsAuthenticated = (state: StoreState): boolean =>
  state.auth.isAuthenticated;

const getIsLoading = (state: StoreState): boolean => state.auth.isLoading;

const getErrors = (state: StoreState): object => state.auth.errors;

export const authSelectors = {
  getIsLoading,
  getIsAuthenticated,
  getErrors,
};
