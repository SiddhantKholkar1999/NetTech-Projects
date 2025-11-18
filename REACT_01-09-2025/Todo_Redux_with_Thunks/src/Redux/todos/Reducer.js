import * as sandook from "../todos/ActionsTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todosReducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    case sandook.GET_TODO_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }

    case sandook.ADD_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: [...oldState.todos, payload],
      };
    }

    case sandook.ADD_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    case sandook.EDITS_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: oldState.todos.map((todo) => {
          todo.id === payload.id ? payload : todo;
        }),
      };
    }

    case sandook.EDITS_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    case sandook.DELETE_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        todos: oldState.todos.filter((todo) => todo.id !== payload),
      };
    }

    case sandook.DELETE_TODO_FAILURE: {
      return { ...oldState, isLoading: false, isError: true };
    }

    case sandook.COMPLETED_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    }

    case sandook.COMPLETED_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return oldState;
  }
};
