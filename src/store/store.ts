import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from './types';
import { authReducer, authWatcher } from './auth';
import { userReducer, userWatcher } from './user';
import { productsReducer, productsWatcher } from './products';
import { productReducer, productWatcher } from './product';
import { categoriesReducer, categoriesWatcher } from './categories';
import { categoryReducer, categoryWatcher } from './category';
import { appReducer } from './app';

const rootReducer = combineReducers<StoreState>({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
  category: categoryReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
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
