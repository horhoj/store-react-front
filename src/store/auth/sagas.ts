import { put, takeEvery, call, SagaReturnType } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { logger } from '../../utils/logger';
import {
  loginRequest,
  logoutRequest,
  signUpRequest,
} from '../../api/entity/auth';
import { userActions } from '../user';
import { userDataRequest } from '../../api/entity/user';
import { UserAction } from '../user/types';
import { setData } from '../user/actions';
import {
  getErrorDataFromError,
  getHTTPStatusFromError,
} from '../../utils/helpers';
import { getPathByName } from '../../router';
import { AppAction } from '../app/types';
import { appActions } from '../app';
import { Login, AuthAction, authActionType, SignUp } from './types';
import {
  setIsLoading,
  setError,
  setIsAuthenticated,
  setErrorData,
} from './actions';

export function* authWatcher(): SagaIterator {
  yield takeEvery(authActionType.LOGIN, login);
  yield takeEvery(authActionType.LOGOUT, logout);
  yield takeEvery(authActionType.SIGN_UP, signUp);
}

export function* login(action: Login): SagaIterator {
  try {
    yield put<AuthAction>(setIsLoading(true));
    yield put<AuthAction>(setError(null));
    yield call(loginRequest, action.payload.userCredential);
    const response: SagaReturnType<typeof userDataRequest> = yield call(
      userDataRequest,
    );
    yield put<UserAction>(setData(response.data));
    yield put<AuthAction>(setIsAuthenticated(true));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<AuthAction>(setError(error));
    yield call(logger, 'login error', e);
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}

export function* logout(): SagaIterator {
  try {
    yield put(setIsAuthenticated(false));
    yield put(userActions.setData(null));
    yield call(logoutRequest);
  } catch (e) {
    call(logger, 'logout error', e);
  }
}

export function* signUp(action: SignUp): SagaIterator {
  // yield call(console.log, 'signUp', action.payload.signUpData);
  try {
    yield put<AuthAction>(setIsLoading(true));
    yield put<AuthAction>(setError(null));
    yield call(signUpRequest, action.payload.signUpData);
    yield call(logger, 'signUp success', 'user is registered!');
    const path: SagaReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'login',
    );
    yield put<AppAction>(appActions.redirectToPath(path));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    const errorData = getErrorDataFromError(e);
    yield put<AuthAction>(setError(error));
    yield put<AuthAction>(setErrorData(errorData));
    yield call(logger, 'signUp error', e);
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}
