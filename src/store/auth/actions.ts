import {
  authActionType,
  Login,
  SetErrors,
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

export const setErrors = (errors: object): SetErrors => ({
  type: authActionType.SET_ERRORS,
  payload: {
    errors,
  },
});

export const loginWorker = (userCredential: UserCredential): Login => ({
  type: authActionType.LOGIN,
  payload: {
    userCredential,
  },
});
