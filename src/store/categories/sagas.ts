import {
  call,
  put,
  SagaReturnType,
  select,
  takeEvery,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GetCategoriesRequestConfig } from '../../api/entity/categories/types';
import { getHTTPStatusFromError } from '../../utils/helpers';
import { logger } from '../../utils/logger';
import {
  deleteCategoryRequest,
  getCategoriesRequest,
} from '../../api/entity/categories';
import { requestExecutor } from '../sagas';
import { FlashMessageBody } from '../../types/flashMessage';
import { FlashMessageAction } from '../flashMessage/types';
import { flashMessageActions } from '../flashMessage';
import { getRequestConfig } from './selectors';
import {
  setCategories,
  setError,
  setIsLoading,
  setRequestConfigDiff,
} from './actions';
import {
  CategoriesAction,
  CategoriesActionType,
  DeleteCategory,
  GetCategories,
} from './types';

export function* categoriesWatcher(): SagaIterator {
  yield takeEvery(CategoriesActionType.GET_CATEGORIES, getCategories);
  yield takeEvery(CategoriesActionType.DELETE_CATEGORIES, deleteCategory);
}

export function* getCategories(action: GetCategories): SagaIterator {
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

export function* deleteCategory(action: DeleteCategory): SagaIterator {
  const { id } = action.payload;
  try {
    yield put<CategoriesAction>(setIsLoading(true));
    yield put<CategoriesAction>(setError(null));
    yield call(requestExecutor, deleteCategoryRequest, action.payload.id);
    const requestConfig: GetCategoriesRequestConfig = yield select(
      getRequestConfig,
    );
    const response: SagaReturnType<typeof getCategoriesRequest> = yield call(
      requestExecutor,
      getCategoriesRequest,
      requestConfig,
    );
    yield put<CategoriesAction>(setCategories(response.data));
    const successMessage: FlashMessageBody = {
      message: `Вы успешно удалили категорию с ИД=${id}!`,
      type: 'alert-success',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(successMessage),
    );
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoriesAction>(setError(error));
    const errorMessage: FlashMessageBody = {
      message: `Не удалось удалить категорию с ИД=${id}!`,
      type: 'alert-danger',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(errorMessage),
    );
  } finally {
    yield put<CategoriesAction>(setIsLoading(false));
  }
}
