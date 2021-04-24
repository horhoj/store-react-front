import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { UserAction, UserActionType } from './types';
import { setData, setIsLoading } from './actions';
import { logger } from '../../utils/logger';
import { userDataRequest } from '../../api/entity/user';
import { AuthAction } from '../auth/types';
import { setIsAuthenticated } from '../auth/actions';

export function* userWatcher() {
  yield takeEvery(UserActionType.GET_DATA, getData);
}

export function* getData() {
  try {
    const response: SagaReturnType<typeof userDataRequest> = yield call(
      userDataRequest,
    );
    yield put<UserAction>(setData(response.data));
    yield put<AuthAction>(setIsAuthenticated(true));
  } catch (e) {
    logger('getData', e);
  } finally {
    yield put<UserAction>(setIsLoading(false));
  }
}
