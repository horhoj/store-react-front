import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { logger } from '../utils/logger';
import { StoreState } from './types';
import { authReducer, authWatcher } from './auth';
import { userReducer, userWatcher } from './user';
import { productsReducer, productsWatcher } from './products';
import { productReducer, productWatcher } from './product';
import { categoriesReducer, categoriesWatcher } from './categories';
import { categoryReducer, categoryWatcher } from './category';

const rootReducer = combineReducers<StoreState>({
  auth: authReducer,
  user: userReducer,
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
  category: categoryReducer,
});

let composeEnhancers = null;
try {
  // composeEnhancers = compose;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} catch (e) {
  logger('не обнаружен redux dev-tools');
}

const sagaMiddleware = createSagaMiddleware();

export const rootStore = createStore(
  rootReducer,
  composeEnhancers
    ? composeEnhancers(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware),
);

function* appWatcher() {
  yield all([
    authWatcher(),
    userWatcher(),
    productsWatcher(),
    productWatcher(),
    categoriesWatcher(),
    categoryWatcher(),
  ]);
}

sagaMiddleware.run(appWatcher);
