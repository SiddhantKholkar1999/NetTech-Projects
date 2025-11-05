import {
  ADD_TODOS,
  COMPLETE_TODOS,
  DELETE_TODOS,
  EDIT_TODOS,
} from "../Todos/Action";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE_TODOS:
      return {
        todos: state.todos.filter((el) => el.id !== payload),
      };

    case EDIT_TODOS:
      console.log(payload);
      return {
        todos: state.todos.map((el) =>
          el.id === payload.id && el.isEdit ? { ...el, text: payload.text } : el
        ),
      };

    default:
      return state;
  }
};
