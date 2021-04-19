import {
  SetData,
  SetIsLoading,
  UserAction,
  UserActionType,
  UserState,
} from './types';

const initialState: UserState = {
  data: null,
  isLoading: true,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoading).payload.isLoading,
      };
    case UserActionType.SET_DATA:
      return {
        ...state,
        data: (action as SetData).payload.data,
      };
    default:
      return state;
  }
};
