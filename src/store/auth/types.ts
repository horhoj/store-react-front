import { UserCredential } from '../../types/auth';

export enum authActionType {
  SET_IS_AUTHENTICATED = 'AUTH/SET_IS_AUTHENTICATED',
  SET_IS_LOADING = 'AUTH/SET_IS_LOADING',
  LOGIN = 'AUTH/LOGIN',
  SET_ERRORS = 'AUTH/SET_ERRORS',
  LOGOUT = 'AUTH/LOGOUT',
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginError: LoginError;
}

export type LoginError = number | null;

export interface AuthAction<T = any> {
  type: authActionType;
  payload: T;
}

export type SetIsAuthenticated = AuthAction<{ isAuthenticated: boolean }>;

export type SetIsLoading = AuthAction<{
  isLoading: boolean;
}>;

export type SetLoginError = AuthAction<{ error: LoginError }>;

export type Login = AuthAction<{ userCredential: UserCredential }>;

export type Logout = AuthAction;
