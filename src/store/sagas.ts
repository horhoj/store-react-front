import { call, put, SagaReturnType } from 'redux-saga/effects';
import { logger } from '../utils/logger';
import { getHTTPStatusFromError } from '../utils/helpers';
import { AuthAction } from './auth/types';
import { authActions } from './auth';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* requestExecutor(cb: any, ...arg: any[]) {
  try {
    const response: SagaReturnType<typeof cb> = yield call(cb, ...arg);
    return response;
  } catch (e) {
    yield call(logger, 'requestExecutor error', e);
    const error: number = getHTTPStatusFromError(e);
    if (error === 401) {
      yield put<AuthAction>(authActions.setIsAuthenticated(false));
    }
    throw e;
  }
}
