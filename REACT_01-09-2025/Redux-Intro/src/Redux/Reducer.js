import { nanoid } from "@reduxjs/toolkit";
import { ADD_TODO } from "./Action";

export const initialValue = [];

export const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          text: action.payload,
          isEdit: false,
          isComplete: false,
        },
      ];

    default:
      return state;
  }
};
