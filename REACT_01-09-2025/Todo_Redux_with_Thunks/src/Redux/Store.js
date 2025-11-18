import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";

import { authReducer } from "./auth/Reducer";
import { todosReducer } from "./todos/Reducer";

const junctionOfReducer = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

//With DevTools
export const ownStore = createStore(junctionOfReducer, enhancer);
