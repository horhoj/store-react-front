import { StoreState } from '../types';
import { LoginError } from './types';

export const getIsAuthenticated = (state: StoreState): boolean =>
  state.auth.isAuthenticated;

export const getIsLoading = (state: StoreState): boolean =>
  state.auth.isLoading;

export const getLoginError = (state: StoreState): LoginError =>
  state.auth.loginError;
