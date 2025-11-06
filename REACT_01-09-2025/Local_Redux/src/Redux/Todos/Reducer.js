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
    case ADD_TODOS: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }

    case DELETE_TODOS: {
      return {
        todos: state.todos.filter((el) => el.id !== payload),
      };
    }
    case EDIT_TODOS: {
      return {
        todos: state.todos.map((el) => {
          //   el.id === payload.id && el.isEdit
          //     ? { ...el, text: payload.text }
          //     : el;
          //   //Long Logic
          //     if (el.id === payload.id) {
          //     if (payload.text !== undefined) {
          //       // Save edited text
          //       return { ...el, text: payload.text, isEdit: false };
          //     } else if (payload.isEdit !== undefined) {
          //       // Toggle edit mode
          //       return { ...el, isEdit: payload.isEdit };
          //     }
          //   }
          //   return el;
          el.id === payload ? { ...el, isEdit: !el.isEdit } : el;
        }),
      };
    }

    case COMPLETE_TODOS: {
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload ? { ...el, completed: !el.completed } : el
        ),
      };
    }

    default:
      return state;
  }
};
