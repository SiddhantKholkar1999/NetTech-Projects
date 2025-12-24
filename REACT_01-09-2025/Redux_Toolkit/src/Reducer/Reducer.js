/* eslint-disable no-unused-vars */
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//? Creating Reducer From Scratch ?//

// const initialState = { value: 0, items: [], isLoading: false, isError: null };

// export const increment = createAction("counter/increment");
// export const decrement = createAction("counter/decrement");

// export const myReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.value++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.value--;
//     });
// });

//? Creating Reducer using createSlice ?//

const myReducer = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = myReducer.actions;

// export default myReducer.reducer;
export const myReducers = myReducer.reducer;
