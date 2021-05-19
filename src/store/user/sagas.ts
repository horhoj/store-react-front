import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { logger } from '../../utils/logger';
import { userDataRequest } from '../../api/entity/user';
import { AuthAction } from '../auth/types';
import { setIsAuthenticated } from '../auth/actions';
import { setData, setIsLoading } from './actions';
import { UserAction, UserActionType } from './types';

export function* userWatcher(): SagaIterator {
  yield takeEvery(UserActionType.GET_DATA, getData);
}

export function* getData(): SagaIterator {
  try {
    const response: SagaReturnType<typeof userDataRequest> = yield call(
      userDataRequest,
    );
    yield put<UserAction>(setData(response.data));
    yield put<AuthAction>(setIsAuthenticated(true));
  } catch (e) {
    yield call(logger, 'getData', e);
  } finally {
    yield put<UserAction>(setIsLoading(false));
  }
}
