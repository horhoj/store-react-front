import { UserCredential } from '../../types/auth';

export enum authActionType {
  SET_IS_AUTHENTICATED = 'AUTH/SET_IS_AUTHENTICATED',
  SET_IS_LOADING = 'AUTH/SET_IS_LOADING',
  LOGIN = 'AUTH/LOGIN',
  SET_ERRORS = 'AUTH/SET_ERRORS',
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  errors: object;
}

export interface AuthAction<T = any> {
  type: authActionType;
  payload: T;
}

export type SetIsAuthenticatedAction = AuthAction<{ isAuthenticated: boolean }>;

export type SetIsLoadingAction = AuthAction<{
  isLoading: boolean;
}>;

export type SetErrorsAction = AuthAction<{ errors: object }>;

export type LoginWorkerAction = AuthAction<UserCredential>;
