import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { StoreState } from './types';
import { user } from './user';
import { userWatcher } from './user';

const rootReducer = combineReducers<StoreState>({
  user,
});

let composeEnhancers = null;
try {
  //@ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} catch (e) {
  console.log('не обнаружен redux dev-tools');
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* appWatcher() {
  yield all([userWatcher()]);
}

sagaMiddleware.run(appWatcher);
