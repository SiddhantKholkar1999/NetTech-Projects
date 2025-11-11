import { createStore, applyMiddleware } from "redux";

import { authReducer } from "./auth/Reducer";
import { todosReducer } from "./todos/Reducer";

const junctionOfReducer = applyMiddleware({
  auth: authReducer,
  todo: todosReducer,
});

export const ownStore = createStore(junctionOfReducer);
