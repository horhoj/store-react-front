import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { StoreState } from './types';
import { authReducer } from './auth';
import { authWatcher } from './auth';
import { logger } from '../utils/logger';

const rootReducer = combineReducers<StoreState>({
  auth: authReducer,
});

let composeEnhancers = null;
try {
  //@ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} catch (e) {
  logger('не обнаружен redux dev-tools');
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers
    ? composeEnhancers(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware),
);

function* appWatcher() {
  yield all([authWatcher()]);
}

sagaMiddleware.run(appWatcher);
