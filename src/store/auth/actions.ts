import { UserCredential } from '../../types/auth';
import { SignUpData } from '../../types/signUp';
import {
  authActionType,
  ErrorData,
  Login,
  Logout,
  SetError,
  SetErrorData,
  SetIsAuthenticated,
  SetIsLoading,
  SignUp,
} from './types';

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

export const setError = (error: number | null): SetError => ({
  type: authActionType.SET_ERROR,
  payload: {
    error,
  },
});

export const setErrorData = (errorData: ErrorData): SetErrorData => ({
  type: authActionType.SET_ERROR_DATA,
  payload: {
    errorData,
  },
});

export const login = (userCredential: UserCredential): Login => ({
  type: authActionType.LOGIN,
  payload: {
    userCredential,
  },
});

export const logout = (): Logout => ({
  type: authActionType.LOGOUT,
  payload: null,
});

export const signUp = (signUpData: SignUpData): SignUp => ({
  type: authActionType.SIGN_UP,
  payload: {
    signUpData,
  },
});
