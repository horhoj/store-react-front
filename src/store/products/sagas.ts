import { call, put, takeEvery } from 'redux-saga/effects';
import { ProductsAction, ProductsActionType } from './types';
import { getProductsRequest } from '../../api/entity/products';
import { AxiosResponse } from 'axios';
import { logger } from '../../utils/logger';
import { setError, setIsLoading, setProducts } from './actions';
import { requestExecutor } from '../sagas';
import { getHTTPStatusFromError } from '../../utils/helpers';

export function* productsWatcher() {
  yield takeEvery(ProductsActionType.GET_PRODUCTS, getProducts);
}

export function* getProducts() {
  try {
    yield put<ProductsAction>(setError(null));
    yield put<ProductsAction>(setIsLoading(true));
    yield put<ProductsAction>(setProducts(null));
    const response: AxiosResponse = yield call(
      requestExecutor,
      getProductsRequest,
    );
    yield put<ProductsAction>(setProducts(response.data));
  } catch (e) {
    const error: number = getHTTPStatusFromError(e);
    yield put<ProductsAction>(setError(error));
    yield call(logger, 'getProducts', e);
  } finally {
    yield put<ProductsAction>(setIsLoading(false));
  }
}
