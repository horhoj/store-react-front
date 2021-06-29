import { UserCredential } from '../../types/auth';
import { SignUpData } from '../../types/signUp';

export enum AuthActionType {
  SET_IS_AUTHENTICATED = 'AUTH/SET_IS_AUTHENTICATED',
  SET_IS_LOADING = 'AUTH/SET_IS_LOADING',
  LOGIN = 'AUTH/LOGIN',
  SET_ERROR = 'AUTH/SET_ERROR',
  SET_ERROR_DATA = 'AUTH/SET_ERROR_DATA',
  LOGOUT = 'AUTH/LOGOUT',
  SIGN_UP = 'AUTH/SIGN_UP',
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: Error;
  errorData: ErrorData;
}

export type ErrorData = any;
export type Error = number | null;

export type AuthAction =
  | SetIsAuthenticated
  | SetIsLoading
  | SetError
  | SetErrorData
  | Login
  | Logout
  | SignUp;

export interface SetIsAuthenticated {
  type: AuthActionType.SET_IS_AUTHENTICATED;
  payload: { isAuthenticated: boolean };
}

export interface SetIsLoading {
  type: AuthActionType.SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export interface SetError {
  type: AuthActionType.SET_ERROR;
  payload: { error: Error };
}

export interface SetErrorData {
  type: AuthActionType.SET_ERROR_DATA;
  payload: { errorData: ErrorData };
}

export interface Login {
  type: AuthActionType.LOGIN;
  payload: { userCredential: UserCredential };
}

export interface Logout {
  type: AuthActionType.LOGOUT;
  payload: null;
}

export interface SignUp {
  type: AuthActionType.SIGN_UP;
  payload: { signUpData: SignUpData };
}
