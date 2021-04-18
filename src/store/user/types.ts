import { UserCredential } from '../../types/auth';

export enum UserActionType {
  SET_IS_AUTHENTICATED = 'USER/SET_IS_AUTHENTICATED',
  SET_IS_LOADING = 'USER/SET_IS_LOADING',
  LOGIN = 'USER/LOGIN',
}

export interface UserState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface UserAction<T = any> {
  type: UserActionType;
  payload: T;
}

export type SetIsAuthenticatedAction = UserAction<{ isAuthenticated: boolean }>;

export type SetIsLoadingAction = UserAction<{
  isLoading: boolean;
}>;

export type LoginWorkerAction = UserAction<UserCredential>;
