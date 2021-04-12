import {combineReducers, createStore} from "redux";
import {StoreState} from "./types";
import {userReducer} from "./user";

const rootReducer = combineReducers<StoreState>({
  user: userReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(sagaMiddleware))
  composeEnhancers()
);


