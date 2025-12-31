/* eslint-disable no-unused-vars */
import { createReducer } from "@reduxjs/toolkit";

import * as action_type from "./Actions";

export const myOwnReducer = createReducer(
  { value: 0, sumOfNumberPayload: 0, unHandleAction: 0 },
  (builder) => {
    builder
      .addCase(action_type.increment, (state, action) => {
        state.value++;
        // state.value += action.payload;
      })
      .addCase(action_type.decrement, (state, action) => {
        state.value--;
        // state.value -= action.payload;
      })
      .addMatcher(action_type.isActionWithNumberPayload, (state, action) => {
        state.sumOfNumberPayload += action.payload;
      })
      .addDefaultCase((state, action) => {
        state.unHandleAction += 1;
      });
  }
);
