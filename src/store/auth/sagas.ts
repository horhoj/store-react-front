import { Login, AuthAction, authActionType } from './types';
import { put, takeEvery, call } from 'redux-saga/effects';
import { setIsLoading, setLoginError, setIsAuthenticated } from './actions';
import { logger } from '../../utils/logger';
import { loginRequest } from '../../api/entity/auth/loginRequest';

export function* authWatcher() {
  yield takeEvery(authActionType.LOGIN, login);
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
    yield call(logger, 'login loginError', e);
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}
