import { AuthAction, AuthActionType, AuthState } from './types';

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
    case AuthActionType.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case AuthActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case AuthActionType.SET_ERROR_DATA:
      return {
        ...state,
        errorData: action.payload.errorData,
      };
    case AuthActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
