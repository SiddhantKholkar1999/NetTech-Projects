import { createStore, combineReducers } from "redux";

import { todosReducer } from "./Todos/Reducer";
import { authReducer } from "./Auth/Reducer";

const rootTerminal = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});

export const myStore = createStore(rootTerminal);
