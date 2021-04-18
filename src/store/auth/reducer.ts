import {
  SetIsAuthenticatedAction,
  SetIsLoadingAction,
  AuthAction,
  authActionType,
  AuthState,
  SetErrorsAction,
} from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  errors: [],
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case authActionType.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: (action as SetIsAuthenticatedAction).payload
          .isAuthenticated,
      };
    case authActionType.SET_ERRORS:
      return {
        ...state,
        errors: (action as SetErrorsAction).payload.errors,
      };
    case authActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoadingAction).payload.isLoading,
      };
    default:
      return state;
  }
};
