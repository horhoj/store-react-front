import { UserCredential } from '../../types/auth';

export enum authActionType {
  SET_IS_AUTHENTICATED = 'AUTH/SET_IS_AUTHENTICATED',
  SET_IS_LOADING = 'AUTH/SET_IS_LOADING',
  LOGIN = 'AUTH/LOGIN',
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthAction<T = any> {
  type: authActionType;
  payload: T;
}

export type SetIsAuthenticatedAction = AuthAction<{ isAuthenticated: boolean }>;

export type SetIsLoadingAction = AuthAction<{
  isLoading: boolean;
}>;

export type LoginWorkerAction = AuthAction<UserCredential>;
