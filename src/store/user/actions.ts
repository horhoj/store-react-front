import {
  LoginWorkerAction,
  SetIsAuthenticatedAction,
  SetIsLoadingAction,
  UserActionType,
} from './types';
import { UserCredential } from '../../types/auth';

const setIsAuthenticatedAction = (
  isAuthenticated: boolean,
): SetIsAuthenticatedAction => ({
  type: UserActionType.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

const setIsLoadingAction = (isLoading: boolean): SetIsLoadingAction => ({
  type: UserActionType.SET_IS_LOADING,
  payload: { isLoading },
});

const loginWorkerAction = (
  userCredential: UserCredential,
): LoginWorkerAction => ({
  type: UserActionType.LOGIN,
  payload: {
    ...userCredential,
  },
});

export const userActions = {
  setIsAuthenticatedAction,
  setIsLoadingAction,
  loginWorkerAction,
};
