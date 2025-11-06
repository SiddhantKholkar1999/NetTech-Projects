import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { todosReducer } from "./Todos/Reducer";
import { authReducer } from "./Auth/Reducer";

const rootTerminal = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});

const logger = (state) => (next) => (action) => {
  console.log("describe the logger action", state, next, action);
  let val = next(action);
  console.log("exit poll of middleware");
  return val;
};

const logger2 = (state) => {
  return (next) => {
    return (action) => {
      console.log("describe the logger2 action", state, next, action);
      let val = next(action);
      console.log("exit poll of middleware2");
      return val;
    };
  };
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(logger, logger2));

//With DevTools
export const store = createStore(rootTerminal, enhancer);

//Without DevTools
export const myStore = createStore(rootTerminal);
