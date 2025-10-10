import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TEXT_TEMP_TODO,
  SAVE_EDIT_TODO,
  CANCEL_EDIT_TODO,
} from "./Action";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEdit: true, tempText: todo.todoText }
          : todo
      );

    case UPDATE_TEXT_TEMP_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, tempText: action.payload.text }
          : todo
      );

    case SAVE_EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEdit: false, todoText: todo.tempText }
          : todo
      );

    case CANCEL_EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isEdit: false } : todo
      );
    default:
      return state;
  }
};
