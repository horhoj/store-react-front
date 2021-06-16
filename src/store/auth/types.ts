import { UserCredential } from '../../types/auth';
import { SignUpData } from '../../types/signUp';

export enum authActionType {
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

export interface AuthAction<T = any> {
  type: authActionType;
  payload: T;
}

export type SetIsAuthenticated = AuthAction<{ isAuthenticated: boolean }>;

export type SetIsLoading = AuthAction<{
  isLoading: boolean;
}>;

export type SetError = AuthAction<{ error: Error }>;

export type SetErrorData = AuthAction<{ errorData: ErrorData }>;

export type Login = AuthAction<{ userCredential: UserCredential }>;

export type Logout = AuthAction;

export type SignUp = AuthAction<{ signUpData: SignUpData }>;
