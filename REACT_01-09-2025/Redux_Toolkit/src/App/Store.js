import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../Reducer/TodoReducer";

export const myStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
