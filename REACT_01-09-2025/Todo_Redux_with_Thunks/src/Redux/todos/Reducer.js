import * as sandook from "../todos/ActionsTypes";

const initialState = {
  todos: [],
  isAuth: false,
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
    default:
      oldState;
  }
};
