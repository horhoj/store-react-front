import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import {
  AddCategory,
  CategoryAction,
  CategoryActionType,
  GetCategory,
  UpdateCategory,
} from './types';
import {
  setCategory,
  setError,
  setIsLoading,
  setRedirectToCategoryAction,
} from './actions';
import {
  addCategoryRequest,
  getCategoryRequest,
  updateCategoryRequest,
} from '../../api/entity/categories';
import { requestExecutor } from '../sagas';
import { getHTTPStatusFromError } from '../../utils/helpers';

export function* categoryWatcher() {
  yield takeEvery(CategoryActionType.GET_CATEGORY, getCategory);
  yield takeEvery(CategoryActionType.UPDATE_CATEGORY, updateCategory);
  yield takeEvery(CategoryActionType.ADD_CATEGORY, addCategory);
}

export function* getCategory(action: GetCategory) {
  try {
    yield put<CategoryAction>(setIsLoading(true));
    yield put<CategoryAction>(setError(null));
    const response: SagaReturnType<typeof getCategoryRequest> = yield call(
      requestExecutor,
      getCategoryRequest,
      action.payload.id,
    );
    yield put<CategoryAction>(setCategory(response.data));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoryAction>(setError(error));
  } finally {
    yield put<CategoryAction>(setIsLoading(false));
  }
}

export function* updateCategory(action: UpdateCategory) {
  try {
    yield put<CategoryAction>(setIsLoading(true));
    yield call(
      requestExecutor,
      updateCategoryRequest,
      action.payload.categoryData,
    );
    yield put<CategoryAction>(setRedirectToCategoryAction(true));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoryAction>(setError(error));
  } finally {
    yield put<CategoryAction>(setIsLoading(false));
  }
}

export function* addCategory(action: AddCategory) {
  try {
    yield put<CategoryAction>(setIsLoading(true));
    yield call(
      requestExecutor,
      addCategoryRequest,
      action.payload.categoryData,
    );
    yield put<CategoryAction>(setRedirectToCategoryAction(true));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoryAction>(setError(error));
  } finally {
    yield put<CategoryAction>(setIsLoading(false));
  }
}
