import { Login, AuthAction, authActionType } from './types';
import { put, takeEvery, call } from 'redux-saga/effects';
import { setIsLoading, setErrors, setIsAuthenticated } from './actions';
import { logger } from '../../utils/logger';
import { loginRequest } from '../../api/entity/auth/loginRequest';

export function* authWatcher() {
  yield takeEvery(authActionType.LOGIN, login);
}

export function* login(action: Login) {
  try {
    yield put<AuthAction>(setIsLoading(true));
    yield call(loginRequest, action.payload.userCredential);
    yield put<AuthAction>(setIsAuthenticated(true));
  } catch (e) {
    yield put<AuthAction>(setErrors(e));
    logger('login error', e);
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}
