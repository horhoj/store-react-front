import { Login, AuthAction, authActionType } from './types';
import { put, takeEvery, call } from 'redux-saga/effects';
import { setIsLoading, setLoginError, setIsAuthenticated } from './actions';
import { logger } from '../../utils/logger';
import { loginRequest, logoutRequest } from '../../api/entity/auth';

export function* authWatcher() {
  yield takeEvery(authActionType.LOGIN, login);
  yield takeEvery(authActionType.LOGOUT, logout);
}

export function* login(action: Login) {
  try {
    yield put<AuthAction>(setIsLoading(true));
    yield put<AuthAction>(setLoginError(null));
    yield call(loginRequest, action.payload.userCredential);
    yield put<AuthAction>(setIsAuthenticated(true));
  } catch (e) {
    const error: number = e.response ? e.response.status : 0;
    yield put<AuthAction>(setLoginError(error));
    yield call(logger, 'login error', e);
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}

export function* logout() {
  try {
    yield put(setIsAuthenticated(false));
    yield call(logoutRequest);
  } catch (e) {
    logger('logout error', e);
  }
}
