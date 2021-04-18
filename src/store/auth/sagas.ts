import { LoginWorkerAction, AuthAction, authActionType } from './types';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  setIsLoadingAction,
  setErrorsAction,
  setIsAuthenticatedAction,
} from './actions';
import { logger } from '../../utils/logger';
import { loginRequest } from '../../api/entity/auth/loginRequest';

export function* authWatcher() {
  yield takeEvery(authActionType.LOGIN, loginWorker);
}

export function* loginWorker(action: LoginWorkerAction) {
  try {
    yield put<AuthAction>(setIsLoadingAction(true));
    yield call(loginRequest, action.payload);
    yield put<AuthAction>(setIsAuthenticatedAction(true));
  } catch (e) {
    yield put<AuthAction>(setErrorsAction(e));
    logger('loginWorker error', e);
  } finally {
    yield put<AuthAction>(setIsLoadingAction(false));
  }
}
