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

export type UserAction = SetData | GetData | SetIsLoading;

export interface SetData {
  type: UserActionType.SET_DATA;
  payload: {
    data: UserData;
  };
}

export interface GetData {
  type: UserActionType.GET_DATA;
  payload: null;
}

export interface SetIsLoading {
  type: UserActionType.SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}
