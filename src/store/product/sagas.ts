import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import {
  GetProduct,
  ProductAction,
  ProductActionType,
  UpdateProduct,
} from './types';
import {
  setError,
  setIsLoading,
  setProduct,
  setRedirectToProductList,
} from './actions';
import { getHTTPStatusFromError } from '../../utils/helpers';
import {
  getProductRequest,
  updateProductRequest,
} from '../../api/entity/products';
import { requestExecutor } from '../sagas';

export function* productWatcher() {
  yield takeEvery(ProductActionType.GET_PRODUCT, getProduct);
  yield takeEvery(ProductActionType.UPDATE_PRODUCT, updateProduct);
}

export function* getProduct(action: GetProduct) {
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

export function* updateProduct(action: UpdateProduct) {
  try {
    yield put<ProductAction>(setIsLoading(true));
    const response: SagaReturnType<typeof updateProductRequest> = yield call(
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
