import { CategoriesAction, CategoriesActionType, GetCategories } from './types';
import {
  call,
  put,
  SagaReturnType,
  select,
  takeEvery,
} from 'redux-saga/effects';
import {
  setCategories,
  setError,
  setIsLoading,
  setRequestConfigDiff,
} from './actions';
import { GetCategoriesRequestConfig } from '../../api/entity/categories/types';
import { getRequestConfig } from './selectors';
import { getHTTPStatusFromError } from '../../utils/helpers';
import { logger } from '../../utils/logger';
import { getCategoriesRequest } from '../../api/entity/categories';
import { requestExecutor } from '../sagas';

export function* categoriesWatcher() {
  yield takeEvery(CategoriesActionType.GET_CATEGORIES, getCategories);
}

export function* getCategories(action: GetCategories) {
  try {
    yield put<CategoriesAction>(
      setRequestConfigDiff(action.payload.getCategoriesRequestConfig),
    );
    const requestConfig: GetCategoriesRequestConfig = yield select(
      getRequestConfig,
    );
    yield put<CategoriesAction>(setError(null));
    yield put<CategoriesAction>(setIsLoading(true));
    const response: SagaReturnType<typeof getCategoriesRequest> = yield call(
      requestExecutor,
      getCategoriesRequest,
      requestConfig,
    );
    yield put<CategoriesAction>(setCategories(response.data));
  } catch (e) {
    yield put<CategoriesAction>(setCategories(null));
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoriesAction>(setError(error));
    yield call(logger, 'getCategories', e);
  } finally {
    yield put<CategoriesAction>(setIsLoading(false));
  }
}
