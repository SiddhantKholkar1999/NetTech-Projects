import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./../Reducer/TodoReducer";
import { myReducers } from "./../Reducer/Reducer";

export const myStore = configureStore({
  // reducer: {
  //   todo: todoReducer,
  // },
  reducer: myReducers,
});
