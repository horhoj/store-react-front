import {
  SetIsAuthenticated,
  SetIsLoading,
  AuthAction,
  authActionType,
  AuthState,
  SetErrors,
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
        isAuthenticated: (action as SetIsAuthenticated).payload.isAuthenticated,
      };
    case authActionType.SET_ERRORS:
      return {
        ...state,
        errors: (action as SetErrors).payload.errors,
      };
    case authActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoading).payload.isLoading,
      };
    default:
      return state;
  }
};
