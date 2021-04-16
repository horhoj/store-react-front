import {combineReducers, createStore} from "redux";
import {StoreState} from "./types";
import {reducer} from "./user";

const rootReducer = combineReducers<StoreState>({
  user: reducer
})

let composeEnhancers = null;
try {
  //@ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} catch (e) {
  console.log('не обнаружен redux dev-tools');
}

export const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(sagaMiddleware))
  composeEnhancers ? composeEnhancers() : undefined
);


