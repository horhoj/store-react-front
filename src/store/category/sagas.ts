import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  addCategoryRequest,
  getCategoryRequest,
  updateCategoryRequest,
} from '../../api/entity/category';
import { requestExecutor } from '../sagas';
import { getHTTPStatusFromError } from '../../utils/helpers';
import { getPathByName } from '../../router';
import { AppAction } from '../app/types';
import { appActions } from '../app';
import { FlashMessageBody } from '../../types/flashMessage';
import { FlashMessageAction } from '../flashMessage/types';
import { flashMessageActions } from '../flashMessage';
import { setCategory, setError, setIsLoading } from './actions';
import {
  AddCategory,
  CategoryAction,
  CategoryActionType,
  GetCategory,
  UpdateCategory,
} from './types';

export function* categoryWatcher(): SagaIterator {
  yield takeEvery(CategoryActionType.GET_CATEGORY, getCategory);
  yield takeEvery(CategoryActionType.UPDATE_CATEGORY, updateCategory);
  yield takeEvery(CategoryActionType.ADD_CATEGORY, addCategory);
}

export function* getCategory(action: GetCategory): SagaIterator {
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

export function* updateCategory(action: UpdateCategory): SagaIterator {
  try {
    yield put<CategoryAction>(setIsLoading(true));
    yield call(
      requestExecutor,
      updateCategoryRequest,
      action.payload.categoryData,
    );

    const { id } = action.payload.categoryData;

    const successMessage: FlashMessageBody = {
      message: `Категория с ИД=${id} успешно обновлена!`,
      type: 'alert-success',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(successMessage),
    );

    const path: SagaReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'categories',
    );
    yield put<AppAction>(appActions.redirectToPath(path));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoryAction>(setError(error));
  } finally {
    yield put<CategoryAction>(setIsLoading(false));
  }
}

export function* addCategory(action: AddCategory): SagaIterator {
  try {
    yield put<CategoryAction>(setIsLoading(true));
    yield call(
      requestExecutor,
      addCategoryRequest,
      action.payload.categoryData,
    );

    const successMessage: FlashMessageBody = {
      message: `Новая категория успешно добавлена!`,
      type: 'alert-success',
    };
    yield put<FlashMessageAction>(
      flashMessageActions.showMessage(successMessage),
    );

    const path: SagaReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'categories',
    );
    yield put<AppAction>(appActions.redirectToPath(path));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<CategoryAction>(setError(error));
  } finally {
    yield put<CategoryAction>(setIsLoading(false));
  }
}
