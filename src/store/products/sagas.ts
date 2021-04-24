import {
  call,
  put,
  takeEvery,
  select,
  SagaReturnType,
} from 'redux-saga/effects';
import { GetProducts, ProductsAction, ProductsActionType } from './types';
import { getProductsRequest } from '../../api/entity/products';
import { logger } from '../../utils/logger';
import {
  setError,
  setIsLoading,
  setProducts,
  setRequestConfigDiff,
} from './actions';
import { requestExecutor } from '../sagas';
import { getHTTPStatusFromError } from '../../utils/helpers';
import { GetProductsRequestConfig } from '../../api/entity/products/types';
import { getRequestConfig } from './selectors';

export function* productsWatcher() {
  yield takeEvery(ProductsActionType.GET_PRODUCTS, getProducts);
}

export function* getProducts(action: GetProducts) {
  try {
    yield put<ProductsAction>(
      setRequestConfigDiff(action.payload.getProductsRequestConfig),
    );
    const requestConfig: GetProductsRequestConfig = yield select(
      getRequestConfig,
    );
    yield put<ProductsAction>(setError(null));
    yield put<ProductsAction>(setIsLoading(true));
    const response: SagaReturnType<typeof getProductsRequest> = yield call(
      requestExecutor,
      getProductsRequest,
      requestConfig,
    );
    yield put<ProductsAction>(setProducts(response.data));
  } catch (e) {
    yield put<ProductsAction>(setProducts(null));
    const error: number = getHTTPStatusFromError(e);
    yield put<ProductsAction>(setError(error));
    yield call(logger, 'getProducts', e);
  } finally {
    yield put<ProductsAction>(setIsLoading(false));
  }
}
