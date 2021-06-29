import { UserCredential } from '../../types/auth';
import { SignUpData } from '../../types/signUp';
import {
  AuthActionType,
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
  type: AuthActionType.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: AuthActionType.SET_IS_LOADING,
  payload: { isLoading },
});

export const setError = (error: number | null): SetError => ({
  type: AuthActionType.SET_ERROR,
  payload: {
    error,
  },
});

export const setErrorData = (errorData: ErrorData): SetErrorData => ({
  type: AuthActionType.SET_ERROR_DATA,
  payload: {
    errorData,
  },
});

export const login = (userCredential: UserCredential): Login => ({
  type: AuthActionType.LOGIN,
  payload: {
    userCredential,
  },
});

export const logout = (): Logout => ({
  type: AuthActionType.LOGOUT,
  payload: null,
});

export const signUp = (signUpData: SignUpData): SignUp => ({
  type: AuthActionType.SIGN_UP,
  payload: {
    signUpData,
  },
});
