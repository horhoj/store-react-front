export enum UserActionType {
  SET_USER_IS_AUTHENTICATED = 'SET_USER_IS_AUTHENTICATED',
}

export interface UserState {
  isAuthenticated: boolean
}

export interface UserAction<T = any> {
  type: UserActionType;
  payload: T;
}

export type SetUserIsAuthenticated = UserAction<{ isAuthenticated: boolean }>
