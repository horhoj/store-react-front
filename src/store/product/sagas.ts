import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getHTTPStatusFromError } from '../../utils/helpers';
import {
  addProductRequest,
  getProductRequest,
  updateProductRequest,
} from '../../api/entity/products';
import { requestExecutor } from '../sagas';
import {
  setError,
  setIsLoading,
  setProduct,
  setRedirectToProductList,
} from './actions';
import {
  AddProduct,
  GetProduct,
  ProductAction,
  ProductActionType,
  UpdateProduct,
} from './types';

export function* productWatcher(): SagaIterator {
  yield takeEvery(ProductActionType.GET_PRODUCT, getProduct);
  yield takeEvery(ProductActionType.UPDATE_PRODUCT, updateProduct);
  yield takeEvery(ProductActionType.ADD_PRODUCT, addProduct);
}

export function* getProduct(action: GetProduct): SagaIterator {
  try {
    yield put<ProductAction>(setIsLoading(true));
    const response: SagaReturnType<typeof getProductRequest> = yield call(
      requestExecutor,
      getProductRequest,
      action.payload.id,
    );
    yield put<ProductAction>(setProduct(response.data));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<ProductAction>(setError(error));
  } finally {
    yield put<ProductAction>(setIsLoading(false));
  }
}

export function* updateProduct(action: UpdateProduct): SagaIterator {
  try {
    yield put<ProductAction>(setIsLoading(true));
    yield call(
      requestExecutor,
      updateProductRequest,
      action.payload.productData,
    );
    yield put<ProductAction>(setRedirectToProductList(true));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<ProductAction>(setError(error));
  } finally {
    yield put<ProductAction>(setIsLoading(false));
  }
}

export function* addProduct(action: AddProduct): SagaIterator {
  try {
    yield put<ProductAction>(setIsLoading(true));
    yield call(requestExecutor, addProductRequest, action.payload.productData);
    yield put<ProductAction>(setRedirectToProductList(true));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<ProductAction>(setError(error));
  } finally {
    yield put<ProductAction>(setIsLoading(false));
  }
}
