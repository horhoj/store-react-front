import { StoreState } from '../types';

const getIsAuthenticated = (state: StoreState): boolean =>
  state.auth.isAuthenticated;

const getIsLoading = (state: StoreState): boolean => state.auth.isLoading;

export const authSelectors = {
  getIsLoading,
  getIsAuthenticated,
};
