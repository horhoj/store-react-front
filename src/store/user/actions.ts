import {
  GetData,
  SetData,
  SetIsLoading,
  UserActionType,
  UserData,
} from './types';

export const setData = (data: UserData): SetData => ({
  type: UserActionType.SET_DATA,
  payload: {
    data,
  },
});

export const getData = (): GetData => ({
  type: UserActionType.GET_DATA,
  payload: null,
});

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: UserActionType.SET_IS_LOADING,
  payload: {
    isLoading,
  },
});
