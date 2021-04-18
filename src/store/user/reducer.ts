import {
  SetIsAuthenticatedAction,
  SetIsLoadingAction,
  UserAction,
  UserActionType,
  UserState,
} from './types';

const initialState: UserState = {
  isAuthenticated: false,
  isLoading: false,
};

export const user = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionType.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: (action as SetIsAuthenticatedAction).payload
          .isAuthenticated,
      };
    case UserActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoadingAction).payload.isLoading,
      };
    default:
      return state;
  }
};
