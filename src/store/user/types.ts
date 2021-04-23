import { UserEntityType } from '../../types/user';
import { SagaReturnType } from 'redux-saga/effects';
import { userDataRequest } from '../../api/entity/user';

export enum UserActionType {
  SET_DATA = 'USER/SET_DATA',
  GET_DATA = 'USER/GET_DATA',
  SET_IS_LOADING = 'USER/SET_IS_LOADING',
}

export interface UserState {
  data: UserData;
  isLoading: boolean;
}

export type UserDataRequest = SagaReturnType<typeof userDataRequest>;

export type UserData = UserEntityType | null;

export interface UserAction<T = any> {
  type: UserActionType;
  payload: T;
}

export type SetData = UserAction<{ data: UserData }>;

export type GetData = UserAction;

export type SetIsLoading = UserAction<{ isLoading: boolean }>;
