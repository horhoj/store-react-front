import {
  authActionType,
  Login,
  SetLoginError,
  SetIsAuthenticated,
  SetIsLoading,
} from './types';
import { UserCredential } from '../../types/auth';

export const setIsAuthenticated = (
  isAuthenticated: boolean,
): SetIsAuthenticated => ({
  type: authActionType.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: authActionType.SET_IS_LOADING,
  payload: { isLoading },
});

export const setLoginError = (error: number | null): SetLoginError => ({
  type: authActionType.SET_ERRORS,
  payload: {
    error,
  },
});

export const login = (userCredential: UserCredential): Login => ({
  type: authActionType.LOGIN,
  payload: {
    userCredential,
  },
});
