import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoReducer = createSlice({
  name: "todos",
  initialState: { item: [] },
  reducers: {
    addTodos(state, action) {
      let todo = {
        id: nanoid(),
        text: action.payload,
        isEdit: false,
        isComplete: false,
      };
      state.item.push(todo);
    },
    removeTodos(state, action) {
      state.item = state.item.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTodos, removeTodos } = todoReducer.actions;
export default todoReducer.reducer;
