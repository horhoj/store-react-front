import { LoginWorkerAction, UserAction, UserActionType } from './types';
import { put, takeEvery, call } from 'redux-saga/effects';
import { userActions } from './actions';
import { logger } from '../../utils/logger';
import { loginRequest } from '../../api/entity/auth/loginRequest';

export function* userWatcher() {
  yield takeEvery(UserActionType.LOGIN, loginWorker);
}

export function* loginWorker(action: LoginWorkerAction) {
  try {
    yield put<UserAction>(userActions.setIsLoadingAction(true));
    yield call(loginRequest, action.payload);
    yield put<UserAction>(userActions.setIsAuthenticatedAction(true));
  } catch (e) {
    logger(e);
  } finally {
    yield put<UserAction>(userActions.setIsLoadingAction(false));
  }
}
