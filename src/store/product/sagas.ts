import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { GetProduct, ProductAction, ProductActionType } from './types';
import { setError, setIsLoading, setProduct } from './actions';
import { getHTTPStatusFromError } from '../../utils/helpers';
import { getProductRequest } from '../../api/entity/products';
import { requestExecutor } from '../sagas';

export function* productWatcher() {
  yield takeEvery(ProductActionType.GET_PRODUCT, getProduct);
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
