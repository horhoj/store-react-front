import { UserEntityType } from '../../types/user';

export enum UserActionType {
  SET_DATA = 'USER/SET_DATA',
  GET_DATA = 'USER/GET_DATA',
  SET_IS_LOADING = 'USER/SET_IS_LOADING',
}

export interface UserState {
  data: UserData;
  isLoading: boolean;
}

export type UserData = UserEntityType | null;

export interface UserAction<T = any> {
  type: UserActionType;
  payload: T;
}

export type SetData = UserAction<{ data: UserData }>;

export type GetData = UserAction;

export type SetIsLoading = UserAction<{ isLoading: boolean }>;
