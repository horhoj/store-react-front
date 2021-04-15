import {
  SetIsAuthenticated,
  UserAction,
  UserActionType,
  UserState,
} from './types';

const initialState: UserState = {
  isAuthenticated: false,
};

export const user = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionType.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: (action as SetIsAuthenticated).payload.isAuthenticated,
      };
    default:
      return state;
  }
};
