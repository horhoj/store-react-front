import {
  LoginWorkerAction,
  SetIsAuthenticatedAction,
  SetIsLoadingAction,
  authActionType,
} from './types';
import { UserCredential } from '../../types/auth';

const setIsAuthenticatedAction = (
  isAuthenticated: boolean,
): SetIsAuthenticatedAction => ({
  type: authActionType.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});

const setIsLoadingAction = (isLoading: boolean): SetIsLoadingAction => ({
  type: authActionType.SET_IS_LOADING,
  payload: { isLoading },
});

const loginWorkerAction = (
  userCredential: UserCredential,
): LoginWorkerAction => ({
  type: authActionType.LOGIN,
  payload: {
    ...userCredential,
  },
});

export const authActions = {
  setIsAuthenticatedAction,
  setIsLoadingAction,
  loginWorkerAction,
};
