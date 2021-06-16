import {
  AuthAction,
  authActionType,
  AuthState,
  SetError,
  SetErrorData,
  SetIsAuthenticated,
  SetIsLoading,
} from './types';

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  errorData: null,
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
    case authActionType.SET_ERROR:
      return {
        ...state,
        error: (action as SetError).payload.error,
      };
    case authActionType.SET_ERROR_DATA:
      return {
        ...state,
        errorData: (action as SetErrorData).payload.errorData,
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
