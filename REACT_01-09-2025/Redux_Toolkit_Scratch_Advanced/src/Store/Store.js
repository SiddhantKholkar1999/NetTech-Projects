import { configureStore } from "@reduxjs/toolkit";

import { myOwnReducer } from "../Reducer/Reducer";

export const myStore = configureStore({
  reducer: myOwnReducer,
});
