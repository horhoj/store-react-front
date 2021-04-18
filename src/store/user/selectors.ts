import { StoreState } from '../types';

const getIsAuthenticated = (state: StoreState): boolean =>
  state.user.isAuthenticated;

const getIsLoading = (state: StoreState): boolean => state.user.isLoading;

export const userSelectors = {
  getIsLoading,
  getIsAuthenticated,
};
