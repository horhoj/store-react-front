import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { StoreState } from './types';
import { authReducer, authWatcher } from './auth';
import { logger } from '../utils/logger';
import { userReducer, userWatcher } from './user';
import { productsReducer, productsWatcher } from './products';
import { productReducer, productWatcher } from './product';
import { categoriesReducer, categoriesWatcher } from './categories';

const rootReducer = combineReducers<StoreState>({
  auth: authReducer,
  user: userReducer,
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
});

let composeEnhancers = null;
try {
  //@ts-ignore
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
  ]);
}

sagaMiddleware.run(appWatcher);
