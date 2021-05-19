import {
  call,
  put,
  takeEvery,
  select,
  SagaReturnType,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  deleteProductRequest,
  getProductsRequest,
} from '../../api/entity/products';
import { logger } from '../../utils/logger';
import { requestExecutor } from '../sagas';
import { getHTTPStatusFromError } from '../../utils/helpers';
import { GetProductsRequestConfig } from '../../api/entity/products/types';
import {
  setError,
  setIsLoading,
  setProducts,
  setRequestConfigDiff,
} from './actions';
import {
  DeleteProduct,
  GetProducts,
  ProductsAction,
  ProductsActionType,
} from './types';
import { getRequestConfig } from './selectors';

export function* productsWatcher(): SagaIterator {
  yield takeEvery(ProductsActionType.GET_PRODUCTS, getProducts);
  yield takeEvery(ProductsActionType.DELETE_PRODUCT, deleteProduct);
}

export function* getProducts(action: GetProducts): SagaIterator {
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

export function* deleteProduct(action: DeleteProduct): SagaIterator {
  try {
    yield put<ProductsAction>(setIsLoading(true));
    yield put<ProductsAction>(setError(null));
    yield call(requestExecutor, deleteProductRequest, action.payload.id);
    const requestConfig: GetProductsRequestConfig = yield select(
      getRequestConfig,
    );
    const response: SagaReturnType<typeof getProductsRequest> = yield call(
      requestExecutor,
      getProductsRequest,
      requestConfig,
    );
    yield put<ProductsAction>(setProducts(response.data));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<ProductsAction>(setError(error));
  } finally {
    yield put<ProductsAction>(setIsLoading(false));
  }
}
