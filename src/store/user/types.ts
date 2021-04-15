export enum UserActionType {
  SET_IS_AUTHENTICATED = 'USER/SET_IS_AUTHENTICATED',
}

export interface UserState {
  isAuthenticated: boolean;
}

export interface UserAction<T = any> {
  type: UserActionType;
  payload: T;
}

export type SetIsAuthenticated = UserAction<{ isAuthenticated: boolean }>;
