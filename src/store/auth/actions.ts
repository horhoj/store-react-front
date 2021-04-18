import {
  authActionType,
  LoginWorkerAction,
  SetErrorsAction,
  SetIsAuthenticatedAction,
  SetIsLoadingAction,
} from './types';
import { UserCredential } from '../../types/auth';

export const setIsAuthenticatedAction = (
  isAuthenticated: boolean,
): SetIsAuthenticatedAction => ({
  type: authActionType.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

export const setIsLoadingAction = (isLoading: boolean): SetIsLoadingAction => ({
  type: authActionType.SET_IS_LOADING,
  payload: { isLoading },
});

export const setErrorsAction = (errors: object): SetErrorsAction => ({
  type: authActionType.SET_ERRORS,
  payload: {
    errors,
  },
});

export const loginWorkerAction = (
  userCredential: UserCredential,
): LoginWorkerAction => ({
  type: authActionType.LOGIN,
  payload: {
    ...userCredential,
  },
});
