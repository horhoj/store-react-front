import { LoginWorkerAction, AuthAction, authActionType } from './types';
import { put, takeEvery, call } from 'redux-saga/effects';
import { authActions } from './actions';
import { logger } from '../../utils/logger';
import { loginRequest } from '../../api/entity/auth/loginRequest';

export function* authWatcher() {
  yield takeEvery(authActionType.LOGIN, loginWorker);
}

export function* loginWorker(action: LoginWorkerAction) {
  try {
    yield put<AuthAction>(authActions.setIsLoadingAction(true));
    yield call(loginRequest, action.payload);
    yield put<AuthAction>(authActions.setIsAuthenticatedAction(true));
  } catch (e) {
    logger(e);
  } finally {
    yield put<AuthAction>(authActions.setIsLoadingAction(false));
  }
}
