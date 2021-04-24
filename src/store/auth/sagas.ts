import { Login, AuthAction, authActionType } from './types';
import { put, takeEvery, call, SagaReturnType } from 'redux-saga/effects';
import { setIsLoading, setLoginError, setIsAuthenticated } from './actions';
import { logger } from '../../utils/logger';
import { loginRequest, logoutRequest } from '../../api/entity/auth';
import { userActions } from '../user';
import { userDataRequest } from '../../api/entity/user';
import { UserAction } from '../user/types';
import { setData } from '../user/actions';
import { getHTTPStatusFromError } from '../../utils/helpers';

export function* authWatcher() {
  yield takeEvery(authActionType.LOGIN, login);
  yield takeEvery(authActionType.LOGOUT, logout);
}

export function* login(action: Login) {
  try {
    yield put<AuthAction>(setIsLoading(true));
    yield put<AuthAction>(setLoginError(null));
    yield call(loginRequest, action.payload.userCredential);
    const response: SagaReturnType<typeof userDataRequest> = yield call(
      userDataRequest,
    );
    yield put<UserAction>(setData(response.data));
    yield put<AuthAction>(setIsAuthenticated(true));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<AuthAction>(setLoginError(error));
    yield call(logger, 'login error', e);
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}

export function* logout() {
  try {
    yield put(setIsAuthenticated(false));
    yield put(userActions.setData(null));
    yield call(logoutRequest);
  } catch (e) {
    call(logger, 'logout error', e);
  }
}
