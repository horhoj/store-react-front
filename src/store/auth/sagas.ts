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
import { FlashMessageAction } from '../flashMessage/types';
import { flashMessageActions } from '../flashMessage';
import { FlashMessageBody } from '../../types/flashMessage';
import {
  setIsLoading,
  setError,
  setIsAuthenticated,
  setErrorData,
} from './actions';
import { Login, AuthAction, authActionType, SignUp } from './types';

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
    const successMessage: FlashMessageBody = {
      message: 'Вы успешно вошли в систему!',
      type: 'alert-success',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(successMessage),
    );
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<AuthAction>(setError(error));
    yield call(logger, 'login error', e);
    const errorMessage: FlashMessageBody = {
      message: 'Ошибка входа в систему!',
      type: 'alert-danger',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(errorMessage),
    );
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}

export function* logout(): SagaIterator {
  try {
    yield put(setIsAuthenticated(false));
    yield put(userActions.setData(null));
    yield call(logoutRequest);
    const successMessage: FlashMessageBody = {
      message: 'Вы успешно вышли из системы!',
      type: 'alert-success',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(successMessage),
    );
  } catch (e) {
    call(logger, 'logout error', e);
  }
}

export function* signUp(action: SignUp): SagaIterator {
  try {
    yield put<AuthAction>(setIsLoading(true));
    yield put<AuthAction>(setError(null));
    yield call(signUpRequest, action.payload.signUpData);
    yield call(logger, 'signUp success', 'user is registered!');
    const successMsg: FlashMessageBody = {
      message: 'Пользователь успешно зарегистрирован',
      type: 'alert-success',
    };
    yield put<FlashMessageAction>(flashMessageActions.showMessage(successMsg));
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
    const errorMsg: FlashMessageBody = {
      message: 'Не удалось зарегистрировать пользователя',
      type: 'alert-danger',
    };
    yield put<FlashMessageAction>(flashMessageActions.showMessage(errorMsg));
  } finally {
    yield put<AuthAction>(setIsLoading(false));
  }
}
