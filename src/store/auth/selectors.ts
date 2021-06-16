import { StoreState } from '../types';
import { Error, ErrorData } from './types';

export const getIsAuthenticated = (state: StoreState): boolean =>
  state.auth.isAuthenticated;

export const getIsLoading = (state: StoreState): boolean =>
  state.auth.isLoading;

export const getError = (state: StoreState): Error => state.auth.error;

export const getErrorData = (state: StoreState): ErrorData =>
  state.auth.errorData;
